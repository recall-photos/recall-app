<template>
  <div class="wrapper">
    <div class="container" v-for="item in cardItems" :key="item.id">
      <a class="card-link" :href="item.link" target="_blank" rel="noopener noreferrer">
        <article class="card">
          <img class="card-image" :src="item.image">
          <div class="article-details">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-description">{{ item.desc }}</p>
            <p class="card-action">{{ item.action }}</p>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardItems: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");

$text: #777;
$black: #111111;
$white: #fff;
$purple: #5e2ca5;
$border: #ebebeb;
$shadow: rgba(0, 0, 0, 0.2);

@mixin transition($args...) {
  transition: $args;
}

.container {
  font-family: "Roboto", sans-serif;
  text-rendering: optimizeLegibility;
  width: auto;
  height: auto;
  &:hover .card-action {
    text-decoration: underline;
    color: $purple;
  }
}

.card {
  text-align: left;
  line-height: 1.4;
  background: $white;
  box-shadow: 0 0.1875rem 1.5rem $shadow;
  border-radius: 0.375rem;
  overflow: hidden;
  min-width: auto;
}

.card-link {
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover .card-title {
    @include transition(color 0.3s ease);
    color: $purple;
  }
  &:hover .card-image {
    @include transition(opacity 0.3s ease);
    opacity: 0.9;
  }
}

.card-image {
  @include transition(opacity 0.3s ease);
  display: block;
  width: 100%;
  object-fit: cover;
}

.article-details {
  padding: 2rem;
}

.card-title {
  @include transition(color 0.3s ease);
  font-size: 1rem;
  line-height: 1.4;
  color: $black;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
}

.card-description {
  font-size: 0.8rem;
  line-height: 1.4;
  font-weight: 400;
}

.card-action {
  font-size: 0.8rem;
  line-height: 1;
  margin: 1.125rem 0 0 0;
  padding: 1.125rem 0 0 0;
  border-top: 0.0625rem solid $border;
  font-weight: 400;
  @media (max-width: 1024px) {
    text-decoration: underline;
    color: $purple;
  }
}

@supports (display: grid) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px;
    grid-auto-rows: 200px;
    align-items: center;
    justify-self: center;
  }

  .card-image {
    height: 100%;
  }

  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 1079px) {
    .wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 35px;
      grid-auto-rows: 27rem;
      align-items: center;
      justify-self: center;
    }

    .card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
    }
  }

  @media (max-width: 767px) {
    .wrapper {
      // max-width: 378px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 35px;
      grid-auto-rows: 27rem;
      align-items: center;
      justify-content: center;
    }

    .card {
      grid-template-columns: auto;
      grid-template-rows: 12rem 1fr;
      margin-top: 4rem;
    }
  }
}
</style>
