<template>
  <!-- Add Performance Appraisal Modal -->
  <div id="add_appraisal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Give Performance Appraisal</h5>
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
                    :options="EmployeeAdd"
                    placeholder="Select Employee"
                    id="employeeAdd"
                  />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Select Date <span class="text-danger">*</span></label
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
                <div class="card">
                  <div class="card-body">
                    <div class="tab-box">
                      <div class="row user-tabs">
                        <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
                          <ul class="nav nav-tabs nav-tabs-solid">
                            <li class="nav-item">
                              <a
                                href="#appr_technical"
                                data-bs-toggle="tab"
                                class="nav-link active"
                                >Technical</a
                              >
                            </li>
                            <li class="nav-item">
                              <a
                                href="#appr_organizational"
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
                        id="appr_technical"
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
                                        :options="Customer"
                                        placeholder="None"
                                        id="customer"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Marketing</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Marketing"
                                        placeholder="None"
                                        id="marketing"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Management</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Management"
                                        placeholder="None"
                                        id="management"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Administration</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Administration"
                                        placeholder="None"
                                        id="administration"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Presentation Skill</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Presentation"
                                        placeholder="None"
                                        id="presentation"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Quality Of Work</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Quality"
                                        placeholder="None"
                                        id="quality"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Efficiency</td>
                                    <td colspan="2">Expert / Leader</td>
                                    <td>
                                      <vue-select
                                        :options="Efficiency"
                                        placeholder="None"
                                        id="efficiency"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="appr_organizational">
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
                                        :options="Indicator"
                                        placeholder="None"
                                        id="indicator"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Professionalism</td>
                                    <td colspan="2">Beginner</td>
                                    <td>
                                      <vue-select
                                        :options="Professionalism"
                                        placeholder="None"
                                        id="professionalism"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Team Work</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Team"
                                        placeholder="None"
                                        id="team"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Critical Thinking</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Critical"
                                        placeholder="None"
                                        id="critical"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Conflict Management</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Conflict"
                                        placeholder="None"
                                        id="conflict"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Attendance</td>
                                    <td colspan="2">Intermediate</td>
                                    <td>
                                      <vue-select
                                        :options="Attendance"
                                        placeholder="None"
                                        id="attendance"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2">Ability To Meet Deadline</td>
                                    <td colspan="2">Advanced</td>
                                    <td>
                                      <vue-select
                                        :options="Ability"
                                        placeholder="None"
                                        id="ability"
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
                    :options="PerformanceStatus"
                    placeholder="None"
                    id="performanceStatus"
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
  <!-- /Add Performance Appraisal Modal -->

  <!-- Delete Performance Appraisal Modal -->
  <div class="modal custom-modal fade" id="delete_appraisal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Performance Appraisal List</h3>
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
  <!-- /Delete Performance Appraisal Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      EmployeeAdd: ["Select Employee", "John Deo", "Mike Litorus"],
      Customer: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Marketing: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Management: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Administration: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Presentation: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      Quality: ["None", "Beginner", "Intermediate", "Advanced", "Expert / Leader"],
      PerformanceStatus: ["Active", "Inactive"],
      Efficiency: ["None", "Beginner", "Intermediate", "Advanced"],
      Indicator: ["None", "Beginner", "Intermediate", "Advanced"],
      Professionalism: ["None", "Beginner", "Intermediate", "Advanced"],
      Team: ["None", "Beginner", "Intermediate", "Advanced"],
      Critical: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflict: ["None", "Beginner", "Intermediate", "Advanced"],
      Attendance: ["None", "Beginner", "Intermediate", "Advanced"],
      Conflict: ["None", "Beginner", "Intermediate", "Advanced"],
      Ability: ["None", "Beginner", "Intermediate", "Advanced"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
  },
};
</script>
