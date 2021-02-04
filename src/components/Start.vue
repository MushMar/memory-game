<template>
  <button
    @click="handleClick()"
    :class="['button', `button__${type}`, { 'is-disabled': btnDisabled }]"
    :disabled="btnDisabled"
  >
    <slot v-if="$slots.default">
      <span></span>
    </slot>
  </button>
</template>

<script>
export default {
  name: "StartBtn",
  props: {
    type: {
      type: String,
      default: () => "default"
    },
    btnDisabled: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 5px 18px;
  cursor: pointer;
  outline: none;
  border: none;
  &.is-disabled {
    opacity: 0.8;
    pointer-events: none;
  }
  &:hover {
    opacity: 0.8;
  }
  &__default {
    font-size: 18px;
    color: #2c3e50;
    background-color: #b1b1b1;
    border: 1px solid #2c3e50;
  }
}
</style>
