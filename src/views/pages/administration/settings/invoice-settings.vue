<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <!-- Page Header -->
            <singlebreadcrumb :title="title" />
            <!-- /Page Header -->

            <form>
              <div class="input-block mb-3 row">
                <label class="col-lg-3 col-form-label">Invoice prefix</label>
                <div class="col-lg-9">
                  <input type="text" value="INV" class="form-control" />
                </div>
              </div>
              <div class="input-block mb-3 row">
                <label class="col-lg-3 col-form-label">Invoice Logo</label>
                <div class="col-lg-7">
                  <input type="file" class="form-control" />
                  <span class="form-text text-muted"
                    >Recommended image size is 200px x 40px</span
                  >
                </div>
                <div class="col-lg-2">
                  <div class="img-thumbnail float-end">
                    <img
                      src="@/assets/img/logo3.png"
                      class="img-fluid"
                      alt="Logo"
                      width="140"
                      height="40"
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
      title: "Invoice Settings",
    };
  },
};
</script>
