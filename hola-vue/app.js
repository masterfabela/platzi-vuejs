const vm = Vue.createApp({
  data() {
    return {
      img: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
    };
  },
  template: `<img v-bind:["src"]="img" v-bind:alt='img' />`,
}).mount('#app');
console.log(vm);
