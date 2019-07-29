<template> <!-- User interface of login -->
<div class="flex h-screen flex justify-center bg-grey-lighter">
  <div class="m-auto">
  <form class="w-full max-w-sm">
    <ul class="error-messages">
        <li class="mt-2 text-red-600" v-for="(error,index) in errors" :key="index">{{error.message}}</li>
      </ul> <!-- All kinds of errors are printed here -->
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >Username</label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="email"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-full-name"
          type="text"
          placeholder="username"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-username"
        >Password</label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="password"
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="inline-username"
          type="password"
          placeholder="*************"
        />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3"> <!-- login method is triggered -->
        <button
          @click="login" 
          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
        >Sign In</button>
      </div>
    </div>
  </form>
 </div>
 </div>
</template>

<script>
export default {
  data: function() { //all the field datas in login page
    return {
      password: "",
      email: "",
      errors: []
    };
  },//
  methods: { 
    login() { //A store holds the whole state tree of your application. The only way to change the state 
      this.$store //inside it is to dispatch an action on it, means a state change
        .dispatch("users/loginUser", {
          email: this.email,  //the data properties are given values and dispatched to given path
          password: this.password
        })
        .catch(err => {
          this.errors.push(err);
        });
    }
  }
};
</script>
