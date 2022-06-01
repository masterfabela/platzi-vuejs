app.component('item', {
  props: ['post'],
  template: `
    <div class="item">
      <div class="title">{{post.title}}</div>
      <p>{{post.description}}</p>
      <button @click="deleteItem(i)">Delete</button>
    </div>
    `,
});
