<template>
  <div>
    <div class="article-catalog catalog-block">
      <div class="catalog-title">
        <div>目录</div>
        <div class="direction">
          <div class="word" @click="toggleCollapse">
            {{ collapsed ? "收起" : "展开" }}
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="icon-rotate"
          >
            <g
              id="&amp;#229;&amp;#177;&amp;#149;&amp;#229;&amp;#188;&amp;#128;"
            >
              <path
                id="&amp;#232;&amp;#183;&amp;#175;&amp;#229;&amp;#190;&amp;#132;"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.99854 7.93206L10.0644 3.86619C10.162 3.76856 10.3203 3.76856 10.418 3.86619L10.7715 4.21975C10.8691 4.31738 10.8691 4.47567 10.7715 4.5733L6.35209 8.99272C6.15683 9.18798 5.84025 9.18798 5.64498 8.99272L1.22557 4.5733C1.12794 4.47567 1.12794 4.31738 1.22557 4.21975L1.57912 3.86619C1.67675 3.76856 1.83504 3.76856 1.93267 3.86619L5.99854 7.93206Z"
                fill="#8A919F"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="catalog-body unfold">
        <div class="markdown-toc" v-html="directoryHtml"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ArticleCatalog">
import { ref } from "vue";
import * as cheerio from "cheerio";

// utils
import { menuGenerateByMarkdown } from "@/utils/markdownProcess/menuGenerate";

// markdown content
const props = defineProps<{ mdContent: String | Promise<string> }>();
const renderedMarkdown2 = props.mdContent;

const directoryHtml = menuGenerateByMarkdown(renderedMarkdown2 as string);

// collapse
const collapsed = ref(true);

const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
  const catalogBody = document.querySelector(".catalog-body");
  if (catalogBody) {
    if (collapsed.value) {
      catalogBody.classList.add("unfold");
    } else {
      catalogBody.classList.remove("unfold");
    }
  }
};
</script>

<style lang="scss">
.markdown-toc {
  position: relative;
  padding: 0 0 12px;
  .catalog-aTag {
    color: inherit;
    display: inline-block;
    padding: 0 8px 8px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .catalog-aTag.d1-aTag-title {
    padding-top: 4px;
    line-height: 22px;
  }

  .a-container:hover {
    cursor: pointer;
  }

  .a-container:hover .catalog-aTag {
    color: #1e80ff;
  }

  .sub-list {
    margin: 0;
    padding: 0;
  }

  .item {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: #252933;
    list-style: none;
  }

  .item .a-container {
    display: block;
    position: relative;
    padding: 0 0 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item.d1 {
    font-weight: 400;
    color: #252933;
  }

  .item.d1 .a-container {
    margin: 0;
    padding: 0 0 0 11px;
  }

  .item.d1 .a-container:before {
    left: 5px;
    margin-top: -3px;
    width: 6px;
    height: 6px;
  }

  .item.d1 .a-container .d1-aTag-title {
    font-size: 14px;
  }

  .item.d1:first-child .a-container {
    margin-top: 0;
  }

  .item.d2 {
    color: var(--juejin-font-2);
  }

  .item.d2 .a-container {
    padding-left: 26px;
  }

  .item.d2 .a-container:before {
    left: 24px;
  }

  .item.d3 {
    color: #8a919f;
  }

  .item.d3 .a-container {
    padding-left: 41px;
  }

  .item.d3 .a-container:before {
    left: 39px;
  }

  .item.active > .a-container {
    color: #1e80ff;
  }

  .item.active > .a-container:before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    margin-top: 7px;
    width: 3px;
    height: 14px;
    background: #1e80ff;
    border-radius: 2px;
  }

  .item.d1.active > .a-container:before {
    top: 2px;
  }
}
</style>
<style scoped lang="scss">
.catalog-block {
  margin-bottom: 20px;
  border-radius: 4px;
}

.article-catalog {
  background: #fff;
  border-radius: 4px;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.catalog-title {
  font-weight: 500;
  margin: 0 1.667rem;
  font-size: 16px;
  line-height: 2rem;
  color: #252933;
  border-bottom: 1px solid #e4e6eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  .direction {
    color: #8a919f;
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    cursor: pointer;
    .word {
      padding: 8px 4px 8px 8px;
    }
    .icon-rotate {
      transform: rotate(180deg);
    }
  }
}

.catalog-title.collapse {
  border-bottom: none;
}

.catalog-body {
  position: relative;
  margin: 0;
  overflow: auto;
  max-height: 0;
  -webkit-animation-name: catalogBodyHeight;
  animation-name: catalogBodyHeight;
  transition: max-height 0.5s;
  &::-webkit-scrollbar {
    width: 4px;
    height: 80px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e4e6eb;
    outline: none;
    border-radius: 50px;
  }
}

.catalog-body.unfold {
  margin: 12px 4px 0 0;
  max-height: 312px;
}

@-webkit-keyframes catalogBodyHeight {
  0% {
    height: 0;
  }

  to {
    height: 100%;
  }
}

@keyframes catalogBodyHeight {
  0% {
    height: 0;
  }

  to {
    height: 100%;
  }
}
</style>
