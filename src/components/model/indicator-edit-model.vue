<template>
  <!-- Edit Performance Indicator Modal -->
  <div id="edit_indicator" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Performance Indicator</h5>
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
                    :options="DesignationIOSedit"
                    id="designationIOSedit"
                    placeholder="Web Designer"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="modal-sub-title">Technical</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Customer Experience</label>
                  <vue-select
                    :options="Customerinedit"
                    placeholder="Advanced"
                    id="customerinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Marketing</label>
                  <vue-select
                    :options="Marketinginedit"
                    placeholder="Expert/Leader"
                    id="marketinginedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Management</label>
                  <vue-select
                    :options="Managementinedit"
                    placeholder="Intermediate"
                    id="managementinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Administration</label>
                  <vue-select
                    :options="Administrationinedit"
                    placeholder="Advanced"
                    id="administrationinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Presentation Skill</label>
                  <vue-select
                    :options="Presentationinedit"
                    placeholder="None"
                    id="presentationinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Quality Of Work</label>
                  <vue-select
                    :options="Qualityinedit"
                    placeholder="None"
                    id="qualityinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Efficiency</label>
                  <vue-select
                    :options="Efficiencyinedit"
                    placeholder="None"
                    id="efficiencyinedit"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="modal-sub-title">Organizational</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Integrity</label>
                  <vue-select
                    :options="Indicatorinedit"
                    placeholder="None"
                    id="indicatorinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Professionalism</label>
                  <vue-select
                    :options="Professionalisminedit"
                    placeholder="Intermediate"
                    id="professionalisminedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Work</label>
                  <vue-select :options="Teaminedit" placeholder="None" id="teaminedit" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Critical Thinking</label>
                  <vue-select
                    :options="Criticalinedit"
                    placeholder="Advanced"
                    id="criticalinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Conflict Management</label>
                  <vue-select
                    :options="Conflictinedit"
                    placeholder="Advanced"
                    id="conflictinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Attendance</label>
                  <vue-select
                    :options="Attendanceinedit"
                    placeholder="Intermediate"
                    id="attendanceinedit"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Ability To Meet Deadline</label>
                  <vue-select
                    :options="Abilityinedit"
                    placeholder="Advanced"
                    id="abilityinedit"
                  />
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="PerformanceStatusinedit"
                    placeholder="Active"
                    id="performanceStatusinedit"
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
  <!-- /Edit Performance Indicator Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      DesignationIOSedit: ["Select Designation", "Web Designer", "IOS Developer"],
      Customerinedit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Marketinginedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Managementinedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Administrationinedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Presentationinedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Qualityinedit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Professionalisminedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Teaminedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Criticalinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Attendanceinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Abilityinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      PerformanceStatusinedit: ["Active", "Inactive"],
      Indicatorinedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Efficiencyinedit: ["None", "Beginner", "Intermediate", "Advanced"],
    };
  },
};
</script>
