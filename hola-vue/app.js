const vm = Vue.createApp({
  data() {
    return {
      text: '<p>Hola vue<p>',
    };
  },
  template: `<div v-once v-html="text"></div>`,
}).mount('#app');
console.log(vm);
