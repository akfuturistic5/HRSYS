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
                            data-bs-target="#edit_holiday"
							@click="EditHoliday(record)"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
							@click="DeleteHoli(record.id)"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
				  <!--<template v-else-if="column.key === 'status'">
                    <div class="text-left">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
						  
						  v-if="record.completed == 1"
                        >
                          <i :class="record.Class"></i> Completed
                        </a>
						<a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
						  
						  v-if="record.completed == 0"
                        >
                          <i :class="record.Class"></i> Pending
                        </a>
						
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-purple"></i> Completed</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> Pending</a
                          >
                         
                        </div>
                      </div>
                    </div>
                  </template>-->
                </template>
              </a-table>
            </div>
          </div>
        </div>
		
		<!--
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Holiday Date</th>
                    <th>End Date</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
				 <tr class="holiday-upcoming" v-for="(item,index) in Holidays" :key="item.id">
					<td>{{ pagination.current === 1 ? index + 1 : (pagination.current - 1) * pagination.pageSize + (index + 1) }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.holiday_date }}</td>
					<td>{{ item.end_date }}</td>
					<td class="text-end">
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
                            data-bs-target="#edit_holiday"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
				 </tr>
                 <tr class="holiday-upcoming" v-for="item in Holidays" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.Title }}</td>
                    <td>{{ item.HolidayDate }}</td>
                    <td>{{ item.Day }}</td>
                    <td class="text-end">
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
                            data-bs-target="#edit_holiday"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
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
        </div> -->
      </div>
      <!-- /Page Content -->

      <holiday-model :form="create_form" @create-holiday="createHoliday" @update-holiday="updateHoliday" :editform="edit_form" :holiday_id="holidayid" @delete-holiday="deleteHoliday" ref="holidaysmodel" ></holiday-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
var pagination = {total: 0,current: 1,pageSize: 10};
		
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
    title: "Title",
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
    title: "Holiday Date",
    dataIndex: "holiday_date",
    key: "holiday_date",
	sorter: false,
  },
  {
    title: "End Date",
    dataIndex: "end_date",
    key: "end_date",
	sorter: false,
  },
  {
    title: "Action",
    sorter: false,
    key: "action",
    class: "text-end",
  },
];

const data = [];		

		
//import Holidays from "@/assets/json/holidays.json";
import inboxHeader from "@/components/breadcrumb/inbox-header.vue";

import axios from 'axios';
import { notification } from "ant-design-vue";
import moment from 'moment';
import { ref } from "vue";
const currentDate = ref(new Date());

export default {
  components: { inboxHeader },
  data() {
    return {
      Holidays: {},
      title: "Holidays",
      path: "Dashboard",
      text: "Holidays",
      text1: "Add Holiday",
	  pagination: pagination,
	  columns,
	  data,
	  create_form: { "name": "", "holiday_date": currentDate, "end_date" :currentDate},
	  edit_form: {},
	  holidayid:0,
    };
  },
  methods: {
	deleteHoliday(holidayid){
		console.log('Parent Called');
		console.log(holidayid);
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
		
		axios.delete("/holidays/"+holidayid, [])
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

			 this.$refs.holidaysmodel.closeDialog();
			 
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
	DeleteHoli(holidayid){
		this.holidayid = holidayid;
	},
	updateHoliday(formval){
		
		console.log(formval);
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
			
		var postform = new FormData();
		postform.append('name',formval.name);
		postform.append('holiday_date',moment(formval.holiday_date).format('YYYY-MM-DD'));
		postform.append('end_date',moment(formval.end_date).format('YYYY-MM-DD'));
		
		axios.put("/holidays/"+formval.id, postform)
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

			 this.$refs.holidaysmodel.closeDialog();
			 this.edit_form ={};
			 
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
	EditHoliday(record){
		
		//this.edit_form = Object.assign({}, record);
		
		var editobj = Object.assign({}, record);
		
		if(editobj.holiday_date != ""){
			editobj.holiday_date = new Date(editobj.holiday_date);
		}
		
		if(editobj.end_date != ""){
			editobj.end_date = new Date(editobj.end_date);
		}
		
		this.edit_form = editobj;
		
	},
	createHoliday(formval){
		console.log('create holiday called!!..');
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
				// Optional parameters
				container: this.fullPage ? null : this.$refs.formContainer,
				canCancel: false
			});
		
		axios.post("/holidays", formval)
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

			 this.$refs.holidaysmodel.closeDialog();
			 
			 this.create_form =  { "name": "", "holiday_date": currentDate, "end_date" :currentDate};
			 
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
	handleTableChange(pagesize){
		
		console.log('adad');
		console.log(pagesize);
		
		var params = {
		   params: { per_page: pagesize.pageSize,page:pagesize.current }
		};
		
		this.loadCommonData(params);
		
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
		
		axios.get("/holidays", params)
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
  },
  mounted() {
	
	var params = {
       params: { per_page: this.pagination.pageSize }
    };	
	this.loadCommonData(params);
	
  }
};
</script>
