<template>
  <div class="top-menu w-100 pa3 pl4 pr4 border-b border-solid flex">
    <div class="flex-1 text-left inline-block">
      <img
        alt="Recall Logo"
        class="cursor-pointer w-32"
        src="@/assets/svg/logo.svg"
      />
    </div>
    <div class="flex-1 align-middle text-right center inline-block">
      <div class="tr f4 h-100">
        <a
          href="#"
          @click="$refs.file.click()"
          class="gray mh2 h-100 inline-block align-middle"
        >
          <img
            alt="Recall Logo"
            class="cursor-pointer w-5 h-100 inline-block align-middle"
            src="@/assets/svg/plus.svg"
          />
        </a>
        <input
          type="file"
          ref="file"
          id="upload-file-input"
          multiple
          @change="filesChange($event.target.name, $event.target.files)"
          accept="image/*"
          class="input-file"
          v-show="false"
        />
      </div>
    </div>

    <Loading
      :active.sync="this.$store.state.PhotoStore.loading"
      :can-cancel="false"
      :is-full-page="true"
    ></Loading>
  </div>
</template>

<script>
import * as blockstack from 'blockstack'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'TopMenu',
  components: {
    Loading
  },
  methods: {
    logout() {
      blockstack.signUserOut(window.location.origin)
    },
    filesChange(name, files) {
      this.$store.dispatch('PhotoStore/create', files)
    }
  }
}
</script>

<style scoped></style>
