const app = Vue.createApp({
  data() {
    return {
      text: 'Hola vue',
    };
  },
  methods: {},
  template: `
    <v-button ref="elemento" :label="text"></v-button>
  `,
});
