<template>
  <!-- Add Goal Modal -->
  <div id="add_goal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Goal Tracking</h5>
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
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Goal Type</label>
                  <vue-select
                    :options="Goaltype"
                    placeholder="Invoice Goal"
                    id="goaltype"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Subject</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Target Achievement</label>
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
                    :options="Goalactive"
                    placeholder="Active"
                    id="goalactive"
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
  <!-- /Add Goal Modal -->

  <!-- Edit Goal Modal -->
  <div id="edit_goal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Goal Tracking</h5>
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
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Goal Type</label>
                  <vue-select
                    :options="Goaltypeevent"
                    placeholder="Invoice Goal"
                    id="goaltypeevent"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Subject</label>
                  <input class="form-control" type="text" value="Test Goal" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Target Achievement</label>
                  <input class="form-control" type="text" value="Lorem ipsum dollar" />
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
                      value="01-01-2023"
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
                      value="01-01-2023"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 mb-3">
                <div class="input-block mb-3">
                  <label for="customRange">Progress</label>
                  <input
                    type="range"
                    class="form-control-range form-range"
                    v-model="rangeValue"
                    @input="updateValue"
                  />
                  <div class="mt-2" id="customRange">
                    Progress Value: <b> {{ rangeValue }}</b>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Description <span class="text-danger">*</span></label
                  >
                  <textarea class="form-control" rows="4">Lorem ipsum dollar</textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="Goalinactive"
                    placeholder="Active"
                    id="goalinactive"
                  />
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Goal Modal -->

  <!-- Delete Goal Modal -->
  <div class="modal custom-modal fade" id="delete_goal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Goal Tracking List</h3>
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
  <!-- /Delete Goal Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      rangeValue: 0,
      Goaltype: ["Invoice Goal", "Event Goal"],
      Goaltypeevent: ["Invoice Goal", "Event Goal"],
      Goalactive: ["Active", "Inactive"],
      Goalinactive: ["Active", "Inactive"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
  methods: {
    updateValue(event) {
      this.rangeValue = event.target.value;
    },
  },
};
</script>
