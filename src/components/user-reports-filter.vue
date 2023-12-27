<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select :options="userreportname" placeholder="Name1" id="userreportname" />
        <label class="focus-label ">User Role</label>
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
      userreportname: ["Name1", "Name1"],
    };
  },
};
</script>
