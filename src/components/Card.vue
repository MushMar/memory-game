<template>
  <div>
    <div
      v-if="!item.active"
      :class="['game-item', { 'equal-card': item.equal }]"
      @click="toggleItem(keyId, item.uid)"
    ></div>
    <div
      v-else
      :class="['game-item active-card', { 'equal-card': item.equal }]"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    keyId: {
      type: [Number, String],
      default: () => null
    }
  },
  methods: {
    toggleItem(key, uid) {
      this.$emit("toggleItem", { key: key, uid: uid });
    }
  }
};
</script>

<style lang="scss" scoped>
.game-item {
  width: 100%;
  height: 80px;
  border: 1px solid #2c3e50;
  background-color: #b1b1b1;
  transition: all .7s;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    transition: all .7s;
    opacity: 0;
    transform: rotateY(180deg);
  }
  &.active-card {
    box-shadow: #2c3e50;
    transform: rotateY(180deg);
    span {
      opacity: 1;
    }
  }
  &.equal-card {
    background-color: #ffffff;
    span {
      opacity: 0;
    }
  }
}
</style>
