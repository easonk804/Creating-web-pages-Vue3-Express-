<template>
    <div class="news-view">
      <h1 class="title">科技前沿新闻</h1>
      <div class="news-list">
        <div v-for="(news, index) in newsList" :key="index" class="news-item" @click="goToDetail(news.id)">
          <div class="news-image" :style="{ backgroundImage: `url(${news.imageUrl})` }"></div>
          <div class="news-content">
            <h2>{{ news.title }}</h2>
            <p>{{ news.summary }}</p>
            <div class="news-meta">
              <span class="date">{{ news.date }}</span>
              <span class="author">{{ news.author }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>

  import { ref, onMounted } from "vue"
  import { useRouter } from "vue-router"
  import { getItem } from "@/api/news/all/index.ts"

  const router = useRouter();

  const newsList = ref([]);

  const fetchNews = async () => {
    try {
      const res = await getItem();
      if (res && Array.isArray(res.data.data)) {
        newsList.value = res.data.data;
      } else {
        console.log('Received data is not an array:', res.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const goToDetail = (id: number) => {
    // 使用 Vue Router 导航到详情页面
    router.push(`/news/${id}`);
  }

  onMounted(fetchNews);

  </script>
  
  <style scoped>
  .news-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f0f8ff;
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .news-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .news-item {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .news-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .news-image {
    height: 200px;
    background-size: cover;
    background-position: center;
  }
  
  .news-content {
    padding: 1.5rem;
  }
  
  .news-content h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .news-content p {
    font-size: 0.9rem;
    color: #34495e;
    margin-bottom: 1rem;
  }
  
  .news-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #7f8c8d;
  }
</style>