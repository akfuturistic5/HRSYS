<template>
  <div class="card">
    <div class="card-body">
      <!-- <h4 class="card-title">Solid justified</h4> -->
      <ul class="nav nav-tabs nav-tabs-solid nav-justified">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/user-dashboard') }"
            to="user-dashboard"
            >Dashboard</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/user-all-jobs') }"
            to="user-all-jobs"
            >All
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/saved-jobs') }"
            to="saved-jobs"
            >Saved</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/applied-jobs') }"
            to="applied-jobs"
            >Applied</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{
              active: isActive(['/interviewing', '/job-aptitude', '/questions']),
            }"
            to="interviewing"
            >Interviewing</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/offered-jobs') }"
            to="offered-jobs"
            >Offered</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/visited-jobs') }"
            to="visited-jobs"
            >Visitied
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: isActive('/archived-jobs') }"
            to="archived-jobs"
            >Archived
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { activeClass: "active" };
  },
  methods: {
    isActive(paths) {
      return paths.includes(this.$route.path);
    },
  },
};
</script>
