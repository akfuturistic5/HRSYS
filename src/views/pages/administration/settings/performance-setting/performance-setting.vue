<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <settingssidebar></settingssidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid pb-0">
        <div class="row">
          <div class="row">
            <div class="col-sm-12">
              <h4 class="page-title">
                Performance Configuration
                <button class="btn btn-success m-t-5 btn-sm" type="submit">
                  OKRs Activated
                </button>
              </h4>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="card-box">
                <p>
                  <b
                    >Click the tabs below for more information on each Performance
                    Management module. Only one Performance module can be activated at a
                    time.
                  </b>
                </p>
                <ul class="nav nav-tabs nav-tabs-bottom">
                  <li class="nav-item active">
                    <a class="nav-link active" href="#okr_tab" data-bs-toggle="tab"
                      >OKRs</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#compentency_tab" data-bs-toggle="tab"
                      >Competency-based</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#smart_goals_tab" data-bs-toggle="tab"
                      >SMART Goals</a
                    >
                  </li>
                </ul>
                <div class="tab-content mt-3">
                  <okr />
                  <compentency />
                  <smartgoal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page Content -->
    </div>
    <!-- Page Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Performance Settings",
      text: "Settings",
      text1: "Performance Settings",
    };
  },
  name: "performance-setting",
};
</script>
