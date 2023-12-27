<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>

        <!-- Page Wrapper -->
        <div class="page-wrapper">

            <!-- Page Content -->
            <div class="content container-fluid">

                <!-- Page Header -->
                <user-dashboard-header :title="title" :path="path" :text="text" :text1="text1" :text2="text2" />
                <!-- /Page Header -->

                <!-- Content Starts -->
                <user-dashboard-tabset></user-dashboard-tabset>

                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="card">
                            <div class="card-body">
                                <p>Name : <b>John Richerd</b></p>
                                <p>Code : <b>#1245</b></p>
                                <p>Job Type : <b>UI Development</b></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <p class="m-b-30">Click button to answer your question.</p>
                                <div class="row">
                                    <div class="col-md-6 text-center m-b-30">
                                        <router-link to="questions" class="btn btn-primary w-100 submit-btn">Html</router-link>
                                    </div>
                                    <div class="col-md-6 text-center m-b-30">
                                        <router-link to="questions" class="btn btn-primary w-100 submit-btn">Css</router-link>
                                    </div>
                                    <div class="col-md-6 text-center m-b-30">
                                        <router-link to="questions" class="btn btn-primary w-100 submit-btn">Design</router-link>
                                    </div>
                                    <div class="col-md-6 text-center m-b-30">
                                        <router-link to="questions" class="btn btn-primary w-100 submit-btn">Javascript</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Content End -->

            </div>
            <!-- /Page Content -->

        </div>
        <!-- /Page Wrapper -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Aptitude",
            path: "Dashboard",
            text: "Jobs",
            text1: "Interviewing",
            text2: "Aptitude",
        }
    },
    name : 'job-aptitude'
}
</script>