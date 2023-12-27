<template>
  <div class="error-page">
    <div class="main-wrapper">
      <div class="error-box">
        <h1>500</h1>
        <h3>
          <i class="fa-solid fa-triangle-exclamation"></i> Oops! Something went wrong
        </h3>
        <p>The page you requested was not found.</p>
        <router-link to="admin-dashboard" class="btn btn-custom"
          >Back to Home</router-link
        >
      </div>
    </div>
  </div>
</template>
