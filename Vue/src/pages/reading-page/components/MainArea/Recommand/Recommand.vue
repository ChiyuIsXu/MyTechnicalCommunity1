<template>
  <div class="main-area recommended-area entry-list-container shadow">
    <div class="recommended-list-title-wrapper">
      <div class="title">
        <span class="title-content">为你推荐</span>
      </div>
    </div>
    <div
      name="entry-list"
      tag="div"
      class="entry-list list recommended-entry-list"
    >
      <div v-for="index in 10" :key="index">
        <RecommandItem />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Recommand">
import RecommandItem from "@/pages/reading-page/components/MainArea/Recommand/RecommandItem/RecommandItem.vue";
</script>
<style scoped lang="scss">
.main-area {
  position: relative;
  width: 820px;
  max-width: 100%;
  box-sizing: border-box;
}

.main-area:after {
  display: table;
  content: "";
  clear: both;
}

.recommended-list-title-wrapper {
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
  color: var(--juejin-font-brand2-hover);
}

.main-area.article-update-banner .byte-alert__title button:active {
  color: var(--juejin-font-brand3-click);
}

.main-area.article-update-banner .byte-alert__close {
  top: 17px;
}

.main-area .article {
  border-radius: 4px 4px 0 0;
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
.main-area .article-end {
  padding-top: 10px;
  border-radius: 0 0 4px 4px;
  padding-bottom: 40px;
}

.main-area.recommended-area .recommended-list-title-wrapper .title {
  border-bottom: 1px solid #e4e6eb;
  box-sizing: border-box;
  width: 100%;
}

.main-area.recommended-area
  .recommended-list-title-wrapper
  .title
  .title-content {
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  color: #252933;
  line-height: 30px;
  padding: 20px 0 16px;
}

.main-area.recommended-area
  .entry-list
  li:last-child
  .entry
  .content-wrapper:before {
  background: transparent;
}

.main-area.recommended-area .entry-list {
  padding: 0 0 1rem;
}

.main-area.recommended-area .entry-list .entry {
  padding: 1rem 2.67rem 0;
}

.main-area.recommended-area
  .entry-list
  .entry
  .meta-container
  .popover-box.user-popover {
  font-size: 13px;
  line-height: 22px;
  color: #8a919f;
}

.main-area.recommended-area .entry-list .entry .meta-container .date,
.main-area.recommended-area .entry-list .entry .meta-container .tag {
  font-size: 13px;
  color: #8a919f;
}

.main-area.recommended-area .entry-list .entry .meta-container .date:after,
.main-area.recommended-area .entry-list .entry .meta-container .date:before,
.main-area.recommended-area .entry-list .entry .meta-container .tag:after {
  background: #e4e6eb;
}

.main-area.recommended-area .entry-list .entry .meta-container .date:after,
.main-area.recommended-area .entry-list .entry .meta-container .date:before {
  height: 12px;
}

.main-area.recommended-area .entry-list .entry .content-wrapper {
  margin-top: 2px;
  border: none;
}

.main-area.recommended-area .entry-list .entry .content-wrapper:before {
  content: "";
  position: absolute;
  left: 2.67rem;
  right: 2.67rem;
  bottom: 0;
  height: 1px;
  background: #e4e6eb;
}

.main-area.recommended-area .entry-list .entry .content-wrapper .title-row {
  margin-bottom: 2px;
}

.main-area.recommended-area
  .entry-list
  .entry
  .content-wrapper
  .title-row
  a.title {
  font-size: 1.333rem;
  line-height: 2.333rem;
  color: #252933;
}

.main-area.recommended-area .entry-list .entry .content-wrapper .abstract,
.main-area.recommended-area .entry-list .entry .content-wrapper img.thumb {
  display: none;
}

.main-area.recommended-area .entry-list .entry .action-list > .item {
  color: #8a919f;
}

.main-area.recommended-area .entry-list .entry .action-list > .item.view i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e097e1d40a62ba25a0b059cf8c3185db.svg);
}

.main-area.recommended-area .entry-list .entry .action-list > .item.comment i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/a9532d230b98d8920a987aafa22e9059.svg);
}

.main-area.recommended-area
  .entry-list
  .entry
  .action-list
  > .item.comment:hover
  i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/846f7d2df7ac880bc6f678a2e1895462.svg);
}

.main-area.recommended-area .entry-list .entry .action-list > .item.like i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7fe16de62924e291ba2f0a4ce34ea67a.svg);
}

.main-area.recommended-area
  .entry-list
  .entry
  .action-list
  > .item.like:hover
  i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/0d25157e7218c5372c7146c7d24a0efe.svg);
}

.main-area.recommended-area
  .entry-list
  .entry
  .action-list
  > .item.like.active {
  color: #1e80ff;
}

.main-area.recommended-area
  .entry-list
  .entry
  .action-list
  > .item.like.active
  i {
  background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/315aced81d853a0cac8326a9a7e38ae3.svg);
}

.main-area .recommended-entry-list .entry-last-one {
  margin-bottom: 0;
}

.item {
  transition: all 0.3s ease-in;
}

.content-wrapper {
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
  width: 100%;
  .content-main {
    flex: 1 1 auto;
  }
}

li {
  list-style: none;
}
.main-area.recommended-area
  .entry-list.entry
  .content-wrapper
  .title-row
  a.title {
  font-size: 1.333rem;
  line-height: 2.333rem;
  color: #252933;
}
.entry-footer {
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.entry-footer-tags,
.entry-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.action-list > .item,
.action-list {
  display: flex;
  align-items: center;
}
</style>
