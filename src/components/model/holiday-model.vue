<template>
  <!-- Add Holiday Modal -->
  <div class="modal custom-modal fade" id="add_holiday" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Holiday</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="addholidayclose"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Name <span class="text-danger">*</span></label
              >
              <Field
                    name="name"
                    type="text"
                    value=""
                    class="form-control"
					v-model="form.name"
					:class="{ 'is-invalid': errors.name }"
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                  <div class="nameshow text-danger" id="name"></div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Date <span class="text-danger">*</span>
				</label>
              <div class="cal-icon">
			  
                <datepicker
                  v-model="form.holiday_date"
                  class="form-control datetimepicker"
				  name="holiday_date"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
			<div class="input-block mb-3">
              <label class="col-form-label"
                >End Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
			  
                <datepicker
                  v-model="form.end_date"
                  class="form-control datetimepicker"
				  name="end_date"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
			<div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Holiday Modal -->
  <!-- Edit Holiday Modal -->
  <div class="modal custom-modal fade" id="edit_holiday" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Holiday</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="editholidayclose"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onUpdate" :validation-schema="editschema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Name <span class="text-danger">*</span></label
              >
               <Field
                    name="name"
                    type="text"
                    value=""
                    class="form-control"
					v-model="editform.name"
					:class="{ 'is-invalid': errors.name }"
                  />
                  <div class="invalid-feedback">{{ errors.name }}</div>
                  <div class="nameshow text-danger" id="name"></div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Holiday Date <span class="text-danger">*</span>
				</label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="editform.holiday_date"
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
                >End Date <span class="text-danger">*</span>
				</label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="editform.end_date"
                  placeholder="01-01-2023"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Holiday Modal -->

  <!-- Delete Holiday Modal -->
  <div class="modal custom-modal fade" id="delete_holiday" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Holiday</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary continue-btn" @click="deleteHoliday"
                  >Delete</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn" ref="deleteholidayclose"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Holiday Modal -->
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import moment from 'moment';

import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
   emits: ["createHoliday","updateHoliday","deleteHoliday"],
  components: {
    Form,
    Field,
  },
  props: {
    form: [Array, Object], 
    editform: [Array, Object],
	holiday_id: [Number,String]
  },
  data() {
    return {
      startdateone: currentDate,
      dateFormat: 'yyyy-MM-dd',
      startdate: currentDateOne,
    };
  },
  methods: {
	deleteHoliday(){
	  console.log('Delete Called');
	  this.$emit("delete-holiday",this.holiday_id);
	},
	onSubmit(values) {
		
		values.holiday_date = moment(this.form.holiday_date).format('YYYY-MM-DD');
		values.end_date = moment(this.form.holiday_date).format('YYYY-MM-DD');
		
		this.$emit("create-holiday",values);
	},
	onUpdate(values){
		console.log('Update Called!!');
		this.$emit("update-holiday",this.editform);
	},
	closeDialog(){
		this.$refs.addholidayclose.click();
		this.$refs.editholidayclose.click();
		this.$refs.deleteholidayclose.click();
	},
  },
  mounted() {
	
	console.log(this.editform);
	
  },
  setup() {
    const schema = Yup.object().shape({
      name: Yup.string().required("Holiday Name is required"),
    });
	
	const editschema = Yup.object().shape({
      name: Yup.string().required("Holiday Name is required"),
	});
	
    return {
      schema,
	  editschema
    };
  },
};
</script>
