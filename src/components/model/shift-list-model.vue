<template>
  <!-- Add Shift Modal -->
  <div id="add_shift" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Shift</h5>
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
                  <label class="col-form-label"
                    >Shift Name <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value1"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value2"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value3"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value4"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value5"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value6"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value7"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label">Break Time (In Minutes) </label>
                  <a-time-picker
                    v-model:value="value8"
                    class="form-control timepicker"
                    placeholder="Time"
                    use12-hours
                    format="h:mm a"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck1"
                  />
                  <label class="form-check-label" for="customCheck1"
                    >Recurring Shift</label
                  >
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Repeat Every</label>
                  <vue-select :options="Repeat" id="repeat" placeholder="5" />
                  <label class="col-form-label">Week(s)</label>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3 wday-box">
                  <label class="checkbox-inline"
                    ><input
                      type="checkbox"
                      value="monday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Monday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="tuesday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Tuesday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="wednesday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Wednesday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="thursday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Thursday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="friday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Friday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="saturday"
                      class="days recurring"
                    /><span class="checkmark ms-1">Saturday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="sunday"
                      class="days recurring"
                    /><span class="checkmark ms-1">Sunday</span></label
                  >
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End On <span class="text-danger">*</span></label
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
              <div class="col-sm-12">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck2"
                  />
                  <label class="form-check-label" for="customCheck2"
                    >Indefinite</label
                  >
                </div>
              </div>

              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Tag </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Note </label>
                  <textarea class="form-control"></textarea>
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
  <!-- /Add Shift Modal -->

  <!-- Edit Shift Modal -->
  <div id="edit_shift" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Shift</h5>
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
                  <label class="col-form-label"
                    >Shift Name <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value9"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value10"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value11"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value12"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value13"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value14"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value15"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    /><span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-block mb-3">
                  <label class="col-form-label">Break Time (In Minutes) </label>
                  <a-time-picker
                    v-model:value="value16"
                    class="form-control timepicker"
                    placeholder="Time"
                    use12-hours
                    format="h:mm a"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck3"
                  />
                  <label class="form-check-label" for="customCheck3"
                    >Recurring Shift</label
                  >
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Repeat Every</label>
                  <vue-select :options="Repeat" id="every" placeholder="5" />
                  <label class="col-form-label">Week(s)</label>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3 wday-box">
                  <label class="checkbox-inline"
                    ><input
                      type="checkbox"
                      value="monday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Monday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="tuesday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Tuesday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="wednesday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Wednesday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="thursday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Thursday</span></label
                  >

                  <label class="checkbox-inline ms-1" 
                    ><input
                      type="checkbox"
                      value="friday"
                      class="days recurring"
                      checked=""
                    /><span class="checkmark ms-1">Friday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="saturday"
                      class="days recurring"
                    /><span class="checkmark ms-1">Saturday</span></label
                  >

                  <label class="checkbox-inline ms-1"
                    ><input
                      type="checkbox"
                      value="sunday"
                      class="days recurring"
                    /><span class="checkmark ms-1">Sunday</span></label
                  >
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End On <span class="text-danger">*</span></label
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
              <div class="col-sm-12">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck4"
                  />
                  <label class="form-check-label" for="customCheck4"
                    >Indefinite</label
                  >
                </div>
              </div>

              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Tag </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Note </label>
                  <textarea class="form-control"></textarea>
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
  <!-- /Edit Shift Modal -->

  <!-- Delete Shift Modal -->
  <div class="modal custom-modal fade" id="delete_employee" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Shift</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary continue-btn"
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
  <!-- /Delete Employee Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value7: null,
      value8: null,
      value9: null,
      value10: null,
      value11: null,
      value12: null,
      value13: null,
      value14: null,
      value15: null,
      value16: null,
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      Repeat: ["1", "2", "3", "4", "5", "6"],
      Department: [
        "Select",
        "Development",
        "Finance",
        "Finance and Management",
        "Hr & Finance",
        "ITech",
      ],
      Employee: [
        "Select",
        "Richard Miles",
        "John Smith",
        "Mike Litorus",
        "Wilmer Deluna",
      ],
      Shifts: [
        "Select",
        "10'o clock Shift",
        "10:30 shift",
        "Daily Shift",
        "New Shift",
      ],
    };
  },
};
</script>
