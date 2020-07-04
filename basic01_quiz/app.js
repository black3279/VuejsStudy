
Vue.component(
  'todo-footer',{
    template:'<p>This is another global child coponent</p>'
  });

var app = new Vue({
  el:'#app',
  data: {
    message : 'This is a parent componet'
  },
  components:{
    'todo-list' : { template:'<p>This is another local child component</p>' }
  }
});
