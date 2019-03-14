<template>
  <div id="start">
    <div class="container mx-auto px-8 lg:px-4">
      <div class="my-10 flex justify-between">
        <transition appear name="fade">
          <div class>
            <img
              alt="Recall Logo"
              class="w-2/3 cursor-pointer"
              src="../assets/svg/recall-symbol.svg"
            />
          </div>
        </transition>
        <transition appear name="fade">
          <div
            class="inline-flex flex-row flex-no-wrap items-center self-center justify-around cursor-pointer text-sm font-mono"
          >
            <a
              href="#features"
              class="mr-8 text-black no-underline hover:underline hover:text-purple-dark hidden lg:block"
              target="_blank"
              rel="noopener noreferrer"
              v-smooth-scroll
              >Features</a
            >
            <a
              href="#get-started"
              class="mr-8 text-black no-underline hover:underline hover:text-purple-dark hidden lg:block"
              target="_blank"
              rel="noopener noreferrer"
              v-smooth-scroll
              >How to get started</a
            >
            <a class="btn font-bold hidden lg:block" @click="login">Sign in</a>
          </div>
        </transition>
      </div>
      <div class="mt-8 md:mt-24">
        <div
          class="flex flex-col items-center content-center self-center justify-between md:flex-row"
        >
          <div
            class="pr-10 flex flex-col items-start content-start self-start md:mt-24 md:w-1/2 xl:mt-32 xl:pt-12"
          >
            <h1
              class="text-left text-black font-sans font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              Recall
              <vue-typer
                :text="typerItems"
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
            <h2
              class="text-left text-black font-sans font-semi leading-tight mt-8 text-base lg:mt-12 lg:text-2xl"
            >
              The most secure, free, end-to-end encrypted and open-source
              alternative to Google Photos
            </h2>
            <p
              class="mt-4 text-left text-black font-sans font-normal leading-normal opacity-75 text-sm md:text-base"
            >
              Your new personal photo vault. We believe that photos are a true
              reflection of your life so you’ll want to keep them safe and
              private, storing them without any restrictions while retaining
              full ownership and privacy.
            </p>
            <transition appear name="fadeLeft">
              <div class="mt-6 lg:mt-12">
                <div v-if="authenticated">Logged in</div>
                <div
                  v-else
                  class="flex flex-col items-start content-start self-stretch"
                >
                  <button @click="login" class="btn">
                    <img
                      alt="Blockstack Logo"
                      class="ml-1 w-5 hidden md:block lg:w-8"
                      src="../assets/svg/blockstack.svg"
                    />
                    <span
                      class="font-mono font-bold pt-2 pb-2 lg:pt-0 lg:pb-0 text-xs pr-3 md:ml-4 md:pr-5 lg:text-sm"
                      >Start using it with Blockstack</span
                    >
                  </button>
                  <button
                    @click="
                      window.open(
                        'https://testflight.apple.com/join/YuXc2asc',
                        '_blank'
                      )
                    "
                    class="mt-4 btn-alt pr-8"
                  >
                    <img
                      alt="iOS App Store Logo"
                      class="ml-1 w-5 hidden md:block lg:w-8"
                      src="../assets/svg/apple.svg"
                    />
                    <span
                      class="text-grey-dark font-mono font-bold pt-2 pb-2 lg:pt-0 lg:pb-0 text-xs md:ml-4 md:pr-2 lg:text-sm"
                      >Help us beta test our iOS app</span
                    >
                  </button>
                </div>
              </div>
            </transition>
          </div>
          <transition appear name="fade">
            <img
              class="rounded mt-12 md:mt-24 md:w-1/2"
              alt="Recall illustration by "
              src="../assets/img/recall-opening.jpg"
            />
          </transition>
        </div>
      </div>
      <div id="features" class="mt-24 md:pt-32">
        <div class="flex flex-col items-start">
          <h2
            class="text-middle md:text-left text-black font-sans font-semi leading-tight text-2xl md:text-3xl lg:text-4xl"
          >
            Why you should use Recall
          </h2>
        </div>
        <div class="mt-16">
          <Icon v-bind:iconItems="iconItems"></Icon>
        </div>
      </div>
      <div id="get-started" class="mt-24 md:pt-32">
        <h2
          class="text-middle md:text-left text-black font-sans font-semi leading-tight text-2xl md:text-3xl lg:text-4xl"
        >
          How to get started
        </h2>
        <div
          class="flex flex-col items-center content-center self-center justify-between md:flex-row"
        >
          <div
            class="md:w-1/2"
            v-scroll-reveal="{ delay: 250, distance: '5%' }"
          >
            <img
              class="w-3/4 mt-24 md:mt-32 md:-ml-12"
              alt="Recall illustration by "
              src="../assets/img/recall-how.jpg"
            />
          </div>
          <div class="flex flex-col items-center md:w-1/2">
            <SmallCard v-bind:smallCardItems="smallCardItems"></SmallCard>
            <a
              @click="$modal.show('quickstart-video')"
              class="mt-10 text-sm text-black no-underline hover:underline hover:text-purple-dark opacity-75 cursor-pointer hidden lg:block"
              rel="noopener noreferrer"
              >Watch how easy the process is from start to finish</a
            >
            <modal
              name="quickstart-video"
              :adaptive="true"
              minWidth="800"
              minHeight="525"
            >
              <div
                class="flex flex-col justify-center content-center items-center self-center"
              >
                <vue-plyr>
                  <video
                    src="../assets/video/recall-demo.mp4"
                    id="player"
                    controls
                    loop="true"
                    autoplay="true"
                    quality="large"
                    style="max-width: 800px"
                  />
                </vue-plyr>
                <button
                  @click="$modal.hide('quickstart-video')"
                  class="btn mt-4 font-bold"
                >
                  Back to page
                </button>
              </div>
            </modal>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import * as blockstack from "blockstack";

