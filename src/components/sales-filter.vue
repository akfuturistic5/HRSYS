<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdate"
            class="form-control floating datetimepicker"
            placeholder="From"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdateone"
            placeholder="To"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="SelectOne" id="select-status" placeholder="Select Status" />
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
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      SelectOne: ["Select Status", "Accepted", "Declined", "Expired"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
};
</script>
