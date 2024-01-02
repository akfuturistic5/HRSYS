<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="showentries mb-3">
              <label
                >Show
                <select v-model="pagination.pageSize" @change="updatePerPage">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries</label
              >
            </div>
            <div>
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
				:pagination="pagination"
				@change="handleTableChange"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Name'">
                    <div>{{ record.Name }}</div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_department"
							@click="EditDept(record)"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_department"
							@click="DeleteDept(record.id)"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
	
      <departments-model :form="create_form" :editform="edit_form" :deldep_id="deldepid" @create-department="createDepartment" @update-department="updateDepartment" @delete-department="deleteDepartment" ref="departmentsmodel" ></departments-model>
	  
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
var pagination = {total: 0,
	    current: 1,
	    pageSize: 10,};

const columns = [
  {
	  title: "#",
	  dataIndex: "id",
	  key: "id",
	  customRender: ({ index }) => {
		return pagination.current === 1 ? index + 1 : (pagination.current - 1) * pagination.pageSize + (index + 1);
	  },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
	
    /*sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },*/
  },
  {
    title: "Action",
    sorter: false,
    key: "action",
    class: "text-end",
  },
];
const data = [];

import axios from 'axios';
import { notification } from "ant-design-vue";

export default {
  data() {
    return {
      title: "Department",
      path: "Dashboard",
      text: "Department",
      text1: "Add Department",
      columns,
      data,
	  perpage: 10,
	  create_form: { department_name: ''},
	  edit_form: { },
	  pagination: pagination,
	  deldepid: 0,
    };
  },
  methods: {
	handleTableChange(pagesize){
		
		console.log('adad');
		console.log(pagesize);
		
		var params = {
		   params: { per_page: pagesize.pageSize,page:pagesize.current }
		};
		
		this.loadCommonData(params);
		
	},
	EditDept(record){
		this.edit_form = Object.assign({}, record);
	},
	DeleteDept(deptid){
		this.deldepid = deptid;
	},
	deleteDepartment(depid){
		console.log('Parent Dept Called');
		console.log(depid);
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
		
		axios.delete("/departments/"+depid, [])
          .then( (response) => {
				
			 loader.hide();
			  
			  notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_SUCCESS_COLOR,
					},
				});

			 this.$refs.departmentsmodel.closeDialog();
			 
			 var params = {
				   params: { per_page: this.pagination.pageSize }
				};
				
			 this.loadCommonData(params);
					
		}).catch(error => {
          
			 loader.hide();
			 
			if(error.response){
			
				var response = (error.response);
					
				notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
				
			}else{
				
				notification.open({
					message: 'Server Error',
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
			}
			
        });
		
	},
	updateDepartment(formval){
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
			
		var postform = new FormData();
		postform.append('department_name',formval.name);
		
		axios.put("/departments/"+formval.id, postform)
          .then( (response) => {
				
				
			  loader.hide();
			  
			  notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_SUCCESS_COLOR,
					},
				});

			 this.$refs.departmentsmodel.closeDialog();
			 
			 this.create_form.department_name = '';
			 
			 var params = {
				   params: { per_page: this.pagination.pageSize }
				};
				
			 this.loadCommonData(params);
					
		}).catch(error => {
          
			 loader.hide();
			 
			if(error.response){
			
				var response = (error.response);
					
				notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
				
			}else{
				
				notification.open({
					message: 'Server Error',
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
			}
			
        });
		
	},
	createDepartment(formval){
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
		
		axios.post("/departments", formval)
          .then( (response) => {
				
				
			  loader.hide();
			  
			  notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_SUCCESS_COLOR,
					},
				});

			 this.$refs.departmentsmodel.closeDialog();
			 
			 this.create_form.department_name = '';
			 
			 var params = {
				   params: { per_page: this.pagination.pageSize }
				};
				
			 this.loadCommonData(params);
					
		}).catch(error => {
          
			 loader.hide();
			 
			if(error.response){
			
				var response = (error.response);
					
				notification.open({
					message: response.data.message,
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
				
			}else{
				
				notification.open({
					message: 'Server Error',
					placement: "topRight",
					duration: process.env.VUE_APP_NOTIFICATION_DURATION,
					style: {
					  background: process.env.VUE_APP_WARNING_COLOR,
					},
				});
			}
			
        });
		
	},
	updatePerPage(){
		console.log(this.pagination.pageSize);
		var params = {
          params: { per_page: this.pagination.pageSize }
        };
        this.loadCommonData(params);
		
	},
	loadCommonData(params){
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
						// Optional parameters
						container: this.fullPage ? null : this.$refs.formContainer,
						canCancel: false
					});
		
		axios.get("/departments", params)
			.then((response) => {
				
				console.log(response.data.data);
				this.pagination.total = response.data.data.total;
				this.pagination.current = response.data.data.current_page;
				this.pagination.pageSize = response.data.data.per_page;
				
				this.data = response.data.data.data;
				
				loader.hide();
				
				
					  
			}).catch((error) => {
			  
			  loader.hide();
			  
			  var response = (error.response);
			  
			  if(error.response.status == 401 && response.data.message == 'Unauthenticated.'){
				
				localStorage.clear();
				
				notification.open({
						message: 'Please Login',
						placement: "topRight",
						duration: process.env.VUE_APP_NOTIFICATION_DURATION,
						style: {
						  background: process.env.VUE_APP_WARNING_COLOR,
						},
					});
					
				this.$router.push({name: 'login'}).catch(error => {}) 
				 
			  }else{
				
				this.errorMessage = error.message;
				notification.open({
						message: response.data.message,
						placement: "topRight",
						duration: process.env.VUE_APP_NOTIFICATION_DURATION,
						style: {
						  background: process.env.VUE_APP_WARNING_COLOR,
						},
					});
				  
			  }
			  
			});
	}
  },
  mounted() {
	
	var params = {
       params: { per_page: this.pagination.pageSize }
    };
	
	this.loadCommonData(params);
	
	
  }
};
</script>
