<template>
    <div class="nav-container">
        <div class="nav-items">
            <router-link to="/" class="nav-item nav-main">首页</router-link>
            <router-link to="/community" class="nav-item">智域概览</router-link>
            <router-link to="/project" class="nav-item">创意实验室</router-link>
            <router-link to="/person" class="nav-item">创客档案</router-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
.nav-items {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;

    .nav-item {
        margin-left: 20px;
        padding-left: 20px;
        font-family: 'Microsoft YaHei';
        font-size: 20px;
        text-decoration: none;
        color: #ffffff;
        transition: color 0.3s ease; /* 添加颜色变化的过渡效果 */
    }

    .nav-item:hover {
        color: #007bff; /* 鼠标悬停时的颜色 */
    }
}
</style>