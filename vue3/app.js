const app = Vue.createApp({
  data() {
    return {
      items: ['uno', 'dos', 'tres'],
    };
  },
  template: `
    <ul>
      <v-item 
        v-for="item in items" 
        :text="item" >
      </v-item>
      <v-item></v-item>
    </ul>
  `,
});
