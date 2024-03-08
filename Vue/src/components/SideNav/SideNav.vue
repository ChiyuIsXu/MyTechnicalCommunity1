<!-- SideNav.vue -->
<template>
  <nav class="side-navigator-wrap">
    <div class="nav-item-wrap nav-item-underline">
      <div class="nav-item-content">
        <a
          href="https://llm.juejin.cn"
          target="_blank"
          class="nav-item nav-item-link"
        >
          <Model />
          <span class="nav-item-text">
            大模型子站
            <ArrowRight />
          </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <FoucsOn />
          <span class="nav-item-text"> 关注 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/following" class="nav-item">
          <Recommend />
          <span class="nav-item-text"> 综合 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/following" class="nav-item">
          <BackEnd />
          <span class="nav-item-text"> 后端 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <FrontEnd />
          <span class="nav-item-text"> 前端 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <Android />
          <span class="nav-item-text"> Android </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <iOS />
          <span class="nav-item-text"> iOS </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <AI />
          <span class="nav-item-text"> 人工智能 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <Tools />
          <span class="nav-item-text"> 开发工具 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <Coding />
          <span class="nav-item-text"> 代码人生 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <Reading />
          <span class="nav-item-text"> 阅读 </span>
        </a>
      </div>
    </div>
    <div class="nav-item-wrap">
      <div class="nav-item-content">
        <a href="/test-page/index.html" class="nav-item">
          <Ranks />
          <span class="nav-item-text"> 排行榜 </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts" name="SideNav">
// icons
import Model from "@/components/SideNav/assets/icons/Model.vue";
import ArrowRight from "@/components/SideNav/assets/icons/ArrowRight.vue";
import FoucsOn from "@/components/SideNav/assets/icons/FoucsOn.vue";
import Recommend from "@/components/SideNav/assets/icons/Recommend.vue";
import BackEnd from "@/components/SideNav/assets/icons/BackEnd.vue";
import FrontEnd from "@/components/SideNav/assets/icons/FrontEnd.vue";
import Android from "@/components/SideNav/assets/icons/Android.vue";
import iOS from "@/components/SideNav/assets/icons/iOS.vue";
import AI from "@/components/SideNav/assets/icons/AI.vue";
import Tools from "@/components/SideNav/assets/icons/Tools.vue";
import Coding from "@/components/SideNav/assets/icons/Coding.vue";
import Reading from "@/components/SideNav/assets/icons/Reading.vue";
import Ranks from "@/components/SideNav/assets/icons/Ranks.vue";

const html = `
<div>
  <h1>SideNav</h1>
</div>
`;
</script>

<style lang="scss" scoped>
.side-navigator-wrap {
  min-width: 180px;
  box-sizing: border-box;
  padding: 8px;
  font-size: 1rem;
  color: #515767;
  .nav-item-underline {
    border-bottom: 1px solid #e4e6eb;
  }
  .nav-item-wrap {
    display: flex;
    flex-direction: column;
    .nav-item-content {
      line-height: 24px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .nav-item {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding: 10px 17px;
        color: #515767;
        svg {
          text-align: center;
          color: #b4b8bf;
          margin-right: 12px;
        }
        .nav-item-text {
          vertical-align: middle;
          position: relative;
        }
      }
      .nav-item-link {
        padding-right: 0;
        .nav-item-text {
          vertical-align: middle;
          position: relative;
        }
      }
    }
  }
}
</style>
