<template>
    <div class="in-detail-container">
      <h1 class="title">{{ article.title }}</h1>
      <div class="meta-info">
        <span class="author">作者: {{ article.author }}</span>
        <span class="date">发布日期: {{ formatDate(article.publishDate) }}</span>
        <span class="views">阅读量: {{ article.views }}</span>
      </div>
      <div class="cover-image">
        <img :src="article.coverImage" :alt="article.title">
      </div>
      <div class="content" v-html="article.content"></div>
      <div class="tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="actions">
        <button @click="likeArticle" :class="{ 'liked': isLiked }">
          <i class="fas fa-thumbs-up"></i> 点赞 ({{ article.likes }})
        </button>
        <button @click="shareArticle">
          <i class="fas fa-share"></i> 分享
        </button>
      </div>
      <div class="comments-section">
        <h2>评论</h2>
        <div v-for="comment in article.comments" :key="comment.id" class="comment">
          <p><strong>{{ comment.user }}</strong>: {{ comment.text }}</p>
        </div>
        <div class="add-comment">
          <textarea v-model="newComment" placeholder="添加评论..."></textarea>
          <button @click="submitComment">提交评论</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const article = ref({
    title: '智能硬件革新：未来已来',
    author: '张三',
    publishDate: new Date('2023-05-15'),
    views: 1234,
    coverImage: 'https://example.com/image.jpg',
    content: '<p>这里是文章的详细内容...</p>',
    tags: ['智能硬件', 'IoT', '科技创新'],
    likes: 56,
    comments: [
      { id: 1, user: '李四', text: '非常棒的文章！' },
      { id: 2, user: '王五', text: '期待更多相关内容。' }
    ]
  });
  
  const isLiked = ref(false);
  const newComment = ref('');
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('zh-CN');
  };
  
  const likeArticle = () => {
    if (!isLiked.value) {
      article.value.likes++;
      isLiked.value = true;
    }
  };
  
  const shareArticle = () => {
    // 实现分享功能
    console.log('分享文章');
  };
  
  const submitComment = () => {
    if (newComment.value.trim()) {
      article.value.comments.push({
        id: article.value.comments.length + 1,
        user: '当前用户',
        text: newComment.value
      });
      newComment.value = '';
    }
  };
  
  onMounted(() => {
    // 可以在这里获取文章数据
  });
  </script>
  
  <style lang="less" scoped>
  .in-detail-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  
    .title {
      font-size: 2.5em;
      color: #f5f5f5;
      margin-bottom: 10px;
    }
  
    .meta-info {
      display: flex;
      justify-content: space-between;
      color: #f5f5f5;
      margin-bottom: 20px;
    }
  
    .cover-image {
      width: 100%;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
    }
  
    .content {
      line-height: 1.6;
      color: #f5f5f5;
    }
  
    .tags {
      margin: 20px 0;
      .tag {
        background-color: #f0f0f0;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 20px;
        font-size: 0.9em;
      }
    }
  
    .actions {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 20px;
  
      button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-right: 10px;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s;
  
        &:hover {
          background-color: #45a049;
        }
  
        &.liked {
          background-color: #2196F3;
        }
      }
    }
  
    .comments-section {
      margin-top: 30px;
  
      .comment {
        background-color: #f9f9f9;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
  
      .add-comment {
        margin-top: 20px;
  
        textarea {
          width: 100%;
          height: 100px;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
  
        button {
          background-color: #2196F3;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
  
          &:hover {
            background-color: #0b7dda;
          }
        }
      }
    }
  }
  </style>