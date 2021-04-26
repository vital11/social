<template>
  <div>
    <v-row>
      <div
        class="mx-auto"
        v-for="image in images" :key="image.id"
      >
        <image-card
          :title="image.title"
          :description="image.description"
          :img="apiUrl + image.image"
          :id="image.id"
          @addLike="addLike(image.id)"
        />
      </div>
    </v-row>
  </div>
</template>


<script>
import ImageCard from "@/components/ImageCard";
import { mapGetters } from 'vuex'

export default {
  name: 'ImageRanking',
  components: { ImageCard },
  data() {
    return {
      images: [],
    }
  },
  computed: {
    ...mapGetters(['apiUrl']),
  },  
  methods: {
    addLike(imageId) {
    }
  },
  async created () {
    let token = localStorage.getItem('token');
    let requestOptions = {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "JWT " + token,
      },
    }
    var response = await fetch(`${this.apiUrl}/images/api/ranking/`, requestOptions);
    this.images = await response.json();
  }
}
</script>