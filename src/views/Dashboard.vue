<template>
  <div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-75-ns pa2">
          <div class="bg-white pv4 tl">
            <h1 class="f3 lh-copy">Wed, Oct 24, 2018</h1>
            <PhotoModal
              v-bind:photoUrl="selectedPhotoUrl"
              v-if="showModal"
              @close="showModal = false"
            />
            <article class="cf">
              <div v-for="(photo, index) in photos.photos" :key="photo.path">
                <div v-bind:class="{'fl w-50': true, 'w-25-ns': (index != 4)}">
                  <Photo :instance="photo" @open="openPhotoModal" />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="fl w-100 w-25-ns pa2 sidebar">
          <div class="bg-white pv5 ml5">
            <div class="profile tl pv4 bb b--light-silver">
              <div class="dib w3">
                <img class="br-100" :src="user.avatarUrl" alt="">
              </div>
              <div class="dib v-top mt2 ml3">
                <div class="mb2"><b>{{ user.username }}</b></div>
                <div class="mb2">{{ user.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '../components/Photo.vue';
import PhotoModal from '../components/PhotoModal.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      user: this.$store.state.UserStore,
      photos: this.$store.state.PhotoStore,
      selectedPhotoUrl: null,
      showModal: false,
    };
  },
  components: {
    Photo,
    PhotoModal,
  },
  methods: {
    openPhotoModal(photo, photoUrl) {
      this.selectedPhotoUrl = photoUrl;
      this.showModal = true;
    },
  },
  mounted() {
    this.$store.dispatch('UserStore/index');
    this.$store.dispatch('PhotoStore/index');
  },
};
</script>
