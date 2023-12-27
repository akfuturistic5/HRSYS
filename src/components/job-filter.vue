<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Select" placeholder="Select" id="select" />
        <label class="focus-label">Department</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Time" placeholder="Select" id="time" />
        <label class="focus-label">Job Type</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select
          :options="Designation"
          placeholder="Select Designation"
          id="designation"
        />
        <label class="focus-label">Designation</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="d-grid">
        <a href="javascript:;" class="btn btn-success"> Search </a>
      </div>
    </div>
  </div>
  <!-- Search Filter -->
</template>

<script>
export default {
  data() {
    return {
      select2: null,
      Select: ["Select", "Development", "Designing", "Android"],
      Time: ["Select", "Full Time", "Part Time", "Internship"],
      Designation: [
        "Select Designation",
        "Web Developer",
        "Web Designer",
        "Android Developer",
        "Ios Developer",
      ],
    };
  },
};
</script>
