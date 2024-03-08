
import * as cheerio from 'cheerio';

export default function menuGenerateByDOM() {

    window.onload = function () {
        const headings = Array.from(
            document.querySelectorAll(
                ".markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5"
            )
        );

        const tocContainer = document.querySelector(".markdown-toc");
        const ul = document.createElement("ul");
        let parentLevel = 0;
        let parentNode = ul;

        headings.forEach((heading) => {
            const level = parseInt(heading.tagName.replace("H", ""), 10);
            const li = document.createElement("li");
            const a = document.createElement("a");
            const id = `toc-${heading.id}`;
            const text = heading.textContent;

            heading.setAttribute("id", id);
            a.href = `#${id}`;
            a.textContent = text;

            li.appendChild(a);

            if (level > parentLevel) {
                const ul = document.createElement("ul");
                ul.appendChild(li);
                parentNode.appendChild(ul);
                parentNode = ul;
            } else if (level === parentLevel) {
                if (parentNode.parentNode) {
                    parentNode.parentNode.appendChild(li);
                }
            } else {
                while (level < parentLevel && parentNode && parentNode.parentNode) {
                    parentNode = parentNode.parentNode.parentNode as HTMLUListElement;
                    parentLevel--;
                }
                if (parentNode.parentNode) {
                    parentNode.parentNode.appendChild(li);
                }
            }

            parentLevel = level;
        });

        if (tocContainer) {
            tocContainer.appendChild(ul);
        }
    };

}
export function menuGenerateByMarkdown(markdown: string) {
    // 使用 Cheerio 加载 HTML 字符串
    const $ = cheerio.load(markdown);

    // 提取标题标签
    const headings = $('h1, h2, h3, h4, h5');

    // 创建目录结构
    const directory: { level: number; text: string }[] = [];
    headings.each((index, element) => {
        const level = parseInt(element.tagName.charAt(1));
        const text = $(element).text().trim();
        directory.push({ level, text });

        // 在每个标题处添加锚点
        $(element).attr('id', text);
    });

    // 生成目录 HTML
    let directoryHtml = '<ul class="catalog-list">';
    directory.forEach((item) => {
        const className = `d${item.level}-aTag-title`;
        directoryHtml += `<li class="item d1"><div class="a-container"><a href="#${item.text}" class="catalog-aTag ${className}">${item.text}</a></div></li>`;
    });
    directoryHtml += '</ul>';

    // 在每个标题处添加锚点 
    headings.each((index, element) => {
        const text = $(element).text().trim();
        $(element).attr('id', text);
    });

    // 输出生成的目录 HTML
    // console.log(directoryHtml);
    return directoryHtml;


}