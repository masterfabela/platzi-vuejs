app.component('v-item', {
  props: {
    text: {
      default: 'Texto vacio',
    },
  },
  template: `
  <li>
    {{text}}
  </li>`,
});
