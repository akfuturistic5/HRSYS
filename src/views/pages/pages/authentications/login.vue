<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <router-link to="job-list" class="btn btn-primary apply-btn"
          >Apply Job</router-link
        >
        <div class="container">
          <!-- Account Logo -->
          <div class="account-logo">
            <router-link to="admin-dashboard"
              ><img src="@/assets/img/logo2.png" alt="iTensia USA"
            /></router-link>
          </div>
          <!-- /Account Logo -->

          <div class="account-box">
            <div class="account-wrapper">
              <h3 class="account-title">Login</h3>
              <p class="account-subtitle">Access to our dashboard</p>

              <!-- Account Form -->
              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="input-block mb-4">
                  <label class="col-form-label">Email Address</label>
                  <Field
                    name="email"
                    type="text"
                    value=""
                    class="form-control"
					v-model="model.email"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>
                <div class="input-block mb-4">
                  <div class="row align-items-center">
                    <div class="col">
                      <label class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                      <router-link class="text-muted" to="forgot-password">
                        Forgot password?
                      </router-link>
                    </div>
                  </div>
                  <div class="position-relative pass-group">
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      value=""
					  v-model="model.password"
                      class="form-control pass-input mt-2"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span @click="toggleShow" class="toggle-password">
                      <i
                        :class="{
                          'fas fa-eye': showPassword,
                          'fas fa-eye-slash': !showPassword,
                        }"
                      ></i>
                    </span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="input-block mb-4 text-center">
                  <button class="btn btn-primary account-btn" type="submit">Login</button>
                </div>
                <div class="account-footer">
                  <p>
                    Don't have an account yet?
                    <router-link to="register">Register</router-link>
                  </p>
                </div>
              </Form>
              <!-- /Account Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
import axios from 'axios';
import { notification } from "ant-design-vue";


export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
	  model: {
        email: "",
        password: "",
        subscribe: true
      }
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    onSubmit(values) {
	
      /*this.emailError = "";
      this.passwordError = "";

      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          this.$router.push("admin-dashboard"); // Use this.$router instead of router
        } else {
          this.passwordError = "Incorrect password";
        }
      } else {
        this.emailError = "Email is not valid";
      }*/
	  
	  
	  
	  let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false
                });
	
		
	  
	  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
	  
	  const formdata = {email: this.model.email,password: this.model.password};
	  
	  axios.post("/adminlogin", formdata)
          .then( (response) => {
				
			//	localStorage.setItem('token', response.data.token);
			//	this.$router.push({name: 'Dashboard'}).catch(error => {})
				
			  loader.hide();
			  
			  notification.open({
					message: "Login Successful",
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_SUCCESS_COLOR,
					},
				});
				
			  localStorage.setItem('token', response.data.token);
			  this.$router.push({name: 'admin-dashboard'}).catch(error => {})
			  
				
		}).catch(error => {
          
			 loader.hide();
			 
			if(error.response){
			
				var response = (error.response);
					
				notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
				
			}else{
				
				notification.open({
					message: 'Server Error',
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
			}
			
        });
		
	  
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@dreamstechnologies.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    return {
      schema,
    };
  },
};
</script>