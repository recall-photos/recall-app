<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-container">
        <img v-bind:src="photoUrl" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PhotoModal",
  props: {
    photoUrl: String
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  overflow: scroll;
}

.modal-container {
  display: block;
  background-color: transparent;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  height: 100vh;
  text-align: center;
  overflow: scroll;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

img {
  max-width: 80%;
  max-height: 90%;
  margin-bottom: 40px;
  margin-top: 40px;
}
</style>
