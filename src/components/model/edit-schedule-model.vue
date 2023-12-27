<template>
  <!-- Add Schedule Modal -->
  <div id="add_schedule" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Schedule</h5>
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
                  <label class="col-form-label"
                    >Department <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Department"
                    id="select-department"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Employee Name <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Employee"
                    id="employees"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Date</label>
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
                    >Shifts <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Shifts"
                    id="shifts"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value17"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value18"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value19"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value20"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value21"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value22"
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
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Break Time <span class="text-danger">*</span></label
                  >
                  <a-time-picker
                    v-model:value="value23"
                    class="form-control timepicker"
                    placeholder="Time"
                    use12-hours
                    format="h:mm a"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Accept Extra Hours </label>
                  <div class="form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch1"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch1"></label>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Publish </label>
                  <div class="form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch2"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch2"></label>
                  </div>
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
  <!-- /Add Schedule Modal -->

  <!-- Edit Schedule Modal -->
  <div id="edit_schedule" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Schedule</h5>
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
                  <label class="col-form-label"
                    >Department <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="DepartmentOne"
                    id="itech-one"
                    placeholder="Development"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Employee Name <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="EmployeeOne"
                    id="deluna-one"
                    placeholder="Richard Miles"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Date <span class="text-danger">*</span></label
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
                    >Shifts <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="ShiftsOne"
                    id="new-shift-one"
                    placeholder="New Shift"
                  />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value1"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max Start Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value2"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Min End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value3"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value4"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Max End Time <span class="text-danger">*</span></label
                  >
                  <div class="input-group time">
                    <a-time-picker
                      v-model:value="value5"
                      class="form-control timepicker"
                      placeholder="Time"
                      use12-hours
                      format="h:mm a"
                    />
                    <span class="input-group-text"
                      ><i class="fa-regular fa-clock"></i
                    ></span>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Break Time <span class="text-danger">*</span></label
                  >
                  <a-time-picker
                    v-model:value="value6"
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
                  <vue-select
                    :options="RepeatOne"
                    id="repeat-one"
                    placeholder="5"
                  />
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
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >End On <span class="text-danger">*</span></label
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
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Accept Extra Hours </label>
                  <div class="form-check form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch3"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch3"></label>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Publish </label>
                  <div class="form-check form-switch">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch4"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch4"></label>
                  </div>
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
  <!-- /Edit Schedule Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      value: null,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
      value17: null,
      value18: null,
      value19: null,
      value20: null,
      value21: null,
      value22: null,
      value23: null,
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
      RepeatOne: ["1", "2", "3", "4", "5", "6"],
      DepartmentOne: [
        "Select",
        "Development",
        "Finance",
        "Finance and Management",
        "Hr & Finance",
        "ITech",
      ],
      EmployeeOne: [
        "Select",
        "Richard Miles",
        "John Smith",
        "Mike Litorus",
        "Wilmer Deluna",
      ],
      ShiftsOne: [
        "Select",
        "10'o clock Shift",
        "10:30 shift",
        "Daily Shift",
        "New Shift",
      ],
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
