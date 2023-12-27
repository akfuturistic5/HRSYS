<template>
    <div class="page-header">
        <div class="row">
            <div class="col">
                <h3 class="page-title">{{title}}</h3>
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="admin-dashboard">{{path}}</router-link></li>
                    <li class="breadcrumb-item"><router-link to="employees">{{text}}</router-link></li>
                    <li class="breadcrumb-item active">{{text1}}</li>
                </ul>
            </div>
            <div class="col-auto float-end ms-auto" v-if="isShiftSchedulingRoute">
                <router-link to="shift-list" class="btn add-btn m-r-5">{{text2}}</router-link>
                <a href="javascript:;" class="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule">
                    {{text3}}</a>
            </div>
            <div class="col-auto float-end ms-auto" v-if="isShiftListRoute">
                <a href="javascript:;" class="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_shift">{{text2}}</a>
                <a href="javascript:;" class="btn add-btn m-r-5" data-bs-toggle="modal" data-bs-target="#add_schedule"> {{text3}}</a>
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
        },
        text3: {
            type: String,
            default: "",
        }
    },
    computed: {
        isShiftSchedulingRoute() {
            return this.$route.path === "/shift-scheduling";
        },
        isShiftListRoute() {
            return this.$route.path === "/shift-list";
        },
    },
}
</script>