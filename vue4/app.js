const app = Vue.createApp({
  data() {
    return {
      text: 'Hola vue',
    };
  },
  methods: {},
  template: `
    <div>
      <p>{{text}}</p>
      <v-input v-model:value="text"/>
    </div>
  `,
});
