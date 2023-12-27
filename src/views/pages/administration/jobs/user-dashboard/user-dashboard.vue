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
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-regular fa-file-lines"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>110</h3>
                  <span>Offered</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa-solid fa-paste"></i></span>
                <div class="dash-widget-info">
                  <h3>40</h3>
                  <span>Applied</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"><i class="fa-solid fa-retweet"></i></span>
                <div class="dash-widget-info">
                  <h3>374</h3>
                  <span>Visited</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="card dash-widget">
              <div class="card-body">
                <span class="dash-widget-icon"
                  ><i class="fa-regular fa-floppy-disk"></i
                ></span>
                <div class="dash-widget-info">
                  <h3>220</h3>
                  <span>Saved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6 text-center d-flex">
                <div class="card flex-fill">
                  <div class="card-body">
                    <h3 class="card-title">Overview</h3>
                    <apexchart
                      type="line"
                      height="300"
                      :options="lineChart.lineChartOptions"
                      :series="lineChart.series"
                    ></apexchart>
                  </div>
                </div>
              </div>
              <div class="col-md-6 d-flex">
                <div class="card flex-fill">
                  <div class="card-body">
                    <h3 class="card-title text-center">Latest Jobs</h3>
                    <ul class="list-group">
                      <li
                        class="list-group-item list-group-item-action"
                        v-for="item in LatestJobs"
                        :key="item.id"
                      >
                        {{ item.Title }}
                        <span class="float-end text-sm text-muted">{{ item.Hours }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="card card-table">
              <div class="card-header">
                <h3 class="card-title mb-0">Offered Jobs</h3>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th class="text-center">Job Type</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in OfferJobs" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>
                          <router-link to="job-details">{{ item.JobTitle }}</router-link>
                        </td>
                        <td>{{ item.Department }}</td>
                        <td class="text-center">
                          <div class="action-label">
                            <a class="btn btn-white btn-sm btn-rounded" href="javascript:;">
                              <i :class="item.Class"></i> {{ item.JobType }}
                            </a>
                          </div>
                        </td>
                        <td class="text-center">
                          <a href="javascript:;" class="btn btn-sm btn-info download-offer"
                            ><span
                              ><i class="fa-solid fa-download me-1"></i> Download
                              Offer</span
                            ></a
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

        <div class="row">
          <div class="col-md-12">
            <div class="card card-table">
              <div class="card-header">
                <h3 class="card-title mb-0">Applied Jobs</h3>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-nowrap custom-table mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Job Title</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Expire Date</th>
                        <th class="text-center">Job Type</th>
                        <th class="text-center">Status</th>
                        <th class="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in AppliedJobs" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>
                          <router-link to="job-details">{{ item.JobTitle }}</router-link>
                        </td>
                        <td>{{ item.Department }}</td>
                        <td>{{ item.StartDate }}</td>
                        <td>{{ item.ExpireDate }}</td>
                        <td class="text-center">
                          <div class="action-label">
                            <a class="btn btn-white btn-sm btn-rounded" href="javascript:;">
                              <i :class="item.Class"></i> {{ item.JobType }}
                            </a>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="action-label">
                            <a class="btn btn-white btn-sm btn-rounded" href="javascript:;">
                              <i :class="item.Class"></i> {{ item.Status }}
                            </a>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="dropdown dropdown-action">
                            <a
                              href="javascript:;"
                              class="action-icon dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="material-icons">more_vert</i></a
                            >
                            <div class="dropdown-menu dropdown-menu-right">
                              <a
                                class="dropdown-item"
                                href="javascript:;"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_employee"
                                ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                              >
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- /Content End -->
      </div>
      <!-- /Page Content -->

      <delete-model></delete-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import { lineChart } from "./data";
import LatestJobs from "@/assets/json/latest-jobs.json";
import OfferJobs from "@/assets/json/offered-jobs.json";
import AppliedJobs from "@/assets/json/applied-jobs.json";
export default {
  data() {
    return {
      title: "User Job Dashboard",
      path: "Dashboard",
      text: "Jobs",
      text1: "User Dashboard",
      text2: "User Dashboard",
      LatestJobs: LatestJobs,
      OfferJobs: OfferJobs,
      AppliedJobs: AppliedJobs,
      lineChart: lineChart,
    };
  },
};
</script>
