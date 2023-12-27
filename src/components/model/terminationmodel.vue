<template>
  <!-- Add Termination Modal -->
  <div id="add_termination" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Termination</h5>
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
                >Terminated Employee <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Termination Type <span class="text-danger">*</span></label
              >
              <div class="add-group-btn">
                <vue-select
                  :options="termination"
                  id="termination"
                  placeholder="Misconduct"
                />
                <a class="btn btn-primary" href="javascript:void(0);"
                  ><i class="fa-solid fa-plus"></i> Add</a
                >
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Termination Date <span class="text-danger">*</span></label
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
                >Reason <span class="text-danger">*</span></label
              >
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Notice Date <span class="text-danger">*</span></label
              >
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
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Termination Modal -->

  <!-- Edit Termination Modal -->
  <div id="edit_termination" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Termination</h5>
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
                >Terminated Employee <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="John Doe" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Termination Type <span class="text-danger">*</span></label
              >
              <div class="add-group-btn">
                <vue-select
                  :options="terminationmodel"
                  id="terminationmodel"
                  placeholder="Misconduct"
                />
                <a class="btn btn-primary" href="javascript:void(0);"
                  ><i class="fa-solid fa-plus"></i> Add</a
                >
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Termination Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  value="28/02/2023"
                  class="form-control floating datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Reason <span class="text-danger">*</span></label
              >
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Notice Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdateone"
                  value="28/02/2023"
                  class="form-control floating datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Termination Modal -->

  <!-- Delete Termination Modal -->
  <div class="modal custom-modal fade" id="delete_termination" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Termination</h3>
            <p>Are you sure want to delete?</p>
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
  <!-- /Delete Termination Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      termination: ["Misconduct", "Others"],
      terminationmodel: ["Misconduct", "Others"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
};
</script>
