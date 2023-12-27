<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus" v-if="isInvoiceReportsRoute">
        <vue-select
          :options="AddInvoiceClient"
          id="select-add-invoiceClient"
          placeholder="Select Client"
        />
        <label class="focus-label">Client</label>
      </div>
      <div class="input-block mb-3 form-focus select-focus" v-if="isExpenseReportsRoute">
        <vue-select
          :options="AddExpensereport"
          id="select-add-expensereport"
          placeholder="Select buyer"
        />

        <label class="focus-label">Purchased By</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
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
      AddExpensereport: ["Select buyer", "Loren Gatlin", "Tarah Shropshire"],
      AddInvoiceClient: ["Select Client", "Global Technologies", "Delta Infotech"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
  computed: {
    isInvoiceReportsRoute() {
      return this.$route.path === "/invoice-reports";
    },
    isExpenseReportsRoute() {
      return this.$route.path === "/expense-reports";
    },
  },
};
</script>
