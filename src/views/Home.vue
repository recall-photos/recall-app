<template>
  <div>
    <div class="container mx-auto lg:px-4">
      <div class="my-10 flex justify-between">
        <div class>
          <img alt="Recall Logo" class="w-2/3 cursor-pointer" src="../assets/svg/recall-symbol.svg">
        </div>
        <div
          class="inline-flex flex-row flex-no-wrap items-center self-center justify-around cursor-pointer text-sm font-mono"
        >
          <a
            href="#features"
            class="mr-8 text-black no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            v-smooth-scroll
          >Features</a>
          <a
            href="#get-started"
            class="mr-8 text-black no-underline hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            v-smooth-scroll
          >How to get started</a>
          <a
            href="https://app.recall.photos"
            class="btn font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >Sign in</a>
        </div>
      </div>
      <div class="mt-24">
        <div
          class="flex flex-row flex-wrap items-center content-center self-center justify-between"
        >
          <div class="mt-24 w-1/2 pr-10 flex flex-col items-start content-start self-start">
            <!-- eslint-disable vue/no-v-html-->
            <!-- :text='["happy memories","family trips","old friendships", "your friends", "loved ones", "your stories","special moments", "past adventures", "holidays abroad"]' -->
            <h1 class="text-left text-black font-sans text-5xl font-bold">Recall
              <vue-typer
                text="testing"
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
              />
            </h1>
            <!-- eslint-enable -->
            <h2
              class="mt-12 text-left text-black font-sans text-2xl font-semi leading-tight"
            >The most secure, free, end-to-end encrypted and open-source alternative to Google Photos</h2>
            <p
              class="mt-4 text-left text-black font-sans text-base font-normal leading-normal opacity-75"
            >Your new personal photo vault. We believe that photos are a true reflection of your life so you’ll want to keep them safe and private, storing them without any restrictions while retaining full ownership and privacy.</p>
            <div class="mt-12">
              <div v-if="authenticated">Logged in</div>
              <div v-else class="flex flex-col items-start content-start self-stretch">
                <button @click="login" class="btn">
                  <img alt="Blockstack Logo" class="w-8 ml-1" src="../assets/svg/blockstack.svg">
                  <span class="font-mono font-bold text-sm ml-4 pr-2">Start using it with Blockstack</span>
                </button>
                <button
                  @click="window.open(
                  'https://testflight.apple.com/join/YuXc2asc',
                  '_blank'
                );"
                  class="mt-4 btn-alt"
                >
                  <img alt="iOS App Store Logo" class="w-8 ml-1" src="../assets/svg/apple.svg">
                  <span
                    class="font-mono font-bold text-sm ml-4 pr-2 text-grey-dark"
                  >Help us beta test our iOS app</span>
                </button>
              </div>
            </div>
          </div>
          <img
            class="w-1/2 rounded"
            alt="Recall illustration by "
            src="../assets/img/recall-opening.jpg"
          >
        </div>
      </div>
      <div id="features" class="pt-32 mt-24">
        <div class="flex flex-col items-start">
          <h2
            class="text-black font-sans text-4xl font-semi leading-tight"
          >Why you should use Recall</h2>
        </div>
        <div class="mt-16">
          <Icon v-bind:iconItems="iconItems"></Icon>
        </div>
      </div>
      <div id="get-started" class="mt-32 pt-24">
        <h2
          class="text-left text-black font-sans text-4xl font-semi leading-tight"
        >How to get started</h2>
        <div
          class="flex flex-row flex-wrap items-center content-center self-center justify-between"
        >
          <div class="w-1/2">
            <img
              class="w-4/5 mt-32 rounded"
              alt="Recall illustration by "
              src="../assets/img/recall-how.jpg"
            >
          </div>
          <div class="flex flex-col items-center w-1/2">
            <SmallCard v-bind:SmallCardItems="SmallCardItems"></SmallCard>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import SmallCard from "@/components/SmallCard.vue";
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
      ],
      SmallCardItems: [
        {
          card_id: 1,
          card_img: require("../assets/img/1.png"),
          card_title: "Create an account with Blockstack",
          card_paragraph:
            "To start using Recall, first you need to create an account with Blockstack. This is your personal identity on the new web. Learn more about it " +
            <a href="https://blockstack.org/">here</a> +
            "."
        },
        {
          card_id: 2,
          card_img: require("../assets/img/2.png"),
          card_title: "Authorise Recall to access your ID",
          card_paragraph:
            "After you have your ID, you will need to authorize Recall to write on your hub. Think of your hub as your personal and secure space that only you have access to."
        },
        {
          card_id: 3,
          card_img: require("../assets/img/3.png"),
          card_title: "Upload your images to Recall",
          card_paragraph:
            "All set! Upload your photos and they will be stored on the provider of your choice (by default Blockstack provides their own hub but you can change this later)."
        }
      ],
      TwitterCardItems: [
        {
          card_id: 1,
          card_svg: require("../assets/svg/features/private.svg"),
          card_title: "Create an account with Blockstack",
          card_paragraph:
            "When you start using Recall, first you will have to create your account, by generating a secret key and a password."
        },
        {
          card_id: 2,
          card_svg: require("../assets/svg/features/private.svg"),
          card_title: "Authorise Recall to access your ID",
          card_paragraph:
            "When you start using Recall, first you will have to create your account, by generating a secret key and a password."
        },
        {
          card_id: 3,
          card_svg: require("../assets/svg/features/private.svg"),
          card_title: "Upload your images onto Recall",
          card_paragraph:
            "When you start using Recall, first you will have to create your account, by generating a secret key and a password."
        },
        {
          card_id: 4,
          card_svg: require("../assets/svg/features/private.svg"),
          card_title: "Upload your images onto Recall",
          card_paragraph:
            "When you start using Recall, first you will have to create your account, by generating a secret key and a password."
        }
      ]
    };
  },
  components: {
    Footer,
    VueTyper,
    SmallCard,
    Icon
  }
};
</script>
