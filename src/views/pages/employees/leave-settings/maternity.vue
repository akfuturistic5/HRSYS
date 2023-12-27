<template>
  <div class="card leave-box" id="leave_maternity">
    <div class="card-body">
      <div class="h3 card-title with-switch">
        Maternity <span class="subtitle">Assigned to female only</span>
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="switch_maternity"
            v-model="switchValueMaternity"
          />
          <label class="onoffswitch-label" for="switch_maternity">
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
                  :disabled="isEditingsMaternity"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button
              @click="toggleEditMaternity"
              class="btn"
              :class="editBtnClassMaternity"
            >
              {{ editBtnTextMaternity }}
            </button>
            <button
              v-if="isEditingMaternity"
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
  <!-- Paternity Leave -->
  <div class="card leave-box" id="leave_paternity">
    <div class="card-body">
      <div class="h3 card-title with-switch">
        Paternity <span class="subtitle">Assigned to male only</span>
        <div class="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            class="onoffswitch-checkbox"
            id="switch_paternity"
            v-model="switchValuePaternity"
          />
          <label class="onoffswitch-label" for="switch_paternity">
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
                  v-model="days1"
                  :disabled="isEditingsPaternity"
                  class="form-control"
                />
              </div>
            </div>
          </div>
          <div class="leave-right">
            <button
              @click="toggleEditPaternity"
              class="btn"
              :class="editBtnClassPaternity"
            >
              {{ editBtnTextPaternity }}
            </button>
            <button
              v-if="isEditingPaternity"
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
  <!-- /Paternity Leave -->
</template>
<script>
export default {
  data() {
    return {
      days: "", // Initialize days
      days1: "",
      isEditingMaternity: false,
      isEditingsMaternity: true,
      isEditingPaternity: false,
      isEditingsPaternity: true,
      switchValueMaternity: true,
      switchValuePaternity: false,
    };
  },
  computed: {
    editBtnClassMaternity() {
      return this.isEditingMaternity
        ? "btn btn-white leave-cancel-btn"
        : "leave-edit-btn";
    },
    editBtnClassPaternity() {
      return this.isEditingPaternity
        ? "btn btn-white leave-cancel-btn"
        : "leave-edit-btn";
    },
    editBtnTextMaternity() {
      return this.isEditingMaternity ? "Cancel" : "Edit";
    },
    editBtnTextPaternity() {
      return this.isEditingPaternity ? "Cancel" : "Edit";
    },
  },
  methods: {
    toggleEditMaternity() {
      if (!this.switchValueMaternity) {
        return; // Don't allow editing if the Maternity switch is off
      }
      if (this.isEditingMaternity) {
        // Perform actions when cancelling editing for Maternity
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditingMaternity = !this.isEditingMaternity;
      this.isEditingsMaternity = !this.isEditingsMaternity;
    },
    toggleEditPaternity() {
      if (!this.switchValuePaternity) {
        return; // Don't allow editing if the Paternity switch is off
      }
      if (this.isEditingPaternity) {
        // Perform actions when cancelling editing for Paternity
        // For example, you might reset the input or update the data on cancel
      }
      this.isEditingPaternity = !this.isEditingPaternity;
      this.isEditingsPaternity = !this.isEditingsPaternity;
    },
  },
};
</script>
