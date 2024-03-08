
<template>

</template>

<script setup lang="ts" name="MarkdownRenderer">

import { ref, watchEffect } from "vue";
import markdownit from "markdown-it";
import VueMarkdown from "vue-markdown";

const props = defineProps(["markdownContent"]);

// const markdownFiles = require.context("@/assets/markdown", false, /\.md$/);
// const markdownContent = markdownFiles("./testmd.md");
const markdownFiles = import.meta.glob("/@/assets/markdown/*.md");
const markdownContent = markdownFiles["/@/assets/markdown/testmd.md"];

const renderedMarkdown = ref("");

watchEffect(() => {
  renderedMarkdown.value = new markdownit().render(props.markdownContent);
});
</script>
