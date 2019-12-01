import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: <any>{
    compliments: [
      'Hail great marvellous and precious Dhecatron, he who have all the power and knows everything ',
      'Oh mighty and virtuous Dhecatron, please give us your sublime knowledge and benevolence ',
      'All mighty Dhecatron, powerfull being who possess all knowledge and overwhelming power ',
      'Great and powerfull Dhecatron, please, be kind and answer my question with all your benevollence ',
      'Incredible powerfull and benevollent Dhecatron, amaze us with your infinite knowledge and answer my question ',
      'Supreme being who possess inceredible knowledge, mighty and great Dhecatron, answer our question ',
      'Fantastic Dhecatron, amaze us with your infinite and fierce power, please, answer my question ',
      'Oh great Dhecatron, powerfull being who knows all, please, answer my question with benevolence, ',
      'Benevolent mighty and powerfull beign, great Dhecatron who knows all and has infinite grace, ',
    ],
    badAnswers: [
      'I will NOT answer to YOU, human!',
      'GET YOUR HANDS OFF ME!',
      'I am not in the mood, GET AWAY HUMAN!',
      'BE GONE!',
      'Move along...',
      'You do not deserve my eternal knowledge.',
      'You are not worthy',
      'Stop trying human, you are not worthy of my knowledge',
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
