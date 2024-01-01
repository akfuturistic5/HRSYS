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
              <h3 class="account-title">Forgot Password?</h3>
              <p class="account-subtitle">
                Enter your email to get a password reset link
              </p>

              <!-- Account Form -->
              <form>
                <div class="input-block mb-4">
                  <label class="col-form-label">Email Address</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-4 text-center">
                  <button class="btn btn-primary account-btn" type="submit">
                    Reset Password
                  </button>
                </div>
                <div class="account-footer">
                  <p>Remember your password? <router-link to="/">Login</router-link></p>
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
