<template>
  <div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-75-ns pa2">
          <div class="bg-white pv4 tl">
            <h1 class="f3 lh-copy">Mon, Mar 14, 2016</h1>
            <article class="cf">
              <div v-for="(photo, index) in photos" :key="photo.path">
                <div v-bind:class="{'fl w-50': true, 'w-25-ns': (index != 4)}">
                  <a href="#" class="db aspect-ratio aspect-ratio--1x1 dim">
                    <img v-bind:src="photo.url"
                         style="position: absolute;left:0;top:0;width:100%;height: 100%;"
                         alt="">
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="fl w-100 w-25-ns pa2 sidebar">
          <div class="bg-white pv5">
            <div class="profile tr">
              {{ username }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import uuidv4 from 'uuid/v4';
// import exif from 'exif-js';

export default {
  name: 'Dashboard',
  data() {
    return this.$store.state.UserStore;
  },
  mounted() {
    this.$store.dispatch('UserStore/index');
  },
};
</script>
