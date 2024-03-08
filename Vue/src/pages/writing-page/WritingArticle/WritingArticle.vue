<template>
  <div id="web-editor">
    <div class="edit-draft">
      <div class="markdown-editor">
        <HeaderContainer />
        <MainContainer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="WritingArticle">
import HeaderContainer from '@/pages/writing-page/WritingArticle/components/HeaderContainer/HeaderContainer.vue';
import MainContainer from '@/pages/writing-page/WritingArticle/components/MainContainer/MainContainer.vue';

</script>

<style lang="scss" scoped>
#juejin-web-editor {
    display: block
}</style>
