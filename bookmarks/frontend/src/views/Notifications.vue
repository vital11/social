<template>
  <div class="m-5">
    
    <v-col cols="12" sm="4" class="grey lighten-4 mx-5">
      <h3>Send message to all users</h3>

      <v-form @submit.prevent="sendMailToAllUsers">
        <v-text-field
          v-model="mail.subject"
          label="Subject"
          required
        ></v-text-field>
        <v-text-field
          v-model="mail.text"
          label="Text"
          required
        ></v-text-field>
        <v-btn class="mr-4" color="success" type="submit">Send</v-btn>
      </v-form>      

    </v-col>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

  export default {
    name: "Notifications",
    data() {
      return {
        mail: {
          'subject': '',
          'text': '',
        }
      }
    },
    computed: {
    ...mapGetters(['apiUrl']),
    },  
    methods: {
      async sendMailToAllUsers() {
        let token = localStorage.getItem('token');
        let requestOptions = {
          method: 'POST',
          headers: {
            "Content-type": 'application/json',
            "Authorization": "JWT " + token,
          },
          body: JSON.stringify(this.mail)
        }
        var response = await fetch(`${this.apiUrl}/api/send/`, requestOptions);
        this.mail.push(await response.json());
      }
    }
  }
</script>