import Footer from "@/components/Footer.vue";
import SmallCard from "@/components/SmallCard.vue";
import Icon from "@/components/Icon.vue";

import { VueTyper } from "vue-typer";
import "vue-plyr/dist/vue-plyr.css";

import Private from "../assets/svg/features/private.svg";
import Simple from "../assets/svg/features/simple.svg";
import OpenSource from "../assets/svg/features/open-source.svg";
import Storage from "../assets/svg/features/storage-lock.svg";
import Search from "../assets/svg/features/search.svg";
import Friends from "../assets/svg/features/friends.svg";

import NumberOne from "../assets/img/1.png";
import NumberTwo from "../assets/img/2.png";
import NumberThree from "../assets/img/3.png";

export default {
  name: "home",
  methods: {
    login() {
      const { origin } = window.location;
      blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, [
        "store_write",
        "publish_data"
      ]);
    },
    show() {
      this.$modal.show("quickstart-video");
    },
    hide() {
      this.$modal.hide("quickstart-video");
    }
  },
  data() {
    return {
      authenticated: this.$store.state.isAuthenticated,
      typerItems: [
        "happy memories",
        "family trips",
        "old friendships",
        "your friends",
        "loved ones",
        "your stories",
        "special moments",
        "past adventures",
        "holidays abroad"
      ],
      iconItems: [
        {
          icon_id: 1,
          icon_opacity: "opacity: 1;",
          icon_color: "color: #111111",
          icon_svg: Private,
          icon_title: "Private and free",
          icon_paragraph:
            "No one but you has access to your photos. Choose where to store your photos or use the free space Blockstack provides."
        },
        {
          icon_id: 2,
          icon_opacity: "opacity: 1",
          icon_color: "color: #111111",
          icon_svg: Simple,
          icon_title: "Simple to use",
          icon_paragraph:
            "It’s extremely simple to use our apps, both on desktop and mobile. Login via Blockstack auth and start uploading your photos."
        },
        {
          icon_id: 3,
          icon_opacity: "opacity: 1",
          icon_color: "color: #111111",
          icon_svg: OpenSource,
          icon_title: "Open source",
          icon_paragraph:
            "All our code is open sourced on Github. You can review how we treat your photos and contribute to future features."
        },
        {
          icon_id: 4,
          icon_opacity: "opacity: 1",
          icon_color: "color: #111111",
          icon_svg: Storage,
          icon_title: "No storage lock-in",
          icon_paragraph:
            "Change your storage provider at any time. You will never lose your photos even if Recall stops working tomorrow."
        },
        {
          icon_id: 5,
          icon_opacity: "opacity: 0.5",
          icon_color: "color: grey;",
          icon_svg: Search,
          icon_title: "Search your photos",
          icon_paragraph:
            "You will be able to search your photos by location, time and other data. Wherever you are, Recall is available."
        },
        {
          icon_id: 6,
          icon_opacity: "opacity: 0.5",
          icon_color: "color: grey;",
          icon_svg: Friends,
          icon_title: "Share with friends",
          icon_paragraph:
            "Soon you will be able to share your photos with others, without losing any of the privacy benefits offered by Recall."
        }
      ],
      smallCardItems: [
        {
          card_id: 1,
          card_img: NumberOne,
          card_title: "Create an account with Blockstack",
          card_paragraph: `To start using Recall, first you need to create an account with Blockstack. This is your personal identity on the new web. Learn more about it <a href="https://blockstack.org/">here</a>.`
        },
        {
          card_id: 2,
          card_img: NumberTwo,
          card_title: "Authorise Recall to access your ID",
          card_paragraph:
            "After you have your ID, you will need to authorize Recall to write on your hub. Think of your hub as your personal and secure space that only you can access."
        },
        {
          card_id: 3,
          card_img: NumberThree,
          card_title: "Upload your images to Recall",
          card_paragraph:
            "All set! Upload your photos and they will be stored on the provider of your choice (by default Blockstack provides their own hub but you can change this later)."
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
