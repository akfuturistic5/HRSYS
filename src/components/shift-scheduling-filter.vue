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
        <label class="focus-label">Employee</label>
      </div>
    </div>

    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Finance" id="all-finance" placeholder="All Department" />
        <label class="focus-label">Department</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-2">
      <div class="input-block mb-3 form-focus focused">
        <div class="cal-icon">
          <datepicker
            v-model="startdate"
            placeholder="Choose Date"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
        
      </div>
    </div>
    <div class="col-sm-6 col-md-2">
      <div class="input-block mb-3 form-focus focused">
        <div class="cal-icon">
          <datepicker
            v-model="startdateone"
            placeholder="Choose Date"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
        
      </div>
    </div>
    <div class="col-sm-6 col-md-2">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
  <!-- Search Filter -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Finance: [
        "All Department",
        "Finance",
        "Finance and Management",
        "Hr & Finance",
        "ITech",
      ],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
      employeeID: "",
      isFocused: false,
    };
  },
  methods: {
    addFocusClass() {
      this.isFocused = true;
    },
    removeFocusClass() {
      this.isFocused = false;
    },
  },
};
</script>
