<template>
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
          data-bs-target="#add_event"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
    </div>
  </div>

  <!-- Add Event Modal -->
  <div id="add_event" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Event</h5>
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
          <form>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Event Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Event Date <span class="text-danger">*</span></label
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
            <div class="input-block mb-3">
              <label class="control-label col-form-label">Category</label>
              <vue-select :options="Select" id="danger" placeholder="Danger" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Event Modal -->
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
      select2: null,
      Select: [
        "Danger",
        "Success",
        "Purple",
        "Primary",
        "Pink",
        "Info",
        "Inverse",
        "Orange",
        "Brown",
        "Teal",
        "Warning",
      ],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
  },
};
</script>
