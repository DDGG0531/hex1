 const app=new Vue({
  el:'#app',
  data:{
    todoList:[],
    tempTodo:{
      // id:10000,title:'test','deadline-front':'2018/05/12','deadline-back':'12/44',filename:'',comment:'Testcomment',done:false,marked:false,edit:false,
      edit:false,marked:false,done:false,
    },
    tempTodoOld:{
      // id:100000,title:'test1','deadline-front':'2018/05/121','deadline-back':'12/414',filename:'',comment:'Testcommentasd',done:false,marked:false,edit:false,
    'deadline-total':'',
    },
    filter:'all',
  },
  computed:{
    filterTodo(){
      if(this.filter=='inProgress'){
        let array= this.todoList.filter(function(item){
          return item.done == false;
        }
        )
        return array;
      }
      else if(this.filter=='completed'){
        let array= this.todoList.filter(function(item){
          return item.done == true;
        }
        )
        return array;
      }
      else{
        return this.todoList;
      }
    }
  },
  watch:{
    tempTodo:function(){
      this.tempTodo['deadline-total']=this.tempTodo['deadline-front']+' '+this.tempTodo['deadline-back'];
      // console.log('33')
    },
    tempTodoOld:function(){
      this.tempTodoOld['deadline-total']=this.tempTodoOld['deadline-front']+' '+this.tempTodoOld['deadline-back'];
      // console.log('33')
    }
  },
  methods:{
    // initEdit(){
    //   this.tempTodo=item;
    // },
    cancelEdit(){
      this.tempTodo={};
      this.tempTodo={id:Date.now(),done:false,marked:false,edit:false};
    },
    sendEdit(){
      this.tempTodo.edit=false;
      this.tempTodo.id=Date.now();
      this.tempTodo.done=false;
      let set={...this.tempTodo};
      // 原本不存在
      this.todoList.push(set);
      this.tempTodo={edit:false,marked:false,};
      

    },
    initEdit(item){
      this.tempTodoOld={...item};
     },
    saveEdit(item){
      this.tempTodoOld.edit=false;
      item=this.tempTodoOld;
      console.log(this.tempTodoOld);
      // this.tempTodoOld={id:Date.now(),done:false,marked:false,edit:false};

    },
    forgetEdit(item){
      console.log(item);
      this.tempTodoOld={};
      // this.tempTodoOld={id:Date.now(),done:false,marked:false,edit:false};
      item.edit=false;

    },

    
  },
  
})