<template>
    <div>
            <div class="Top-ToDo"></div>
                <div><!--입력창 부분-->
                    <h1>List</h1> </div>
                        <div class="input-group mb-3">      
                             <input v-model="Todo" type="text" class="form-control" placeholder="Input your schedule" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <div class="input-group-append">
                        <button class="btn btn-outline-secondary"  type="button" id="button_addon2" v-on:click="completeTodo">Submit</button>
                      </div>
                </div>
             
                
                <div class="col-sm-6" v-for="(item, index) in lists" :key='index' style="float:left">
                    <div class="card">
                    <div class="card-body">   
                        <div> 
                        
                        
                           

<div class="card" style="width: 18rem;">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
 
    <a href="#" class="btn btn-primary">{{item.complete}}{{item.todo}}</a>
  </div>
</div>

                        <a href="#" class="btn btn-primary"><button>Delete</button></a>
                        </div>
                    </div>
                    </div>
                    <br>
                </div>





 
            <br><br>
            <div style="clear:left" class="Down-ToDo" >
            </div>
        </div>    
</template>
<script>
export default {
    name : "ToDo",
    data:()=>{
        return {
            Todo:"",
            lists: [ ]
        }
    },
    methods:{
        completeTodo: function(){
            let value = {
            
                complete: "",
                    todo: this.Todo,
                }
                this.lists.push(value);
                this.newTodo=""
        }
    }

}
</script>




<style scoped>
    .Top-ToDo{
        height: 40px;
        width: 100%;
        background-color: rgb(54, 137, 247)}
    .Down-ToDo{
        height: 30px;
        width: 100%;
        background-color: rgb(54, 137, 247)
    }
</style>




