<script setup lang="ts" name="ArticleArea">
import { ref, onMounted, computed } from "vue";

// markdown
import { marked } from "marked";
// import useMarkdownParser from "@/utils/useMarkdownParser";
// import MarkdownRenderer from "@/components/MarkdownPrase/MarkdownRenderer.vue";
// import MenuSideBar from "@/components/MarkdownPrase/MenuSideBar.vue";
// import VueMarkdown from "vue-markdown";
import mdData from "@/assets/markdown//Note_中外艺术作品赏析.md?raw";

// const markdownFiles = import.meta.glob("@/assets/markdown/*.md");
// const markdownContent = markdownFiles["@/assets/markdown/testmd.md"];

// const markdownContent = ref<string>(mdData);
// const markdownToHtml = computed(() => {
//   return marked(markdownContent.value);
// });

const props = defineProps<{mdContent: String | Promise<string>}>();
const renderedMarkdown2 = props.mdContent;

// const markdownContent = mdData;
// const markdownToHtml = computed(() => {
//   return marked(mdData);
// });
</script>

<template>
  <div class="article">
    <h1 class="article-title">我们一起来刷题～</h1>
    <div id="my-markdown" class="markdown-body">
      <div v-html="renderedMarkdown2"></div>
    </div>
  </div>
  <div class="article-end">
    <div class="rank-entry-bottom"></div>
    <div class="tag-list-box">
      <div class="tag-list">
        <div class="tag-list-title">标签：</div>
        <div class="tag-list-container">
          <a
            href="/test-page/index.html"
            target="_blank"
            rel=""
            class="jj-link item tag-item"
            ><span class="tag-title">前端</span></a
          >
        </div>
      </div>
      <div class="tag-list theme-list">
        <div class="theme-list-title">话题：</div>
        <div class="theme-list-container">
          <a
            href="/test-page/index.html"
            target="_blank"
            rel=""
            class="jj-link item theme-item"
            ><span class="theme-title">每日一题</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "github-markdown-css/github-markdown.css";
@import "markdown.css";

// markdown
.markdown-body {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 40px;
  overflow-x: hidden;
  .math-inline {
    font-size: 20px;
  }

  .code-editor-container {
    width: 100%;
    height: 432px;
  }
}

.article {
  border-radius: 4px 4px 0 0;
  position: relative;
  padding-top: 2.667rem;
  z-index: 1;
  overflow: hidden;
}

.article-title {
  // margin: 0 0 1.3rem;
  padding: 0 2.67rem 1.3rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.31;
  color: #252933;
  background-color: #fff;
}


// article end
.article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 40px;
  border-radius: 4px;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
}

.rank-entry-bottom {
  text-align: center;
  margin-bottom: 36px;
  .rank-entry-link {
    cursor: pointer;
    img {
      width: 265px;
      height: 80px;
    }
  }
}

.tag-list-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: -12px;
  .tag-list {
    display: flex;
    font-size: 1.167rem;
    line-height: 2.286;
    &:not(:last-child) {
      margin-right: 2.67rem;
      flex-shrink: 0;
    }
    .tag-list-title {
      flex-shrink: 0;
      margin-right: 8px;
      font-size: 14px;
      color: #515767;
    }
    .tag-list-container {
      display: flex;
      flex-wrap: wrap;
    }
    .item {
      display: flex;
      align-items: center;
      margin: 0 1rem 1rem 0;
      padding: 0 1rem;
      border-radius: 4px;
      transition: background-color 0.15s linear;
    }
    .tag-title {
      white-space: nowrap;
      line-height: 2.667rem;
    }
    .item.tag-item {
      background-color: #f7f8fa;
      color: #515767;
      &:hover {
        background-color: #eaf2ff;
        color: #1e80ff;
      }
    }
  }
}

.footer-author-block {
  padding: 15px 17px;
  border-radius: 2px;
  background-color: #f4f5f5;
  margin-bottom: 2.67rem;
}
</style>
