<template>
  <div class="chat-window video-window">
    <div class="fixed-header">
      <ul class="nav nav-tabs nav-tabs-bottom">
        <li class="nav-item">
          <a class="nav-link" href="#calls_tab" data-bs-toggle="tab">Calls</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#profile_tab" data-bs-toggle="tab"
            >Profile</a
          >
        </li>
      </ul>
    </div>
    <div class="tab-content chat-contents">
      <div class="content-full tab-pane" id="calls_tab">
        <div class="chat-wrap-inner">
          <div class="chat-box">
            <div class="chats">
              <div class="chat chat-left">
                <div class="chat-avatar">
                  <router-link to="profile" class="avatar">
                    <img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                    />
                  </router-link>
                </div>
                <div class="chat-body">
                  <div class="chat-bubble">
                    <div class="chat-content">
                      <span class="task-chat-user">You</span>
                      <span class="chat-time">8:35 am</span>
                      <div class="call-details">
                        <i class="material-icons">phone_missed</i>
                        <div class="call-info">
                          <div class="call-user-details">
                            <span class="call-description"
                              >Jeffrey Warden missed the call</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat chat-left">
                <div class="chat-avatar">
                  <router-link to="profile" class="avatar">
                    <img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                    />
                  </router-link>
                </div>
                <div class="chat-body">
                  <div class="chat-bubble">
                    <div class="chat-content">
                      <span class="task-chat-user">John Doe</span>
                      <span class="chat-time">8:35 am</span>
                      <div class="call-details">
                        <i class="material-icons">call_end</i>
                        <div class="call-info">
                          <div class="call-user-details">
                            <span class="call-description"
                              >This call has ended</span
                            >
                          </div>
                          <div class="call-timing">
                            Duration: <strong>5 min 57 sec</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-line">
                <span class="chat-date">January 29th, 2023</span>
              </div>
              <div class="chat chat-left">
                <div class="chat-avatar">
                  <router-link to="profile" class="avatar">
                    <img
                      src="@/assets/img/profiles/avatar-05.jpg"
                      alt="User Image"
                    />
                  </router-link>
                </div>
                <div class="chat-body">
                  <div class="chat-bubble">
                    <div class="chat-content">
                      <span class="task-chat-user">Richard Miles</span>
                      <span class="chat-time">8:35 am</span>
                      <div class="call-details">
                        <i class="material-icons">phone_missed</i>
                        <div class="call-info">
                          <div class="call-user-details">
                            <span class="call-description"
                              >You missed the call</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat chat-left">
                <div class="chat-avatar">
                  <router-link to="profile" class="avatar">
                    <img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                    />
                  </router-link>
                </div>
                <div class="chat-body">
                  <div class="chat-bubble">
                    <div class="chat-content">
                      <span class="task-chat-user">You</span>
                      <span class="chat-time">8:35 am</span>
                      <div class="call-details">
                        <i class="material-icons">ring_volume</i>
                        <div class="call-info">
                          <div class="call-user-details">
                            <a
                              href="javascript:;"
                              class="call-description call-description--linked"
                              data-qa="call_attachment_link"
                              >Calling John Smith ...</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-full tab-pane show active" id="profile_tab">
        <div class="display-table">
          <div class="table-row">
            <div class="table-body">
              <div class="table-content">
                <div class="chat-profile-img">
                  <div class="edit-profile-img">
                    <img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                    />
                    <span class="change-img">Change Image</span>
                  </div>
                  <h3 class="user-name m-t-10 mb-0">John Doe</h3>
                  <small class="text-muted">Web Designer</small>
                  <a href="javascript:void(0);" class="btn btn-primary edit-btn"
                    ><i class="fa-solid fa-pencil"></i
                  ></a>
                </div>
                <div class="chat-profile-info">
                  <ul class="user-det-list">
                    <li>
                      <span>Username:</span>
                      <span class="float-end text-muted">johndoe</span>
                    </li>
                    <li>
                      <span>DOB:</span>
                      <span class="float-end text-muted">24 July</span>
                    </li>
                    <li>
                      <span>Email:</span>
                      <span class="float-end text-muted"
                        >johndoe@example.com</span
                      >
                    </li>
                    <li>
                      <span>Phone:</span>
                      <span class="float-end text-muted">9876543210</span>
                    </li>
                  </ul>
                </div>
                <div class="transfer-files">
                  <ul class="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#all_files"
                        data-bs-toggle="tab"
                        >All Files</a
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#my_files" data-bs-toggle="tab"
                        >My Files</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane show active" id="all_files">
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
                                >AHA Selfcare Mobile Application
                                Test-Cases.xls</span
                              >
                              <span class="file-author"
                                ><a href="javascript:;">Loren Gatlin</a></span
                              >
                              <span class="file-date">May 31st at 6:53 PM</span>
                            </div>
                            <ul class="files-action">
                              <li class="dropdown dropdown-action">
                                <a
                                  href="javascript:;"
                                  class="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  ><i class="material-icons">more_horiz</i></a
                                >
                                <div class="dropdown-menu">
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0)"
                                    >Download</a
                                  >
                                  <a
                                    class="dropdown-item"
                                    href="javascript:;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#share_files"
                                    >Share</a
                                  >
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="tab-pane" id="my_files">
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
                                >AHA Selfcare Mobile Application
                                Test-Cases.xls</span
                              >
                              <span class="file-author"
                                ><a href="javascript:;">John Doe</a></span
                              >
                              <span class="file-date">May 31st at 6:53 PM</span>
                            </div>
                            <ul class="files-action">
                              <li class="dropdown dropdown-action">
                                <a
                                  href="javascript:;"
                                  class="dropdown-toggle"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  ><i class="material-icons">more_horiz</i></a
                                >
                                <div class="dropdown-menu">
                                  <a
                                    class="dropdown-item"
                                    href="javascript:void(0)"
                                    >Download</a
                                  >
                                  <a
                                    class="dropdown-item"
                                    href="javascript:;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#share_files"
                                    >Share</a
                                  >
                                </div>
                              </li>
                            </ul>
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
      </div>
    </div>
  </div>
 
</template>
