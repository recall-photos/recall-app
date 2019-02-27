<template>
  <div class="container mx-auto lg: px-4">
    <div class="my-10 flex justify-between">
      <div class>
        <img alt="Recall Logo" class="w-2/3 cursor-pointer" src="../assets/svg/recall-symbol.svg">
      </div>
      <div
        class="inline-flex flex-row flex-no-wrap items-center self-center justify-around cursor-pointer text-sm font-mono"
      >
        <a
          href="https://recall.photos"
          class="mr-8 text-black no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >Features</a>
        <a
          href="https://recall.photos"
          class="mr-8 text-black no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >How it works</a>
        <a
          href="https://recall.photos"
          class="mr-8 text-black no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >Share our mission</a>
        <a
          href="https://recall.photos"
          class="btn font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >Sign in</a>
      </div>
    </div>
    <div class="mt-24">
      <div class="flex flex-row flex-wrap items-center content-center self-center justify-between">
        <div class="mt-24 w-1/2 pr-10 flex flex-col items-start content-start self-start">
          <h1 class="text-left text-black font-sans text-5xl font-bold">Recall
            <vue-typer
              :text='["happy memories","family trips","old friendships","loved ones", "your stories","special moments", "past adventures", "holidays abroad"]'
              :repeat="Infinity"
              :shuffle="true"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="smooth"
            ></vue-typer>
          </h1>
          <h2
            class="mt-12 text-left text-black font-sans text-2xl font-semi leading-tight"
          >The most secure, free, end-to-end encrypted and open-source alternative to Google Photos</h2>
          <p class="mt-4 text-left text-black font-sans text-base font-normal leading-normal opacity-75">
            Your new personal photo vault. We believe that photos are a true reflection of your life so you’ll want to keep them safe and private, storing them without any restrictions while retaining full ownership and privacy.
          </p>
          <div class="mt-12 float-left">
            <div v-if="authenticated">Logged in</div>
            <div v-else>
              <button @click="login" class="btn">
                <img
                  alt="Blockstack Logo"
                  class="w-8 ml-1 float-left"
                  src="../assets/blockstack.svg"
                >
                <span class="font-mono font-bold text-sm ml-4 pr-2">Start using it with Blockstack</span>
              </button>
            </div>
          </div>
        </div>
        <img
          class="w-1/2 -mt-6"
          alt="Recall illustration by "
          src="../assets/img/recall-opening.jpg"
        >
      </div>
    </div>
    <div class="pt-32">
      <div class="flex">
        <h2
          class="text-black font-sans text-2xl font-semi leading-tight"
        >Why you should use Recall?</h2>
      </div>
      <div class="mt-12">
        <Icon v-bind:iconItems="iconItems"></Icon>
      </div>
    </div>
    <div>
      <div class="mt-32">
        <Card v-bind:cardItems="cardItems"></Card>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
import Icon from "@/components/Icon.vue";
import { VueTyper } from "vue-typer";
import * as blockstack from "blockstack";

export default {
  name: "home",
  methods: {
    login() {
      const { origin } = window.location;
      blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, [
        "store_write",
        "publish_data"
      ]);
    }
  },
  data() {
    return {
      authenticated: this.$store.state.isAuthenticated,
      cardItems: [
        {
          id: 1,
          link: "https://recall.photos",
          image:
            "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          title: "What is our mission?",
          desc:
            "Recall wants to be an open-source alternative to Google Photos, where users retain the ownership and privacy of their photos forever.",
          action: "Read more on our website"
        },
        {
          id: 2,
          link: "https://github.com/blockstack/gaia",
          image:
            "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80",
          title: "How are your pictures stored?",
          desc:
            "Blockstack has developed Gaia, a decentralized high-performance storage system. In the future s3 and Dropbox will also be avaiable.",
          action: "Read the official documentation"
        },
        {
          id: 3,
          link: "https://www.youtube.com/watch?time_continue=181&v=7SmC7AuZNWY",
          image:
            "https://images.unsplash.com/photo-1527455505333-9d3ac7adf523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
          title: "What is Blockstack?",
          desc:
            "Blockstack provides key tools and infrastructure to developers that enable the usage of decentralized storage, authentication and identity.",
          action: "Watch a video about Blockstack"
        },
        {
          id: 4,
          link: "https://www.youtube.com/watch?v=WopvxEM7O84",
          image:
            "https://images.unsplash.com/photo-1501622549218-2c3ef86627cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80",
          title: "“How do I use Blockstack?”",
          desc:
            "First you need to download the Blockstack app at blockstack.org to access the decentralized internet and be able to use apps like Recall.",
          action: "Watch a walkthrough of Blockstack"
        }
      ],
      iconItems: [
        {
          icon_id: 1,
          icon_svg: require("../assets/svg/features/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 2,
          icon_svg: require("../assets/svg/features/simple.svg"),
          icon_title: "Simple to use",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 3,
          icon_svg: require("../assets/svg/features/open-source.svg"),
          icon_title: "Open source",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 4,
          icon_svg: require("../assets/svg/features/storage-lock.svg"),
          icon_title: "No storage lock-in",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 5,
          icon_svg: require("../assets/svg/features/search.svg"),
          icon_title: "Search your photos",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 6,
          icon_svg: require("../assets/svg/features/friends.svg"),
          icon_title: "Share with friends",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        }
      ]
    };
  },
  components: {
    Footer,
    VueTyper,
    Card,
    Icon
  }
};
</script>
