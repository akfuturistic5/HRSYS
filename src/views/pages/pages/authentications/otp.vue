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
              <h3 class="account-title">OTP</h3>
              <p class="account-subtitle">Verification your account</p>

              <!-- Account Form -->
              <form @submit.prevent="submitForm">
                <div class="otp-wrap">
                  <input type="text" placeholder="0" maxlength="1" class="otp-input" />
                  <input type="text" placeholder="0" maxlength="1" class="otp-input" />
                  <input type="text" placeholder="0" maxlength="1" class="otp-input" />
                  <input type="text" placeholder="0" maxlength="1" class="otp-input" />
                </div>
                <div class="input-block mb-4 text-center">
                  <button class="btn btn-primary account-btn" type="submit">Enter</button>
                </div>
                <div class="account-footer">
                  <p>Not yet received? <a href="javascript:void(0);">Resend OTP</a></p>
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