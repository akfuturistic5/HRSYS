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

        <!-- Leave Statistics -->
        <div class="row">
          <div class="col-md-3 d-flex">
            <div class="stats-info w-100">
              <h6>Today Presents</h6>
              <h4>12 / 60</h4>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="stats-info w-100">
              <h6>Planned Leaves</h6>
              <h4>8 <span>Today</span></h4>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="stats-info w-100">
              <h6>Unplanned Leaves</h6>
              <h4>0 <span>Today</span></h4>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="stats-info w-100">
              <h6>Pending Requests</h6>
              <h4>12</h4>
            </div>
          </div>
        </div>
        <!-- /Leave Statistics -->

        <!-- Search Filter -->
        <!-- <leaves-search-filter></leaves-search-filter> -->
        <!-- /Search Filter -->

        <div class="row">
          <div class="col-md-12">
            <div class="showentries mb-3">
              <label
                >Show
                <select>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Employee'">
                    <h2 class="table-avatar">
					  <!--
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link> -->
                      <a href="javascript:;"
                        >{{ record.employee.name }} <span>{{ record.Role }}</span></a
                      >
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i :class="record.Class"></i> {{ record.status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-purple"></i> New</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> Pending</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#approve_leave"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Approved</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Declined</a
                          >
                        </div>
                      </div>
                    </div>
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
                            data-bs-target="#edit_leave"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
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

      <leaves-admin-model></leaves-admin-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>

var pagination = {total: 0,current: 1,pageSize: 10};

const columns = [
  {
    title: "Employee",
    dataIndex: "Employee",
    key: "Employee",
    sorter: false,
  },
  {
    title: "Leave Type",
    dataIndex: ["leave_type","type"],
    sorter: false,
  },
  {
    title: "From",
    dataIndex: "from",
    sorter: false,
  },
  {
    title: "To",
    dataIndex: "to",
    sorter: false,
  },
  /*{
    title: "No of Days",
    dataIndex: "NoofDays",
    sorter: {
      compare: (a, b) => {
        a = a.NoofDays.toLowerCase();
        b = b.NoofDays.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },*/
  {
    title: "Reason",
    dataIndex: "reason",
    sorter: false,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "Status",
    sorter: false,
  },
  {
    title: "Action",
    sorter: true,
    key: "action",
    text: "end",
  },
];

const data = [
 /* {
    Image: "avatar-09.jpg",
    Employee: "Richard Miles",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "8 Mar 2023",
    To: "9 Mar 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-02.jpg",
    Employee: "John Doe",
    Role: "Web Designer",
    LeaveType: "Medical Leave",
    From: "27 Feb 2023",
    To: "27 Feb 2023",
    NoofDays: "1 day",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-10.jpg",
    Employee: "John Smith",
    Role: "Android Developer",
    LeaveType: "LOP",
    From: "24 Feb 2023",
    To: "25 Feb 2023",
    NoofDays: "2 days",
    Reason: "Personnal",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-05.jpg",
    Employee: "Mike Litorus",
    Role: "IOS Developer",
    LeaveType: "Paternity Leave",
    From: "13 Feb 2023",
    To: "17 Feb 2023",
    NoofDays: "5 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-24.jpg",
    Employee: "Richard Parker",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "30 Jan 2023",
    To: "31 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-08.jpg",
    Employee: "Catherine Manseau",
    Role: "Web Developer",
    LeaveType: "Maternity Leave",
    From: "5 Jan 2023",
    To: "15 Jan 2023",
    NoofDays: "10 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    Image: "avatar-15.jpg",
    Employee: "Buster Wigton",
    Role: "Web Developer",
    LeaveType: "Hospitalisation",
    From: "15 Jan 2023",
    To: "25 Jan 2023",
    NoofDays: "10 days",
    Reason: "Going to Hospital",
    Status: "Declined",
    Class: "fa-regular fa-circle-dot text-danger",
  },
  {
    Image: "avatar-20.jpg",
    Employee: "Melita Faucher",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "13 Jan 2023",
    To: "14 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "Declined",
    Class: "fa-regular fa-circle-dot text-danger",
  },
  {
    Image: "avatar-03.jpg",
    Employee: "Tarah Shropshire",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "10 Jan 2023",
    To: "10 Jan 2023",
    NoofDays: "1 day",
    Reason: "Going to Hospital",
    Status: "New",
    Class: "fa-regular fa-circle-dot text-purple",
  },
  {
    Image: "avatar-20.jpg",
    Employee: "Domenic Houston",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "10 Jan 2023",
    To: "11 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "New",
    Class: "fa-regular fa-circle-dot text-purple",
  },
  {
    Image: "avatar-02.jpg",
    Employee: "John Doe",
    Role: "Web Designer",
    LeaveType: "Casual Leave",
    From: "9 Jan 2023",
    To: "10 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "Declined",
    Class: "fa-regular fa-circle-dot text-danger",
  },
  {
    Image: "avatar-25.jpg",
    Employee: "Rolland Webber",
    Role: "Web Developer",
    LeaveType: "Casual Leave",
    From: "7 Jan 2023",
    To: "8 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "New",
    Class: "fa-regular fa-circle-dot text-purple",
  },*/
];

import axios from 'axios';

export default {
  data() {
    return {
      columns,
      data,
      title: "Leaves",
      path: "Dashboard",
      text: "Leaves",
      text1: "Add Leave",
	  pagination: pagination,
    };
  },
  methods: {		
	loadCommonData(params){
		
		var token = window.localStorage.getItem("token");
	
		axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
		axios.defaults.headers.common["Authorization"] = "Bearer " + token;
		
		let loader = this.$loading.show({
						// Optional parameters
						container: this.fullPage ? null : this.$refs.formContainer,
						canCancel: false
					});
		
		axios.get("/leaves", params)
			.then((response) => {
				
				console.log(response.data.data);
				this.pagination.total = response.data.data.total;
				this.pagination.current = response.data.data.current_page;
				this.pagination.pageSize = response.data.data.per_page;
				
				this.data = response.data.data.data;
				
				loader.hide();
				
				
					  
			}).catch((error) => {
			  
			  loader.hide();
			  
			  /*var response = (error.response);
			  
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
				  
			  }*/
			  
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
