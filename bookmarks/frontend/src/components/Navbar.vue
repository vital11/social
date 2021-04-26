<template>
  <v-app-bar app flat dark color="green">
    <v-toolbar-title class="title mr-15">
      <router-link to="/" class="link"><span>Social network</span></router-link>
    </v-toolbar-title>
    <v-btn text>
      <router-link :to = "{ name:'dashboard' }" class="link"><span>My dashboard</span></router-link>
    </v-btn>
    <v-btn text>
      <router-link :to = "{ name:'image-list' }" class="link"><span>Images</span></router-link>
    </v-btn>
    <v-btn text>
      <router-link :to = "{ name:'image-ranking' }" class="link"><span>Image ranking</span></router-link>
    </v-btn>				
    <v-btn text>
      <router-link :to = "{ name:'user-list' }" class="link"><span>People</span></router-link>
    </v-btn>
    <v-btn text>
      <router-link :to = "{ name:'notifications' }" class="link"><span>Send mail</span></router-link>
    </v-btn>

    <v-spacer></v-spacer>

    <div v-if="user">
      <span style="color:yellow">Hello, {{ user }}</span>
      <router-link :to = "{ name:'logout' }" class="link ml-5"><span>Logout</span></router-link>
    </div>
    <div v-else>
      <router-link :to = "{ name:'login' }" class="link"><span>Login</span></router-link>
      <router-link :to = "{ name:'register' }" class="link ml-5"><span>Signup</span></router-link>
    </div>
  </v-app-bar>
</template>


<script>
import { mapGetters } from 'vuex'


  export default {
    name: "Navbar",
    // data() {
    // 	return {
    // 		user: localStorage.getItem('user'),
    // 	}
    // }
    computed: {
      ...mapGetters(['user']),
      // user() {
      //   return this.$store.getters.getUser
      // }
    }
}
</script>


<style>
	.link span{
		text-decoration: none;
		color:white;
	}
</style>
