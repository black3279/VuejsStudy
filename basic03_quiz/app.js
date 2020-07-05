var app = new Vue({
  data : {
    message : 'Hello Vue js !',
    message2 : 'Vue js Finshied !',
    uid : 10,
    flag : true
  },
  methods:{
    clickBtn(){
      console.log("hi");
      this.flag = true;
    },
    clickBtn2:function(){
      console.log("hi2");
    },
    clickBtn3:function(event){
      console.log(event);
      this.flag = false;
    }
  }
}).$mount('#app');
