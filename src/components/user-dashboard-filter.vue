<template>
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Development" id="web-development" placeholder="Select" />
        <label class="focus-label">Department</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Internship" id="internship" placeholder="Select" />
        <label class="focus-label">Job Type</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Ios" id="ios" placeholder="Select Designation" />
        <label class="focus-label">Designation</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select2: null,
      Development: ["Select", "Development", "Designing", "Android"],
      Internship: ["Select", "Full Time", "Part Time", "Internship"],
      Ios: [
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
