<template>
  <button class="p-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "PButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    required: false,
    type: String,
    default: "default",
  },
  size: {
    required: false,
    type: String,
    default: "default",
  },
});
const buttonType = computed(() => "p-button--" + props.type);
const buttonSize = computed(() => "p-button--" + props.size);
</script>
