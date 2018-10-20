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
import * as blockstack from 'blockstack';
import uuidv4 from 'uuid/v4';
// import exif from 'exif-js';

export default {
  name: 'Dashboard',
  data() {
    return {
      username: blockstack.loadUserData().username,
      photos: [],
    };
  },
  mounted() {
    console.log('cenas');

    // const writeOptions = { encrypt: true };
    // blockstack.putFile('photos.json', JSON.stringify([{ path: 'compressed_images/rMz2uqVwyas0N3uoENqrqc.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/rMz2uqVwyas0N3uoENqrqc.photo' }, { path: 'compressed_images/7cf12e0670sl8tj1ne3gps.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/7cf12e0670sl8tj1ne3gps.photo' }, { path: 'compressed_images/uv17ggz7i4e3rvz4vq1km3.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/uv17ggz7i4e3rvz4vq1km3.photo' }, { path: 'compressed_images/nf10wr6o9tmklzcoep83i.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/nf10wr6o9tmklzcoep83i.photo' }, { path: 'compressed_images/4f4vo9tjh9oxs5la33kf.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/4f4vo9tjh9oxs5la33kf.photo' }, { path: 'compressed_images/hcfv7keq63o1b553vdcj.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/hcfv7keq63o1b553vdcj.photo' }, { path: 'compressed_images/3.photo', url: 'https://gaia.blockstack.org/hub/1PVrDLhxnHKAi8aur3fRZ7C2qLSf2qwMUM/compressed_images/rMz2uqVwyas0N3uoENqrqc.photo' }]), writeOptions)
    //   .then(() => {
    //     console.log('done');
    //   });

    console.log(uuidv4());

    const readOptions = { decrypt: true };
    blockstack.getFile('photos.json', readOptions)
      .then((file) => {
        const statuses = JSON.parse(file || '[]');
        this.photos = statuses;
        console.log(statuses);
      });
  },
};
</script>
