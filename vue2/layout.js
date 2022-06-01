app.component('v-layout', {
  template: `
    <header>
      <slot name="header"></slot>
    </header>
    <div>
      <slot name="content"></slot>
    </div>
  `,
});
