const app = Vue.createApp({
  template: `
    <div>
      <v-layout>
        <template v-slot:header>
          <button>Titulo</button>
        </template>
        <template v-slot:content>
          Lorem ipsum dolor sit amet.
        </template>
      </v-layout>
    <div>
  `,
});
