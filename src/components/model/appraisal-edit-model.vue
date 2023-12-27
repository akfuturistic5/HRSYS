<template>
  <!-- Edit Performance Appraisal Modal -->
  <div id="edit_appraisal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Performance Appraisal</h5>
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
                  <label class="col-form-label">Employee</label>
                  <vue-select
                    :options="Employeedit"
                    placeholder="Mike Litorus"
                    id="employeedeo"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Select Date <span class="text-danger">*</span></label
                  >
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdate"
                      class="form-control floating datetimepicker"
                      value="7/08/2023"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="tab-box">
                      <div class="row user-tabs">
                        <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                          <ul class="nav nav-tabs nav-tabs-solid">
                            <li class="nav-item">
                              <a
                                href="#appr_technical1"
                                data-bs-toggle="tab"
                                class="nav-link active"
                                >Technical</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                href="#appr_organizational1"
                                data-bs-toggle="tab"
                                class="nav-link"
                                >Organizational</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div
                        id="appr_technical1"
                        class="pro-overview tab-pane fade show active"
                      >
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="bg-white">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>Technical Competencies</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colspan="2">Indicator</th>
                                    <th colspan="2">Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Customer Experience</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Customeredit"
                                        placeholder="None"
                                        id="customeredit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Marketing</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Marketingedit"
                                        placeholder="None"
                                        id="marketingedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Management</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Managementedit"
                                        placeholder="None"
                                        id="managementedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Administration</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Administrationedit"
                                        placeholder="None"
                                        id="administrationedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Presentation Skill</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Presentationedit"
                                        placeholder="None"
                                        id="presentationedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Quality Of Work</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Qualityedit"
                                        placeholder="None"
                                        id="qualityedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Efficiency</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Efficiencyedit"
                                        placeholder="None"
                                        id="efficiencyedit"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="appr_organizational1">
                        <div class="row">
                          <div class="col-sm-12">
                            <div class="bg-white">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th>Organizational Competencies</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th colspan="2">Indicator</th>
                                    <th colspan="2">Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Integrity</td>
                                    <td colspan="2">Beginner</td>
                                    <td>
                                      <vue-select
                                        :options="Indicatoredit"
                                        placeholder="None"
                                        id="indicatoredit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Professionalism</td>
                                    <td colspan="2">Beginner</td>
                                    <td>
                                      <vue-select
                                        :options="Professionalismedit"
                                        placeholder="None"
                                        id="professionalismedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Team Work</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Teamedit"
                                        placeholder="None"
                                        id="teamedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Critical Thinking</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Criticaledit"
                                        placeholder="None"
                                        id="criticaledit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Conflict Management</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Conflictedit"
                                        placeholder="None"
                                        id="conflictedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Attendance</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Attendanceedit"
                                        placeholder="None"
                                        id="attendanceedit"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Ability To Meet Deadline</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Abilityedit"
                                        placeholder="None"
                                        id="abilityedit"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="PerformanceStatusedit"
                    placeholder="None"
                    id="performanceStatusedit"
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
  <!-- /Edit Performance Appraisal Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Employeedit: ["Select Employee", "John Deo", "Mike Litorus"],
      Customeredit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Marketingedit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Managementedit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Administrationedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Presentationedit: [
        "None",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert / Leader",
      ],
      Qualityedit: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Efficiencyedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Indicatoredit: ["None", "Beginner", "Intermediate", "Advanced"],
      Professionalismedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Teamedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Criticaledit: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Attendanceedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflictedit: ["None", "Beginner", "Intermediate", "Advanced"],
      Abilityedit: ["None", "Beginner", "Intermediate", "Advanced"],
      PerformanceStatusedit: ["Active", "Inactive"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
    
  },
};
</script>
