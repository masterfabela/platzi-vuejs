app.component('v-input', {
  props: {
    value: String,
  },
  methods: {
    input(event) {
      this.$emit('update:value', event.target.value);
    },
  },
  template: `
    <input type="text" :value="value" @input="input"/>
  `,
});
