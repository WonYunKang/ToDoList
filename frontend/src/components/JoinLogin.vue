<template>
    <div>
        <div class="Top-JoinLogin"></div>

        <div><h1>MEMBER</h1> </div>
       <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
 
</form>
    <router-link to="Join" ><button> Join</button></router-link>
        <router-link to="ToDo" ><button>Login</button></router-link>

        <br><br>
        <div class="Down-JoinLogin" ></div>
    </div>
</template>

<script>

export default {
    name: 'JoinLogin',
    methods:{
            ToDoPage: function(){
            

                }
            }
    
}
</script>
<style scoped>
        .Top-JoinLogin{
        height: 40px;
        width: 100%;
        background-color: rgb(54, 137, 247)}
    .Down-JoinLogin{
        height: 30px;
        width: 100%;
        background-color: rgb(54, 137, 247)
    }
</style>
