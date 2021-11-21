<template>
  <div class="sidebar w-1/6 bg-white ml-2 h-screen">
    <!-- Logo -->
    <div>
      <img
        src="~/assets/images/logo.png"
        alt=""
        class="w-30 h-14 ml-5 mt-5 mb-6"
      />
    </div>

    <!-- First Navigation List -->
    <div>
      <ul>
        <li
          class="flex py-2"
          @click="headingChanger('Cockpit') ,selectedLink = 'cockpit'"
          :class="{ active: selectedLink === 'cockpit' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          <NuxtLink to="/" no-prefetch class="ml-2">Cockpit</NuxtLink>
        </li>
        <li
          class="flex py-2"
          @click="headingChanger('Investment Opportunities'), selectedLink = 'investment'"
          :class="{ active: selectedLink === 'investment' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <NuxtLink to="/investment" class="ml-2"
            >Investment Opportunities</NuxtLink
          >
        </li>
        <li
          class="flex py-2"
          @click="headingChanger('My Investment'), selectedLink = 'myInvestment'"
          :class="{ active: selectedLink === 'myInvestment' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <NuxtLink to="/" no-prefetch class="ml-2">My Investments</NuxtLink>
        </li>
      </ul>
    </div>

    <hr class="w-52 my-8 mx-auto" />

    <!-- Second Navigation List -->
    <div class>
      <ul>
        <li
          class="flex py-2"
          @click="headingChanger('Knowledge Center'), selectedLink = 'knowledge'"
          :class="{ active: selectedLink === 'knowledge' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <NuxtLink to="/" no-prefetch class="ml-2">Knowledge Center</NuxtLink>
        </li>
        <li
          class="flex py-2"
          @click="headingChanger('Venture Pool'), selectedLink = 'venturePool'"
          :class="{ active: selectedLink === 'venturePool' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <NuxtLink to="/" no-prefetch class="ml-2">Venture Pool</NuxtLink>
        </li>
        <li
          class="flex py-2"
          @click="headingChanger('Fee Model'), selectedLink = 'feeModel'"
          :class="{ active: selectedLink === 'feeModel' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-5"
            fill="solid"
            viewBox="0 0 26 26"
            stroke="#063847"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <NuxtLink to="/" no-prefetch class="ml-2">Fee Model</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Recommendation Box -->
    <div class="recommendation mx-auto mt-5 w-60 border-2 rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mx-auto mt-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <p class="text-white text-center font-light mt-3">Recommend primeCROWD</p>
      <div class="flex justify-center mt-2 mb-5">
        <a href="#" class="bg-white py-1 px-4 rounded-md">Invite Friends</a>
      </div>
    </div>

    <!-- Contact Box -->
    <div class="contact mx-auto w-60 border-2 rounded-md mt-3">
      <h4 class="text-center font-bold mt-1 mb-2">Need help?</h4>
      <p class="text-center mb-1">+436641909445</p>
      <p class="text-center mb-2">support@prime-crowd.com</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLink: "cockpit",
    };
  },
  methods: {
    headingChanger(title){
      this.$store.commit('CHANGE_NAV_LAYOUT', title)
    }
  }
};
</script>

<style>
.sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
}

.sidebar li {
    color: #063847;
}

.sidebar li:hover {
    color: white;
    background-color: #063847;
    cursor: pointer;
}

.sidebar li:hover svg {
    fill: white;
    stroke: white
}

.sidebar .recommendation {
  background-color: #0b4658;
  color: #063847;
}

.sidebar .contact {
  color: #063847;
  background-color: #cce1ec;
}

.sidebar .active {
  color: white;
  background-color: #063847;
}

.sidebar .active svg {
  fill: white;
  stroke: white;
}
</style>
