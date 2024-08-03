<template>
    <div class="layout-view">
        <button @click="goBack" class="back-button" v-if="showBackButton">
            返回上一页
        </button>
        <div class="nav-container">
            <NavComponent />            
        </div>
        <!--显示layout路由下的视图组件-->
        <div class="content-container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>

import NavComponent from "../components/NavComponent.vue"
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const showBackButton = ref(false);

// 返回上一页的方法
const goBack = () => {
  router.go(-1);
};

// 检查是否应该显示返回按钮
const checkShowBackButton = () => {
  // 如果当前不是根路由，则显示返回按钮
  showBackButton.value = route.path !== '/';
};

// 在组件挂载时检查
onMounted(checkShowBackButton);

// 监听路由变化，每次路由变化时都检查
watch(() => route.path, checkShowBackButton);

</script>

<style lang="less" scoped>
    .layout-view {
        display: flex;
        flex-direction: column; // 设置子元素方向从上往下垂直排列
        min-height: 100vh; // 设置最小高度占满整个视窗高度
        background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
    }

    .back-button {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        padding: 10px 15px;
        background-color: #f0f0f0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
    }

    .back-button:hover {
        background-color: #e0e0e0;
    }

    .content-container {
        flex-grow: 1; // 设置子元素占满其他的位置
    }
</style>