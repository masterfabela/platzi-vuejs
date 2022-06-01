const app = Vue.createApp({
  data() {
    return {
      text: 'Puerta Cerrada',
      open: false,
      username: '',
      newTitle: '',
      newDescription: '',
      posts: [
        {
          title: 'Titulo 1',
          description: 'Lorem ipsum...',
        },
        {
          title: 'Titulo 2',
          description: 'Lorem ipsum...',
        },
        {
          title: 'Titulo 3',
          description: 'Lorem ipsum...',
        },
        {
          title: 'Titulo 4',
          description: 'Lorem ipsum...',
        },
      ],
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
  methods: {
    addItem(title, description) {
      this.posts.push({
        title: title,
        description: description,
      });
    },
    deleteItem(index) {
      this.posts.splice(index, 1);
    },
  },
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
      <div>
        <label>Title</label>
        <input type="text" v-model="newTitle"/>
        <label>Description</label>
        <input type="text" v-model="newDescription"/>
        <button @click="addItem(newTitle, newDescription)">Añadir</button>
      </div>
      <div class="list">
        <item 
          v-for="(item, i) in posts" 
          :key="i"
          :post="item"
        />
      </div>
    </div>
    <div v-else>
      <div>Username</div>
      <input type="text" v-model="username">
    </div>
    <button @click="open = !open">
      <div v-if="!open">Acceder</div>
      <div v-else >Salir</div>
    </button>
  </div>
  `,
});
