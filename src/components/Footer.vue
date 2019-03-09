<template>
  <div class="mt-32 pt-24 pb-16 bg-white p-8 border-purple-light border-t-2">
    <div class="container mx-auto text-left opacity-75 text-sm lg:px-4">
      <div class="flex justify-center items-start content-start sm:flex mb-4">
      <div class="sm:w-1/4 h-auto">
        <div class="font-mono font-bold text-grey-darkest mb-4">Recall</div>
        <ul class="list-reset leading-normal cursor-pointer">
          <li class="hover:text-purple-dark text-grey-darker mb-2">Sign In</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">Features</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">How to get started</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">Share our mission</li>
        </ul>
            <p class="mt-10 text-left text-grey text-sm opacity-75 hidden md:block">© Recall Photos</p>
      </div>
      <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
        <div class="font-mono font-bold text-grey-darkest mb-4">Blockstack</div>
        <ul class="list-reset leading-normal cursor-pointer">
          <li class="hover:text-purple-dark text-grey-darker mb-2">What is Blockstack?</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">Storage (Gaia)</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">App Mining</li>
        </ul>
      </div>
      <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
        <div class="font-mono font-bold text-grey-darkest mb-4">Support</div>
        <ul class="list-reset leading-normal cursor-pointer">
          <li class="hover:text-purple-dark text-grey-darker mb-2">FAQ</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">Support</li>
          <li class="hover:text-purple-dark text-grey-darker mb-2">Roadmap</li>
        </ul>
      </div>
      <div>
        <div class="mt-4 flex">
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
    </div>
  </div>
</template>