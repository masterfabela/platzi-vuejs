const vm = Vue.createApp({
  data() {
    return {
      number: 0,
      changeTimes: 0,
      event: 'mouseover',
    };
  },
  methods: {
    operate(operation) {
      this.number += operation;
      this.changeTimes++;
    },
  },
  template: `
    <div>
      <button v-on:[event]="operate(1)">+</button>
      <button v-on:[event]="operate(-1)">-</button>
    </div>
    <span>{{number}}</span>
    </br>
    <span>{{changeTimes}}</span>
  `,
}).mount('#app');
console.log(vm);
