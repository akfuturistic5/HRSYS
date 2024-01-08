<template>
  <!-- Add Leave Modal -->
  <div id="add_leave" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Leave</h5>
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
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Leave Type <span class="text-danger">*</span></label
              >
			  <Field
                    name="leave_type_id"
                    as="select"
                    class="form-control"
					v-model="form.leave_type_id"
					:class="{ 'is-invalid': errors.leave_type_id }"
                  >
				  <option value="">Select Leave Type</option>
				  <option v-for="leavetype in leavetypelist" :key="leavetype.id" :value="leavetype.id">{{ leavetype.type }}</option>
				  <div class="invalid-feedback">{{ errors.leave_type_id }}</div>
                  <div class="leave_type_idshow text-danger" id="leave_type_id"></div>
			  </Field>
			  <!--
              <vue-select
                :options="SelectType"
                id="medical-leave"
                placeholder="Select Leave Type"
              /> -->
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >From <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="form.from"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">To <span class="text-danger">*</span></label>
              <div class="cal-icon">
                <datepicker
                  v-model="startdateone"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Number of days <span class="text-danger">*</span></label
              >
              <input class="form-control" readonly type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Remaining Leaves <span class="text-danger">*</span></label
              >
              <input class="form-control" readonly value="12" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Leave Reason <span class="text-danger">*</span></label
              >
              <textarea rows="4" class="form-control"></textarea>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Leave Modal -->

  <!-- Edit Leave Modal -->
  <div id="edit_leave" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Leave</h5>
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
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Leave Type <span class="text-danger">*</span></label
              >
              <vue-select
                :options="SelectLeave"
                id="casual"
                placeholder="Select Leave type"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >From <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  placeholder="01-01-2023"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">To <span class="text-danger">*</span></label>
              <div class="cal-icon">
                <datepicker
                  v-model="startdateone"
                  placeholder="01-01-2023"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Number of days <span class="text-danger">*</span></label
              >
              <input class="form-control" readonly type="text" value="2" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Remaining Leaves <span class="text-danger">*</span></label
              >
              <input class="form-control" readonly value="12" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Leave Reason <span class="text-danger">*</span></label
              >
              <textarea rows="4" class="form-control">Going to hospital</textarea>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Leave Modal -->

  <!-- Approve Leave Modal -->
  <div class="modal custom-modal fade" id="approve_leave" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Leave Approve</h3>
            <p>Are you sure want to approve for this leave?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a href="javascript:void(0);" class="btn btn-primary continue-btn"
                  >Approve</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn"
                  >Decline</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Approve Leave Modal -->

  <!-- Delete Leave Modal -->
  <div class="modal custom-modal fade" id="delete_approve" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Leave</h3>
            <p>Are you sure want to delete this leave?</p>
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
  <!-- /Delete Leave Modal -->
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());

import { Form, Field } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Form,
    Field,
  },
  props: {
    form: [Array, Object],
	leavetypelist: [Array, Object],
  },  
  data() {
    return {
      select2: null,
      SelectType: [
        "Select Leave Type",
        "Casual Leave 12 Days",
        "Medical Leave",
        "Loss of Pay",
      ],
      SelectLeave: ["Select Leave Type", "Casual Leave 12 Days"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
  methods: {
	onSubmit(values) {
		this.$emit("create-leave",values);
	},	
  },
  setup() {
    const schema = Yup.object().shape({
      leave_type_id: Yup.string().required("Leave Type is required"),
	});
	
	return {
      schema,
	};
  },
};
</script>
