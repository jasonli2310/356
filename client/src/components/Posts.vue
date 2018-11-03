<template>
  <div class="posts">
    This file will list all the posts.ssss
    
    
    <div v-for="post in posts">
      <!-- <p>
        {{post.title}}
        <br>
        {{post.description}}
      </p> -->
      
      {{post}}
    </div>
    
  </div>
</template>

<script>

import PostsService from '@/services/PostsService'

export default {
  name: 'posts',
  data () {
    return {posts: []}
  },
  mounted() {
    this.getPosts()
  }, 
  
  methods:{
    async getPosts(){
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>
