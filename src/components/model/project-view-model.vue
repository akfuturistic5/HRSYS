<template>
  <!-- Assign Leader Modal -->
  <div id="assign_leader" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Assign Leader to this project</h5>
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
              placeholder="Search to add a leader"
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
            <button class="btn btn-primary submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Assign Leader Modal -->

  <!-- Assign User Modal -->
  <div id="assign_user" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Assign the user to this project</h5>
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
              placeholder="Search a user to assign"
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
            <button class="btn btn-primary submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Assign User Modal -->

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
                    :options="EditProjectViewClient"
                    id="editProjectViewClient"
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
                    :options="EditProjectViewTime"
                    id="editProjectViewTime"
                    placeholder="Hourly"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="EditProjectViewPriority"
                    id="editProjectViewPriority"
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
  <!-- Share Files Modal -->
  <div id="share_files" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Share File</h5>
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
          <div class="files-share-list">
            <div class="files-cont">
              <div class="file-type">
                <span class="files-icon"
                  ><i class="fa-regular fa-file-pdf"></i
                ></span>
              </div>
              <div class="files-info">
                <span class="file-name text-ellipsis"
                  >AHA Selfcare Mobile Application Test-Cases.xls</span
                >
                <span class="file-author"
                  ><a href="javascript:;">Bernardo Galaviz</a></span
                >
                <span class="file-date">May 31st at 6:53 PM</span>
              </div>
            </div>
          </div>
          <div class="input-block mb-3">
            <label class="col-form-label">Share With</label>
            <input class="form-control" type="text" />
          </div>
          <div class="submit-section">
            <button class="btn btn-primary submit-btn">Share</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Share Files Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      EditProjectViewClient: ["Global Technologies", "Delta Infotech"],
      EditProjectViewTime: ["Hourly", "Fixed"],
      EditProjectViewPriority: ["High", "Medium", "Low"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
};
</script>
