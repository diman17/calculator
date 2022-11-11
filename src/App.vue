<template>
  <div class="flex w-93.75 flex-col items-center bg-porcelain px-5 py-4">
    <SwitchTheme />
    <OutputArea />
  </div>
</template>

<script>
import SwitchTheme from "./components/SwitchTheme";
import OutputArea from "./components/OutputArea";

export default {
  components: {
    SwitchTheme,
    OutputArea,
  },
};
</script>

<style></style>
