<template>
  <div class="col-lg-4 col-sm-6 col-md-4 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="dropdown profile-action">
          <a
            href="javascript:;"
            class="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ><i class="material-icons">more_vert</i></a
          >
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javascript:;"
              ><i class="fa fa-pencil m-r-5"></i> Edit</a
            >
            <a class="dropdown-item" href="javascript:;"
              ><i class="fa fa-trash m-r-5"></i> Delete</a
            >
          </div>
        </div>
        <h4 class="project-title">
          <router-link :to="'project-view?id=' + project.id">{{
            project.title
          }}</router-link>
        </h4>
        <small class="block text-ellipsis m-b-15">
          <span class="text-xs me-1">{{ project.openTasks }}</span>
          <span class="text-muted">open tasks, </span>
          <span class="text-xs me-1">{{ project.completedTasks }}</span>
          <span class="text-muted">tasks completed</span>
        </small>
        <p class="text-muted">
          {{ project.description }}
        </p>
        <div class="pro-deadline m-b-15">
          <div class="sub-title">Deadline:</div>
          <div class="text-muted">{{ project.deadline }}</div>
        </div>
        <div class="project-members m-b-15">
          <div>Project Leader :</div>
          <ul class="team-members">
            <li v-for="leader in project.projectLeaders" :key="leader.id">
              <a href="javascript:;" data-bs-toggle="tooltip" :title="leader.name"
                ><img
                  :src="require(`@/assets/img/profiles/${leader.avatar}`)"
                  alt="User Image"
              /></a>
            </li>
          </ul>
        </div>
        <div class="project-members m-b-15">
          <div>Team :</div>
          <ul class="team-members">
            <li v-for="teamMember in project.teamMembers" :key="teamMember.id">
              <a :href="'javascript:;'" data-bs-toggle="tooltip" :title="teamMember.name">
                <img
                  :src="require(`@/assets/img/profiles/${teamMember.avatar}`)"
                  alt="User Image"
                />
              </a>
            </li>
            <li class="dropdown avatar-dropdown">
              <a
                href="javascript:;"
                class="all-users dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >+15</a
              >
              <div class="dropdown-menu dropdown-menu-right">
                <div class="avatar-group">
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-10.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-05.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-11.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-12.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-13.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="User Image" />
                  </a>
                  <a class="avatar avatar-xs" href="javascript:;">
                    <img src="@/assets/img/profiles/avatar-16.jpg" alt="User Image" />
                  </a>
                </div>
                <div class="avatar-pagination">
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="javascript:;" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span class="visually-hidden">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:;" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span class="visually-hidden">Next</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <p class="m-b-5">
          Progress
          <span class="text-success float-end">{{ project.progress }}%</span>
        </p>
        <div class="progress progress-xs mb-0">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            data-bs-toggle="tooltip"
            :title="project.progress"
            :style="'width: ' + project.progress + '%'"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: Object,
  },
};
</script>
