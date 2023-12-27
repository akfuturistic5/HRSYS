<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeName"
          @focus="isFocused = true"
          @blur="isFocused = employeeName !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select
          :options="AttendanceMonth"
          id="attendance-month-one"
          placeholder="Jan"
        />
        <label class="focus-label">Month</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select
          :options="AttendanceYear"
          id="attendance-year-one"
          placeholder="2023"
        />
        <label class="focus-label">Year</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="d-grid">
        <a href="javascript:;" class="btn btn-success"> Search </a>
      </div>
    </div>
  </div>
  <!-- /Search Filter -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AttendanceMonth: ["Jan", "Feb", "Mar"],
      AttendanceYear: ["2023", "2023", "2023"],
      employeeName: "",
      isFocused: false,
    };
  },
};
</script>
