<template>
  <!-- Add Performance Indicator Modal -->
  <div id="add_indicator" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Set New Indicator</h5>
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
                  <label class="col-form-label">Designation</label>
                  <vue-select
                    :options="DesignationIOS"
                    id="designationIOS"
                    placeholder="Select Designation"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="modal-sub-title">Technical</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Customer Experience</label>
                  <vue-select :options="Customerin" placeholder="None" id="customerin" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Marketing</label>
                  <vue-select
                    :options="Marketingin"
                    placeholder="None"
                    id="marketingin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Management</label>
                  <vue-select
                    :options="Managementin"
                    placeholder="None"
                    id="managementin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Administration</label>
                  <vue-select
                    :options="Administrationin"
                    placeholder="None"
                    id="administrationin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Presentation Skill</label>
                  <vue-select
                    :options="Presentationin"
                    placeholder="None"
                    id="presentationin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Quality Of Work</label>
                  <vue-select :options="Qualityin" placeholder="None" id="qualityin" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Efficiency</label>
                  <vue-select
                    :options="Efficiencyin"
                    placeholder="None"
                    id="efficiencyin"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="modal-sub-title">Organizational</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Integrity</label>
                  <vue-select
                    :options="Indicatorin"
                    placeholder="None"
                    id="indicatorin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Professionalism</label>
                  <vue-select
                    :options="Professionalismin"
                    placeholder="None"
                    id="professionalismin"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Work</label>
                  <vue-select :options="Teamin" placeholder="None" id="teamin" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Critical Thinking</label>
                  <vue-select :options="Criticalin" placeholder="None" id="criticalin" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Conflict Management</label>
                  <vue-select :options="Conflictin" placeholder="None" id="conflictin" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Attendance</label>
                  <vue-select
                    :options="Attendancein"
                    placeholder="None"
                    id="attendancein"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Ability To Meet Deadline</label>
                  <vue-select :options="Abilityin" placeholder="None" id="abilityin" />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="PerformanceStatusin"
                    placeholder="Active"
                    id="performanceStatusin"
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
  <!-- /Add Performance Indicator Modal -->

  <!-- Delete Performance Indicator Modal -->
  <div class="modal custom-modal fade" id="delete_indicator" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Performance Indicator List</h3>
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
  <!-- /Delete Performance Indicator Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      DesignationIOS: ["Select Designation", "Web Designer", "IOS Developer"],
      Customerin: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Marketingin: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Managementin: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Administrationin: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Presentationin: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Qualityin: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      PerformanceStatusin: ["Active", "Inactive"],
      Indicatorin: ["None", "Beginner", "Intermediate", "Advanced"],
      Professionalismin: ["None", "Beginner", "Intermediate", "Advanced"],
      Teamin: ["None", "Beginner", "Intermediate", "Advanced"],
      Criticalin: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictin: ["None", "Beginner", "Intermediate", "Advanced"],
      Attendancein: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictin: ["None", "Beginner", "Intermediate", "Advanced"],
      Abilityin: ["None", "Beginner", "Intermediate", "Advanced"],
      Efficiencyin: ["None", "Beginner", "Intermediate", "Advanced"],
    };
  },
};
</script>
