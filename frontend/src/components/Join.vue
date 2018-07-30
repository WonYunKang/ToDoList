<template>
    <div class="Join">
        <div class="Top-Join"></div>
    

        <div><h1>Join</h1></div>

       <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
 
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <router-link to="JoinLogin">확인</router-link>
</form>

            <div class="Down-Join" ></div>
            
    </div>
</template>
<script>

export default {

name :"Join"
}

</script>

<style scoped>
    .Top-Join{
        height: 40px;
        width: 100%;
        background-color: rgb(54, 137, 247)}
    .Down-Join{
        height: 30px;
        width: 100%;
        background-color: rgb(54, 137, 247)
    }
      
</style>


