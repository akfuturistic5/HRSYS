<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <!-- Page Tab -->
        <div class="page-menu">
          <div class="row">
            <div class="col-sm-12">
              <ul class="nav nav-tabs nav-tabs-bottom">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#tab_additions"
                    >Additions</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" href="#tab_overtime"
                    >Overtime</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#tab_deductions"
                    >Deductions</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Tab -->

        <!-- Tab Content -->
        <div class="tab-content">
          <additions-tab />
          <overtime-tab />
          <deductions-tab />
        </div>
        <!-- Tab Content -->
      </div>
      <!-- /Page Content -->
      <payrollitem-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Payroll Items",
      path: "Dashboard",
      text: "Payroll Items",
    };
  },
  name: "payroll-items",
};
</script>
