<template>
  <button v-google-signin-button="clientId" class="google-signin-button">Continue with Google</button>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive';

export default {
  props: ['baseUrl'],
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '343557730462-9js2ago9i152g81gtmuiav6b4r2kve69.apps.googleusercontent.com'
  }),
  methods: {
    OnGoogleAuthSuccess(idToken) {
      this.$emit('loginGoogle', idToken);
    },
    OnGoogleAuthFail() {
      // console.log(error)
    }
  },
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: royalblue;
  height: 50px;
  font-size: 16px;
  width: 200px;
  border-radius: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.google-signin-button:hover {
  background-color: rgb(60, 98, 212);
}
.google-signin-button:active {
  background-color: rgb(53, 90, 201);
}
</style>