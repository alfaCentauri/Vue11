/* 
    Created on : 31/01/2019, 11:09:00 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
});

var vue = new Vue({
  el: '#blog-post-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ]
  }
});

var vue2 = new Vue({
  el: '#blog-post-demo2',
  data: {
    posts: [
      { id: 1, title: 'Prueba de componentes' },
      { id: 2, title: 'Blogging con Vue' },
      { id: 3, title: 'Porque es util un componente' }
    ]
  }
});

var vue3 = new Vue({
  el: '#blog-post-demo3',
  data: {
    posts: [
      { id: 1, title: 'Prueba de componentes',
        content: 'Esta es una prueba del contenido de un post.', 
        publishedAt: 'Reportero 1'
      },
      { id: 2, title: 'Blogging con Vue',
        content: 'Esta es una prueba del contenido de un post.', 
        publishedAt: 'Reportero 2'
      },
      { id: 3, title: 'Porque es util un componente',
        content: 'Esta es una prueba del contenido de un post.', 
        publishedAt: 'Reportero 3'
      }
    ]
  }
});
