const app = Vue.createApp({
  data() {
    return {
      text: 'Hola vue',
    };
  },
  provide() {
    return {
      otroTexto: this.text,
    };
  },
  methods: {},
  template: `
    <div>{{text}}</div>
    <otro/>
  `,
});
