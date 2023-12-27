<template>
  <div class="account-page">
    <div class="main-wrapper">
      <div class="account-content">
        <div class="container">
          <!-- Account Logo -->
          <div class="account-logo">
            <router-link to="admin-dashboard"
              ><img src="@/assets/img/logo2.png" alt="Dreams Technologies"
            /></router-link>
          </div>
          <!-- /Account Logo -->

          <div class="account-box">
            <div class="account-wrapper">
              <!-- Lock User Img -->
              <div class="lock-user">
                <img
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="User Image"
                  class="rounded-circle"
                />
                <h4>John Doe</h4>
              </div>
              <!-- /Lock User Img -->

              <!-- Account Form -->
              <form @submit.prevent="submitForm">
                <div class="input-block mb-3">
                  <label class="col-form-label">Password</label>
                  <input class="form-control" type="password" />
                </div>
                <div class="input-block mb-3 text-center">
                  <button class="btn btn-primary account-btn" type="submit">Enter</button>
                </div>
                <div class="account-footer">
                  <p>
                    Sign in as a different user? <router-link to="/">Login</router-link>
                  </p>
                </div>
              </form>
              <!-- /Account Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/admin-dashboard");
    },
  },
}
</script>
