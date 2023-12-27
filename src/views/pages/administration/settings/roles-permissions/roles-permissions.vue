<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <singlebreadcrumb :title="title" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-sm-4 col-md-4 col-lg-4 col-xl-3">
            <a
              href="javascript:;"
              class="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#add_role"
              ><i class="fa-solid fa-plus"></i> Add Roles</a
            >
            <add-role></add-role>
          </div>
          <div class="col-sm-8 col-md-8 col-lg-8 col-xl-9">
            <h6 class="card-title m-b-20">Module Access</h6>
            <div class="m-b-30">
              <ul class="list-group notification-list">
                <li class="list-group-item">
                  Employee
                  <div class="status-toggle">
                    <input type="checkbox" id="staff_module" class="check" />
                    <label for="staff_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
                <li class="list-group-item">
                  Holidays
                  <div class="status-toggle">
                    <input type="checkbox" id="holidays_module" class="check" checked />
                    <label for="holidays_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
                <li class="list-group-item">
                  Leaves
                  <div class="status-toggle">
                    <input type="checkbox" id="leave_module" class="check" checked />
                    <label for="leave_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
                <li class="list-group-item">
                  Events
                  <div class="status-toggle">
                    <input type="checkbox" id="events_module" class="check" checked />
                    <label for="events_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
                <li class="list-group-item">
                  Chat
                  <div class="status-toggle">
                    <input type="checkbox" id="chat_module" class="check" checked />
                    <label for="chat_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
                <li class="list-group-item">
                  Jobs
                  <div class="status-toggle">
                    <input type="checkbox" id="job_module" class="check" />
                    <label for="job_module" class="checktoggle">checkbox</label>
                  </div>
                </li>
              </ul>
            </div>
            <div class="table-responsive">
              <modeltable></modeltable>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>

  <rolemodels></rolemodels>
</template>
<script>
export default {
  data() {
    return {
      title: "Roles & Permissions",
    };
  },
};
</script>
