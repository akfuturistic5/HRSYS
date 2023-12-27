<template>
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="ItemName"
          @focus="isFocused = true"
          @blur="isFocused = ItemName !== ''"
        />
        <label class="focus-label">Item Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select
          :options="SelectExpenseItem"
          id="select-item"
          placeholder="-- Select --"
        />
        <label class="focus-label">Purchased By</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select
          :options="SelectExpensePurchase"
          id="select-purchase"
          placeholder="-- Select --"
        />
        <label class="focus-label">Paid By</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
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
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      SelectExpenseItem: ["-- Select --", "Loren Gatlin", "Tarah Shropshire"],
      SelectExpensePurchase: ["-- Select --", "Cash", "Cheque"],
      startdate: currentDate,
      startdateone: currentDateOne,
      dateFormat: 'dd-MM-yyyy',
      ItemName: "",
      isFocused: false,
    };
  },
};
</script>
