<template>
  <div class="in-view">
    <h1 class="title">智能硬件前沿</h1>
    
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="搜索智能硬件新闻..." @input="filterArticles" />
      <button @click="filterArticles">搜索</button>
    </div>

    <div class="category-chips">
      <span 
        v-for="category in categories" 
        :key="category"
        :class="['chip', { active: selectedCategories.includes(category) }]"
        @click="toggleCategory(category)"
      >
        {{ category }}
      </span>
    </div>

    <div class="article-container">
      <article 
        v-for="article in filteredArticles" 
        :key="article.id" 
        class="article-card"
        @click="navigateToArticle(article.id)"
      >
        <div class="article-image" :style="{ backgroundImage: `url(${article.image})` }">
          <div class="article-category">{{ article.category }}</div>
        </div>
        <div class="article-content">
          <h2>{{ article.title }}</h2>
          <p>{{ article.summary }}</p>
          <div class="article-meta">
            <span class="article-date">{{ formatDate(article.date) }}</span>
            <span class="article-author">{{ article.author }}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getItem } from '@/api/news/in/index.ts';

const router = useRouter();

const articles = ref([]);
const searchQuery = ref('');
const selectedCategories = ref([]);

const categories = ['可穿戴设备', '智能家居', '机器人', '物联网', '健康科技'];

const fetchArticles = async () => {
  
  try {
    const res = await getItem();
    if (res && Array.isArray(res.data.data)) {
      articles.value = res.data.data;
    } else {
      console.log('Received data is not an array:', res.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

};

const filteredArticles = computed(() => {
  return articles.value.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategories.value.length === 0 || 
                            selectedCategories.value.includes(article.category);
    return matchesSearch && matchesCategory;
  });
});

const filterArticles = () => {
  // 触发计算属性重新计算
};

const toggleCategory = (category) => {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
  filterArticles();
};

const navigateToArticle = (id) => {
  router.push(`/in/${id}`);
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('zh-CN', options);
};

onMounted(fetchArticles);
</script>

<style scoped>
.in-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f7f9;
}

.title {
  font-size: 3rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 2px;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-bar input {
  flex-grow: 1;
  padding: 12px;
  border: none;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
}

.search-bar button {
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-bar button:hover {
  background-color: #2980b9;
}

.category-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.chip {
  padding: 8px 16px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.chip.active {
  background-color: #3498db;
  color: white;
}

.article-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.article-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.article-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.article-category {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(52, 152, 219, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.article-content {
  padding: 20px;
}

.article-content h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-top: 0;
}

.article-content p {
  color: #34495e;
  line-height: 1.6;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 15px;
}
</style>