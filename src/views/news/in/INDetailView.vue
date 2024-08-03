<template>
    <div class="in-detail-container">
        <INDetailComponent />
    </div>
</template>

<script lang="ts" setup>
import INDetailComponent from '@/components/news/in/INDetailComponent.vue';
</script>

<style lang="less" scoped>
  .in-detail-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
</style>