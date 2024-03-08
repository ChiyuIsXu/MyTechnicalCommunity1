<template>
  <div class="main-area">
    <Suspense>
      <ArticleArea :mdContent="renderedMarkdown1" />
    </Suspense>
    <Recommand />
  </div>
</template>

<script setup lang="ts" name="MainArea">
import { ref, onMounted } from "vue";
import ArticleArea from "@/pages/reading-page/components/MainArea/ArticleArea/ArticleArea.vue";
import Recommand from "@/pages/reading-page/components/MainArea/Recommand/Recommand.vue";

const props = defineProps<{mdContent: String | Promise<string>}>();
const renderedMarkdown1 = props.mdContent;

</script>
<style scoped>
.main-area {
  position: relative;
  width: 820px;
  max-width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  height: 100px;
  &:after {
    display: table;
    content: "";
    clear: both;
  }
}

.main-area > entry-list {
  border-radius: 4px;
  background-color: #fff;
  padding-left: 2.67rem;
  padding-right: 2.67rem;
  box-sizing: border-box;
}

.main-area.article-update-banner .byte-alert__title {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
}

.main-area.article-update-banner .byte-alert__title button {
  padding: 0;
  background: none;
  color: #1e80ff;
}

.main-area.article-update-banner .byte-alert__title button:hover {
  color: #0060dd;
}

.main-area.article-update-banner .byte-alert__title button:active {
  color: #0060dd;
}

.main-area.article-update-banner .byte-alert__close {
  top: 17px;
}

.main-area .browser-height {
  min-height: "670px";
}

.main-area .article-vote {
  display: flex;
  padding: 15px 0;
  justify-content: center;
}

.main-area .article-vote .article-vote-icon {
  display: inline-block;
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/article-vote.a7d4e8e.gif);
  background-size: contain;
  background-repeat: no-repeat;
  width: 245px;
  height: 44px;
}

.main-area .first-column {
  display: flex;
}

.main-area .first-column .word {
  display: flex;
  color: #8a919f;
  align-items: center;
}

.main-area .first-column .gap {
  color: #8a919f;
  width: 20px;
}

.main-area .first-column .title {
  color: #8a919f;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.167rem !important;
  font-weight: 400 !important;
}

.main-area .first-column .title:hover {
  cursor: pointer;
  color: #1e80ff;
}

@media (max-width: 1000px) {
  .main-area .first-column {
    display: none;
  }
}

@media (max-width: 600px) {
  .main-area .article-vote {
    padding: 0;
  }
}

.main-area .article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 40px;
}

.article {
  position: relative;
  padding-top: 2.667rem;
  z-index: 1;
  overflow: hidden;
  &-area {
    margin-bottom: 1.67rem;
  }
}
</style>
