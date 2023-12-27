<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <attendance-filter></attendance-filter>
        <!-- /Search Filter -->

        <div class="row">
          <div class="col-lg-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Attendance" :key="item.id">
                    <td>
                      <h2 class="table-avatar">
                        <router-link class="avatar avatar-xs" to="profile"
                          ><img
                            :src="require(`@/assets/img/profiles/${item.Image}`)"
                            alt="User Image"
                        /></router-link>
                        <router-link to="profile">{{ item.Employee }}</router-link>
                      </h2>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class1"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class2"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class3"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class4"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class5"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class6"></i
                      ></a>
                    </td>
                    <td>
                      <div class="half-day">
                        <span class="first-off"
                          ><a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#attendance_info"
                            ><i :class="item.Class7"></i></a
                        ></span>
                        <span class="first-off"><i :class="item.Classa"></i></span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class9"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i class="fa-solid fa-check text-success"></i
                      ></a>
                    </td>
                    <td><i :class="item.Class10"></i></td>
                    <td><i :class="item.Class11"></i></td>
                    <td><i :class="item.Class12"></i></td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class13"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class14"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class15"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class16"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class17"></i
                      ></a>
                    </td>
                    <td><i class="fa fa-close text-danger"></i></td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class18"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class19"></i
                      ></a>
                    </td>
                    <td>
                      <div class="half-day">
                        <span class="first-off"><i :class="item.Class20"></i></span>
                        <span class="first-off"
                          ><a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#attendance_info"
                            ><i :class="item.Classb"></i></a
                        ></span>
                      </div>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class22"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class22"></i
                      ></a>
                    </td>
                    <td><i :class="item.Class23"></i></td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class23"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class24"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class25"></i
                      ></a>
                    </td>
                    <td><i :class="item.Class26"></i></td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class27"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#attendance_info"
                        ><i :class="item.Class28"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->

      <attendance-model></attendance-model>
    </div>
    <!-- Page Wrapper -->
  </div>
</template>

<script>
import Attendance from "@/assets/json/attendance.json";
export default {
  data() {
    return {
      Attendance: Attendance,
      title: "Attendance",
      path: "Dashboard",
      text: "Attendance",
    };
  },
};
</script>
