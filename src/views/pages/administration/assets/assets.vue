<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1"/>
        <assetsearch />
        <assetstable />
      </div>
      <!-- /Page Content -->
      <assetmodel />
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
      text1: "Add Asset",
    };
  },
};
</script>