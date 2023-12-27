<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <!-- Page Header -->
            <singlebreadcrumb :title="title" />
            <!-- /Page Header -->

            <form>
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >ApiKey <span class="text-danger">*</span></label
                >
                <input type="text" class="form-control" value="xxxxxxxx" readonly="" />
              </div>
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >ApiSecret <span class="text-danger">*</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  value="xxxxxxxxxxxxxxxxxxxxxxxxxx"
                  readonly=""
                />
              </div>

              <div class="submit-section">
                <button class="btn btn-primary submit-btn">Save Changes</button>
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
      title: "ToxBox Setting",
    };
  },
};
</script>
