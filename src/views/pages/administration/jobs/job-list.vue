<template>
  <div class="main-wrapper">
    <job-header></job-header>

    <!-- Page Wrapper -->
    <div class="page-wrapper job-wrapper">
      <!-- Page Content -->
      <div class="content container">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-md-6" v-for="(job, index) in Joblist" :key="index">
            <router-link class="job-list" to="job-view">
              <div class="job-list-det">
                <div class="job-list-desc">
                  <h3 class="job-list-title">{{ job.title }}</h3>
                  <h4 class="job-department">{{ job.department }}</h4>
                </div>
                <div class="job-type-info">
                  <span class="job-types">{{ job.type }}</span>
                </div>
              </div>
              <div class="job-list-footer">
                <ul>
                  <li><i class="fa-solid fa-signs-post"></i> {{ job.location }}</li>
                  <li><i class="fa-regular fa-money-bill-1"></i> {{ job.salary }}</li>
                  <li><i class="fa-regular fa-clock"></i> {{ job.posted }}</li>
                </ul>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Joblist from "@/assets/json/job-list.json";
export default {
  data() {
    return {
      title: "Jobs",
      path: "Dashboard",
      text: "Jobs",
      Joblist: Joblist,
    };
  },
};
</script>
