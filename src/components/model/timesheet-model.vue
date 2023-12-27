<template>
  <!-- Add Today Work Modal -->
  <div id="add_todaywork" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Today Work details</h5>
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
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Project <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="Project"
                  id="project"
                  placeholder="Office Management"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Deadline <span class="text-danger">*</span></label
                >
                <div class="cal-icon">
                  <input class="form-control" type="text" value="5 May 2023" readonly />
                </div>
              </div>
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Total Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" value="100" readonly />
              </div>
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Remaining Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" value="60" readonly />
              </div>
            </div>
            <div class="row">
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Date <span class="text-danger">*</span></label
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
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" />
              </div>
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
  <!-- /Add Today Work Modal -->

  <!-- Edit Today Work Modal -->
  <div id="edit_todaywork" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Work Details</h5>
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
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Project <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="Project"
                  id="project-one"
                  placeholder="Office Management"
                />
              </div>
            </div>
            <div class="row">
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Deadline <span class="text-danger">*</span></label
                >
                <div class="cal-icon">
                  <input class="form-control" type="text" value="5 May 2023" readonly />
                </div>
              </div>
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Total Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" value="100" readonly />
              </div>
              <div class="input-block mb-3 col-sm-4">
                <label class="col-form-label"
                  >Remaining Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" value="60" readonly />
              </div>
            </div>
            <div class="row">
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Date <span class="text-danger">*</span></label
                >
                <div class="cal-icon">
                  <datepicker
                    v-model="startdate"
                    placeholder="29-08-2023"
                    class="form-control datetimepicker"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
                </div>
              </div>
              <div class="input-block mb-3 col-sm-6">
                <label class="col-form-label"
                  >Hours <span class="text-danger">*</span></label
                >
                <input class="form-control" type="text" value="9" />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea rows="4" class="form-control">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.</textarea
              >
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Today Work Modal -->

  <!-- Delete Today Work Modal -->
  <div class="modal custom-modal fade" id="delete_workdetail" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Work Details</h3>
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
  <!-- Delete Today Work Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      Project: [
        "Office Management",
        "Project Management",
        "Video Calling App",
        "Hospital Administration",
      ],
    };
  },
};
</script>
