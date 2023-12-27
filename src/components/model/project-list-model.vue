<template>
  <!-- Create Project Modal -->
  <div id="create_project" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Project</h5>
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
                  <label class="col-form-label">Project Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Client</label>
                  <vue-select
                    :options="AddProjectsClient"
                    id="addprojectsclient"
                    placeholder="Global Technologies"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Start Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdate"
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
                  <label class="col-form-label">End Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdateone"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="input-block mb-3">
                  <label class="col-form-label">Rate</label>
                  <input placeholder="$50" class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-3">
                <div class="input-block mb-3">
                  <label class="col-form-label">&nbsp;</label>
                  <vue-select
                    :options="AddProjectsTime"
                    id="addProjectsTime"
                    placeholder="Hourly"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="AddProjectsPriority"
                    id="addProjectsPriority"
                    placeholder="High"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Project Leader</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Leader</label>
                  <div class="project-members">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Jeffery Lalor"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Team</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Members</label>
                  <div class="project-members">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Doe"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Richard Miles"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Smith"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Mike Litorus"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                    <span class="all-team">+2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Description</label>
              <summernoteEditor
                v-model="myValue"
                @update:modelValue="summernoteChange($event)"
                @summernoteImageLinkInsert="summernoteImageLinkInsert"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Upload Files</label>
              <input class="form-control" type="file" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Create Project Modal -->

  <!-- Edit Project Modal -->
  <div id="edit_project" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Project</h5>
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
                  <label class="col-form-label">Project Name</label>
                  <input
                    class="form-control"
                    value="Project Management"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Client</label>
                  <vue-select
                    :options="EditProjectsClient"
                    id="editProjectsClient"
                    placeholder="Global Technologies"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Start Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdate"
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
                  <label class="col-form-label">End Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdateone"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-3">
                <div class="input-block mb-3">
                  <label class="col-form-label">Rate</label>
                  <input
                    placeholder="$50"
                    class="form-control"
                    value="$5000"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-sm-3">
                <div class="input-block mb-3">
                  <label class="col-form-label">&nbsp;</label>
                  <vue-select
                    :options="EditProjectsTime"
                    id="editProjectsTime"
                    placeholder="Hourly"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="EditProjectsPriority"
                    id="editProjectsPriority"
                    placeholder="High"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Project Leader</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Leader</label>
                  <div class="project-members">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Jeffery Lalor"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Team</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Team Members</label>
                  <div class="project-members">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Doe"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Richard Miles"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Smith"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Mike Litorus"
                      class="avatar"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-05.jpg"
                        alt="User Image"
                      />
                    </a>
                    <span class="all-team">+2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Description</label>
              <textarea
                rows="4"
                class="form-control"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Upload Files</label>
              <input class="form-control" type="file" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Project Modal -->

  <!-- Delete Project Modal -->
  <div class="modal custom-modal fade" id="delete_project" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Project</h3>
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
  <!-- /Delete Project Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      AddProjectsClient: ["Global Technologies", "Delta Infotech"],
      AddProjectsTime: ["Hourly", "Fixed"],
      AddProjectsPriority: ["High", "Medium", "Low"],
      EditProjectsClient: ["Global Technologies", "Delta Infotech"],
      EditProjectsTime: ["Hourly", "Fixed"],
      EditProjectsPriority: ["High", "Medium", "Low"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
      myValue: "description",
    };
  },
  methods: {
    summernoteChange(newValue) {
      // console.log("summernoteChange", newValue);
    },
    summernoteImageLinkInsert(...args) {
      // console.log("summernoteImageLinkInsert()", args);
    },
  },
};
</script>
