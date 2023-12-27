<template>
  <!-- Add Training List Modal -->
  <div id="add_training" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Training</h5>
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
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Training Type</label>
                  <vue-select
                    :options="Training"
                    placeholder="Node Training"
                    id="training"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Trainer</label>
                  <vue-select
                    :options="Trainer"
                    placeholder="Mike Litorus"
                    id="trainer"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Employees</label>
                  <vue-select
                    :options="Employeetraining"
                    placeholder="Bernardo Galaviz"
                    id="employeetraining"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Training Cost <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Date <span class="text-danger">*</span></label
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
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Date <span class="text-danger">*</span></label
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
              </div>

              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Description <span class="text-danger">*</span></label
                  >
                  <textarea class="form-control" rows="4"></textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="Statustraining"
                    placeholder="Active"
                    id="statustraining"
                  />
                </div>
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
  <!-- /Add Training List Modal -->

  <!-- Edit Training List Modal -->
  <div id="edit_training" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Training List</h5>
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
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Training Type</label>
                  <vue-select
                    :options="TrainingType"
                    placeholder="Node Training"
                    id="trainingType"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Trainer</label>
                  <vue-select
                    :options="TrainerType"
                    placeholder="John Doe"
                    id="trainerType"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Employees</label>
                  <vue-select
                    :options="EmployeesType"
                    placeholder="Jeffrey Warden"
                    id="employeesType"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Training Cost <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" value="$400" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Date <span class="text-danger">*</span></label
                  >
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdate"
                      Value="07-08-2023"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Date <span class="text-danger">*</span></label
                  >
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdateone"
                      value="10-08-2023"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>

              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Description <span class="text-danger">*</span></label
                  >
                  <textarea class="form-control" rows="4">Lorem ipsum ismap</textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="StatusType"
                    placeholder="Active"
                    id="statusType"
                  />
                </div>
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
  <!-- /Edit Training List Modal -->

  <!-- Delete Training List Modal -->
  <div class="modal custom-modal fade" id="delete_training" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Training List</h3>
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
  <!-- /Delete Training List Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Training: ["Node Training", "Swift Training"],
      Trainer: ["Mike Litorus", "John Deo"],
      Employeetraining: ["Bernardo Galaviz", "Jeffrey Warden"],
      Statustraining: ["Active", "Inactive"],
      TrainingType: ["Node Training", "Swift Training"],
      TrainerType: ["Mike Litorus", "John Deo"],
      EmployeesType: ["Bernardo Galaviz", "Jeffrey Warden"],
      StatusType: ["Active", "Inactive"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
};
</script>
