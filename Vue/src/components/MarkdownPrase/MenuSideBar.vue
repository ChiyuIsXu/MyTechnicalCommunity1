<template>
  <div>
    <ul>
      <li v-for="(heading, index) in headings" :key="index">
        <a :href="`#${heading.id}`">{{ heading.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="">
import { ref } from "vue";

const props = defineProps(["headings"]);

const renderedHeadings = ref(props.headings);


</script>

<style scoped lang="scss"></style>
