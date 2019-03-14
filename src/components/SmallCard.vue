<template>
  <div class="mt-12 flex flex-col">
    <div
      v-for="item in smallCardItems"
      :key="item.card_id"
      class="mt-8 max-w-md w-full flex flex-row items-start p-4 border-r border-b border-l border-grey-light border-t bg-white rounded md:p-6 lg:p-10"
    >
      <div class="w-1/5 mr-3 md:mr-5" v-scroll-reveal="{ delay: 500, distance: '25%' }">
        <img class :src="item.card_img">
      </div>
      <div class="w-4/5 md:w-5/6 flex flex-col justify-center items-start text-left">
        <h3
          class="font-semibold leading-tight text-lg pr-12 lg:pr-0 md:text-xl"
        >{{ item.card_title }}</h3>
        <p class="mt-2 font-regular leading-normal text-base opacity-75">{{ item.card_paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallCardItems: {
      type: Array
    }
  }
};
</script>
