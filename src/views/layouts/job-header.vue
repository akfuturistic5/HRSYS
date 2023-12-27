<template>
  <!-- Header -->
  <div class="header">
    <!-- Logo -->
    <div class="header-left">
      <router-link to="admin-dashboard" class="logo">
        <img src="@/assets/img/logo.png" width="40" height="40" alt="Logo" />
      </router-link>
      <router-link to="admin-dashboard" class="logo2">
        <img src="@/assets/img/logo2.png" width="40" height="40" alt="Logo" />
      </router-link>
    </div>
    <!-- /Logo -->

    <!-- Header Title -->
    <div class="page-title-box float-start">
      <h3>Dreams Technologies</h3>
    </div>
    <!-- /Header Title -->

    <!-- Header Menu -->
    <ul class="nav user-menu">
      <!-- Search -->
      <li class="nav-item">
        <div class="top-nav-search">
          <a href="javascript:void(0);" class="responsive-search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <form @submit.prevent="submitForm">
            <input
              class="form-control job-view-search"
              type="text"
              placeholder="Search here"
            />
            <button class="btn" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </li>
      <!-- /Search -->

      <!-- Flag -->
      <li class="nav-item dropdown has-arrow flag-nav">
        <a
          class="nav-link dropdown-toggle job-view-flag"
          data-bs-toggle="dropdown"
          href="javascript:;"
          role="button"
        >
          <img src="@/assets/img/flags/us.png" alt="Flag" height="20" />
          <span>English</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
          <a href="javascript:void(0);" class="dropdown-item">
            <img src="@/assets/img/flags/us.png" alt="Flag" height="16" />
            English
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img src="@/assets/img/flags/fr.png" alt="Flag" height="16" />
            French
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img src="@/assets/img/flags/es.png" alt="Flag" height="16" />
            Spanish
          </a>
          <a href="javascript:void(0);" class="dropdown-item">
            <img src="@/assets/img/flags/de.png" alt="Flag" height="16" />
            German
          </a>
        </div>
      </li>
      <!-- /Flag -->

      <li class="nav-item">
        <router-link class="nav-link" to="/">Login</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="register">Register</router-link>
      </li>
    </ul>
    <!-- /Header Menu -->

    <!-- Mobile Menu -->
    <div class="dropdown mobile-user-menu">
      <a
        href="javascript:;"
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ><i class="fa-solid fa-ellipsis-vertical"></i
      ></a>
      <div class="dropdown-menu dropdown-menu-right">
        <router-link class="dropdown-item" to="/">Login</router-link>
        <router-link class="dropdown-item" to="register">Register</router-link>
      </div>
    </div>
    <!-- /Mobile Menu -->
  </div>
  <!-- /Header -->
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    submitForm() {
      this.$router.push("/search");
    },
  },
}
</script>