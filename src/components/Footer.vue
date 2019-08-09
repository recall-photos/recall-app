<template>
  <div class="mt-32 pt-24 pb-16 bg-white p-8 border-purple-light border-t-2">
    <div class="container mx-auto text-left opacity-75 text-sm lg:px-4">
      <div
        class="flex flex-col justify-center items-start content-start md:flex-row mb-4"
      >
        <div class="sm:w-1/4 h-auto">
          <div class="font-mono font-bold text-grey-darkest mb-4">Recall</div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="#start"
                >Sign In</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="#features"
                >Features</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="#get-started"
                >How to get started</a
              >
            </li>
          </ul>
          <p
            class="mt-10 text-left text-grey text-sm opacity-75 hidden md:block"
          >
            © Recall Photos
          </p>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="font-mono font-bold text-grey-darkest mb-4">
            Blockstack
          </div>
          <ul class="list-reset leading-normal cursor-pointer">
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="https://youtu.be/7SmC7AuZNWY"
                target="_blank"
                rel="noopener noreferrer"
                >What is Blockstack?</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="https://github.com/blockstack/gaia"
                target="_blank"
                rel="noopener noreferrer"
                >Storage (Gaia)</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="https://app.co/mining/apps"
                target="_blank"
                rel="noopener noreferrer"
                >App Mining</a
              >
            </li>
          </ul>
        </div>
        <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div class="font-mono font-bold text-grey-darkest mb-4">Support</div>
          <ul class="list-reset leading-normal cursor-pointer">
            <!-- <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="mailto:support@recall.photos"
                target="_blank"
                rel="noopener noreferrer"
              >FAQ</a>
            </li>-->
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="mailto:support@recall.photos"
                target="_blank"
                rel="noopener noreferrer"
                >Contact</a
              >
            </li>
            <li class="mb-2">
              <a
                class="link hover:text-purple-dark text-grey-darker"
                href="https://trello.com/b/EMKJ0T7f/recall-roadmap"
                target="_blank"
                rel="noopener noreferrer"
                >Roadmap</a
              >
            </li>
          </ul>
        </div>
        <div>
          <transition appear name="fade">
            <div class="mt-12 md:mt-4 flex">
              <a
                class="opacity-75 hover:fill-purple inline-block w-8 mr-4"
                href="https://github.com/recall-photos"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg
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
                class="opacity-75 hover:fill-purple inline-block w-8 mr-4"
                href="https://twitter.com/recallphotos"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <img
                  alt="Twitter Icon"
                  class="w-14"
                  src="../assets/svg/footer/twitter.svg"
                />
              </a>
              <a
                class="opacity-75 hover:fill-purple inline-block w-8 mr-4"
                href="https://chat.donesunday.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
              >
                <img
                  alt="Twitter Icon"
                  class="w-8"
                  src="../assets/svg/footer/discord.svg"
                />
              </a>
              <a
                class="opacity-75 hover:fill-purple inline-block w-8 mr-4"
                href="https://www.producthunt.com/posts/recall-3"
                target="_blank"
                rel="noopener noreferrer"
                title="Product Hunt"
              >
                <svg
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                >
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                  ></path>
                  <path
                    d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
                    fill="#FFF"
                  ></path>
                </svg>
              </a>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
