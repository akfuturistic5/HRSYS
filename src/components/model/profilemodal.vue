<template>
  <!-- Profile Modal -->
  <div id="profile_info" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Profile Information</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="profile-img-wrap edit-img">
                  <img
                    class="inline-block"
                    src="@/assets/img/profiles/avatar-02.jpg"
                    alt="user"
                  />
                  <div class="fileupload btn">
                    <span class="btn-text">edit</span>
                    <input class="upload" type="file" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">First Name</label>
                      <input type="text" class="form-control" value="John" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Last Name</label>
                      <input type="text" class="form-control" value="Doe" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Birth Date</label>
                      <div class="cal-icon">
                        <datepicker
                          v-model="startdate"
                          Value="05/06/2023"
                          class="form-control floating datetimepicker"
                          :editable="true"
                          :clearable="false"
                          :input-format="dateFormat"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Gender</label>
                      <vue-select
                        :options="Profilegender"
                        placeholder="Select"
                        id="profilegender"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    value="4487 Snowbird Lane"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">State</label>
                  <input type="text" class="form-control" value="New York" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    value="United States"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Pin Code</label>
                  <input type="text" class="form-control" value="10523" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Phone Number</label>
                  <input
                    type="text"
                    class="form-control"
                    value="631-889-3206"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Department <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Profiledepartment"
                    placeholder="Select"
                    id="profiledepartment"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Designation <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Profiledesignation"
                    placeholder="Select"
                    id="profiledesignation"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Reports To <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Profilereports"
                    placeholder="Select"
                    id="profilereports"
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
  <!-- /Profile Modal -->

  <!-- Personal Info Modal -->
  <div id="personal_info_modal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Personal Information</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Passport No</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Passport Expiry Date</label>
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
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Tel</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Nationality <span class="text-danger">*</span></label
                  >
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Religion</label>
                  <div>
                    <input class="form-control" type="text" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label"
                    >Marital status <span class="text-danger">*</span></label
                  >
                  <vue-select
                    :options="Profilestatus"
                    placeholder="Select"
                    id="profilestatus"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Employment of spouse</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No. of children </label>
                  <input class="form-control" type="text" />
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
  <!-- /Personal Info Modal -->
  <!-- Personal Info Modal -->
  <div id="raise-issue" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Raise Issue</h5>
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
                  <label class="col-form-label">Description</label>
                  <textarea rows="4" class="form-control"></textarea>
                </div>
              </div>
            </div>
            <div class="submit-section mt-0">
              <button class="btn btn-primary submit-btn w-100">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Personal Info Modal -->
  <!-- Family Info Modal -->
  <div id="family_info_modal" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Family Informations</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-scroll">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Family Member
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Name <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Relationship
                          <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Date of birth
                          <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Phone <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Education Informations
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Name <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Relationship
                          <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Date of birth
                          <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Phone <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="add-more">
                    <a href="javascript:void(0);"
                      ><i class="fa fa-plus-circle"></i> Add More</a
                    >
                  </div>
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
  <!-- /Family Info Modal -->

  <!-- Emergency Contact Modal -->
  <div
    id="emergency_contact_modal"
    class="modal custom-modal fade"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Personal Information</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Primary Contact</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Name <span class="text-danger">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Relationship <span class="text-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Phone <span class="text-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Phone 2</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Primary Contact</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Name <span class="text-danger">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Relationship <span class="text-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label"
                        >Phone <span class="text-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Phone 2</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
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
  <!-- /Emergency Contact Modal -->

  <!-- Education Modal -->
  <div id="education_info" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Education Informations</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-scroll">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Education Informations
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Oxford University"
                          class="form-control floating"
                        />
                        <label class="focus-label">Institution</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Computer Science"
                          class="form-control floating"
                        />
                        <label class="focus-label">Subject</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdate"
                            Value="01/06/2022"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Starting Date</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateone"
                            Value="31/05/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Complete Date</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="BE Computer Science"
                          class="form-control floating"
                        />
                        <label class="focus-label">Degree</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Grade A"
                          class="form-control floating"
                        />
                        <label class="focus-label">Grade</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Education Informations
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Oxford University"
                          class="form-control floating"
                        />
                        <label class="focus-label">Institution</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Computer Science"
                          class="form-control floating"
                        />
                        <label class="focus-label">Subject</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateTwo"
                            Value="01/06/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Starting Date</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateThree"
                            Value="31/05/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Complete Date</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="BE Computer Science"
                          class="form-control floating"
                        />
                        <label class="focus-label">Degree</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          value="Grade A"
                          class="form-control floating"
                        />
                        <label class="focus-label">Grade</label>
                      </div>
                    </div>
                  </div>
                  <div class="add-more">
                    <a href="javascript:void(0);"
                      ><i class="fa fa-plus-circle"></i> Add More</a
                    >
                  </div>
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
  <!-- /Education Modal -->

  <!-- Experience Modal -->
  <div id="experience_info" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Experience Informations</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-scroll">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Experience Informations
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="Digital Devlopment Inc"
                        />
                        <label class="focus-label floating">Company Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="United States"
                        />
                        <label class="focus-label">Location</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="Web Developer"
                        />
                        <label class="focus-label">Job Position</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdate"
                            Value="01/07/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Period From</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateone"
                            Value="08/06/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Period To</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">
                    Experience Informations
                    <a href="javascript:void(0);" class="delete-icon"
                      ><i class="far fa-trash-alt"></i
                    ></a>
                  </h3>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="Digital Devlopment Inc"
                        />
                        <label class="focus-label">Company Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="United States"
                        />
                        <label class="focus-label">Location</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <input
                          type="text"
                          class="form-control floating"
                          value="Web Developer"
                        />
                        <label class="focus-label">Job Position</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateTwo"
                            Value="01/07/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Period From</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3 form-focus focused">
                        <div class="cal-icon">
                          <datepicker
                            v-model="startdateThree"
                            Value="08/06/2023"
                            class="form-control floating datetimepicker"
                            :editable="true"
                            :clearable="false"
                            :input-format="dateFormat"
                          />
                        </div>
                        <label class="focus-label">Period To</label>
                      </div>
                    </div>
                  </div>
                  <div class="add-more">
                    <a href="javascript:void(0);"
                      ><i class="fa fa-plus-circle"></i> Add More</a
                    >
                  </div>
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
  <!-- /Experience Modal -->

  <div
    class="modal custom-modal fade"
    id="add-assign"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Assign Asset</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-12 selectnew">
                <div class="input-block mb-3">
                  <label class="col-form-label">Department</label>
                  <vue-select
                    :options="AddassetsDepartment"
                    id="AddassetsDepartment"
                    placeholder="Department 1"
                  />
                </div>
              </div>
              <div class="col-md-12 selectnew">
                <div class="input-block mb-3">
                  <label class="col-form-label">Assign to</label>
                  <vue-select
                    :options="Addassetsassign"
                    id="Addassetsassign"
                    placeholder="Customer"
                  />
                </div>
              </div>
              <div class="submit-section mt-3">
                <button class="btn btn-primary submit-btns w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Profilegender: ["Male", "Female"],
      Profiledepartment: [
        "Select Department",
        "Web Development",
        "IT Management",
        "Marketing",
      ],
      Profiledesignation: [
        "Select Designation",
        "Web Designer",
        "Web Developer",
        "Android Developer",
      ],
      Profilereports: ["-", "Wilmer Deluna", "Lesley Grauer", "Jeffery Lalor"],
      Profilestatus: ["Single", "Married"],
      AddassetsDepartment: ["Department 1", "Department 2"],
      Addassetsassign: ["Customer", "Client"],
      startdate: currentDate,
      startdateone: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: 'dd-MM-yyyy',
    };
  },
  name: "profilemodal",
};
</script>
