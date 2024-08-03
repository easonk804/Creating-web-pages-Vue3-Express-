<template>
    <div class="main-content">
        <div class="news-feed">
          <div class="news-item" v-for="item in items" :key="item.id" @click="navigateToArticle(item.id)">
            <img :src="item.imageUrl" :alt="item.title">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getItem } from "@/api/content/index.ts";

const router = useRouter();
const items = ref([]);

const fetchItems = async () => {
  try {
    const res = await getItem();
    if (res && Array.isArray(res.data.data)) {
      items.value = res.data.data;
    } else {
      console.log('Received data is not an array:', res.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const navigateToArticle = (id: number) => {
  router.push(`/content/${id}`);
};

onMounted(fetchItems);

</script>

<style lang="less" scoped>
.main-content {
    flex: 1;

    .news-feed {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .news-item {
        flex: 0 0 calc(33.33% - 14px);
        background-color: #f5f5f5;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        
        :hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }

        img {
          width: 100%;
          height: 250px;
          border-radius: 10px;
        }

        h3 {
          font-size: 18px;
          margin: 10px 0 0 10px;
        }

        p {
          color: #666;
          padding: 10px;
          line-height: 1.5;
        }
      }
    }
  }
</style>