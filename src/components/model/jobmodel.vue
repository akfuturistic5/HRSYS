<template>
  <div class="main-wrapper">
    <!-- Add Job Modal -->
    <div id="add_job" class="modal custom-modal fade" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Job</h5>
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
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Title</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Department</label>
                    <vue-select :options="Department" id="department" placeholder="-" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Location</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">No of Vacancies</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Experience</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Age</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Salary From</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Salary To</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Type</label>
                    <vue-select :options="JobType" id="jobtype" placeholder="Full Time" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Status</label>
                    <vue-select :options="Status" id="status" placeholder="Open" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Start Date</label>
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Expired Date</label>
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Description</label>
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
    <!-- /Add Job Modal -->

    <!-- Edit Job Modal -->
    <div id="edit_job" class="modal custom-modal fade" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <button type="button" class="btn-close" data-bs-dismiss="modal">&times;</button>
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Job</h5>
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
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Title</label>
                    <input class="form-control" type="text" value="Web Developer" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Department</label>
                    <vue-select
                      :options="Departmentjob"
                      id="departmentjob"
                      placeholder="-"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Location</label>
                    <input class="form-control" type="text" value="California" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">No of Vacancies</label>
                    <input class="form-control" type="text" value="5" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Experience</label>
                    <input class="form-control" type="text" value="2 Years" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Age</label>
                    <input class="form-control" type="text" value="-" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Salary From</label>
                    <input type="text" class="form-control" value="32k" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Salary To</label>
                    <input type="text" class="form-control" value="38k" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Job Type</label>
                    <vue-select
                      :options="JobTypeJob"
                      id="jobtypejob"
                      placeholder="Full Time"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Status</label>
                    <vue-select :options="Statusjob" id="statusjob" placeholder="Open" />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Start Date</label>
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      value="3 Mar 2023"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Expired Date</label>
                    <input
                      type="text"
                      class="form-control datetimepicker"
                      value="31 May 2023"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Description</label>
                    <textarea class="form-control"></textarea>
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
    <!-- /Edit Job Modal -->

    <!-- Add Category Modal -->
    <div id="add_category" class="modal custom-modal fade" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Category</h5>
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
                <div class="col-md-12">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Add Category</label>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn">Cancel</button>
                <button class="btn btn-primary submit-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- /Add Questions Modal -->

    <!-- Delete Job Modal -->
    <div class="modal custom-modal fade" id="delete_job" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-header">
              <h3>Delete Job</h3>
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
    <!-- /Delete Job Modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Statusjob: ["Open", "Closed", "Cancelled"],
      Status: ["Open", "Closed", "Cancelled"],
      JobTypeJob: [
        "Full Time",
        "Part Time",
        "Internship",
        "Temporary",
        "Remote",
        "Others",
      ],
      JobType: ["Full Time", "Part Time", "Internship", "Temporary", "Remote", "Others"],
      Departmentjob: [
        "-",
        "Web Development",
        "Application Development",
        "IT Management",
        "Accounts Management",
        "Support Management",
        "Marketing",
      ],
      Department: [
        "-",
        "Web Development",
        "Application Development",
        "IT Management",
        "Accounts Management",
        "Support Management",
        "Marketing",
      ],
    };
  },
};
</script>
