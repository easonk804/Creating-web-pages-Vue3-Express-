<template>
  <div class="home-view">
    <div class="content-container">
      <!--主要内容模块-->
      <div class = "main-container">
        <!-- 小导航栏模块 -->
        <div class="intro-container">
          <IntroComponent />
        </div>
        <!-- 主体模块 -->
        <div class="main-content">
          <ContentComponent />
        </div>
      </div>
      <!-- 侧边栏模块 -->
      <div class="sidebar">
        <SidebarComponent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IntroComponent from '@/components/IntroComponent.vue';
import ContentComponent from '@/components/content/ContentComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';


</script>

<style lang="less" scoped>
.home-view {
  max-width: 1400px;
  margin: 0 auto;

  .content-container {
    display: flex;
    flex-direction: raw;
    gap: 20px;

    .main-container {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }

    .sidebar {
      width: 400px;
      border-radius: 10px;
      padding: 20px;
      background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
    }
  }

}
</style>
