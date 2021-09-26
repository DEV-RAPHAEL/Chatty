const { data } = require("dom7");

<template>
  <f7-page name="Sign In">
  <f7-navbar title="Sign In" back-link="Back"></f7-navbar>
  
      <f7-list no-hairlines-md >
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
                <a href="#" class="list-button">Sign In</a>
              </li>
          </ul>
          <div style="text-align: center" >
            <f7-link href="/signup/">Sign Up Here Instead</f7-link><br>
            <f7-link>Resend Confirmation Code</f7-link><br>
            <f7-link>Forgotten Password?</f7-link>
          </div>
        </f7-block>
      </f7-list>
  </f7-page>
</template>

<script>
  export default{
    data(){
        return{
          email:null,
          password:null
        }
    }
  }
</script>
