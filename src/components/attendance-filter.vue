<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeID"
          @focus="isFocused = true"
          @blur="isFocused = employeeID !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Month" id="month" placeholder="-" />
        <label class="focus-label">Select Month</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Year" id="year" placeholder="-" />
        <label class="focus-label">Select Year</label>
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
      Month: [
        "-",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      Year: ["-", "2023", "2022", "2021", "2020", "2019"],
      employeeID: "",
      isFocused: false,
    };
  },
};
</script>
