<template>
  <div class="container mx-auto lg: px-4">
    <div class="my-10 flex justify-between">
      <div class>
        <img alt="Recall Logo" class="cursor-pointer" src="../assets/logo.svg">
      </div>
      <div class="flex justify-between cursor-pointer font-mono">
        <a href="https://recall.photos" target="_blank" rel="noopener noreferrer">Our mission</a>
        <a href="https://recall.photos" target="_blank" rel="noopener noreferrer">How it works</a>
        <a href="https://recall.photos" target="_blank" rel="noopener noreferrer">Who we are</a>
      </div>
    </div>
    <div class="mt-24">
      <div class="flex flex-row flex-wrap items-center content-center self-center justify-between">
        <div class="mt-12 w-1/2 flex flex-col items-start content-start self-start">
          <h1 class="text-left text-black font-sans text-5xl font-normal">Recall your memories</h1>
          <h2
            class="mt-12 text-left text-black font-sans text-3xl font-semi leading-tight"
          >The most secure, free, end-to-end encrypted and open-source alternative to Google Photos</h2>
          <p class="mt-4 text-left text-black font-sans text-base font-normal leading-normal">
            Recall is your new personal photo vault. A completely free, encrypted and open-source solution to store and organize your photos with no restrictions while retaining full ownership and privacy.
            We believe that photos are a true reflection of your life so you’ll want to keep them safe and private.
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
                <span class="font-mono font-bold text-sm ml-4 pr-2">Sign in with Blockstack</span>
              </button>
            </div>
          </div>
        </div>
        <img class="w-1/2" alt="Recall illustration by " src="../assets/img/recall-opening.jpg">
      </div>
    </div>
    <div class="pt-24">
      <div class="flex">
        <h2
          class="text-left text-black justify-start font-sans text-2xl font-semi leading-tight"
        >Why you should use Recall?</h2>
      </div>
      <div class="mt-24 justify-center">
        <icon v-bind:iconItems="iconItems"></icon>
      </div>
    </div>
    <div>
      <div class="mt-32">
        <card v-bind:cardItems="cardItems"></card>
      </div>
    </div>
    <div>
      <div class="mt5 mt6-ns mb4 ph5 center">
        <a
          class="link o-80 near-black hover-purple dib h2 w2 mr3"
          href="https://github.com/recall-photos/recall-app"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"
            ></path>
          </svg>
        </a>
        <a
          class="link o-80 near-black hover-purple dib w2 mr3"
          href="https://twitter.com/recallphotos"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="1.414"
          >
            <path
              d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
              fill-rule="nonzero"
            ></path>
          </svg>
        </a>
        <a
          class="link o-80 hover-purple dib w2"
          href="https://www.producthunt.com/posts/recall-3"
          target="_blank"
          rel="noopener noreferrer"
          title="Product Hunt"
        >
          <svg
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            fill-rule="evenodd"
          >
            <path
              d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
              fill="#111111"
            ></path>
            <path
              d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
              fill="#FFF"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Icon from "@/components/Icon.vue";
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
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 2,
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 3,
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 4,
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 5,
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        },
        {
          icon_id: 6,
          icon_svg: require("../assets/svg/private.svg"),
          icon_title: "Private and free",
          icon_paragraph:
            "No single point of failure, enjoy a combination of the best offerings out there and get notified of major changes and new technologies in the industry."
        }
      ]
    };
  },
  components: {
    Card,
    Icon
  }
};
</script>
