<template>
  <v-row justify="left">
    <v-card
      v-for="user in users" :key="user.id"
      class="ma-6"
      width="250"
      tile

    >
      <UserCard
        :photo="user.profile.photo"
        :username="user.username"
        :stripe_id="user.stripe_id"
        :id="user.id"      
      />
    </v-card>
  </v-row>
</template>


<script>
import UserCard from '../components/UserCard.vue';
import { mapGetters } from 'vuex'

export default {
  name: 'UserList',
  data() {
    return {
      users: [],
    }
  },
  computed: {
    ...mapGetters(['apiUrl']),
  },  
  methods: {
    async loadUsers () {
      let token = localStorage.getItem('token');
      let requestOptions = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "JWT " + token,
        },
      }
      var response = await fetch(`${this.apiUrl}/api/`, requestOptions);
      this.users = await response.json();
    },
  },
  created() {
    this.loadUsers()
  },
  components: {
    UserCard
  }
}
</script>
