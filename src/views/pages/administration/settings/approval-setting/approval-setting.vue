<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-12">
            <!-- Page Header -->
            <singlebreadcrumb :title="title" />
            <!-- /Page Header -->

            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-tabs-bottom" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Expenses Approval
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  >Leave Approval</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="messages-tab"
                  data-bs-toggle="tab"
                  href="#messages"
                  role="tab"
                  aria-controls="messages"
                  aria-selected="false"
                  >Offer Approval</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="settings-tab"
                  data-bs-toggle="tab"
                  href="#settings"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                  >Resignation Notice</a
                >
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <expenses-approval></expenses-approval>
              <leave-approval></leave-approval>
              <offer-approval></offer-approval>
              <resignation-notice></resignation-notice>
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
      title: "Approval Settings",
    };
  },
};
</script>
