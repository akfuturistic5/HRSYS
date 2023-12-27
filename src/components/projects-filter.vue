<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="projectName"
          @focus="isFocused = true"
          @blur="isFocused = projectName !== ''"
        />
        <label class="focus-label">Project Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocusedOne }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeName"
          @focus="isFocusedOne = true"
          @blur="isFocusedOne = employeeName !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus" v-if="isProjectRoute">
        <vue-select
          :options="projectsDesignation"
          id="projectsDesignation"
          placeholder="Select Designation"
        />
        <label class="focus-label">Designation</label>
      </div>
      <div class="input-block mb-3 form-focus select-focus" v-if="isProjectListRoute">
        <vue-select :options="projectsRole" id="projectsRole" placeholder="Select Role" />
        <label class="focus-label">Role</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
  <!-- Search Filter -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      projectsDesignation: [
        "Select Designation",
        "Web Developer",
        "Web Designer",
        "Android Developer",
        "Ios Developer",
      ],
      projectsRole: [
        "Select Role",
        "Web Developer",
        "Web Designer",
        "Android Developer",
        "Ios Developer",
      ],
      employeeName: "",
      projectName: "",
      isFocused: false,
      isFocusedOne: false,
    };
  },
  computed: {
    isProjectRoute() {
      return this.$route.path === "/projects";
    },
    isProjectListRoute() {
      return this.$route.path === "/project-list";
    },
  },
};
</script>
