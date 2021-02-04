import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        uid: 1,
        title: "А",
        active: false,
        equal: false
      },
      {
        id: 2,
        uid: 2,
        title: "Б",
        active: false,
        equal: false
      },
      {
        id: 3,
        uid: 3,
        title: "В",
        active: false,
        equal: false
      },
      {
        id: 4,
        uid: 4,
        title: "Г",
        active: false,
        equal: false
      },
      {
        id: 5,
        uid: 5,
        title: "Д",
        active: false,
        equal: false
      },
      {
        id: 6,
        uid: 6,
        title: "Е",
        active: false,
        equal: false
      },
      {
        id: 7,
        uid: 7,
        title: "Ж",
        active: false,
        equal: false
      },
      {
        id: 8,
        uid: 8,
        title: "З",
        active: false,
        equal: false
      },
      {
        id: 9,
        uid: 9,
        title: "И",
        active: false,
        equal: false
      },
      {
        id: 10,
        uid: 10,
        title: "К",
        active: false,
        equal: false
      },
      {
        id: 11,
        uid: 11,
        title: "Л",
        active: false,
        equal: false
      },
      {
        id: 12,
        uid: 12,
        title: "М",
        active: false,
        equal: false
      },
      {
        id: 13,
        uid: 13,
        title: "Н",
        active: false,
        equal: false
      },
      {
        id: 14,
        uid: 14,
        title: "О",
        active: false,
        equal: false
      },
      {
        id: 15,
        uid: 15,
        title: "П",
        active: false,
        equal: false
      },
      {
        id: 16,
        uid: 16,
        title: "Р",
        active: false,
        equal: false
      },
      {
        id: 17,
        uid: 17,
        title: "С",
        active: false,
        equal: false
      },
      {
        id: 18,
        uid: 18,
        title: "Т",
        active: false,
        equal: false
      },
      {
        id: 19,
        uid: 1,
        title: "А",
        active: false,
        equal: false
      },
      {
        id: 20,
        uid: 2,
        title: "Б",
        active: false,
        equal: false
      },
      {
        id: 21,
        uid: 3,
        title: "В",
        active: false,
        equal: false
      },
      {
        id: 22,
        uid: 4,
        title: "Г",
        active: false,
        equal: false
      },
      {
        id: 23,
        uid: 5,
        title: "Д",
        active: false,
        equal: false
      },
      {
        id: 24,
        uid: 6,
        title: "Е",
        active: false,
        equal: false
      },
      {
        id: 25,
        uid: 7,
        title: "Ж",
        active: false,
        equal: false
      },
      {
        id: 26,
        uid: 8,
        title: "З",
        active: false,
        equal: false
      },
      {
        id: 27,
        uid: 9,
        title: "И",
        active: false,
        equal: false
      },
      {
        id: 28,
        uid: 10,
        title: "К",
        active: false,
        equal: false
      },
      {
        id: 29,
        uid: 11,
        title: "Л",
        active: false,
        equal: false
      },
      {
        id: 30,
        uid: 12,
        title: "М",
        active: false,
        equal: false
      },
      {
        id: 31,
        uid: 13,
        title: "Н",
        active: false,
        equal: false
      },
      {
        id: 32,
        uid: 14,
        title: "О",
        active: false,
        equal: false
      },
      {
        id: 33,
        uid: 15,
        title: "П",
        active: false,
        equal: false
      },
      {
        id: 34,
        uid: 16,
        title: "Р",
        active: false,
        equal: false
      },
      {
        id: 35,
        uid: 17,
        title: "С",
        active: false,
        equal: false
      },
      {
        id: 36,
        uid: 18,
        title: "Т",
        active: false,
        equal: false
      }
    ]
  },
  getters: {
    getCards: state => {
      return state.cards;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
