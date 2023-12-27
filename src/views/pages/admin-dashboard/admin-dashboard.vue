<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <dashboardheader :title="title" :path="path" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa-solid fa-cubes"></i></span>
                <div class="dash-widget-info">
                  <h3>112</h3>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-solid fa-dollar-sign"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>44</h3>
                  <span>Clients</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa-regular fa-gem"></i></span>
                <div class="dash-widget-info">
                  <h3>37</h3>
                  <span>Tasks</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa-solid fa-user"></i></span>
                <div class="dash-widget-info">
                  <h3>218</h3>
                  <span>Employees</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <admin-charts></admin-charts>

        <!-- Statistics Widget -->
        <admin-statistics></admin-statistics>
        <!-- /Statistics Widget -->

        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="card card-table flex-fill">
              <div class="card-header">
                <h3 class="card-title mb-0">Invoices</h3>
              </div>
              <div class="card-body">
                <admin-invoices></admin-invoices>
              </div>
              <div class="card-footer">
                <router-link to="invoices">View all invoices</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex">
            <div class="card card-table flex-fill">
              <div class="card-header">
                <h3 class="card-title mb-0">Payments</h3>
              </div>
              <div class="card-body">
                <admin-payments></admin-payments>
              </div>
              <div class="card-footer">
                <router-link to="payments">View all payments</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 d-flex">
            <div class="card card-table flex-fill">
              <div class="card-header">
                <h3 class="card-title mb-0">Clients</h3>
              </div>
              <div class="card-body">
                <admin-clients></admin-clients>
              </div>
              <div class="card-footer">
                <router-link to="clients">View all clients</router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex">
            <div class="card card-table flex-fill">
              <div class="card-header">
                <h3 class="card-title mb-0">Recent Projects</h3>
              </div>
              <div class="card-body">
                <admin-recent-project></admin-recent-project>
              </div>
              <div class="card-footer">
                <router-link to="projects">View all projects</router-link>
              </div>
            </div>
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
      title: "Welcome Admin!",
      path: "Dashboard",
    };
  },
};
</script>
