<template>
  <div class="mt-12 flex flex-col">
    <div
      v-for="item in SmallCardItems"
      :key="item.card_id"
      class="mt-8 max-w-md w-full flex flex-row items-start p-10 border-r border-b border-l border-grey-light border-t bg-white rounded"
    >
      <div class="w-1/6 mr-5">
        <img class :src="item.card_img">
      </div>
      <div class="w-5/6 flex flex-col justify-center items-start text-left">
        <h3 class="font-semibold learing-tight text-xl">{{ item.card_title }}</h3>
        <p class="mt-2 font-regular leading-normal text-base opacity-75">{{ item.card_paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    SmallCardItems: {
      type: Array
    }
  }
};
</script>
