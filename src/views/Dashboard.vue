<template>
  <div class="flex">
    <div class="flex-initial border-r border-gray-200 p32 p-8">
      <ul class="list-reset text-left text-base mb-12">
        <li class="mb-6">Photos</li>
        <li class="mb-6">Albums</li>
        <li class="mb-6">Sharing</li>
        <li class="mb-6">Trash</li>
      </ul>

      <ul class="list-reset text-left text-base mb-24">
        <li class="mb-6">Settings</li>
        <li class="mb-6">Download app</li>
      </ul>

      <ul class="list-reset text-left text-base">
        <li class="mb-6">Unlimited storage</li>
      </ul>
    </div>
    <div class="flex-auto">
      <div @drop="uploadFile" @dragover.prevent>
        <div class="mw9 center ph3-ns">
          <div class="cf ph2-ns">
            <div class="fl w-100 w-75-ns pa2">
              <div class="bg-white pv4 tl">
                <PhotoModal
                  v-bind:photoUrl="selectedPhotoUrl"
                  v-if="showModal"
                  @close="showModal = false"
                />
                <div v-if="Object.keys(groupedPhotos).length != 0">
                  <div
                    v-for="date in Object.keys(groupedPhotos)
                      .sort()
                      .reverse()"
                    :key="date"
                  >
                    <div class="cf mb4">
                      <div class="f3 mb-3 font-medium">
                        {{
                          groupedPhotos[date].date.format('ddd, MMM DD YYYY')
                        }}
                      </div>
                      <div
                        v-for="(photo, index) in groupedPhotos[date].photos"
                        :key="photo.path"
                      >
                        <div
                          v-bind:class="{
                            'fl w-50': true,
                            'w-25-ns': index != 4
                          }"
                        >
                          <Photo :instance="photo" @open="openPhotoModal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="tc mt5 mb7">
                  <div>
                    <img
                      alt="Upload your photos"
                      src="@/assets/photo-stack.svg"
                      width="200"
                    />
                  </div>
                  <div>
                    <h1>Drop your photos here to upload</h1>
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
