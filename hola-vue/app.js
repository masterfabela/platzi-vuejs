const vm = Vue.createApp({
  data() {
    return {
      text: 'Puerta Cerrada',
      open: false,
      username: '',
    };
  },
  computed: {
    label() {
      return this.open ? 'Salir' : 'Acceder';
    },
    styles() {
      return this.open ? ['open'] : ['close'];
    },
  },
  methods: {},
  watch: {
    open(value) {
      if (value) {
        this.text = 'Cierra sesion';
      } else {
        this.text = 'Accede a tu cuenta';
        this.username = '';
      }
    },
  },
  template: `
  <div class="container" :class="styles">
    <h2>{{text}}</h2>
    <div v-if="open">
      <p>Hola, {{username}}</p>
    </div>
    <div v-else>
      <label>Username</label>
      <input type="text" v-model="username">
    </div>
    <button @click="open = !open">
      <div v-if="!open">Acceder</div>
      <div v-else >Salir</div>
    </button>
  </div>
  
  `,
}).mount('#app');
console.log(vm);
