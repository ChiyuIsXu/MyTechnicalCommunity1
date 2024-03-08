
// useMarkdownParser.ts

import { ref, watch } from 'vue';
import marked from 'marked';

export default function useMarkdownParser(initialMarkdown: string) {
    const markdownText = ref(initialMarkdown);
    const parsedMarkdown = ref('');

    const parseMarkdown = () => {
        parsedMarkdown.value = marked(markdownText.value);
    };

    watch(markdownText, parseMarkdown);

    return {
        markdownText,
        parsedMarkdown,
    };
}