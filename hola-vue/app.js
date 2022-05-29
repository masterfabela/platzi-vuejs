const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Jose Ramon',
      lastName: 'Vieites Romay',
      now: new Date(),
    };
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    today() {
      return this.now.toLocaleDateString();
    },
  },
  methods: {
    fullName1() {
      return this.firstName + ' ' + this.lastName;
    },
  },
  template: `
  <div>{{ fullName1() }}</div>
  <div>{{ fullName }}</div>
  <div>{{ today }}</div>
  `,
}).mount('#app');
console.log(vm);
