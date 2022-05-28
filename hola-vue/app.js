const vm = Vue.createApp({
  data() {
    return {
      text: 'Hola vue',
    };
  },
}).mount('#app');
console.log(vm);
