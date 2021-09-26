const { data } = require("dom7");

<template>
  <f7-page name="Sign Up">
  <f7-navbar title="Sign Up" back-link="Back"></f7-navbar>
        <div class="img-wrapper">
             <img :src="image_url" alt="" class="upload-image">
        </div>
      
      <f7-list no-hairlines-md >

          <f7-list-input
            :value="name"
            @input="$name=$event.target.value"
            label="Enter your Name"
            type="email"
            placeholder="Your Name"
            clear-button
            >
          </f7-list-input>

        <f7-list-input
            :value="email"
            @input="$email=$event.target.value"
            label="Enter your E-mail Address"
            type="email"
            placeholder="Your Email"
            clear-button
            >
        </f7-list-input>
        <f7-list-input
            :value="password"
            @input="$password=$event.target.value"
            label="Enter your secret Key"
            type="password"
            placeholder="Your Password"
            clear-button
            >
          
        </f7-list-input>
        <f7-block>
         <ul>
              <li>
                <a href="#" class="list-button">Sign Up</a>
              </li>
          </ul>
          <div style="text-align: center" >
            <f7-link>Sign In Here</f7-link><br>
          </div>
        </f7-block>
      </f7-list>
  </f7-page>
</template>

<script>
  export default{
    data(){
        return{
          name:null,
          email:null,
          password:null,
          image_url:"http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
        }
    }
  }
</script>
<style scoped>
.img-wrapper{
    text-align: center;
}
.upload-image{
    width: 150px;
    height: 150px;
    border-radius: 50px;
    margin: 20px;
    object-fit: cover;
    object-position: center;
}
</style>