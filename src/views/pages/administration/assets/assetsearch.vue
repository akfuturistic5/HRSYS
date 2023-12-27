<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="name"
          @focus="isFocused = true"
          @blur="isFocused = name !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="assets" id="assets" placeholder="-- Select --" />
        <label class="focus-label">Status</label>
      </div>
    </div>
    <div class="col-sm-12 col-md-4">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="input-block mb-3 form-focus">
            <div class="cal-icon">
              <datepicker
                v-model="startdate"
                placeholder="From"
                class="form-control floating datetimepicker"
                :editable="true"
                :clearable="false"
                :input-format="dateFormat"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
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
      </div>
    </div>
    <div class="col-sm-6 col-md-2">
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
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      assets: ["-- Select --", "Pending", "Approved", "Returned"],
      startdate: currentDate,
      startdateone: currentDateOne,
      dateFormat: 'dd-MM-yyyy',
      name: "",
      isFocused: false,
    };
  },
};
</script>
