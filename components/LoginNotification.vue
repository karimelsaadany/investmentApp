<template>
  <div>
    <div class="loginNotification flex px-9 py-5 justify-end">
      <h1 class="font-bold text-xl absolute">{{ selectedHeading }}</h1>
      <div class="user w-36 flex border justify-around py-1">
        <img
          src="~/assets/images/profile_pic.jpeg"
          alt=""
          class="w-5 h-6 rounded-full"
        />
        <span class="">Thomas Miller</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 my-auto ml-4 mr-2"
        viewBox="0 0 18 18"
        fill="currentColor"
      >
        <path
          d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
        />
      </svg>
      <img
        src="~/assets/images/flag.png"
        alt=""
        class="rounded-full w-5 h-5 my-auto ml-2"
      />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  computed: {
    // storing selectedLink state in store
    selectedHeading() {
      return this.$store.state.layout;
    },
  },
};
</script>

<style>
.loginNotification h1 {
  color: #063847;
  left: 20rem;
}
</style>
