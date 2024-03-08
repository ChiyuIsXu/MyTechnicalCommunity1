<template>
  <el-main class="timeline-content">
    <div class="timeline-entry-list">
      <div class="entry-list-container">
        <!-- header -->
        <header class="list-header">
          <nav role="navigation" class="list-nav">
            <ul class="nav-list left">
              <li class="nav-item active">
                <!-- TODO: router -->
                <a href="/">推荐</a>
              </li>
              <li class="nav-item">
                <a href="/test-page/index.html">最新</a>
              </li>
            </ul>
            <div class="dorp-down-area"></div>
          </nav>
        </header>
        <!-- wrap -->
        <div class="entry-list-wrap">
          <div name="entry-list" class="entry-list list" tag="div" ad-list>
            <!-- TODO:list -->
            <div v-for="index in 40" :key="index">
              <EntryItem />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- aside -->
    <IndexAside />
  </el-main>
  <el-backtop :right="20" :bottom="20" visibility-height="200" />
</template>

<script setup lang="ts">
// router
import { RouterLink, RouterView } from "vue-router";

// components
import EntryItem from "@/components/MainContainer/EntryItem/EntryItem.vue";
import IndexAside from "@/components/MainContainer/IndexAside/IndexAside.vue";
</script>
<style scoped>
/* main */
.timeline-content {
  padding: 0;
  position: relative;
  .timeline-entry-list {
    margin-right: 16.33rem;
    border-radius: 2px;
    width: 720px;
    position: relative;
    .entry-list-container {
      background-color: #fff;
      border-radius: 4px;
      .list-header {
        padding: 1rem 1.66rem;
        border-bottom: 1px solid #e4e6eb;
        .list-nav {
          display: flex;
          justify-content: space-between;
          .nav-list {
            align-items: center;
            line-height: 1;
            display: flex;
            justify-content: space-between;
          }
        }
        .left {
          .nav-item {
            padding: 0 1.66rem;
            line-height: 2rem;
            &:first-child {
              margin-left: -1.66rem;
            }
            &:last-child {
              padding-right: -1.66rem;
            }
          }
        }
      }
    }
  }
}
</style>
