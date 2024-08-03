<template>
    <div class="ar-view">
      <h1 class="title">AR 世界探索</h1>
      
      <div class="controls">
        <input v-model="searchQuery" class="search-input" placeholder="搜索 AR 新闻..." @input="filterArticles" />
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
  
      <transition-group name="article-list" tag="div" class="article-grid">
        <article v-for="article in filteredArticles" :key="article.id" class="article-card">
          <img :src="article.image" :alt="article.title" class="article-image" />
          <div class="article-content">
            <h2>{{ article.title }}</h2>
            <p>{{ article.summary }}</p>
            <div class="article-meta">
              <span class="date">{{ formatDate(article.date) }}</span>
              <span class="author">{{ article.author }}</span>
            </div>
            <button class="read-more" @click="readMore(article.id)">阅读更多</button>
          </div>
        </article>
      </transition-group>
    </div>
</template>
  
<script lang="ts" setup>

  import { ref, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getItem } from '@/api/news/ar/index.ts'
  // 使用一个简单的中文分词库来分割搜索查询
  import nodejieba from 'nodejieba';
  
  const router = useRouter();
  const articles = ref([]);
  const searchQuery = ref('');
  const selectedTags = ref([]);
  const tags = ['硬件', '软件', '应用', '游戏', '教育', '医疗'];
  
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
                          selectedTags.value.some(tag => article.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  });
  
  // const filterArticles = () => {
  //   // 触发计算属性重新计算
  // };
  
  const toggleTag = (tag) => {
    if (selectedTags.value.includes(tag)) {
      selectedTags.value = selectedTags.value.filter(t => t !== tag);
    } else {
      selectedTags.value.push(tag);
    }
    filterArticles();
  };
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };
  
  const readMore = (articleId) => {
    // 实现阅读更多功能，比如导航到文章详情页
    console.log(`Reading more about article ${articleId}`);
    router.push(`/ar/${articleId}`)
  };
  
  onMounted(fetchArticles);
  
</script>
  
<style lang="less" scoped>
  .ar-view {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #f0f3f5;
  }
  
  .title {
    font-size: 3rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .controls {
    margin-bottom: 30px;
  }
  
  .search-input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
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
    background-color: #3498db;
    color: white;
  }
  
  .article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .article-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
  
  .article-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
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
  
  .read-more {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .read-more:hover {
    background-color: #2980b9;
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