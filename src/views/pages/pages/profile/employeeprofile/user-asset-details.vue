<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid pb-0">
        <breadcrumb :title="title" :path="path" :text="text" />
        <profilehead />
        <div class="card tab-box">
          <div class="row user-tabs">
            <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul class="nav nav-tabs nav-tabs-bottom">
                <li class="nav-item">
                  <router-link to="profile#emp_profile" class="nav-link"
                    >Profile</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="profile#emp_projects" class="nav-link"
                    >Projects</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="profile#bank_statutory" class="nav-link"
                    >Bank & Statutory
                    <small class="text-danger">(Admin Only)</small></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="profile#emp_assets" class="nav-link active"
                    >Assets</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tab-content">
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
                data-bs-target="#raise-issue"
                ><i class="fas fa-hand-paper"></i> Raise Issue
              </a>
            </div>
          </div>

          <div class="card asset-box">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-7">
                  <h5>Asset Info</h5>
                  <div class="asset-info">
                    <div class="asset-info-det">
                      <h6>Wired Keyboard</h6>
                      <p>SE5214 - 2022 2022 2022</p>
                      <ul>
                        <li>Type <span>Keybaord</span></li>
                        <li>Serial Number <span>3647952145678</span></li>
                        <li>Brand <span>Dell</span></li>
                      </ul>
                    </div>
                  </div>
                  <div class="assets-image">
                    <h5>Asset Images</h5>
                    <ul>
                      <li>
                        <img src="@/assets/img/img1.jpg" alt="Keyboard Image" />
                      </li>
                      <li>
                        <img src="@/assets/img/img2.jpg" alt="Asset Image" />
                      </li>
                      <li>
                        <img src="@/assets/img/img3.jpg" alt="Asset Image" />
                      </li>
                      <li>
                        <img src="@/assets/img/img4.jpg" alt="Asset Image" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="asset-history">
                    <h5>Asset Images</h5>
                    <ul>
                      <li>
                        <div class="aset-img">
                          <img src="@/assets/img/icons/icon-01.svg" alt="Asset Image" />
                        </div>
                        <div class="asset-inf">
                          <h6>Vendor</h6>
                          <p>Compusoft Systems Ltd.,</p>
                        </div>
                      </li>
                      <li>
                        <div class="aset-img">
                          <img src="@/assets/img/icons/icon-03.svg" alt="Asset Image" />
                        </div>
                        <div class="asset-inf">
                          <h6>Category</h6>
                          <p>Computer</p>
                        </div>
                      </li>
                      <li>
                        <div class="aset-img">
                          <img src="@/assets/img/icons/icon-04.svg" alt="Asset Image" />
                        </div>
                        <div class="asset-inf">
                          <h6>Cost</h6>
                          <p>₹ 1,200</p>
                        </div>
                      </li>
                      <li>
                        <div class="aset-img">
                          <img src="@/assets/img/icons/icon-05.svg" alt="Asset Image" />
                        </div>
                        <div class="asset-inf">
                          <h6>Location</h6>
                          <p>123 Street, Vivekanandhar Road, Coimbatore - 32</p>
                        </div>
                      </li>
                      <li>
                        <div class="aset-img">
                          <img src="@/assets/img/icons/icon-02.svg" alt="Asset Image" />
                        </div>
                        <div class="asset-inf">
                          <h6>Warranty</h6>
                          <p>From 11-12-2022 - To 11-12-2022</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <profilemodal />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Profile",
      path: "Dashboard",
      text: "Profile",
    };
  },

  name: "profile",
};
</script>
