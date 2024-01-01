<template>
  <div class="account-page">
    <div class="main-wrapper">
      <div class="account-content">
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
              <h3 class="account-title">Register</h3>
              <p class="account-subtitle">Access to our dashboard</p>

              <!-- Account Form -->
              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                <div class="input-block mb-4">
                  <label class="col-form-label"
                    >Email<span class="mandatory">*</span></label
                  >
                  <Field
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    :class="{ 'is-invalid': errors.email }"
                  />

                  <div class="invalid-feedback">{{ errors.email }}</div>
                  <div class="emailshow text-danger" id="email"></div>
                </div>

                <div class="input-block mb-4 pass-group">
                  <label class="col-form-label"
                    >Password<span class="mandatory">*</span></label
                  >
                  <Field
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control pass-input mt-2"
                    placeholder="Password"
                    :class="{ 'is-invalid': errors.password }"
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
                  <div class="emailshow text-danger" id="password"></div>
                </div>
                <div class="input-block mb-4">
                  <label class="col-form-label"
                    >Repeat Password<span class="mandatory">*</span></label
                  >
                  <Field
                    name="confirmpassword"
                    type="password"
                    class="form-control pass-input"
                    placeholder="Confirm Password"
                    :class="{ 'is-invalid': errors.confirmpassword }"
                  />

                  <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                  <div class="emailshow text-danger" id="confirmpassword"></div>
                </div>
                <div class="input-block mb-4 text-center">
                  <button class="btn btn-primary account-btn" type="submit">
                    Register
                  </button>
                </div>
                <div class="account-footer">
                  <p>Already have an account? <router-link to="/">Login</router-link></p>
                </div>
              </Form>
              <!-- /Account Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
export default {
  components: {
    Form,
    Field,
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
  },
  setup() {
    const showPassword = ref(false);
    const emailError = ref("");
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email === values.email);
        if (Eresult) {
          emailError.value = "This email is already in use";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          localStorage.setItem("storedData", jsonData);
          router.push("/");
        }
      } else {
        passwordError.value = "Password does not match";
      }
    };

    return {
      showPassword,
      schema,
      onSubmit,
      emailError,
      passwordError,
    };
  },
};
</script>
