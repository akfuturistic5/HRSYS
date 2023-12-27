<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <form>
              <div class="input-block mb-3">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="mailoption"
                    id="phpmail"
                    value="option1"
                  />
                  <label class="form-check-label" for="phpmail">PHP Mail</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="mailoption"
                    id="smtpmail"
                    value="option2"
                  />
                  <label class="form-check-label" for="smtpmail">SMTP</label>
                </div>
              </div>
              <h4 class="page-title">PHP Email Settings</h4>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Email From Address</label>
                    <input class="form-control" type="email" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Emails From Name</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <h4 class="page-title m-t-30">SMTP Email Settings</h4>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP HOST</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP USER</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP PASSWORD</label>
                    <input class="form-control" type="password" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP PORT</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP Security</label>
                    <vue-select :options="Security" id="security" placeholder="None" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">SMTP Authentication Domain</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn">Save &amp; update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Security: ["None", "SSL", "TLS"],
    };
  },
};
</script>
