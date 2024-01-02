<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1" />
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
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Designation'">
                    <div>{{ record.Designation }}</div>
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
                            data-bs-target="#edit_designation"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_designation"
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
      <designation-model :form="create_form" :departmentlist="department_list" @create-designation="createDesignation" ref="designationsmodel" ></designation-model>
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
    title: "Designation",
    dataIndex: "name",
    key: "name",
	sorter: false,
    /*sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },*/
  },
  {
    title: "Department",
    dataIndex: ["department","name"],
	sorter: false,
	/*sorter: {
      compare: (a, b) => {
	  
	     console.log(a);
		 
	    a = a.department.name.toLowerCase();
        b = b.department.name.toLowerCase();
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
      columns,
      data,
      title: "Designations",
      path: "Dashboard",
      text: "Designations",
      text1: "Add Designation",
	  pagination: pagination,
	  create_form: { "designation_name": "", "department": "" },
	  department_list : {},
    };
  },
  methods: {
	createDesignation(formval){
		console.log('create designation method called');
		console.log(formval);
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
		
		axios.post("/designations", formval)
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

			 this.$refs.designationsmodel.closeDialog();
			 
			 this.create_form = { "designation_name": "", "department": "" };
			 
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
		
		axios.get("/designations", params)
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
	},
	loadAllDepartments(params){
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		axios.get("/departments/all", params)
			.then((response) => {
				
				console.log('all departments loaded');
				console.log(response.data.data);
				
				this.department_list = response.data.data;
					  
			}).catch((error) => {
			  
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
	
	this.loadAllDepartments([]);
	
	console.log('mount called');
	
  }
};
</script>
