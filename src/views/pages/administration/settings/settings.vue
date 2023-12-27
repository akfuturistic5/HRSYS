<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <!-- Page Header -->
            <singlebreadcrumb :title="title" />
            <!-- /Page Header -->

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label"
                      >Company Name <span class="text-danger">*</span></label
                    >
                    <input
                      class="form-control"
                      type="text"
                      value="Dreams Technologies"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Contact Person</label>
                    <input class="form-control" value="Daniel Porter" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Address</label>
                    <input
                      class="form-control"
                      value="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Country</label>
                    <vue-select
                      :options="Country"
                      id="settingscountry"
                      placeholder="USA"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">City</label>
                    <input class="form-control" value="Sherman Oaks" type="text" />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">State/Province</label>

                    <vue-select
                      :options="State"
                      id="settingsstate"
                      placeholder="California"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Postal Code</label>
                    <input class="form-control" value="91403" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Email</label>
                    <input
                      class="form-control"
                      value="danielporter@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Phone Number</label>
                    <input class="form-control" value="818-978-7102" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Mobile Number</label>
                    <input class="form-control" value="818-635-5579" type="text" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Fax</label>
                    <input class="form-control" value="818-978-7102" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Website Url</label>
                    <input
                      class="form-control"
                      value="https://www.example.com"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn">Save</button>
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
      title: "Company Settings",
      State: ["California", "Alaska", "Alabama"],
      Country: ["USA", "United Kingdom"],
    };
  },
};
</script>
