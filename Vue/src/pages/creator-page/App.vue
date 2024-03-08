<template>
  <!-- <el-empty
    image="\src\assets\images\Empty.png"
    description=" "
    :image-size="400"
  >
    <div class="WIP">WIP(*/ω＼*)</div>
  </el-empty> -->
  <div class="view-container">
    <el-container class="main-container">
      <!-- Navigation -->
      <el-header class="main-header-box"><NavBar /></el-header>
      <!-- Main -->
      <div class="sidebar">
        <button class="send-button" @click="gotoPage('/writing-page/index.html')">写文章</button>
        <el-empty
          image="\src\assets\images\Empty.png"
          description=" "
          :image-size="100"
        >
          <div>WIP(*/ω＼*)</div>
        </el-empty>
      </div>
      <div class="right-wrap">
        <div class="home-container main-content">
          <div class="main">
            <el-empty
              image="\src\assets\images\Empty.png"
              description=" "
              :image-size="400"
            >
              <div>WIP(*/ω＼*)</div>
            </el-empty>
          </div>
          <div class="right">
            <el-empty
              image="\src\assets\images\Empty.png"
              description=" "
              :image-size="200"
            >
              <div>WIP(*/ω＼*)</div>
            </el-empty>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

// components
import NavBar from "@/components/NavBar/NavBar.vue";

// utils
import { gotoPage } from "@/utils/page/pages";

</script>
<style scoped>
.WIP {
  font-size: 144px;
}
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
}

/* sidebar */
.sidebar {
  background: #fff;

  border-radius: 4px;
  position: fixed;
  width: 200px;
  top: 7rem;
  bottom: 0;
  z-index: 2;
  overflow: hidden;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  .send-button {
    color: #fff;
    background: #1e80ff;
    width: 184px;
    height: 40px;
    font-size: 14px;

    &:active {
      background: #e4e6eb;
    }

    &:hover {
      background: #1171ee;
    }
  }
}

.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  &:after {
    display: table;
    content: "";
    clear: both;
  }
}

.right-wrap {
  width: 980px;
  margin-top: 24px;
  margin-left: 220px;
}
.home-container {
  position: relative;
  .main {
    height: 87vh;
    background-color: #fff;
    max-width: 692px;
  }

  .right {
    background-color: #fff;
    height: 87vh;
    width: 267px;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
