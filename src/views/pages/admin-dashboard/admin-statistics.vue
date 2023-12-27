<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-xl-4 d-flex">
      <div class="card flex-fill dash-statistics">
        <div class="card-body">
          <h5 class="card-title">Statistics</h5>
          <div class="stats-list">
            <div v-for="stat in stats" :key="stat.id" class="stats-info">
              <p>
                {{ stat.title }}
                <strong
                  >{{ stat.value }} <small>/ {{ stat.total }}</small></strong
                >
              </p>
              <div class="progress">
                <div
                  :class="['progress-bar', stat.colorClass]"
                  :style="{ width: stat.progress + '%' }"
                  role="progressbar"
                  :aria-valuenow="stat.progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-body">
          <h4 class="card-title">Task Statistics</h4>
          <div class="statistics">
            <div class="row">
              <div class="col-md-6 col-6 text-center">
                <div class="stats-box mb-4">
                  <p>Total Tasks</p>
                  <h3>385</h3>
                </div>
              </div>
              <div class="col-md-6 col-6 text-center">
                <div class="stats-box mb-4">
                  <p>Overdue Tasks</p>
                  <h3>19</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="progress mb-4">
            <div
              v-for="(bar, index) in progressBars"
              :key="index"
              :class="['progress-bar', bar.colorClass]"
              :style="{ width: bar.progress + '%' }"
              role="progressbar"
              :aria-valuenow="bar.progress"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {{ bar.progress }}%
            </div>
          </div>

          <div>
            <p v-for="(task, index) in tasks" :key="index">
              <i :class="['fa-regular', task.iconClass, 'me-2']"></i>
              {{ task.name }}
              <span class="float-end">{{ task.count }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-6 col-xl-4 d-flex">
      <div class="card flex-fill">
        <div class="card-body">
          <h4 class="card-title">
            Today Absent <span class="badge bg-inverse-danger ms-2">5</span>
          </h4>
          <div class="leave-info-box">
            <div class="media d-flex align-items-center">
              <router-link to="profile" class="avatar"
                ><img src="@/assets/img/user.jpg" alt="User Image"
              /></router-link>
              <div class="media-body flex-grow-1">
                <div class="text-sm my-0">Martin Lewis</div>
              </div>
            </div>
            <div class="row align-items-center mt-3">
              <div class="col-6">
                <h6 class="mb-0">4 Sep 2023</h6>
                <span class="text-sm text-muted">Leave Date</span>
              </div>
              <div class="col-6 text-end">
                <span class="badge bg-inverse-danger">Pending</span>
              </div>
            </div>
          </div>
          <div class="leave-info-box">
            <div class="media d-flex align-items-center">
              <router-link to="profile" class="avatar"
                ><img src="@/assets/img/user.jpg" alt="User Image"
              /></router-link>
              <div class="media-body flex-grow-1">
                <div class="text-sm my-0">Martin Lewis</div>
              </div>
            </div>
            <div class="row align-items-center mt-3">
              <div class="col-6">
                <h6 class="mb-0">4 Sep 2023</h6>
                <span class="text-sm text-muted">Leave Date</span>
              </div>
              <div class="col-6 text-end">
                <span class="badge bg-inverse-success">Approved</span>
              </div>
            </div>
          </div>
          <div class="load-more text-center">
            <a class="text-dark" href="javascript:void(0);">Load More</a>
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
      tasks: [
        { iconClass: "fa-circle-dot text-purple", name: "Completed Tasks", count: 166 },
        { iconClass: "fa-circle-dot text-warning", name: "Inprogress Tasks", count: 115 },
        { iconClass: "fa-circle-dot text-success", name: "On Hold Tasks", count: 31 },
        { iconClass: "fa-circle-dot text-danger", name: "Pending Tasks", count: 47 },
        { iconClass: "fa-circle-dot text-info", name: "Review Tasks", count: 5 },
      ],

      progressBars: [
        { colorClass: "bg-purple", progress: 30 },
        { colorClass: "bg-warning", progress: 22 },
        { colorClass: "bg-success", progress: 24 },
        { colorClass: "bg-danger", progress: 21 },
        { colorClass: "bg-info", progress: 10 },
      ],
      stats: [
        {
          id: 1,
          title: "Today Leave",
          value: 4,
          total: 65,
          progress: (4 / 65) * 100,
          colorClass: "bg-primary",
        },
        {
          id: 2,
          title: "Pending Invoice",
          value: 15,
          total: 92,
          progress: (15 / 92) * 100,
          colorClass: "bg-warning",
        },
        {
          id: 3,
          title: "Completed Projects",
          value: 85,
          total: 112,
          progress: (85 / 112) * 100,
          colorClass: "bg-success",
        },
        {
          id: 4,
          title: "Open Tickets",
          value: 190,
          total: 212,
          progress: (190 / 212) * 100,
          colorClass: "bg-danger",
        },
        {
          id: 5,
          title: "Closed Tickets",
          value: 22,
          total: 212,
          progress: (22 / 212) * 100,
          colorClass: "bg-info",
        },
      ],
    };
  },
};
</script>
