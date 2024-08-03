<template>
    <div class="community-view">
      <header class="header">
        <h1>👏欢迎来到智域社区</h1>
        <p>🤖连接智慧，共创未来🌏</p>
      </header>
  
      <section class="intro">
        <h2>关于我们</h2>
        <p>智域社区是一个致力于促进知识交流和创新合作的平台。我们汇聚了来自各行各业的专业人士，共同探讨前沿技术、分享经验，推动行业发展。</p>
      </section>
  
      <section class="features">
        <h2>社区特色</h2>
        <ul>
          <li>
            <i class="icon-exchange"></i>
            <h3>知识交流</h3>
            <p>定期举办线上线下讲座、研讨会，促进成员间的深度交流。</p>
          </li>
          <li>
            <i class="icon-lightbulb"></i>
            <h3>创新孵化</h3>
            <p>为创新项目提供资源支持和指导，助力将想法转化为现实。</p>
          </li>
          <li>
            <i class="icon-users"></i>
            <h3>人脉拓展</h3>
            <p>连接各领域的精英，打造高质量的专业人脉网络。</p>
          </li>
          <li>
            <i class="icon-graduation-cap"></i>
            <h3>持续学习</h3>
            <p>提供丰富的学习资源和培训课程，助力成员不断提升。</p>
          </li>
        </ul>
      </section>
  
      <section class="join-us">
        <h2>加入我们</h2>
        <p>无论您是行业专家、创新创业者，还是对新知识充满热情的学习者，智域社区都欢迎您的加入。</p>
        <button @click="showJoinModal">立即加入</button>
      </section>
  
      <footer class="footer">
        <p>&copy; 2023 智域社区 版权所有</p>
      </footer>
    </div>
  </template>
  
<script lang="ts" setup>

import { defineComponent } from 'vue';

const showJoinModal = () => {
  // 实现显示加入模态框的逻辑
  alert('加入功能正在开发中，敬请期待！');
};

defineComponent({
  name: 'CommunityView'
});

</script>
  
<style lang="less" scoped>
  
  .header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #ffffff;
  }
  
  .header p {
    font-size: 1.2rem;
    color: #fcf8f8;
  }

  .intro p {
    font-size: 1.0rem;
    color: #fcf8f8;
  }
  
  section {
    margin-bottom: 3rem;
  }
  
  h2 {
    font-size: 2rem;
    color: #fcf8f8;
    margin-bottom: 1rem;
  }
  
  .features ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    list-style-type: none;
    padding: 0;
  }
  
  .features li {
    background-color: #f8f8f8;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
  }
  
  .features i {
    font-size: 2rem;
    color: #4a90e2;
    margin-bottom: 1rem;
  }
  
  .join-us {
    text-align: center;

    p {
        font-size: 1.0rem;
        color: #fcf8f8;
    }
  }
  
  button {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #3a7bc8;
  }
  
  .footer {
    text-align: center;
    color: #666;
    margin-top: 3rem;
  }
</style>