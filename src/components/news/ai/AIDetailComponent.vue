<template>
  <div v-if="article" class="article-container">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <div class="article-meta">
        <span class="author">{{ article.author }}</span>
        <span class="date">{{ article.date }}</span>
      </div>
    </div>
    <div class="article-image" :style="{ backgroundImage: `url(${article.imageUrl})` }"></div>
    <div class="article-content">
      <p>{{ article.content }}</p>
    </div>
    <div class="article-tags">
      <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getItem } from '@/api/news/ai/index_detail.ts'

const route = useRoute()
const article = ref([])

const fetchArticle = async () => {
    // 获取前端网页请求文章的id
    const articleId = route.params.id;
    try {
        const res = await getItem(articleId);
        if (res) {
            article.value = res.data.data;
            console.log(article.value);
            // console.log(formatTags(article.value.tags));
            // article.value.tags = formatTags(article.value.tags);
        } 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const formatTags = (tags) => {
    const parsedTags = JSON.parse(tags)
    return parsedTags;
  }

  onMounted(async () => {
    const id = route.params.id
    article.value = await fetchArticle(id)
  })
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f0f8ff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.article-header {
  text-align: center;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.article-meta {
  font-size: 0.9rem;
  color: #7f8c8d;
}

.author {
  font-weight: bold;
  margin-right: 1rem;
}

.article-image {
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
}

.article-tags {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .article-container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .article-image {
    height: 200px;
  }
}
</style>