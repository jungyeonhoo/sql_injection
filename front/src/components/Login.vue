<template>
  <v-container style="max-width: 900px">
    <v-card class="ma-10 pa-10 elevation-10" title="Login">
      <div class="ps-3 pb-2">ID</div>
      <v-text-field
        variant="outlined"
        type="text"
        prepend-inner-icon="mdi-account-outline"
        clearable
        v-model="id_input"
      />
      <div class="ps-3 pb-2">password</div>
      <v-text-field
        variant="outlined"
        type="password"
        prepend-inner-icon="mdi-lock"
        clearable
        v-model="ps_input"
      />
      <v-btn color="#2196F3" @click="submit">Login</v-btn>
      <v-btn variant="text" color="teal-accent-4" @click="signup">
        Go To SignUp
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id_input: "",
      ps_input: "",
    };
  },
  methods: {
    signup() {
      this.$router.push("/signup");
    },
    submit() {
      let id_input = this.id_input;
      const $this = this;
      this.id_input = this.id_input.trim();
      this.ps_input = this.ps_input.trim();

      if (this.id_input == "") {
        alert("You must write your ID");
        this.id_input = "";
        this.ps_input = "";
      } else if (this.ps_input == "") {
        alert("You must write your Password");
        this.id_input = "";
        this.ps_input = "";
        // } else if (this.id_input.includes(" ") == true) {
        //   alert("You must write your ID without 'Space'");
        //   this.id_input = "";
        //   this.ps_input = "";
        // } else if (this.ps_input.includes(" ") == true) {
        //   alert("You must write your Password without 'Space'");
        //   this.id_input = "";
        //   this.ps_input = "";
      } else {
        axios
          .post("https://loginbackend-cyltk.run.goorm.site/login", {
            userID: this.id_input,
            password: this.ps_input,
          })
          .then(function (response) {
            console.log(response["data"]);
            if (response["data"]["status"] == "SUCCESS") {
              alert(response["data"]["message"]);
              $this.$router.push("/home");
            } else if (response["data"]["status"] == "FAIL") {
              alert(response["data"]["message"]); // data
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  },
};
</script>
