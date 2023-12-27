<template>
  <!-- Add Ticket Modal -->
  <div id="add_ticket" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Ticket</h5>
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
                  <label class="col-form-label">Ticket Subject</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Id</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Assign Staff</label>
                  <vue-select
                    :options="AddTicketsStaff"
                    id="addTicketsStaff"
                    placeholder="-"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Client</label>
                  <vue-select
                    :options="AddTicketsClient"
                    id="addTicketsClient"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="AddTicketsPriority"
                    id="addTicketsPriority"
                    placeholder="High"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">CC</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Assign</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Assignee</label>
                  <div class="project-members">
                    <a
                      title="John Smith"
                      data-placement="top"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Followers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Followers</label>
                  <div class="project-members">
                    <a
                      title="Richard Miles"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
                    </a>
                    <a
                      title="John Smith"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-10.jpg" alt="User Image" />
                    </a>
                    <a
                      title="Mike Litorus"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="User Image" />
                    </a>
                    <a
                      title="Wilmer Deluna"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-11.jpg" alt="User Image" />
                    </a>
                    <span class="all-team">+2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Upload Files</label>
                  <input class="form-control" type="file" />
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
  <!-- /Add Ticket Modal -->

  <!-- Edit Ticket Modal -->
  <div id="edit_ticket" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Ticket</h5>
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
                  <label class="col-form-label">Ticket Subject</label>
                  <input class="form-control" type="text" value="Laptop Issue" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Id</label>
                  <input class="form-control" type="text" readonly value="TKT-0001" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Assign Staff</label>
                  <vue-select
                    :options="EditTicketsStaff"
                    id="editTicketsStaff"
                    placeholder="-"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Client</label>
                  <vue-select
                    :options="EditTicketsClient"
                    id="editTicketsClient"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Priority</label>
                  <vue-select
                    :options="EditTicketsPriority"
                    id="editTicketsPriority"
                    placeholder="High"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">CC</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Assign</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Assignee</label>
                  <div class="project-members">
                    <a
                      title="John Smith"
                      data-placement="top"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Followers</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Ticket Followers</label>
                  <div class="project-members">
                    <a
                      title="Richard Miles"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
                    </a>
                    <a
                      title="John Smith"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-10.jpg" alt="User Image" />
                    </a>
                    <a
                      title="Mike Litorus"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-05.jpg" alt="User Image" />
                    </a>
                    <a
                      title="Wilmer Deluna"
                      data-bs-toggle="tooltip"
                      href="javascript:void(0);"
                      class="avatar"
                    >
                      <img src="@/assets/img/profiles/avatar-11.jpg" alt="User Image" />
                    </a>
                    <span class="all-team">+2</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Upload Files</label>
                  <input class="form-control" type="file" />
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
  <!-- /Edit Ticket Modal -->

  <!-- Delete Ticket Modal -->
  <div class="modal custom-modal fade" id="delete_ticket" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Ticket</h3>
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
  <!-- /Delete Ticket Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddTicketsClient: ["-", "Delta Infotech", "International Software Inc"],
      AddTicketsStaff: ["-", "Mike Litorus", "John Smith"],
      AddTicketsPriority: ["High", "Medium", "Low"],
      EditTicketsClient: ["-", "Delta Infotech", "International Software Inc"],
      EditTicketsStaff: ["-", "Mike Litorus", "John Smith"],
      EditTicketsPriority: ["High", "Medium", "Low"],
    };
  },
};
</script>
