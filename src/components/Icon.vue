<template>
  <div class="flex flex-wrap justify-between">
    <div
      class="inline-flex items-start max-w-xs text-left mt-12"
      v-for="item in iconItems"
      :key="item.icon_id"
    >
      <img alt="svg icon" id="svg-color" class="w-16" :src="item.icon_svg">
      <div class="ml-4 flex flex-col">
        <h3
          id="title-color"
          class="title-color font-semibold learing-tight text-xl"
        >{{ item.icon_title }}</h3>
        <p class="mt-3 font-regular leading-normal text-base opacity-75">{{ item.icon_paragraph }}</p>
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

<style lang="scss">
#title-color {
  color: red;
}
#svg-color {
  stroke: red;
  color: red;
  fill: red;
}
</style>