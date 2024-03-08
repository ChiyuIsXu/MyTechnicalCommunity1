<template>
  <div class="main">
    <div class="bytemd bytemd-split">
      <ToolBar />
      <div class="bytemd-body">
        <div class="bytemd-editor" style="width: 50%">
          <div class="CodeMirror cm-s-default CodeMirror-wrap" translate="no">
            <div
              style="
                position: relative;
                width: 3px;
                height: 0px;
                top: 16px;
                left: 58.8333px;
              "
            >
              <textarea
                tabindex="0"
                class="my-textarea"
                v-model="markdownContent"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="bytemd-preview" style="width: 50%">
          <div class="markdown-body">
            <div v-html="renderedMarkdown"></div>
          </div>
        </div>
        <div class="bytemd-status">
          <div class="bytemd-status-left">
            <span>字符数: <strong>0</strong></span
            ><span>行数: <strong>1</strong></span
            ><span>正文字数: <strong id="real-count">0</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="MainContainer">
import { ref, computed } from "vue";
import ToolBar from "./ToolBar/ToolBar.vue";

import { marked } from "marked";

const markdownContent = ref(``);

const renderedMarkdown: any = computed(() => {
  if (markdownContent) {
    return marked(markdownContent.value);
  } else {
    return "";
  }
});
</script>

<style lang="scss" scoped>
@import url("./github.css");
// @import "markdown.css";

.bytemd {
  height: calc(100vh - 4rem);
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #24292e;
  border: 1px solid #e1e4e8;
  background-color: #fff;

  .markdown-body {
    .code-editor-container {
      border-radius: 8px;
      width: 100%;
      height: 432px;
    }

    .jj-video-container {
      border-radius: 8px;
      width: 100%;
    }
  }

  .cm-spell-error {
    text-decoration: line-through;
  }
}

.bytemd-status {
  font-size: 12px;
  line-height: 24px;
  border-top: 1px solid #e1e4e8;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &-left {
    float: left;
  }

  &-left span {
    padding-left: 16px;
  }

  &-left strong {
    font-weight: 600;
  }
}
.bytemd-body {
  height: calc(100% - 40px);
  overflow: auto;
  .bytemd-editor {
    display: inline-block;
    vertical-align: top;
    height: 96%;
    overflow: hidden;
    .CodeMirror {
      height: 100%;
      font-size: 14px;
      line-height: 1.5;
      //   background-color: #959da5;
      pre.CodeMirror-placeholder {
        color: #959da5;
      }

      .CodeMirror-lines {
        max-width: 800px;
        margin: 0 auto;
        padding: 16px 0;
      }
    }

    pre.CodeMirror-line,
    pre.CodeMirror-line-like {
      padding: 0 4%;
    }
  }
  .bytemd-preview {
    display: inline-block;
    vertical-align: top;
    height: 96%;
    overflow: auto;
    .markdown-body {
      max-width: 800px;
      margin: 0 auto;
      padding: 16px 4%;
      word-break: break-word;
      line-height: 1.75;
      font-weight: 400;
      font-size: 16px;
      color: #252933;
    }
  }
}
.bytemd-split .bytemd-preview {
  border-left: 1px solid #e1e4e8;
}
textarea {
  overflow: auto;
  background-color: #d5d5d5;
}
.my-textarea {
  background-color: #d5d5d5;
  overflow: visible;
  //   position: absolute;
  bottom: 0rem;
  padding: 0px;
  width: 40vw;
  height: 80vh;
  min-height: 1rem;
  outline: none;
  text-rendering: auto;
  color: fieldtext;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  -webkit-rtl-ordering: logical;
  resize: -internal-textarea-auto;
  cursor: text;
  overflow-wrap: break-word;
  background-color: field;
  column-count: initial !important;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
</style>
