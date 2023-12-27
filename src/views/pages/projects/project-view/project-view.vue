<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <project-view-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <div class="project-title">
                  <h5 class="card-title">Hospital Administration</h5>
                  <small class="block text-ellipsis m-b-15"
                    ><span class="text-xs">2</span>
                    <span class="text-muted ms-1">open tasks, </span
                    ><span class="text-xs">5</span>
                    <span class="text-muted ms-1">tasks completed</span></small
                  >
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit
                  neque. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est
                  consectetur, a molestie tortor consectetur. Aenean tincidunt interdum
                  ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum
                  eget neque eget, imperdiet tristique lectus. Proin at purus ut sem
                  pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et
                  pretium ac, hendrerit in felis. Integer scelerisque libero non metus
                  commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a
                  tincidunt orci pellentesque nec. Ut ultricies maximus nulla id
                  consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                  neque id massa porttitor, a pretium velit vehicula. Morbi volutpat
                  tincidunt urna, vel ullamcorper ligula fermentum at.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit
                  neque. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est
                  consectetur, a molestie tortor consectetur. Aenean tincidunt interdum
                  ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum
                  eget neque eget, imperdiet tristique lectus. Proin at purus ut sem
                  pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et
                  pretium ac, hendrerit in felis. Integer scelerisque libero non metus
                  commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a
                  tincidunt orci pellentesque nec. Ut ultricies maximus nulla id
                  consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor
                  neque id massa porttitor, a pretium velit vehicula. Morbi volutpat
                  tincidunt urna, vel ullamcorper ligula fermentum at.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title m-b-20">Uploaded image files</h5>
                <div class="row">
                  <div class="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div class="uploaded-box">
                      <div class="uploaded-img">
                        <img
                          src="@/assets/img/placeholder.jpg"
                          class="img-fluid"
                          alt="Placeholder Image"
                        />
                      </div>
                      <div class="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div class="uploaded-box">
                      <div class="uploaded-img">
                        <img
                          src="@/assets/img/placeholder.jpg"
                          class="img-fluid"
                          alt="Placeholder Image"
                        />
                      </div>
                      <div class="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div class="uploaded-box">
                      <div class="uploaded-img">
                        <img
                          src="@/assets/img/placeholder.jpg"
                          class="img-fluid"
                          alt="Placeholder Image"
                        />
                      </div>
                      <div class="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-4 col-lg-4 col-xl-3">
                    <div class="uploaded-box">
                      <div class="uploaded-img">
                        <img
                          src="@/assets/img/placeholder.jpg"
                          class="img-fluid"
                          alt="Placeholder Image"
                        />
                      </div>
                      <div class="uploaded-img-name">demo.png</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title m-b-20">Uploaded files</h5>
                <ul class="files-list">
                  <li>
                    <div class="files-cont">
                      <div class="file-type">
                        <span class="files-icon"
                          ><i class="fa-regular fa-file-pdf"></i
                        ></span>
                      </div>
                      <div class="files-info">
                        <span class="file-name text-ellipsis"
                          ><a href="javascript:void(0);"
                            >AHA Selfcare Mobile Application Test-Cases.xls</a
                          ></span
                        >
                        <span class="file-author"
                          ><a href="javascript:void(0);">John Doe</a></span
                        >
                        <span class="file-date">May 31st at 6:53 PM</span>
                        <div class="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul class="files-action">
                        <li class="dropdown dropdown-action">
                          <a
                            href="javascript:;"
                            class="dropdown-toggle btn btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="material-icons">more_horiz</i></a
                          >
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"
                              >Download</a
                            >
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#share_files"
                              >Share</a
                            >
                            <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="files-cont">
                      <div class="file-type">
                        <span class="files-icon"
                          ><i class="fa-regular fa-file-pdf"></i
                        ></span>
                      </div>
                      <div class="files-info">
                        <span class="file-name text-ellipsis"
                          ><a href="javascript:void(0);"
                            >AHA Selfcare Mobile Application Test-Cases.xls</a
                          ></span
                        >
                        <span class="file-author"
                          ><a href="javascript:void(0);">Richard Miles</a></span
                        >
                        <span class="file-date">May 31st at 6:53 PM</span>
                        <div class="file-size">Size: 14.8Mb</div>
                      </div>
                      <ul class="files-action">
                        <li class="dropdown dropdown-action">
                          <a
                            href="javascript:;"
                            class="dropdown-toggle btn btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="material-icons">more_horiz</i></a
                          >
                          <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item" href="javascript:void(0)"
                              >Download</a
                            >
                            <a
                              class="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#share_files"
                              >Share</a
                            >
                            <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <project-tasks />
          </div>
          <project-details />
        </div>
      </div>
      <project-view-model />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Hospital Admin",
      path: "Dashboard",
      text: "Project",
      text1: "Edit Project",
    };
  },
};
</script>
