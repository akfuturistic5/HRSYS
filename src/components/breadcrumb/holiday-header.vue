<template>
  <!-- Page Header -->
  <div class="page-header">
    <div class="row align-items-center">
      <div class="col">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="admin-dashboard">{{ path }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ text }}</li>
        </ul>
      </div>
      <div class="col-auto float-end ms-auto">
        <a
          href="javascript:;"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_holiday"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
    </div>
  </div>
  <!-- /Page Header -->

  <!-- Add Holiday Modal -->
  <div class="modal custom-modal fade" id="add_holiday" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Holiday</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <b-form>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Name <span class="text-danger">*</span></label
              >
              <b-form-input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  placeholder="Choose Date"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="submit-section">
              <b-button class="btn btn-primary submit-btn">Submit</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Holiday Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
  },
};
</script>
