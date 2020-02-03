<template>
  <v-container class="dhecatron-view">
    <div :class="[flashIt ? 'flash' : '']"></div>
    <div :class="['plane main', angryDhecatron ? 'faster' : '']">
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
    </div>
    <v-text-field
      id="askQuestion"
      ref="askQuestion"
      label="Ask your question"
      solo
      class="question-class"
      @focus="onAnswerFocus"
      @blur="angryDhecatron=false"
      @keydown="typing">
    </v-text-field>
    <transition name="fade">
      <v-card
        class="mx-auto answer-class blue-grey darken-3"
        v-if="showAnswer"
        max-width="800">
      <v-card-text class="headline font-weight-bold">
        {{actualAnswer}}
      </v-card-text>
      </v-card>
    </transition>
    <v-dialog
      v-model="dialog"
      width="500">
      <template v-slot:activator="{ on }">
        <v-icon
         id="about"
         class="about-icon"
         large4
         color="blue lighten-2"
         v-on="on">
         mdi-crosshairs-question
        </v-icon>
      </template>
       <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title>
            About
          </v-card-title>
          <v-card-text>
            Decathron was created based in a software of unknown author, that had many names
             (Oracle, Lucifer, Roboto, SUED, KnowAll...).
            It was a single file DOS executable that was spread around the 90's.
          </v-card-text>
        </v-card>
      </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dhecatron',

  data: () => ({
    typed: '',
    angryDhecatron: false,
    actualCompliment: '',
    actualAnswer: '',
    secret: false,
    dhecatronAnswer: '',
    fakeAnswerCounter: 0,
    flashIt: false,
    showAnswer: false,
    dialog: false,
  }),
  computed: {
    compliments() {
      return this.$store.getters.compliments;
    },
    badAnswers() {
      return this.$store.getters.badAnswers;
    },
  },
  methods: {
    randomNumber(min:number, max:number) {
      return Math.floor(Math.random() * max) + min;
    },
    typing(event:any) {
      if (event.code === 'ControlLeft') {
        this.secret = !this.secret;
        this.fakeAnswerCounter = 0;
      }
      if (this.secret && event.code !== 'ControlLeft'
       && event.code !== 'ShiftLeft' && event.code !== 'Enter'
       && event.key !== 'Backspace') {
        this.dhecatronAnswer += event.key;
        if (this.fakeAnswerCounter >= this.actualCompliment.length) {
          this.fakeAnswerCounter = 0;
        }
        const letter = this.actualCompliment[this.fakeAnswerCounter];
        if ((this.$refs.askQuestion as any).internalValue === undefined) {
          (this.$refs.askQuestion as any).internalValue = '';
        }
        (this.$refs.askQuestion as any).internalValue += letter;
        this.fakeAnswerCounter += 1;
        event.preventDefault();
      }
      if (event.code === 'Enter') {
        if (!this.dhecatronAnswer) {
          this.actualAnswer = this.badAnswers[this.randomNumber(0, this.badAnswers.length)];
        } else {
          this.actualAnswer = this.dhecatronAnswer;
        }
        this.secret = false;
        this.dhecatronAnswer = '';
        this.flashIt = true;
        setTimeout(() => {
          this.showAnswer = true;
          (this.$refs.askQuestion as any).internalValue = '';
        }, 1500);
        setTimeout(() => {
          this.flashIt = false;
          event.target.blur();
        }, 2000);
        setTimeout(() => {
          this.showAnswer = false;
        }, 8000);
      }
    },
    getComplement() {
      this.actualCompliment = this.compliments[this.randomNumber(0, this.compliments.length)];
    },
    onAnswerFocus() {
      this.angryDhecatron = true;
      this.flashIt = false;
      this.showAnswer = false;
      this.dhecatronAnswer = '';
    },
  },
  mounted() {
    this.getComplement();
  },
});
</script>

<style lang="scss" scoped>
html, body {
  background: #222;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.question-class {
    top: 70%;
    left: 10%;
    position: absolute;
    min-width: 80%;
    z-index:100;
}
.about-icon {
  font-size: 36px;
  z-index: 1000;
  position: absolute;
  top: 90%;
  left: 90%;
}
.dhecatron-view {
  position: absolute;
  top: - 50%;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-perspective: 400;
          perspective: 400;
  min-height: 100vh;
  min-width: 100vw;
}
.flash {
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #FFFFFF;
  animation: flash 15s linear;
  z-index:90;
}
.answer-class {
    top: 75%;
    left: 10%;
    position: absolute;
    min-width: 80%;
    z-index:100;
    z-index: 91;
    transition: all 2.5 ease;
    text-align: center;
}
.fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.plane {
  width: 120px;
  height: 120px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}
.plane.main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  -webkit-transform: rotateX(60deg) rotateZ(-30deg);
          transform: rotateX(60deg) rotateZ(-30deg);
  -webkit-animation: rotate 20s infinite linear;
          animation: rotate 20s infinite linear;
}
.plane.main.faster {
  -webkit-animation: rotate 3s infinite linear;
          animation: rotate 3s infinite linear;
}
.plane.main .circle {
  width: 120px;
  height: 120px;
  position: absolute;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 60px MediumBlue  , inset 0 0 60px MediumBlue  ;
  transition: all .5s ease-in;
}
.plane.main .red-circle {
    box-shadow: 0 0 60px crimson  , inset 0 0 60px crimson  ;
}
.plane.main .circle::before, .plane.main .circle::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 10%;
  height: 10%;
  border-radius: 100%;
  // background: MediumBlue  ;
  box-sizing: border-box;
  box-shadow: 0 0 60px 2px MediumBlue  ;
}
.plane.main .circle-red::before, .plane.main .circle-red::after {
  // background: crimson;
  box-shadow: 0 0 60px 2px crimson  ;
}
.plane.main .circle::before {
  -webkit-transform: translateZ(-90px);
          transform: translateZ(-90px);
}
.plane.main .circle::after {
  -webkit-transform: translateZ(90px);
          transform: translateZ(90px);
}
.plane.main .circle:nth-child(1) {
  -webkit-transform: rotateZ(72deg) rotateX(63.435deg);
          transform: rotateZ(72deg) rotateX(63.435deg);
}
.plane.main .circle:nth-child(2) {
  -webkit-transform: rotateZ(144deg) rotateX(63.435deg);
          transform: rotateZ(144deg) rotateX(63.435deg);
}
.plane.main .circle:nth-child(3) {
  -webkit-transform: rotateZ(216deg) rotateX(63.435deg);
          transform: rotateZ(216deg) rotateX(63.435deg);
}
.plane.main .circle:nth-child(4) {
  -webkit-transform: rotateZ(288deg) rotateX(63.435deg);
          transform: rotateZ(288deg) rotateX(63.435deg);
}
.plane.main .circle:nth-child(5) {
  -webkit-transform: rotateZ(360deg) rotateX(63.435deg);
          transform: rotateZ(360deg) rotateX(63.435deg);
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
            transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
            transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
}
@keyframes flash {
  0% {
    opacity: 0.05;
  }
  5% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
