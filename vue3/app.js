const app = Vue.createApp({
  data() {
    return {
      items: ['uno', 'dos', 'tres'],
    };
  },
  methods: {
    remove(index) {
      this.items = this.items.filter((element, i) => index !== i);
    },
  },
  template: `
    <ul>
      <v-item 
        v-for="(item, index) in items" 
        :text="item"
        @remove="remove(index)"
      />
    </ul>
  `,
});
