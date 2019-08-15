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
        <button
          @click="$refs.file.click()"
          class="gray mr-4 h-100 inline-block align-middle"
        >
          <img
            alt="Recall Logo"
            class="cursor-pointer w-5 h-100 inline-block align-middle"
            src="@/assets/svg/plus.svg"
          />
        </button>
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

        <div class="gray mh2 h-100 inline-block relative">
          <button
            class="gray mh2 h-100 inline-block align-middle relative z-20"
            @click="toggleMenu"
          >
            <img
              alt="Menu"
              class="cursor-pointer w-5 h-100 inline-block align-middle"
              src="@/assets/svg/menu.svg"
            />
          </button>
          <div
            class="rounded border bg-white absolute right-0 px-6 top-0 pb-1 z-10"
            v-if="menuOpen"
          >
            <ul class="list-reset text-center text-xs mt-10">
              <li class="border-b py-2">
                <a href="https://browser.blockstack.org/" class="black"
                  >Blockstack</a
                >
              </li>
              <li class="border-b py-2">
                <a class="black" href="https://chat.donesunday.com/">Support</a>
              </li>
              <li class="py-2">
                <button @click="logout" class="black">Logout</button>
              </li>
            </ul>
          </div>
        </div>
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
  data() {
    return {
      menuOpen: false
    }
  },
  components: {
    Loading
  },
  methods: {
    logout() {
      blockstack.signUserOut(window.location.origin)
    },
    filesChange(name, files) {
      this.$store.dispatch('PhotoStore/create', files)
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
