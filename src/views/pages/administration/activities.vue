<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="activity">
              <div class="activity-box">
                <ul class="activity-list">
                  <li v-for="(activity, index) in Activities" :key="index">
                    <div class="activity-user">
                      <router-link to="profile" title="activity.userName" data-bs-toggle="tooltip" class="avatar">
                        <img :src="require(`@/assets/img/profiles/${activity.userImage}`)" :alt="activity.userName" />
                      </router-link>
                    </div>
                    <div class="activity-content">
                      <div class="timeline-content">
                        <router-link to="profile" class="name">{{ activity.userName }}
                        </router-link>
                        <span v-if="activity.action === 'added new task '">
                          {{ activity.action }}
                          <a href="javascript:;">{{ activity.task }}</a>
                        </span>
                        <span v-else>
                          {{ activity.action }}
                          <span v-if="Array.isArray(activity.additionalUsers) && activity.additionalUsers.length > 0">
                            <template v-for="(user, userIndex) in activity.additionalUsers">
                              <router-link :to="user.profile" class="name">{{ user.name }}</router-link>
                              <span v-if="userIndex < activity.additionalUsers.length - 1">
                                and
                              </span>
                            </template>
                            {{ activity.subaction }} <a href="javascript:;">{{ activity.task }}</a>
                          </span>
                          <span v-else>
                            <a href="javascript:;">{{ activity.task }}</a>
                          </span>
                        </span>
                        <span class="time">{{ activity.time }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Activities from "@/assets/json/activities.json";
export default {
  data() {
    return {
      title: "Activities",
      path: "Dashboard",
      text: "Activities",
      Activities: Activities,
    };
  },
};
</script>
