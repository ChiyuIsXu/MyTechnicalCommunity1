<template>
  <div id="sidebar-container" class="sidebar article-sidebar">
    <AuthorArea />
    <ArticleCatalog :mdContent="renderedMarkdown1" />
    <Ad v-for="index in 3" />
    <AuthorList />
    <TopicList />
  </div>
</template>
<script setup lang="ts" name="SideArea">
// ui

// components
import AuthorArea from "@/pages/reading-page/components/SideArea/AuthorArea/AuthorArea.vue";
import Ad from "@/components/MainContainer/IndexAside/Ad/Ad.vue";
import TopicList from "@/components/MainContainer/IndexAside/TopicList/TopicList.vue";
import AuthorList from "@/components/MainContainer/IndexAside/AuthorList/AuthorList.vue";
import ArticleCatalog from "@/pages/reading-page/components/SideArea/ArticleCatalog/ArticleCatalog.vue";

const props = defineProps<{ mdContent: String | Promise<string> }>();
const renderedMarkdown1 = props.mdContent;
</script>
<style scoped lang="scss">
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 18.7rem;
}

.sidebar {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  .sidebar-block {
    margin-bottom: 20px;
  }
  .app-download-sidebar-block {
    box-shadow: none;
    border-radius: 4px;
    .app-link {
      padding: 20px;
    }

    .headline {
      font-size: 1.333rem;
      line-height: 2rem;
      color: #252933;
    }
    .desc {
      font-size: 1.167rem;
      line-height: 22px;
      margin-top: 4px;
      color: #8a919f;
    }
  }
  .wechat-sidebar-block {
    border-radius: 4px;
    overflow: hidden;
  }

  .sticky-block-box {
    position: fixed;
    top: 6.767rem;
    width: inherit;
    transition: top 0.2s;
    display: flex;
    flex-direction: column;
  }
  .banner {
    width: 300px;
    height: 75px;
    margin-bottom: 20px;
    display: inline-block;
    -o-object-fit: cover;
    object-fit: cover;
  }
}

.sidebar.top .sticky-block-box {
  top: 1.767rem;
}

.sidebar .sidebar-bd-entry li {
  position: relative;
  &:hover .close-btn {
    display: block;
  }
  .close-btn {
    display: none;
    position: absolute;
    top: 8px;
    right: 8px;
    color: #8a919f;
    cursor: pointer;
    z-index: 1;
    opacity: 0.5;
  }
}

.sidebar .sidebar-bd-entry li .close-btn .byte-icon svg {
  fill: rgba(0, 0, 0, 0.4);
}

.sidebar .sidebar-bd-entry li .hidden {
  display: none;
}

.sidebar .source-vip {
  position: relative;
  &:hover {
    color: #fff;
  }
}

.sidebar .sidebar-bd-entry > li:after,
.sidebar .source-vip:after {
  content: "广告";
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border: 0.5px solid hsla(0, 0%, 100%, 0.6);
  width: 32px;
  height: 16px;
  right: 8px;
  top: 51px;
  border-radius: 2px;
  color: #fff;
  font-size: 10px;
}

.sidebar .hidden {
  visibility: hidden;
}

.sidebar .none {
  display: none;
}

.sidebar .height-adapt .block-body .entry-list {
  height: calc(100vh - 500px);
  overflow: auto;
  max-height: 325px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 4px;
    height: 80px;
  }

  &list::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e4e6eb;
    outline: none;
    border-radius: 50px;
  }
}
</style>
