<template>
  <div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-75-ns pa2">
          <div class="bg-white pv4 tl">
            <h1 class="f3 lh-copy">Wed, Oct 24, 2018</h1>
            <article class="cf">
              <div v-for="(photo, index) in photos.photos" :key="photo.path">
                <div v-bind:class="{'fl w-50': true, 'w-25-ns': (index != 4)}">
                  <Photo :instance="photo" />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="fl w-100 w-25-ns pa2 sidebar">
          <div class="bg-white pv5">
            <div class="profile tr">
              {{ user.username }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '../components/Photo.vue';
// import exif from 'exif-js';

export default {
  name: 'Dashboard',
  data() {
    return {
      user: this.$store.state.UserStore,
      photos: this.$store.state.PhotoStore,
    };
  },
  components: {
    Photo,
  },
  mounted() {
    this.$store.dispatch('UserStore/index');
    this.$store.dispatch('PhotoStore/index');
  },
};
</script>
