<!-- IndexAside.vue -->
<template>
  <div class="index-aside">
    <SigninTips />
    <HotList />
    <div v-for="index in 3" :key="index">
      <Ad />
    </div>
    <AuthorList />
    <TopicList />
    <Footer />
  </div>
</template>

<script setup lang="ts">
// router
import { RouterLink, RouterView } from "vue-router";

// components
import SigninTips from "@/components/MainContainer/IndexAside/SigninTips/SigninTips.vue";
import HotList from "@/components/MainContainer/IndexAside//HotList/HotList.vue";
import Ad from "@/components/MainContainer/IndexAside/Ad/Ad.vue";
import AuthorList from "@/components/MainContainer/IndexAside/AuthorList/AuthorList.vue";
import TopicList from "@/components/MainContainer/IndexAside/TopicList/TopicList.vue";
import Footer from "@/components/MainContainer/IndexAside/Footer/Footer.vue";
</script>

<style scoped>
.index-aside {
  width: 16.5rem;
  position: absolute;
  top: 0;
  right: 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
