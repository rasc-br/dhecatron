<template>
  <v-container class="lightning-box">
      <div class="flash"></div>
      <div class="lightning"
        :style="{
          backgroundImage: 'url(' + require('@/assets/'+randImg+'.png') + ')'
          }">
      </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Lightnings',

  data: () => ({
    randImg: 'lightning1',
    randPosition: 0,
    randDeg: 0,
  }),
  methods: {
    randNumber(max: number, min: number) {
      const number: number = Math.floor(Math.random() * max) - min;
      return number;
    },
    setImg() {
      const lightningImages = [
        'lightning1',
        'lightning2',
        'lightning3',
        'lightning4',
      ];
      return lightningImages[this.randNumber(4, 0)];
    },
    randomStrike() {
      this.randImg = this.setImg();
      this.randPosition = this.randNumber(80, 30);
      this.randDeg = this.randNumber(60, 30);
    },
  },
  mounted() {
    setInterval(() => this.randomStrike(), 5000);
  },
});
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}

.lightning-box {
  background: #111111;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.lightning-box .flash {
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #FFFFFF;
  animation: flash infinite 3s linear;
}
.lightning-box .lightning {
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60%;
  min-height: 200vh;
  z-index: 3;
  background-size: contain;
  background-repeat: no-repeat;
  animation: strike infinite 3s linear;
}

@keyframes moveClouds {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}
@keyframes strike {
  0% {
    opacity: 1;
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
@keyframes flash {
  0% {
    opacity: 0.05;
  }
  5% {
    opacity: 0;
  }
  10% {
    opacity: 0.1;
  }
  15% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>
