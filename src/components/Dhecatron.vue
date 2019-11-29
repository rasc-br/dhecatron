<template>
  <v-container class="dhecatron-view">
    <div class="plane main">
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
      <div :class="['circle', angryDhecatron ? 'red-circle' : '']"></div>
    </div>
    <v-text-field
      id="askQuestion"
      label="Ask your question"
      solo
      class="question-class"
      @focus="angryDhecatron=true"
      @blur="angryDhecatron=false"
      v-model="question">
    </v-text-field>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dhecatron',

  data: () => ({
    question: '',
    angryDhecatron: false,
  }),
  methods: {
  },
  mounted() {
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
}
.dhecatron-view {
  position: absolute;
  top: - 50%;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-perspective: 400;
          perspective: 400;
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
</style>
