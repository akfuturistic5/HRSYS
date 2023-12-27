<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <user-dashboard-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
        />
        <!-- /Page Header -->

        <!-- Content Starts -->
        <user-dashboard-tabset></user-dashboard-tabset>

        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <ul
                  class="nav nav-tabs nav-tabs-solid nav-justified flex-column"
                >
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#home"
                      >Apptitude</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#menu1"
                      >Schedule Interview</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div class="card">
              <div class="card-body">
                <div class="tab-content">
                  <div id="home" class="tab-pane show active">
                    <div class="card-box">
                      <div class="showentries">
                        <label
                          >Show
                          <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries</label
                        >
                      </div>
                      <div class="table-responsive">
                        <apptitude></apptitude>
                      </div>
                    </div>
                  </div>
                  <div id="menu1" class="tab-pane fade">
                    <div class="card-box">
                      <div class="showentries">
                        <label
                          >Show
                          <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries</label
                        >
                      </div>
                      <div class="table-responsive">
                        <schedule></schedule>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Content End -->
        </div>
        <!-- /Page Content -->
      </div>
      <!-- /Page Wrapper -->
      <interviewing-model></interviewing-model>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Interviewing Jobs",
      path: "Dashboard",
      text: "Jobs",
      text1: "User Dashboard",
      text2: "Interviewing Jobs",
    };
  },
};
</script>
