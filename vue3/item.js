app.component('v-item', {
  props: {
    text: String,
  },
  methods: {
    remove() {
      this.$emit('remove');
    },
  },
  template: `
  <li @click="remove">
    {{text}}
  </li>`,
});
