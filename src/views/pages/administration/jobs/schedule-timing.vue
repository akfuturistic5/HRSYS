<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <jobbreadcrumb
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
        />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="showentries mb-3">
              <label
                >Show
                <select>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Name'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="
                            require(`@/assets/img/profiles/${record.Image}`)
                          "
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Name }}
                        <span>{{ record.Job }}</span></router-link
                      >
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'JobTitle'">
                    <div>
                      <router-link to="job-details">{{
                        record.JobTitle
                      }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'UserAvailableTimings'">
                    <b>11-03-2020</b> - 11:00 AM-12:00 PM<br /><b>12-03-2020</b>
                    - 10:00 AM-11:00 AM<br /><b>01-01-1970</b> - 10:00 AM-11:00
                    AM<br />
                  </template>
                  <template v-else-if="column.key === 'Scheduletiming'">
                    <div class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-primary btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          href="javascript:;"
                        >
                          {{ record.Scheduletiming }}
                        </a>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
  <schedulemodel></schedulemodel>
</template>
<script>
import jobbreadcrumb from "@/components/breadcrumb/jobbreadcrumb.vue";
const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Job Title",
    dataIndex: "JobTitle",
    key: "JobTitle",
    sorter: {
      compare: (a, b) => {
        a = a.JobTitle.toLowerCase();
        b = b.JobTitle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "User Available Timings",
    key: "UserAvailableTimings",
    sorter: true,
  },
  {
    title: "Schedule timing",
    dataIndex: "Scheduletiming",
    key: "Scheduletiming",
    sorter: {
      compare: (a, b) => {
        a = a.Scheduletiming.toLowerCase();
        b = b.Scheduletiming.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: "1",
    Name: "John Doe Web Designer",
    JobTitle: "Web Developer",
    Image: "avatar-02.jpg",
    Scheduletiming: "Schedule Time",
  },
  {
    id: "2",
    Name: "Richard Miles Web Developer",
    JobTitle: "Web Designer",
    Image: "avatar-09.jpg",
    Scheduletiming: "Schedule Time",
  },
  {
    id: "3",
    Name: "John Smith Android Developer",
    JobTitle: "Android Developer",
    Image: "avatar-10.jpg",
    Scheduletiming: "Schedule Time",
  },
];

export default {
  components: { jobbreadcrumb },
  data() {
    return {
      title: "Schedule timing",
      path: "Dashboard",
      text: "Jobs",
      text1: "Schedule timing",
      columns,
      data,
    };
  },
};
</script>
<style>
.usertime-cell {
  white-space: pre-line;
}
</style>
