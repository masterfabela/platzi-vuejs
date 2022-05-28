const vm = Vue.createApp({
  data() {
    return {
      text: 'Hola vue',
    };
  },
  template: `
  <p>{{text}}</p>
  <input 
    type="text" 
    v-model="text" />
  `,
}).mount('#app');
console.log(vm);
