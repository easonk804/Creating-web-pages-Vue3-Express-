<template>
    <div class="projects-showcase">
      <ProjectComponent />
    </div>
</template>
  
<script lang="ts" setup>

import ProjectComponent from '@/components/project/ProjectComponent.vue';

</script>
  
<style lang="less" scoped>
  .projects-showcase {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

</style>