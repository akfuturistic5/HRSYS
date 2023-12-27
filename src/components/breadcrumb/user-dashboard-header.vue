<template>
    <div class="page-header">
        <div class="row">
            <div class="col-sm-12">
                <h3 class="page-title">{{title}}</h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="admin-dashboard">{{path}}</router-link></li>
                    <li class="breadcrumb-item ">{{text}}</li>
                    <li class="breadcrumb-item">{{text1}}</li>
                    <li class="breadcrumb-item active">{{text2}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    text2: {
      type: String,
      default: "",
    }
  },
};
</script>