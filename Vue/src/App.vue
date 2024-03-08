<template>
  <div class="view-container">
    <el-container class="main-container">
      <!-- Navigation -->
      <el-header class="main-header-box"><NavBar /></el-header>
      <!-- HomePage -->
      <el-container>
        <el-aside class="index-nav">
          <SideBar />
        </el-aside>
        <MainContainer />
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// components
import NavBar from "@/components/NavBar/NavBar.vue";
import SideBar from "@/components/SideNav/SideNav.vue";
import MainContainer from "@/components/MainContainer/MainContainer.vue";
</script>

<style scoped lang="scss">
.main-header-box {
  position: relative;
  height: 5rem;
}
.main-container {
  height: 100vh;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  width: 100%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .index-nav {
    width: 180px;
    position: -webkit-sticky;
    position: sticky;
    top: 80px;
    margin-right: 20px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    border-radius: 4px;
    background-color: #fff;
    max-height: calc(100vh - 101px);
    overflow-x: hidden;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #e4e6eb;
    }
  }
  .index-nav-top {
    top: 20px;
    max-height: calc(100vh - 40px);
  }

  /* main */
  .timeline-content {
    position: relative;
    .timeline-entry-list {
      margin-right: 23.33rem;
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
}
</style>
