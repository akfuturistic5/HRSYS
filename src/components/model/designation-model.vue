<template>
  <!-- Add Designation Modal -->
  <div id="add_designation" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Designation</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="adddesgclose"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Designation Name <span class="text-danger">*</span></label
              >
             <!-- <input class="form-control" type="text" /> -->
			  
			  <Field
                    name="designation_name"
                    type="text"
                    value=""
                    class="form-control"
					v-model="form.designation_name"
					:class="{ 'is-invalid': errors.designation_name }"
                  />
                  <div class="invalid-feedback">{{ errors.designation_name }}</div>
                  <div class="designation_nameshow text-danger" id="designation_name"></div>
				  
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Department <span class="text-danger">*</span></label
              >
			  <Field
                    name="department"
                    as="select"
                    class="form-control"
					v-model="form.department"
					:class="{ 'is-invalid': errors.department }"
                  >
				  <option value="">Select Department</option>
				  <option v-for="department in departmentlist" :key="department.id" :value="department.id">{{ department.name }}</option>
				  <div class="invalid-feedback">{{ errors.department }}</div>
                  <div class="departmentshow text-danger" id="department"></div>
			  </Field>
              
			  <!--<vue-select
                :options="Department"
                id="marketing"
                placeholder="Select Department"
              /> -->
			  
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Designation Modal -->

  <!-- Edit Designation Modal -->
  <div id="edit_designation" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Designation</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="editdesgclose"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onUpdate" :validation-schema="editschema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Designation Name <span class="text-danger">*</span></label
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
                >Department <span class="text-danger">*</span></label
              >
			  <Field
                    name="department"
                    as="select"
                    class="form-control"
					v-model="editform.department_id"
					:class="{ 'is-invalid': errors.department }"
                  >
				  <option value="">Select Department</option>
				  <option v-for="department in departmentlist" :key="department.id" :value="department.id">{{ department.name }}</option>
				  <div class="invalid-feedback">{{ errors.department }}</div>
                  <div class="departmentshow text-danger" id="department"></div>
			  </Field>
			  <!--
              <vue-select
                :options="Department"
                id="departmentid"
                placeholder="Select Department"
              /> -->
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Designation Modal -->

  <!-- Delete Designation Modal -->
  <div class="modal custom-modal fade" id="delete_designation" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Designation</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a href="javascript:void(0);" class="btn btn-primary continue-btn" @click="deleteDesignation"
                  >Delete</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn" ref="deletedesgclose"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Designation Modal -->
</template>

<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  emits: ["createDesignation","updateDesignation","deleteDesignation"], // <--- add this line
  components: {
    Form,
    Field,
  },
  props: {
    form: [Array, Object],
    departmentlist: [Array, Object],
	editform: [Array, Object],
	deldes_id:[Number,String]
  },
  data() {
    return {
      select2: null,
      Department: ["Select Department", "Web Development", "IT Management", "Marketing"],
    };
  },
  methods: {
	deleteDesignation(){
		console.log('Delete Called');
		this.$emit("delete-designation",this.deldes_id);
	},
	onSubmit(values) {
		this.$emit("create-designation",values);
	},
	onUpdate(values){
		console.log('Update Called!!');
		this.$emit("update-designation",this.editform);
	},
	closeDialog(){
		this.$refs.adddesgclose.click();
		this.$refs.editdesgclose.click();
		this.$refs.deletedesgclose.click();
	},
  },
  setup() {
    const schema = Yup.object().shape({
      designation_name: Yup.string().required("Designation Name is required"),
	  department: Yup.string().required("Department is required"),
    });
	
	const editschema = Yup.object().shape({
      name: Yup.string().required("Designation Name is required"),
	  department: Yup.string().required("Department is required"),
    });
	
    return {
      schema,
	  editschema
    };
  },
};
</script>
