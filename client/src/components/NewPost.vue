<template>
  <div class="posts">
      <!-- <h1>Whatcha' Thinkin?</h1> -->
        <!-- <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div> -->
        <div class="formarea">
          <textarea rows="15" cols="15" style="border: none" placeholder="Whatcha Thinkin?" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="addPost">this is important enough to share with another human being</button>
        </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'NewPost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">

textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
}

.formarea{
  padding: 10px;
}


.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
