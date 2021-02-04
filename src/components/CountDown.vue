<template>
  <div class="count-down">
    <div class="count-down__text">До окончания игры осталось </div>
    <div class="count-down__timer">{{ countDown }} секунд</div>

  </div>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    count: {
      type: Number,
      default: () => 5
    }
  },
  data() {
    return {
      countDown: 10
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.$emit('timeIsEnded')
      }
    }
  },
  created() {
    this.countDown = this.count;
    this.countDownTimer();
  }
};
</script>

<style lang="scss" scoped>
.count-down {
  display: flex;
  flex-direction: row;
  align-items: center;
  &__text {
    font-size: 20px;
    margin-right: 7px;
  }
  &__timer {
    min-width: 100px;
    font-size: 20px;
    padding: 3px 5px;
    border: 1px solid #2c3e50;
    background-color: #b1b1b1;
  }
}
</style>
