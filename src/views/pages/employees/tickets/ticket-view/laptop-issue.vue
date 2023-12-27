<template>
  <div class="chat-contents">
    <div class="chat-content-wrap">
      <div class="chat-wrap-inner">
        <div class="chat-box">
          <div class="task-wrapper">
            <div class="card">
              <div class="card-body">
                <div class="project-title">
                  <div class="m-b-20">
                    <span class="h5 card-title">Laptop Issue</span>
                    <div class="float-end ticket-priority">
                      <span>Priority:</span>
                      <div class="btn-group">
                        <a
                          href="javascript:;"
                          class="badge badge-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                          >Highest
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i> Highest
                            priority</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> High
                            priority</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-primary"></i> Normal
                            priority</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i> Low
                            priority</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div class="col-md-3 col-sm-6">
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
                  <div class="col-md-3 col-sm-6">
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
                  <div class="col-md-3 col-sm-6">
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
                  <div class="col-md-3 col-sm-6">
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
            <div class="card mb-0">
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
                          ><a href="javascript:;">Ticket_document.xls</a></span
                        >
                        <span class="file-author"
                          ><a href="javascript:;">John Doe</a></span
                        >
                        <span class="file-date">May 5th at 8:21 PM</span>
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
                            <a class="dropdown-item" href="javascript:;">Share</a>
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
                          ><a href="javascript:;">Issue_report.xls</a></span
                        >
                        <span class="file-author"
                          ><a href="javascript:;">John Doe</a></span
                        >
                        <span class="file-date">May 5th at 5:41 PM</span>
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
                            <a class="dropdown-item" href="javascript:;">Share</a>
                            <a class="dropdown-item" href="javascript:void(0)">Delete</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="notification-popup hide">
            <p>
              <span class="task"></span>
              <span class="notification-text"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
