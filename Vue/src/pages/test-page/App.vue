<template>
  <NavBar />
  test page

  <el-empty
    image="\src\assets\images\Empty.png"
    description=" "
    :image-size="400"
  >
    <div class="WIP">WIP(*/ω＼*)</div>
  </el-empty>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

// components
import NavBar from "@/components/NavBar/NavBar.vue";
</script>
<style scoped>
.WIP {
  font-size: 144px;
}
</style>
