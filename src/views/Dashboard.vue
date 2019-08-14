<template>
  <div class="flex min-h-full">
    <div class="flex-initial border-r border-gray-200 p32 p-8">
      <ul class="list-reset text-left text-base mb-12">
        <li class="mb-6 active font-semibold">Photos</li>
        <li class="mb-6 disabled">Albums</li>
        <li class="mb-6 disabled">Sharing</li>
        <li class="mb-6 disabled">Trash</li>
      </ul>

      <ul class="list-reset text-left text-base mb-24">
        <li class="mb-6 disabled">Settings</li>
        <li class="mb-6">
          <a
            href="https://apps.apple.com/us/app/recall-secure-photo-storage/id1449873085"
            target="_blank"
          >
            Download app
          </a>
        </li>
      </ul>

      <ul class="list-reset text-left text-base">
        <li class="mb-3">Unlimited storage</li>
        <li class="text-xs">
          <a href="https://github.com/blockstack/gaia" target="_blank">
            Provided by Blockstack *
          </a>
        </li>
      </ul>
    </div>
    <div class="flex-auto">
      <div @drop="uploadFile" @dragover.prevent>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            <div class="fl w-100 pa2">
              <div class="bg-white pv4 tl">
                <PhotoModal
                  v-bind:photoUrl="selectedPhotoUrl"
                  v-if="showModal"
                  @close="showModal = false"
                />
                <div class="flex items-center mb-10">
                  <div
                    class="rounded-full border border-gray-400 h-10 w-10 flex flex-wrap"
                  >
                    <img
                      src="@/assets/photo.svg"
                      alt="Photo icon"
                      class="block mx-auto"
                    />
                  </div>
                  <div class="text-standard font-medium text-2xl ml-2">
                    Photos
                  </div>
                </div>
                <div v-if="Object.keys(groupedPhotos).length != 0">
                  <div
                    v-for="date in Object.keys(groupedPhotos)
                      .sort()
                      .reverse()"
                    :key="date"
                  >
                    <div class="cf mb4">
                      <div class="f3 mb-3 font-medium">
                        {{ groupedPhotos[date].date.format('Do MMMM YYYY') }}
                      </div>
                      <div class="flex flex-wrap">
                        <Photo
                          :instance="photo"
                          @open="openPhotoModal"
                          v-for="photo in groupedPhotos[date].photos"
                          :key="photo.path"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="tc mt5 mb7">
                  <div class="title text-5xl active font-semibold mb-5">
                    Welcome to Recall!
                  </div>
                  <div
                    class="subtitle text-2xl font-medium max-w-sm m-auto mb-4 px-8"
                  >
                    To start using Recall just drag and drop your images here!
                  </div>
                  <div class="text-xs mb-5">
                    You can also use the plus icon on the top right corner
                  </div>
                  <div>
                    <img
                      alt="Upload your photos"
                      src="@/assets/img/recall-how.jpg"
                      width="410"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from '../components/Photo.vue'
import PhotoModal from '../components/PhotoModal.vue'

export default {
  name: 'Dashboard',
  data() {
    return {
      user: this.$store.state.UserStore,
      photos: this.$store.state.PhotoStore,
      selectedPhotoUrl: null,
      showModal: false
    }
  },
  computed: {
    groupedPhotos() {
      const byday = {}
      const photos = this.photos.photos || []
      photos.forEach(photo => {
        const d = photo.bestDate()
        byday[d] = byday[d] || {}
        byday[d].date = photo.bestMoment()
        byday[d].photos = byday[d].photos || []
        byday[d].photos.push(photo)
      })
      return byday
    }
  },
  components: {
    Photo,
    PhotoModal
  },
  methods: {
    openPhotoModal(photo, photoUrl) {
      this.selectedPhotoUrl = photoUrl
      this.showModal = true
    },
    uploadFile(e) {
      e.stopPropagation()
      e.preventDefault()

      const { files } = e.dataTransfer
      this.$store.dispatch('PhotoStore/create', files)
    }
  },
  mounted() {
    this.$store.dispatch('UserStore/index')
    this.$store.dispatch('PhotoStore/index')
  }
}
</script>

<style scoped>
.active {
  color: #5e2ca5;
}

.disabled {
  color: rgba(0, 0, 0, 0.4);
}
</style>
