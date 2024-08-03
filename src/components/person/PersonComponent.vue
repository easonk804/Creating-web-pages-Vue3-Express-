<template>
    <div class="creator-profile" v-for="item in creatorProfile" :key="item.id">
      <header class="profile-header">">
            <img :src="item.profileImage" alt="Creator's Profile Picture" class="profile-image">
            <h1>{{ item.creatorName }}</h1>
            <p class="tagline">{{ item.tagline }}</p>
      </header>
  
      <section class="about-me">
        <h2>关于我</h2>
        <p>{{ item.aboutMe }}</p>
      </section>
  
      <section class="skills">
        <h2>技能专长</h2>
        <ul>
          <li v-for="skill in item.skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>
  
      <section class="projects">
        <h2>代表项目</h2>
        <div v-for="project in item.projects" :key="project.id" class="project-card">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">查看项目</a>
        </div>
      </section>
  
      <section class="contact">
        <h2>联系方式</h2>
        <p>邮箱：{{ item.email }}</p>
        <p>社交媒体：
          <a v-for="(link, platform) in item.socialMedia" :key="platform" :href="link" target="_blank">
            {{ platform }}
          </a>
        </p>
      </section>
    </div>
</template>
  
<script lang="ts" setup>

interface ProfileItem {
  id: number;
  profileImage: string;
  creatorName: string;
  tagline: string;
  aboutMe: string;
  skills: string[];
  projects: {
    id: number;
    name: string;
    description: string;
    link: string;
  }[];
  email: string;
  socialMedia: {
    [key: string]: string;
  };
}

const creatorProfile: ProfileItem[] = [
    {
        id: 1,
        profileImage: '/person.jpg',
        creatorName: '易生',
        tagline: '草根创业者，专注AI和AR等领域的深度结合',
        aboutMe: '我是Eason，热爱历史和物理，相信AI和数字技术的力量。目前专注于AI+AR硬件的研究。'+
                '我欣赏艺术和科技的结合美，希望能为科技行业贡献自己的力量。',
        skills: ['机器学习/人工智能', 'AIGC', 'AR/智能硬件'],
        projects: [
          {
            id: 1,
            name: '智能客服系统',
            description: '一个智能客服系统，可以自动回答客户问题。',
            link: ''
        }],
        email: 'johndoe@example.com',
        socialMedia: {
            "Github": "666"
        }
    },
];

</script>
  
<style scoped>
  .creator-profile {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .profile-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .tagline {
    font-style: italic;
    color: #ffffff;
  }
  
  section {
    margin-bottom: 30px;
  }

  h1 {
        color: #ffffff;
    }

  h2 {
    color: #ffffff;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
  }
  
  .project-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
  }
  
  ul {
    padding-left: 20px;
    color: #ffffff;

    li {
        line-height: 2;
    }
  }

  p {
    color: #ffffff;
    line-height: 2;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
</style>