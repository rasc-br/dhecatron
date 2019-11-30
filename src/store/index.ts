import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: <any>{
    compliments: [
      'Hail great marvellous and precious Dhecatron, he who have all the power and knows everything',
      'Oh mighty and virtuous Dhecatron, please give us your sublime knowledge and benevolence',
      'All mighty Dhecatron, powerfull being who possess all knowledge and overwhelming power',
    ],
    badAnswers: [
      'I will NOT answer to YOU, human',
      'GET YOUR HANDS OFF ME',
      'I am not in the mood, GET AWAY HUMAN!',
    ],
  },
  mutations: {
  },
  getters: {
    compliments: state => state.compliments,
    badAnswers: state => state.badAnswers,
  },
  actions: {
  },
  modules: {
  },
});
