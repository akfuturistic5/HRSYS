<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper" ref="pageWrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <div class="row board-view-header">
          <div class="col-4">
            <div class="pro-teams">
              <div class="pro-team-lead">
                <h4>Lead</h4>
                <div class="avatar-group">
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-11.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-01.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-16.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <a
                      href="javascript:;"
                      class="avatar-title rounded-circle border border-white"
                      data-bs-toggle="modal"
                      data-bs-target="#assign_leader"
                      ><i class="fa-solid fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="pro-team-members">
                <h4>Team</h4>
                <div class="avatar-group">
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-02.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-09.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <img
                      class="avatar-img rounded-circle border border-white"
                      alt="User Image"
                      src="@/assets/img/profiles/avatar-12.jpg"
                    />
                  </div>
                  <div class="avatar">
                    <a
                      href="javascript:;"
                      class="avatar-title rounded-circle border border-white"
                      data-bs-toggle="modal"
                      data-bs-target="#assign_user"
                      ><i class="fa-solid fa-plus"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 text-end">
            <a
              href="javascript:;"
              class="btn btn-white float-end ms-2"
              data-bs-toggle="modal"
              data-bs-target="#add_task_board"
              ><i class="fa-solid fa-plus"></i> Create List</a
            >
            <router-link
              to="project-view"
              class="btn btn-white float-end"
              title="View Board"
              ><i class="fa fa-link"></i
            ></router-link>
          </div>

          <div class="col-12">
            <div class="pro-progress">
              <div class="pro-progress-bar">
                <h4>Progress</h4>
                <div class="progress">
                  <div
                    class="progress-bar bg-success w-20"
                    role="progressbar"
                  ></div>
                </div>
                <span>20%</span>
              </div>
            </div>
          </div>
        </div>

        <kanban-board />
      </div>
      <!-- /Page Content -->
      <task-board-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Hospital Admin",
      path: "Dashboard",
      text: "Task Board",
    };
  },
  mounted() {
    const pageWrapper = this.$refs.pageWrapper;
    this.setMinHeight(pageWrapper);
    window.addEventListener("resize", () => {
      this.setMinHeight(pageWrapper);
    });
  },
  methods: {
    setMinHeight(element) {
      const windowHeight = window.innerHeight;
      element.style.minHeight = `${windowHeight}px`;
    },
  },
  name: "task-board",
};
</script>
