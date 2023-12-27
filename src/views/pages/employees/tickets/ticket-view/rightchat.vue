<template>
  <div class="col-lg-4 message-view task-chat-view ticket-chat-view" id="task_window">
    <div class="chat-window">
      <div class="fixed-header">
        <div class="navbar">
          <div class="task-assign">
            <span class="assign-title">Assigned to </span>
            <a
              href="javascript:;"
              data-bs-toggle="tooltip"
              data-placement="bottom"
              title="John Doe"
              class="avatar"
            >
              <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
            </a>
            <a
              href="javascript:;"
              class="followers-add"
              title="Add Assignee"
              data-bs-toggle="modal"
              data-bs-target="#assignee"
              ><i class="material-icons">add</i></a
            >
          </div>
          <ul class="nav float-end custom-menu">
            <li class="nav-item dropdown dropdown-action">
              <a
                href="javascript:;"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="material-icons">more_vert</i></a
              >
              <div class="dropdown-menu custom-dropdown-menu">
                <a
                  class="dropdown-item"
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_ticket"
                  >Edit Ticket</a
                >
                <a
                  class="dropdown-item"
                  href="javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_ticket"
                  >Delete Ticket</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="chat-contents task-chat-contents">
        <div class="chat-content-wrap">
          <div class="chat-wrap-inner">
            <div class="chat-box">
              <div class="chats">
                <div class="chat chat-left">
                  <div class="chat-avatar">
                    <router-link to="profile" class="avatar">
                      <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
                    </router-link>
                  </div>
                  <div class="chat-body">
                    <div class="chat-bubble">
                      <div class="chat-content">
                        <span class="task-chat-user">John Doe</span>
                        <span class="chat-time">8:35 am</span>
                        <p>I'm just looking around.</p>
                        <p>Will you tell me something about yourself?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="completed-task-msg">
                  <span class="task-success">
                    <a href="javascript:;">John Doe</a> closed this ticket.
                  </span>
                  <span class="task-time">Today at 9:27am</span>
                </div>
                <div class="chat chat-left">
                  <div class="chat-avatar">
                    <router-link to="profile" class="avatar">
                      <img src="@/assets/img/profiles/avatar-02.jpg" alt="User Image" />
                    </router-link>
                  </div>
                  <div class="chat-body">
                    <div class="chat-bubble">
                      <div class="chat-content">
                        <span class="task-chat-user">John Doe</span>
                        <span class="file-attached"
                          >attached 3 files <i class="fa-solid fa-paperclip"></i
                        ></span>
                        <span class="chat-time">Feb 17, 2023 at 4:32am</span>
                        <ul class="attach-list">
                          <li>
                            <i class="fa fa-file me-1"></i>
                            <a href="javascript:;">project_document.avi</a>
                          </li>
                          <li>
                            <i class="fa fa-file me-1"></i>
                            <a href="javascript:;">video_conferencing.psd</a>
                          </li>
                          <li>
                            <i class="fa fa-file me-1"></i>
                            <a href="javascript:;">landing_page.psd</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat chat-left">
                  <div class="chat-avatar">
                    <router-link to="profile" class="avatar">
                      <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
                    </router-link>
                  </div>
                  <div class="chat-body">
                    <div class="chat-bubble">
                      <div class="chat-content">
                        <span class="task-chat-user">Jeffery Lalor</span>
                        <span class="file-attached"
                          >attached file <i class="fa-solid fa-paperclip"></i
                        ></span>
                        <span class="chat-time">Yesterday at 9:16pm</span>
                        <ul class="attach-list">
                          <li class="pdf-file">
                            <i class="fa-regular fa-file-pdf me-1"></i>
                            <a href="javascript:;">Document_2016.pdf</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="chat chat-left">
                  <div class="chat-avatar">
                    <router-link to="profile" class="avatar">
                      <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
                    </router-link>
                  </div>
                  <div class="chat-body">
                    <div class="chat-bubble">
                      <div class="chat-content">
                        <span class="task-chat-user">Jeffery Lalor</span>
                        <span class="file-attached"
                          >attached file <i class="fa-solid fa-paperclip"></i
                        ></span>
                        <span class="chat-time">Today at 12:42pm</span>
                        <ul class="attach-list">
                          <li class="img-file">
                            <div class="attach-img-download">
                              <a href="javascript:;">avatar-1.jpg</a>
                            </div>
                            <div class="task-attach-img">
                              <img src="@/assets/img/user.jpg" alt="User Image" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="task-information">
                  <span class="task-info-line">
                    <a class="task-user" href="javascript:;">John Doe</a>
                    <span class="task-info-subject">marked ticket as reopened</span>
                  </span>
                  <div class="task-time">1:16pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-footer">
        <div class="message-bar">
          <div class="message-inner">
            <a class="link attach-icon" href="javascript:;"
              ><img src="@/assets/img/attachment.png" alt="Attachment Icon"
            /></a>
            <div class="message-area">
              <div class="input-group">
                <textarea class="form-control" placeholder="Type message..."></textarea>
                <button class="btn btn-primary" type="button">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="project-members task-followers">
          <span class="followers-title">Followers</span>
          <a
            href="javascript:;"
            data-bs-toggle="tooltip"
            title="Richard Miles"
            class="avatar"
          >
            <img src="@/assets/img/profiles/avatar-09.jpg" alt="User Image" />
          </a>
          <a
            href="javascript:;"
            data-bs-toggle="tooltip"
            title="John Smith"
            class="avatar"
          >
            <img src="@/assets/img/profiles/avatar-10.jpg" alt="User Image" />
          </a>
          <a
            href="javascript:;"
            data-bs-toggle="tooltip"
            title="Mike Litorus"
            class="avatar"
          >
            <img src="@/assets/img/profiles/avatar-05.jpg" alt="User Image" />
          </a>
          <a
            href="javascript:;"
            data-bs-toggle="tooltip"
            title="Wilmer Deluna"
            class="avatar"
          >
            <img src="@/assets/img/profiles/avatar-11.jpg" alt="User Image" />
          </a>
          <a
            href="javascript:;"
            class="followers-add"
            data-bs-toggle="modal"
            data-bs-target="#task_followers"
            ><i class="material-icons">add</i></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
