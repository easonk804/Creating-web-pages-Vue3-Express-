<template>
    <div class="creator-profile" >
      <PersonComponent />
    </div>
</template>
  
<script lang="ts" setup>

import PersonComponent from '@/components/person/PersonComponent.vue';

</script>
  
<style scoped>
  .creator-profile {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>