<template>
  <div class="flex w-full flex-col">
    <OutputAreaHistory />
    <OutputAreaResult />
  </div>
</template>

<script>
import OutputAreaHistory from "./OutputAreaHistory";
import OutputAreaResult from "./OutputAreaResult";

export default {
  components: { OutputAreaHistory, OutputAreaResult },
};
</script>

<style></style>
