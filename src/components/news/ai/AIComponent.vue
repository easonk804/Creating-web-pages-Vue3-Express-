<template>
  <div class="ai-view">
    <h1 class="title">AI 创新前沿</h1>
    
    <div class="controls">
      <input v-model="searchQuery" class="search-input" placeholder="探索 AI 世界..." @input="filterArticles" />
      <div class="tags">
        <span 
          v-for="tag in tags" 
          :key="tag"
          :class="['tag', { active: selectedTags.includes(tag) }]"
          @click="toggleTag(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <div class="article-container">
      <article 
        v-for="article in filteredArticles" 
        :key="article.id" 
        class="article-card"
        @click="navigateToArticle(article.id)"
      >
        <div class="article-image" :style="{ backgroundImage: `url(${article.imageUrl})` }">
          <div class="article-tag">{{ article.tag }}</div>
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

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getItem } from "@/api/news/ai/index.ts";

const router = useRouter();

const articles = ref([]);
const searchQuery = ref('');
const selectedTags = ref([]);

const tags = ['机器学习', '深度学习', '自然语言处理', '计算机视觉', '机器人技术'];

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
    const matchesTags = selectedTags.value.length === 0 || 
                        selectedTags.value.includes(article.tags);
    return matchesSearch && matchesTags;
  });
});

const filterArticles = () => {
  // 触发计算属性重新计算
};

const toggleTag = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index === -1) {
    selectedTags.value.push(tag);
  } else {
    selectedTags.value.splice(index, 1);
  }
  filterArticles();
};

const navigateToArticle = (id: number) => {
  router.push(`/ai/${id}`);
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('zh-CN', options);
};

onMounted(fetchArticles);

</script>

<style scoped>
.ai-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', 'Arial', sans-serif;
  background-color: #f6f8fa;
}

.title {
  font-size: 3.5rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 300;
  letter-spacing: 2px;
}

.controls {
  margin-bottom: 30px;
}

.search-input {
  width: 98%;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  padding: 8px 16px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag.active {
  background-color: #3f51b5;
  color: white;
}

.article-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.article-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.article-card.expanded {
  grid-column: 1 / -1;
}

.article-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.article-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(63, 81, 181, 0.8);
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
  color: #1a237e;
  margin-top: 0;
  margin-bottom: 10px;
}

.article-content p {
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

.article-list-enter-active,
.article-list-leave-active {
  transition: all 0.5s ease;
}

.article-list-enter-from,
.article-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>