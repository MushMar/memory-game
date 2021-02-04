<template>
  <div class="home m-container">
    <div class="home__actions">
      <Start v-if="!start" @click="startGame()">{{ endGameTitle ?'Restart Game' : 'Начать игру'}}</Start>
      <CountDown v-else :count="180" @timeIsEnded="endGame()" />
    </div>
    <div class="cards-box">
      <div class="cards-box__text" v-if="endGameTitle">{{ endGameTitle }}</div>
      <Card
        v-for="(item, key) in cards"
        :key="key"
        :item="item"
        :keyId="key"
        @toggleItem="toggleItem"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import CountDown from "@/components/CountDown";
import Start from "@/components/Start";
export default {
  name: "Home",
  components: {
    Card,
    CountDown,
    Start
  },
  data() {
    return {
      endGameTitle: '',
      start: false,
      cards: [],
      count: 0,
      firstSelectedCard: null,
      secondSelectedCard: null
    };
  },
  created() {
    this.cards = this.$store.getters["getCards"];
    this.shuffle();
  },
  methods: {
    handleContent(event) {
      this.cards.map(val => {
        val.active = event;
      });
    },
    someContent() {
      console.log(this.cards);
      this.cards.every(val => val.equal === true ? this.endGameTitle = "Your Win": this.endGameTitle = "");
    },
    startGame() {
      this.endGameTitle = ""
      this.start = !this.start;
      this.handleContent(true);
      setTimeout(() => {
        this.handleContent(false);
      }, 5000);
      this.shuffle();
    },
    resetSelectedCards() {
      this.firstSelectedCard = null;
      this.secondSelectedCard = null;
    },
    endGame() {
      this.endGameTitle = "Game over"
      this.start = !this.start;
      this.cards.map(val => {
        val.active = false;
        val.equal = false;
      });
      // this.cards = this.$store.getters["getCards"];
      setTimeout(() => {
        this.resetSelectedCards();
      }, 2000);
      this.shuffle();
    },
    shuffle() {
      this.cards = this.cards.sort(() => Math.random() - 0.5);
    },
    equalCards() {
      return this.firstSelectedCard.uid === this.secondSelectedCard.uid;
    },
    toggleItem(data) {
      if (this.start) {
        this.count++;
        if (this.count < 3) {
          this.cards[data.key].active = true;
          if (this.firstSelectedCard) {
            this.secondSelectedCard = {
              uid: data.uid,
              key: data.key
            };
            if (this.equalCards()) {
              this.cards[this.firstSelectedCard.key].equal = true;
              this.cards[this.secondSelectedCard.key].equal = true;
              this.resetSelectedCards();
              this.someContent()

              this.count = 0;
            } else {
              setTimeout(() => {
                this.cards[this.firstSelectedCard.key].active = false;
                this.cards[this.secondSelectedCard.key].active = false;
                this.resetSelectedCards();
                this.count = 0;
              }, 1000);
            }
          } else {
            this.firstSelectedCard = {
              uid: data.uid,
              key: data.key
            };
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__actions {
    display: flex;
    justify-content: flex-end;
  }
  .cards-box {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    margin: 10px auto 0;
    &__text {
      position: absolute;
      width: 101%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff0000;
      font-size: 45px;
      background-color: #ffffff;
      animation-name: example;
      animation-duration: 2s;
      opacity: .9;
    }
    @keyframes example {
      from {
        opacity: 0;
      }
      to {
        opacity: .9;
      }
    }
  }
}
</style>
