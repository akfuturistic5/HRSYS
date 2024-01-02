<template>
  <!-- Add Department Modal -->
  <div id="add_department" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Department</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="adddeptclose"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Department Name <span class="text-danger">*</span>
			  </label>
              <Field
                    name="department_name"
                    type="text"
                    value=""
                    class="form-control"
					v-model="form.department_name"
					:class="{ 'is-invalid': errors.department_name }"
                  />
                  <div class="invalid-feedback">{{ errors.department_name }}</div>
                  <div class="department_namesshow text-danger" id="department_name"></div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
         </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Department Modal -->

  <!-- Edit Department Modal -->
  <div id="edit_department" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Department</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
			ref="editdeptclose"
		  >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Form @submit="onUpdate" :validation-schema="editschema" v-slot="{ errors }">
            <div class="input-block mb-3">
			  <label class="col-form-label"
                >Department Name <span class="text-danger">*</span></label
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
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Department Modal -->

  <!-- Delete Department Modal -->
  <div class="modal custom-modal fade" id="delete_department" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Department</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a href="javascript:void(0);" class="btn btn-primary continue-btn" @click="deleteDept"
                  >Delete</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn" ref="deletedeptclose"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Department Modal -->
</template>


<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import axios from 'axios';
import { notification } from "ant-design-vue";

export default {
  emits: ["createDepartment","updateDepartment","deleteDepartment"], // <--- add this line
  components: {
    Form,
    Field,
  },
  props: {
    form: [Array, Object],
    editform: [Array, Object],
	deldep_id:[Number,String]
  },
  data() {
    return {};
  },
  methods: {
	onSubmit(values) {
		this.$emit("create-department",values);
	},
	closeDialog(){
		this.$refs.adddeptclose.click();
		this.$refs.editdeptclose.click();
		this.$refs.deletedeptclose.click();
	},
	onUpdate(values){
		console.log('Update Called!!');
		this.$emit("update-department",this.editform);
	},
	deleteDept(){
		console.log('Delete Called');
		this.$emit("delete-department",this.deldep_id);
	}
  }, 
  setup() {
    const schema = Yup.object().shape({
      department_name: Yup.string().required("Department Name is required"),
    });
	
	const editschema = Yup.object().shape({
      name: Yup.string().required("Department Name is required"),
    });
	
    return {
      schema,
	  editschema
    };
  },
  beforeMount() {},
  mounted() {},
  computed: {}
};
</script>
