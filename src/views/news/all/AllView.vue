<template>
    <div class="news-view">
      <AllComponent />
    </div>
</template>
  
<script lang="ts" setup>

import AllComponent from "@/components/news/all/AllComponent.vue"

</script>
  
<style scoped>
  .news-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f0f8ff;
  }
</style>