<template>
  <div class="card leave-box" id="leave_sick">
    <div class="card-body">
      <div class="h3 card-title with-switch">
        Sick
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="switch_sick"
            v-model="switchValueSick"
          />
          <label class="onoffswitch-label" for="switch_sick">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
        </div>
      </div>
      <div class="leave-item">
        <div class="leave-row">
          <div class="leave-left">
            <div class="input-box">
              <div class="input-block mb-3">
                <label class="col-form-label">Days</label>
                <input
                  v-model="days"
                  :disabled="isEditings"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button @click="toggleEdit" class="btn" :class="editBtnClass">
              {{ editBtnText }}
            </button>
            <button
              v-if="isEditing"
              class="btn btn-primary leave-save-btn"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hospitalisation Leave -->
  <div class="card leave-box" id="leave_hospitalisation">
    <div class="card-body">
      <div class="h3 card-title with-switch">
        Hospitalisation
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="switch_hospitalisation"
            v-model="switchValueHospitalisation"
          />
          <label class="onoffswitch-label" for="switch_hospitalisation">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
        </div>
      </div>
      <div class="leave-item">
        <!-- Annual Days Leave -->
        <div class="leave-row">
          <div class="leave-left">
            <div class="input-box">
              <div class="input-block mb-3">
                <label class="col-form-label">Days</label>
                <input
                  v-model="days1"
                  :disabled="!switchValueHospitalisation"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button @click="toggleEditHos" class="btn" :class="editBtnClassHos">
              {{ editBtnTextHos }}
            </button>
            <button
              v-if="isEditingHos"
              class="btn btn-primary leave-save-btn"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <!-- /Annual Days Leave -->
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
                    ><img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
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
                      <a href="javascript:;" class="dropdown-item"
                        ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                      >
                      <a href="javascript:;" class="dropdown-item"
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
  <!-- /Hospitalisation Leave -->
</template>
<script>
export default {
  data() {
    return {
      days: "", // Initialize days
      days1: "",
      isEditing: false,
      isEditings: true,
      isEditingHos: false,
      isEditingsHos: true,
      switchValueSick: true,
      switchValueHospitalisation: false,
    };
  },
  computed: {
    editBtnClass() {
      return this.isEditing
        ? "btn btn-white leave-cancel-btn"
        : "leave-edit-btn";
    },
    editBtnClassHos() {
      return this.isEditingHos
        ? "btn btn-white leave-cancel-btn"
        : "leave-edit-btn";
    },
    editBtnText() {
      return this.isEditing ? "Cancel" : "Edit";
    },
    editBtnTextHos() {
      return this.isEditingHos ? "Cancel" : "Edit";
    },
  },
  methods: {
    toggleEdit() {
      if (!this.switchValueSick) {
        return; // Don't allow editing if the switch is off
      }
      if (this.isEditing) {
        // Perform actions when cancelling editing
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditing = !this.isEditing;
      this.isEditings = !this.isEditings;
    },

    toggleEditHos() {
      if (!this.switchValueHospitalisation) {
        return; // Don't allow editing if the switch is off
      }
      if (this.isEditingHos) {
        // Perform actions when cancelling editing
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditingHos = !this.isEditingHos;
      this.isEditingsHos = !this.isEditingsHos;
    },
  },
};
</script>
