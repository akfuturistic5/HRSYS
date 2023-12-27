<template>
  <div class="card leave-box mb-0" id="leave_custom01">
    <div class="card-body">
      <div class="h3 card-title with-switch">
        LOP
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="switch_custom01"
            v-model="switchValueLop"
          />
          <label class="onoffswitch-label" for="switch_custom01">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
        </div>
        <button class="btn btn-danger leave-delete-btn" type="button">Delete</button>
      </div>
      <div class="leave-item">
        <!-- Annual Days Leave -->
        <div class="leave-row">
          <div class="leave-left">
            <div class="input-box">
              <div class="input-block mb-3">
                <label class="col-form-label">Days</label>
                <input v-model="days" :disabled="isEditings" class="form-control" />
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button @click="toggleEdit" class="btn" :class="editBtnClass">
              {{ editBtnText }}
            </button>
            <button v-if="isEditing" class="btn btn-primary leave-save-btn" type="submit">
              Save
            </button>
          </div>
        </div>
        <!-- /Annual Days Leave -->

        <!-- Carry Forward -->
        <div class="leave-row">
          <div class="leave-left">
            <div class="input-box">
              <label class="d-block col-form-label">Carry forward</label>
              <div class="leave-inline-form">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="carryForward"
                    id="carry_no_01"
                    value="option1"
                    :disabled="!isEditingCarry"
                    v-model="carryOption"
                  />
                  <label class="form-check-label" for="carry_no">No</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="carryForward"
                    id="carry_yes_01"
                    value="option2"
                    :disabled="!isEditingCarry"
                    v-model="carryOption"
                  />
                  <label class="form-check-label" for="carry_yes">Yes</label>
                </div>
                <div class="input-group">
                  <span class="input-group-text">Max</span>
                  <input
                    type="text"
                    class="form-control"
                    :disabled="!isEditingCarry"
                    v-model="maxValue"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button @click="toggleEditCarry" class="btn" :class="editBtnClassCarry">
              {{ editBtnTextCarry }}
            </button>
            <button
              v-if="isEditingCarry"
              class="btn btn-primary leave-save-btn"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <!-- /Carry Forward -->
        <!-- Earned Leave -->
        <div class="leave-row">
          <div class="leave-left">
            <div class="input-box">
              <label class="d-block col-form-label">Earned leave</label>
              <div class="leave-inline-form">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    :disabled="!isEditingleave || !switchValueLop"
                  />
                  <label class="form-check-label" for="earned_no">No</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    :disabled="!isEditingleave || !switchValueLop"
                  />
                  <label class="form-check-label" for="earned_yes">Yes</label>
                </div>
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button @click="toggleEditleave" class="btn" :class="editBtnClassleave">
              {{ editBtnTextleave }}
            </button>
            <button
              v-if="isEditingleave"
              class="btn btn-primary leave-save-btn"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <!-- /Earned Leave -->
      </div>

      <!-- Custom Policy -->
      <div class="custom-policy">
        <div class="leave-header">
          <div class="title">Custom policy</div>
          <div class="leave-action">
            <button
              class="btn btn-sm btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#add_custom_policy"
            >
              <i class="fa-solid fa-plus"></i> Add custom policy
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-hover table-nowrap leave-table mb-0">
            <thead>
              <tr>
                <th class="l-name">Name</th>
                <th class="l-days">Days</th>
                <th class="l-assignee">Assignee</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5 Year Service</td>
                <td>5</td>
                <td>
                  <a href="javascript:;" class="avatar"
                    ><img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image"
                  /></a>
                  <a href="javascript:;">John Doe</a>
                </td>
                <td class="text-end">
                  <div class="dropdown dropdown-action">
                    <a
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      class="action-icon dropdown-toggle"
                      href="javascript:;"
                      ><i class="material-icons">more_vert</i></a
                    >
                    <div class="dropdown-menu dropdown-menu-right">
                      <a
                        href="javascript:;"
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_custom_policy"
                        ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                      >
                      <a
                        href="javascript:;"
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_custom_policy"
                        ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- /Custom Policy -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      days: "", // Initialize days
      isEditing: false,
      isEditings: true,
      carryOption: "no",
      maxValue: "",
      isEditingCarry: false,
      isEditingCarrys: true,
      isEditingleave: false,
      isEditingleaves: true,
      switchValueLop: true,
    };
  },
  computed: {
    editBtnClass() {
      return this.isEditing ? "btn btn-white leave-cancel-btn" : "leave-edit-btn";
    },
    editBtnText() {
      return this.isEditing ? "Cancel" : "Edit";
    },
    editBtnClassCarry() {
      return this.isEditingCarry ? "btn btn-white leave-cancel-btn" : "leave-edit-btn";
    },
    editBtnTextCarry() {
      return this.isEditingCarry ? "Cancel" : "Edit";
    },
    editBtnClassleave() {
      return this.isEditingleave ? "btn btn-white leave-cancel-btn" : "leave-edit-btn";
    },
    editBtnTextleave() {
      return this.isEditingleave ? "Cancel" : "Edit";
    },
  },
  methods: {
    toggleEdit() {
      if (!this.switchValueLop) {
        return; // Don't allow editing if the switch is off
      }
      if (this.isEditing) {
        // Perform actions when cancelling editing
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditing = !this.isEditing;
      this.isEditings = !this.isEditings;
    },
    toggleEditCarry() {
      if (!this.switchValueLop) {
        return; // Don't allow editing if the switch is off
      }
      if (this.isEditingCarry) {
        // Perform actions when cancelling editing
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditingCarry = !this.isEditingCarry;
      this.isEditingCarrys = !this.isEditingCarrys;
    },
    toggleEditleave() {
      if (!this.switchValueLop) {
        return; // Don't allow editing if the switch is off
      }
      if (this.isEditingleave) {
        // Perform actions when cancelling editing
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditingleave = !this.isEditingleave;
      this.isEditingleaves = !this.isEditingleaves;
    },
  },
};
</script>
