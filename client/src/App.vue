<template>
  <v-app>
    <Navbar @logout="logout" :isLogin="isLogin" id="navbar" :appName="appName"></Navbar>

    <div id="loading" v-if="loading">
      <p>Loading...</p>
    </div>
    
    <v-content class="pa-12">
      <FormLoginRegister 
        v-if="!isLogin"
        @loginGoogle="loginGoogle">
      </FormLoginRegister>

      <router-view 
      v-if="isLogin"
      :baseUrl="baseUrl"
      @logout="logout"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import Navbar from './components/Navbar';
import FormLoginRegister from './views/FormLoginRegister';
// 
export default {
  components: {
    Navbar,
    FormLoginRegister
  },
  data() {
    return {
      loading: false,
      isLogin: false,
      token: '',
      appName: "My App",
      baseUrl: 'http://localhost:3000',
    }
  },
  created() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.$router.push('/dashboard');
      this.isLogin = true;
    }
  },
  methods: {
    loginGoogle(val) {
      this.loading = true;
      axios({
        method: "POST",
        url: `${this.baseUrl}/user/login/google`,
        data: {
          idToken: val
        }
      })
      .then(({ data }) => {
        // kalau di method $router
        this.isLogin = true;
        this.$router.push('dashboard');
        localStorage.setItem('token', data.token);
        this.loading = false;
        // console.log(data);
      })
      .catch(() => {
        // console.log(err);
        this.loading = false;
      })
    },
    logout() {
      // console.log('logout');
      localStorage.removeItem('token');
      this.isLogin = false;
    },
    createPost(val) {
      this.newPost = val;
    },
  },
  watch: {
    $route() {
      if (!this.token) {
        // this.$router.push('login');
      } else {
        // this.$router.push('dashboard');
        this.isLogin = true;
      }
    }
  }
};
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
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
