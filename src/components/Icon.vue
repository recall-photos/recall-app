<template>
  <div class="flex justify-around">
    <div
      class="inline-flex items-start max-w-xs text-left mt-12"
      v-for="item in iconItems"
      :key="item.icon_id"
    >
      <img alt="svg icon" class="w-20" :src="item.icon_svg">
      <div class="ml-2 flex flex-col">
        <h3 class="font-semibold learing-tight text-xl">{{ item.icon_title }}</h3>
        <p class="mt-4 font-regular leading-normal text-base opacity-75">{{ item.icon_paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconItems: {
      type: Array
    }
  }
};
</script>