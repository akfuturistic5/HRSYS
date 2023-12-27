<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-3">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdate"
            placeholder="Date"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Month" id="month-one" placeholder="-" />
        <label class="focus-label">Select Month</label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Year" id="year-one" placeholder="-" />
        <label class="focus-label">Select Year</label>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="d-grid">
        <a href="javascript:;" class="btn btn-success"> Search </a>
      </div>
    </div>
  </div>
  <!-- /Search Filter -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      startdate: currentDate,
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
    };
  },
};
</script>
