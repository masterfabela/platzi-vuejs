const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Jose Ramon',
      lastName: 'Vieites Romay',
      now: new Date(),
      text: 'Puerta Cerrada',
      open: false,
    };
  },
  computed: {
    label() {
      return this.open ? 'Cerrar' : 'Abrir';
    },
  },
  methods: {
    fullName1() {
      return this.firstName + ' ' + this.lastName;
    },
  },
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
  <div>{{text}}</div>
  <button @click="open = !open">{{label}}</button>
  `,
}).mount('#app');
console.log(vm);
