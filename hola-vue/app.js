const vm = Vue.createApp({
  data() {
    return {
      text: 'Puerta Cerrada',
      open: false,
    };
  },
  computed: {
    label() {
      return this.open ? 'Cerrar' : 'Abrir';
    },
    styles() {
      return this.open ? ['open'] : ['close'];
    },
  },
  methods: {},
  watch: {
    open(value) {
      if (value) {
        this.text = 'Puerta abierta';
      } else {
        this.text = 'Puerta cerrada';
      }
    },
  },
  template: `
  <div class="container" :class="styles">
    <h2>{{text}}</h2>
    <button @click="open = !open">{{label}}</button>
  </div>
  
  `,
}).mount('#app');
console.log(vm);
