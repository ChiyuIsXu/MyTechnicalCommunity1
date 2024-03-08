<template>
  <div class="view-container">
    <!-- Navigation -->
    <el-header class="main-header-box"><NavBar /></el-header>

    <!-- ReadingPage -->
    <div class="main-container" style="max-width: 1140px">
      <div class="view column-view">
        <MainArea :mdContent="renderedMarkdown0" />
        <SideArea :mdContent="renderedMarkdown0" />
        <ArticlePanel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, RouterView } from "vue-router";

// components
import NavBar from "@/components/NavBar/NavBar.vue";
import MainArea from "@/pages/reading-page/components/MainArea/MainArea.vue";
import SideArea from "@/pages/reading-page/components/SideArea/SideArea.vue";
import ArticlePanel from "@/pages/reading-page/components/ArticlePanel/ArticlePanel.vue";

// markdown
import { marked } from "marked";
// import mdData from "@/assets/markdown/testmd.md?raw";
import mdData from "@/assets/markdown/Note_中外艺术作品赏析.md?raw";
// import mdData from "@/assets/markdown/test2.md?raw";

const markdownContent = mdData;
const renderedMarkdown0 = computed(() => {
  if (markdownContent) {
    return marked(mdData);
  } else {
    return "";
  }
});
// console.log(renderedMarkdown0.value);
// console.log(typeof renderedMarkdown0.value);// string
</script>
<style scoped>
.main-header-box {
  position: relative;
  height: 5rem;
}

.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
  &:after {
    display: table;
    content: "";
    clear: both;
  }
}

.main-container {
  height: 100vh;

  position: relative;
  margin: 0 auto;
  width: 100%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > .view {
    margin-top: 1.767rem;
    &.with-view-nav {
      margin-top: 4.67rem;
    }
    &.tight {
      margin-top: 0;
      &.with-view-nav {
        margin-top: 3.833rem;
      }
    }
  }
}

.main-area {
  .recommended-area {
    .entry-list.entry {
      .content-wrapper {
        .abstract,
        img.thumb {
          display: none;
        }
      }
    }
    .recommended-entry-list.entry-last-one {
      margin-bottom: 0;
    }
  }
}
</style>
