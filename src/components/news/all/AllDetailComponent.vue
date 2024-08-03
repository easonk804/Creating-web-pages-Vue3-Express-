<template>
    <div class="news-detail">
      <h1>{{ news.title }}</h1>
      <div class="news-meta">
        <span class="author">{{ news.author }}</span>
        <span class="date">{{ formatDate(news.date) }}</span>
        <!-- <span class="views">阅读量: {{ news.views }}</span> -->
      </div>
      <!-- <img :src="news.imageUrl" :alt="news.title" class="news-image"> -->
      <div class="content" v-html="news.content"></div>
      <div class="tags">
        <span v-for="tag in news.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="actions">
        <button @click="likeNews" :class="{ active: isLiked }">
          <i class="icon-like"></i> 点赞 ({{ likes }})
        </button>
        <button @click="shareNews">
          <i class="icon-share"></i> 分享
        </button>
      </div>
      <div class="related-news">
        <h3>相关新闻</h3>
        <ul>
          <li v-for="item in relatedNews" :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="comments">
        <h3>评论 ({{ comments.length }})</h3>
        <ul>
          <li v-for="comment in comments" :key="comment.id">
            <p><strong>{{ comment.user }}</strong>: {{ comment.content }}</p>
            <span class="comment-date">{{ formatDate(comment.date) }}</span>
          </li>
        </ul>
        <div class="comment-form">
          <textarea v-model="newComment" placeholder="发表评论..."></textarea>
          <button @click="submitComment">提交评论</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { getItem } from "@/api/news/all/index_detail.ts"
  import { useRoute } from 'vue-router'

  const route = useRoute();
  const news = ref([]);

  const fetchArticles = async () => {
    // 获取前端网页请求文章的id
    const articleId = route.params.id;
    try {
        const res = await getItem(articleId);
        if (res) {
            news.value = res.data.data;
            console.log(news.value);
            console.log(formatTags(news.value.tags));
            news.value.tags = formatTags(news.value.tags);
        } 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };
  
  const likes = ref(42);
  const isLiked = ref(false);
  const comments = ref([]);
  const newComment = ref('');
  const relatedNews = ref([
    { id: 1, title: '5G技术在远程医疗中的应用', url: '#' },
    { id: 2, title: '量子计算机研究取得新进展', url: '#' }
  ]);
  
  const formatTags = (tags: string) => {
    const parsedTags = JSON.parse(tags)
    return parsedTags;
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const likeNews = () => {
    if (!isLiked.value) {
      likes.value++;
      isLiked.value = true;
    }
  };
  
  const shareNews = () => {
    // 实现分享功能
    console.log('分享新闻');
  };
  
  const submitComment = () => {
    if (newComment.value.trim()) {
      comments.value.push({
        id: comments.value.length + 1,
        user: '匿名用户',
        content: newComment.value,
        date: new Date().toISOString()
      });
      newComment.value = '';
    }
  };

  onMounted(fetchArticles)

  onMounted(() => {
    // 这里可以添加获取新闻详情、评论等数据的逻辑
  });
  </script>
  
  <style lang="less" scoped>
  .news-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  
    h1 {
    font-size: 24px;
    margin-bottom: 10px;
    }

    .news-meta {
        margin: 30px auto 30px;

        .author {
            margin-right: 20px;
            font-size: 14px;
            color: rgb(20, 101, 252);
        }

        .date {
            font-size: 14px;
            color: grey;
        }
    }

    .news-image {
        display: block;
        width: 80%;
        max-height: 400px;
        object-fit: cover;
        margin: 0 auto 20px;
        border-radius: 8px;
    }

    .content {
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .tags {
        .tag {
        display: inline-block;
        background-color: #f0f0f0;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 4px;
        font-size: 14px;
        color: rgb(20, 101, 252);
        }
    }
  
    .actions {
        margin-top: 20px;
        button {
            margin-right: 10px;
            padding: 5px 10px;
            &.active {
            background-color: #e0e0e0;
            }
        }
    }
  
    .related-news, .comments {
        margin-top: 30px;
    }
  
    .comment-form {
        margin-top: 20px;
        textarea {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
        }
    }
  }
  </style>