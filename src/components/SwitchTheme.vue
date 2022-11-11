<template>
  <input class="sr-only" id="theme" type="checkbox" v-model="checked" />
  <label
    :class="{
      'border-black bg-trout': $store.state.isDarkMode,
      'bg-white': !$store.state.isDarkMode,
    }"
    class="mb-14 flex h-8 w-18 cursor-pointer justify-between rounded-2xl border p-0.75 transition-all"
    for="theme"
  >
    <img
      :class="{
        'translate-x-0': !$store.state.isDarkMode,
        'translate-x-8': $store.state.isDarkMode,
      }"
      class="mx-1 transition-all"
      :src="iconUrl"
      alt=""
    />
    <span
      :class="{
        '-translate-x-10 bg-tuna': $store.state.isDarkMode,
        'translate-x-0 bg-mischka': !$store.state.isDarkMode,
      }"
      class="block h-6 w-6 rounded-full transition-all"
    ></span>
  </label>
</template>

<script>
import iconMoon from "../assets/icons/moon.svg";
import iconSun from "../assets/icons/sun.svg";

export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    changeTheme() {
      this.$store.commit("setDarkMode", this.checked);
    },
  },
  computed: {
    iconUrl() {
      if (this.$store.state.isDarkMode) return iconMoon;
      else return iconSun;
    },
  },
  watch: {
    checked() {
      this.changeTheme();
    },
  },
};
</script>

<style></style>
