<template>
  <v-container class="mx-auto" fluid id="container">
    <div id="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    <v-tabs>
      <v-tab>All</v-tab>
      <v-tab>Publish</v-tab>
      <v-tab>Draft</v-tab>
    </v-tabs>
    <v-toolbar flat>
      <v-text-field v-model="filterInput"
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>
    </v-toolbar>
    <v-layout row>
      <v-flex v-for="(post) in postsFilter" :key="post._id" class="my-7" xs12 md6 lg4>
        <Card :post="post" :key="post._id"></Card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card';

export default {
  props: ['baseUrl'],
  components: {
    Card
  },
  data() {
    return {
      loading: false,
      show: false,
      posts: [],
      filterInput: '',
      postsFilter: [],
    }
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.loading = true;
      axios({
        method: "GET",
        url: `${this.baseUrl}/post`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(({ data }) => {
        this.loading = false;
        this.posts = data;
        this.postsFilter = data;
      })
      .catch(() => {
        this.loading = false;
        console.log(JSON.stringify(err));
      })
    },
  },
  watch: {
    filterInput: function(newVal) {
      // console.log(newVal);
      this.postsFilter = this.posts.filter(function(el) { return new RegExp(newVal, "i").test(el.title) })
    }
  }
}
</script>

<style>

  #container {
    max-width: 1200px;
  }
  #loading {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(200, 200, 200, .3);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #loading p {
    font-size: 35px;
    color: rgba(24, 24, 24, 1);
    animation: loadingAnim 1s ease-in-out infinite;
  }

  @keyframes loadingAnim {
    0% {
      color: rgba(24, 24, 24, 1);
    }
    50% {
      color: rgba(24, 24, 24, 0);
    }
    100% {
      color: rgba(24, 24, 24, 1);
    }
  }
</style>