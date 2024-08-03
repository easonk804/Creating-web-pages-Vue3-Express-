<template>
    <div class="article-container">
        <AIDetailComponent />
    </div>
</template>

<script lang="ts" setup>

    import AIDetailComponent from '@/components/news/ai/AIDetailComponent.vue'

</script>

<style lang="less" scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>