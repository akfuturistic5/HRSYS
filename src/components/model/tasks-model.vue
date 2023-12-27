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
                    :options="AddTasksClient"
                    id="addTasksClient"
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
                      placeholder="Start Date"
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
                      placeholder="End Date"
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
                    :options="AddTasksTime"
                    id="addTasksTime"
                    placeholder="Hourly"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="AddTasksPriority"
                    id="addTasksPriority"
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
                      class="avatar"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Jeffery Lalor"
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
                      class="avatar"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Doe"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      class="avatar"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Richard Miles"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      class="avatar"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="John Smith"
                    >
                      <img
                        src="@/assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a
                      class="avatar"
                      href="javascript:void(0);"
                      data-bs-toggle="tooltip"
                      title="Mike Litorus"
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

  <!-- Assignee Modal -->
  <div id="assignee" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Assign to this task</h5>
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
          <div class="input-group m-b-30">
            <input
              placeholder="Search to add"
              class="form-control search-input"
              type="text"
            />
            <button class="btn btn-primary">Search</button>
          </div>
          <div>
            <ul class="chat-user-list">
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar"
                      ><img
                        src="@/assets/img/profiles/avatar-09.jpg"
                        alt="User Image"
                    /></span>
                    <div class="media-body align-self-center text-nowrap">
                      <div class="user-name">Richard Miles</div>
                      <span class="designation">Web Developer</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar"
                      ><img
                        src="@/assets/img/profiles/avatar-10.jpg"
                        alt="User Image"
                    /></span>
                    <div class="media-body align-self-center text-nowrap">
                      <div class="user-name">John Smith</div>
                      <span class="designation">Android Developer</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar">
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                      />
                    </span>
                    <div class="media-body align-self-center text-nowrap">
                      <div class="user-name">Jeffery Lalor</div>
                      <span class="designation">Team Leader</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="submit-section">
            <button class="btn btn-primary submit-btn">Assign</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Assignee Modal -->

  <!-- Task Followers Modal -->
  <div id="task_followers" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add followers to this task</h5>
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
          <div class="input-group m-b-30">
            <input
              placeholder="Search to add"
              class="form-control search-input"
              type="text"
            />
            <button class="btn btn-primary">Search</button>
          </div>
          <div>
            <ul class="chat-user-list">
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar"
                      ><img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="User Image"
                    /></span>
                    <div class="media-body media-middle text-nowrap">
                      <div class="user-name">Jeffery Lalor</div>
                      <span class="designation">Team Leader</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar"
                      ><img
                        src="@/assets/img/profiles/avatar-08.jpg"
                        alt="User Image"
                    /></span>
                    <div class="media-body media-middle text-nowrap">
                      <div class="user-name">Catherine Manseau</div>
                      <span class="designation">Android Developer</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <div class="chat-block d-flex">
                    <span class="avatar"
                      ><img
                        src="@/assets/img/profiles/avatar-26.jpg"
                        alt="User Image"
                    /></span>
                    <div class="media-body media-middle text-nowrap">
                      <div class="user-name">Wilmer Deluna</div>
                      <span class="designation">Team Leader</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="submit-section">
            <button class="btn btn-primary submit-btn">Add to Follow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Task Followers Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      AddTasksClient: ["Global Technologies", "Delta Infotech"],
      AddTasksTime: ["Hourly", "Fixed"],
      AddTasksPriority: ["High", "Medium", "Low"],
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
