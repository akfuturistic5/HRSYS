<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select
          :options="projectreportname"
          id="projectreportname"
          placeholder="Name1"
        />

        <label class="focus-label">Project Name</label>
      </div>
    </div>

    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select
          :options="projectreportstatus"
          id="projectreportstatus"
          placeholder="Active"
        />

        <label class="focus-label">Status</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
  <!-- /Search Filter -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      projectreportname: ["Name1", "Name2"],
      projectreportstatus: ["Active", "Pending"],
    };
  },
};
</script>
