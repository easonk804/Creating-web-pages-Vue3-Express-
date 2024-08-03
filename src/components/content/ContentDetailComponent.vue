<template>
    <div class="article-detail">
      <h1>{{ article.title }}</h1>
      <div class="meta-info">
        <span>作者: {{ article.author }}</span>
        <span>发布日期: {{ formatDate(article.date) }}</span>
      </div>
      <div class="article-content" v-html="article.content"></div>
      <div class="tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { getItem } from '@/api/content/index_detail.ts';

  const route = useRoute();
  const article = ref([]);
  
  const fetchArticle = async () => {
    // 获取前端网页请求文章的id
    const articleId = route.params.id;
    try {
        const res = await getItem(articleId);
        if (res) {
            article.value = res.data.data;
            console.log(article.value);
            console.log(formatTags(article.value.tags));
            article.value.tags = formatTags(article.value.tags);
        } 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };
  
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString();
  };

  const formatTags = (tags: any) => {
    const parsedTags = JSON.parse(tags)
    return parsedTags;
  }

  onMounted(fetchArticle);

  </script>
  
  <style scoped>
  .article-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  .meta-info {
    margin-bottom: 20px;
    color: #666;
  }
  
  .meta-info span {
    margin-right: 20px;
  }
  
  .article-content {
    line-height: 1.6;
    margin-bottom: 30px;
  }
  
  .tags {
    margin-top: 20px;
  }
  
  .tag {
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 10px;
    font-size: 0.9em;
  }
  </style>