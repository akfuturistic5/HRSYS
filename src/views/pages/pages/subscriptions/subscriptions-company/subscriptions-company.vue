<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <!-- Plan Tab -->
            <div class="row justify-content-center mb-4">
              <div class="col-auto">
                <nav class="nav btn-group">
                  <a
                    href="#monthly"
                    class="btn btn-outline-secondary active"
                    data-bs-toggle="tab"
                    >Monthly Plan</a
                  >
                  <a href="#annual" class="btn btn-outline-secondary" data-bs-toggle="tab"
                    >Annual Plan</a
                  >
                </nav>
              </div>
            </div>
            <!-- /Plan Tab -->

            <!-- Plan Tab Content -->
            <div class="tab-content">
              <!-- Monthly Tab -->
              <subscriptions-monthly></subscriptions-monthly>
              <!-- /Monthly Tab -->

              <!-- Yearly Tab -->
              <subscriptions-annual></subscriptions-annual>
              <!-- Yearly Tab -->
            </div>
            <!-- /Plan Tab Content -->

            <!-- Plan Details -->
            <div class="row">
              <div class="col-md-12">
                <div class="card card-table mb-0">
                  <div class="card-header">
                    <h4 class="card-title mb-0">Plan Transactions</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Plan</th>
                            <th>Users</th>
                            <th>Plan Duration</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Amount</th>
                            <th>Update Plan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Free Trial</td>
                            <td>30 Users</td>
                            <td>1 Month</td>
                            <td>9 Nov 2023</td>
                            <td>8 Dec 2023</td>
                            <td>$200.00</td>
                            <td>
                              <a class="btn btn-primary btn-sm" href="javascript:void(0);"
                                >Change Plan</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Plan Details -->
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
      title: "Subscriptions",
      path: "Dashboard",
      text: "Subscriptions"
    }
  },
}
</script>