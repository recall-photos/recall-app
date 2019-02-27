<template>
  <div class="mt-12 flex flex-col">
    <div
      v-for="item in SmallCardItems"
      :key="item.card_id"
      class="mt-8 max-w-sm w-full flex flex-row p-8 border-r border-b border-l border-grey-light border-t bg-white rounded"
    >
      <img
        class="w-10 h-10 rounded-full mr-4"
        :src="item.card_svg"
      >
      <div class="flex flex-col justify-start items-start content-start text-left">
        <h3 class="font-semibold learing-tight text-xl">{{ item.card_title }}</h3>
        <p
          class="mt-2 font-regular leading-normal text-base opacity-75"
        >{{ item.card_paragraph }}</p>
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
