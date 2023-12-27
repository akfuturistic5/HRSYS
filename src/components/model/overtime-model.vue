<template>
  <!-- Add Overtime Modal -->
  <div id="add_overtime" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Overtime</h5>
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
                >Select Employee <span class="text-danger">*</span></label
              >
              <vue-select :options="Name" id="select-employee" placeholder="-" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Overtime Date <span class="text-danger">*</span></label
              >
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
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Overtime Hours <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea rows="4" class="form-control"></textarea>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Overtime Modal -->

  <!-- Edit Overtime Modal -->
  <div id="edit_overtime" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Overtime</h5>
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
                >Select Employee <span class="text-danger">*</span></label
              >
              <vue-select :options="Name" id="select-emp" placeholder="-" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Overtime Date <span class="text-danger">*</span></label
              >
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
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Overtime Hours <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea rows="4" class="form-control"></textarea>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Overtime Modal -->

  <!-- Delete Overtime Modal -->
  <div class="modal custom-modal fade" id="delete_overtime" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Overtime</h3>
            <p>Are you sure want to Cancel this?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a href="javascript:void(0);" class="btn btn-primary continue-btn"
                  >Delete</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Overtime Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Name: ["-", "John Doe", "Richard Miles", "John Smith"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
  },
};
</script>
