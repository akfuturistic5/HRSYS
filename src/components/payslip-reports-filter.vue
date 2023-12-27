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
        <vue-select :options="PayslipMonth" id="payslip-month-one" placeholder="Jan" />
        <label class="focus-label">Month</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus focused">
        <vue-select :options="PayslipYear" id="payslip-year-one" placeholder="Jan" />
        <label class="focus-label">Year</label>
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
      PayslipMonth: ["Jan", "Feb", "Mar"],
      PayslipYear: ["2021", "2022", "2023"],
      employeeName: "",
      isFocused: false,
    };
  },
};
</script>
