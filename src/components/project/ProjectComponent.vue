<template>
    <div class="projects-showcase">
      <h1 class="title">创意实验室</h1>
      <div class="projects-grid">
        <div v-for="project in projectShowcase" :key="project.id" class="project-card">
          <img :src="project.image" :alt="project.name" class="project-image">
          <div class="project-info">
            <h2 class="project-name">{{ project.name }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" target="_blank" class="project-link">查看项目</a>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts" setup>

import { ref, onMounted } from 'vue'
import { getItem } from "@/api/project/index.ts";

const projectShowcase = ref([]);

const fetchShowcase = async () => {

  try {
    const res = await getItem();
    if (res) {
      projectShowcase.value = res.data.data;
      console.log(res.data.data);
      console.log(projectShowcase.value);
      console.log(formatTags(projectShowcase.value.tags));
      // projectShowcase.value.tags = formatTags(projectShowcase.value.tags);
    } else {
      console.log('Received data is not an array:', res.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

const formatTags = (tags: any) => {
    const parsedTags = JSON.parse(tags);
    return parsedTags;
  }

onMounted(fetchShowcase);

</script>
  
<style lang="less" scoped>
  .projects-showcase {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .project-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
  }
  
  .project-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .project-info {
    padding: 1.5rem;
  }
  
  .project-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
  
  .project-description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  
  .tag {
    background-color: #e0e0e0;
    color: #333;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .project-link {
    display: inline-block;
    background-color: #3498db;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .project-link:hover {
    background-color: #2980b9;
  }
</style>