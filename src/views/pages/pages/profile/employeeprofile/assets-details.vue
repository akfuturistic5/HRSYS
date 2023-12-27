<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid pb-1">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <div class="row">
          <div class="col-lg-12">
            <div class="assign-head">
              <div class="assign-content">
                <img src="@/assets/img/keyboard.png" alt="Keyboard Image" />
                <h6>Dell Keyboard</h6>
              </div>
              <div class="assign-content">
                <a
                  href="javascript:void(0);"
                  class="btn btn-assign"
                  data-bs-toggle="modal"
                  data-bs-target="#add-assign"
                  ><i class="fa-solid fa-plus"></i> Assign
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="assets-info">
              <h2>Asset Info</h2>
              <ul>
                <li>
                  <span>Type</span>
                  <p>Keybaord</p>
                </li>
                <li>
                  <span>Brand</span>
                  <p>Dell</p>
                </li>
                <li>
                  <span>Model</span>
                  <p>SE5214 - 2022</p>
                </li>
                <li>
                  <span>Serial Number</span>
                  <p>3647952145678</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="assets-info">
              <h2>Asset History</h2>
              <ul>
                <li>
                  <span>Vendor</span>
                  <p>Compusoft Systems Ltd.,</p>
                </li>
                <li>
                  <span>Category</span>
                  <p>Computer</p>
                </li>
                <li>
                  <span>Cost</span>
                  <p>₹ 1,200</p>
                </li>
                <li>
                  <span>Location</span>
                  <p>123 Street, Vivekanandhar Road, Coimbatore - 32</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12 d-flex">
            <div class="assets-info">
              <h2>Warranty</h2>
              <ul>
                <li>
                  <span>Start Date</span>
                  <p>12/11/2022</p>
                </li>
                <li>
                  <span>End Date</span>
                  <p>12/11/2024</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-12 d-flex">
            <div class="assets-info assets-image">
              <h2>Asset Images</h2>
              <ul>
                <li>
                  <img src="@/assets/img/img1.jpg" alt="Keyboard Image" />
                </li>
                <li>
                  <img src="@/assets/img/img2.jpg" alt="Asset image" />
                </li>
                <li>
                  <img src="@/assets/img/img3.jpg" alt="Asset image" />
                </li>
                <li>
                  <img src="@/assets/img/img4.jpg" alt="Asset image" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->

       <profilemodal></profilemodal>
    </div>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      title: "Assets",
      path: "Dashboard",
      text: "Assets",
    };
  },

  name: "profile",
};
</script>
