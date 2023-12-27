<template>
  <div class="row">
    <div
      class="col-lg-4 col-sm-6 col-md-4 col-xl-3"
      v-for="item in Projectsearch"
      :key="item.id"
    >
      <div class="card me-3">
        <div class="card-body">
          <div class="dropdown dropdown-action profile-action">
            <a
              href="javascript:;"
              class="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              ><i class="material-icons">{{ item.Action }}</i></a
            >
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="javascript:;"
                ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
              >
              <a class="dropdown-item" href="javascript:;"
                ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
              >
            </div>
          </div>
          <h4 class="project-title">
            <router-link to="project-view">{{ item.projectTitle }}</router-link>
          </h4>
          <small class="block text-ellipsis m-b-15">
            <span class="text-xs">{{ item.openTasks }}</span>
            <span class="text-muted ms-1">open tasks, </span>
            <span class="text-xs">{{ item.completedTasks }}</span>
            <span class="text-muted ms-1">tasks completed</span>
          </small>
          <p class="text-muted">
            {{ item.projectDescription }}
          </p>
          <div class="pro-deadline m-b-15">
            <div class="sub-title">Deadline:</div>
            <div class="text-muted">{{ item.deadline }}</div>
          </div>
          <div class="project-members m-b-15">
            <div>Project Leader :</div>
            <ul class="team-members">
              <li>
                <a href="javascript:;" data-bs-toggle="tooltip" title="Jeffery Lalor"
                  ><img src="@/assets/img/profiles/avatar-16.jpg" alt="User Image"
                /></a>
              </li>
            </ul>
          </div>
          <div class="project-members m-b-15">
            <div>Team :</div>
            <ul class="team-members">
              <li>
                <a href="javascript:;" data-bs-toggle="tooltip" title="John Doe"
                  ><img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image"
                /></a>
              </li>
              <li>
                <a href="javascript:;" data-bs-toggle="tooltip" title="Richard Miles"
                  ><img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image"
                /></a>
              </li>
              <li>
                <a href="javascript:;" data-bs-toggle="tooltip" title="John Smith"
                  ><img src="@/assets/img/profiles/avatar-10.jpg" alt="User Image"
                /></a>
              </li>
              <li>
                <a href="javascript:;" data-bs-toggle="tooltip" title="Mike Litorus"
                  ><img src="@/assets/img/profiles/avatar-05.jpg" alt="User Image"
                /></a>
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
                      <li class="page-item"><a class="page-link" href="javascript:;">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:;">2</a></li>
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
            Progress <span class="text-success float-end">{{ item.progress }}</span>
          </p>
          <div class="progress progress-xs mb-0">
            <div
              class="progress-bar bg-success w-40"
              role="progressbar"
              data-bs-toggle="tooltip"
              title="40%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Projectsearch from "@/assets/json/projectsearch";
export default {
  data() {
    return {
      Projectsearch,
    };
  },
};
</script>
