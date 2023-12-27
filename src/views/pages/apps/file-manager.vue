<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-sidebar></layout-sidebar>

        <!-- Page Wrapper -->
        <div class="page-wrapper">

            <!-- Page Content -->
            <div class="content container-fluid">

                <div class="row">
                    <div class="col-sm-12">
                        <div class="file-wrap">
                            <div class="file-sidebar">
                                <div class="file-header justify-content-center">
                                    <span>Projects</span>
                                    <a href="javascript:void(0);" class="file-side-close"><i
                                            class="fa-solid fa-xmark"></i></a>
                                </div>
                                <form class="file-search">
                                    <div class="input-group">
                                        <div class="input-group-text">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <input type="text" class="form-control rounded-pill" placeholder="Search">
                                    </div>
                                </form>
                                <div class="file-pro-list">
                                    <div class="file-scroll">
                                        <ul class="file-menu">
                                            <li class="active">
                                                <a href="javascript:;">All Projects</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Office Management</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Video Calling App</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Hospital Administration</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Virtual Host</a>
                                            </li>
                                        </ul>
                                        <div class="show-more">
                                            <a href="javascript:;">Show More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-cont-wrap">
                                <div class="file-cont-inner">
                                    <div class="file-cont-header">
                                        <div class="file-options">
                                            <a href="javascript:void(0)" id="file_sidebar_toggle"
                                                class="file-sidebar-toggle">
                                                <i class="fa-solid fa-bars"></i>
                                            </a>
                                        </div>
                                        <span>File Manager</span>
                                        <div class="file-options">
                                            <span class="btn-file"><input type="file" class="upload"><i
                                                    class="fa-solid fa-upload"></i></span>
                                        </div>
                                    </div>
                                    <div class="file-content">
                                        <form class="file-search">
                                            <div class="input-group">
                                                <div class="input-group-text">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </div>
                                                <input type="text" class="form-control rounded-pill" placeholder="Search">
                                            </div>
                                        </form>
                                        <div class="file-body">
                                            <div class="file-scroll">
                                                <div class="file-content-inner">
                                                    <h4>Recent Files</h4>
                                                    <div class="row row-sm justify-content-center">
                                                        <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3"
                                                            v-for="item in RecentFile" :key="item.id">
                                                            <div class="card card-file">
                                                                <div class="dropdown-file">
                                                                    <a href="javascript:;" class="dropdown-link"
                                                                        data-bs-toggle="dropdown"><i
                                                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                                                    <div class="dropdown-menu dropdown-menu-right">
                                                                        <a href="javascript:;" class="dropdown-item">View Details</a>
                                                                        <a href="javascript:;" class="dropdown-item">Share</a>
                                                                        <a href="javascript:;" class="dropdown-item">Download</a>
                                                                        <a href="javascript:;" class="dropdown-item">Rename</a>
                                                                        <a href="javascript:;" class="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div class="card-file-thumb">
                                                                    <i :class="item.Class"></i>
                                                                </div>
                                                                <div class="card-body">
                                                                    <h6><a href="javascript:;">{{ item.Title }}</a></h6>
                                                                    <span>{{ item.Filesize }}</span>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <span class="d-none d-sm-inline">Last Modified:
                                                                    </span>{{ item.LastModified }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h4>Files</h4>
                                                    <div class="row row-sm">
                                                        <div class="col-12 col-sm-4 col-md-3 col-lg-4 col-xl-3"
                                                            v-for="item in FilesTwo" :key="item.id">
                                                            <div class="card card-file">
                                                                <div class="dropdown-file">
                                                                    <a href="javascript:;" class="dropdown-link"
                                                                        data-bs-toggle="dropdown"><i
                                                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                                                    <div class="dropdown-menu dropdown-menu-right">
                                                                        <a href="javascript:;" class="dropdown-item">View Details</a>
                                                                        <a href="javascript:;" class="dropdown-item">Share</a>
                                                                        <a href="javascript:;" class="dropdown-item">Download</a>
                                                                        <a href="javascript:;" class="dropdown-item">Rename</a>
                                                                        <a href="javascript:;" class="dropdown-item">Delete</a>
                                                                    </div>
                                                                </div>
                                                                <div class="card-file-thumb">
                                                                    <i :class="item.Class"></i>
                                                                </div>
                                                                <div class="card-body">
                                                                    <h6><a href="javascript:;">{{item.Title}}</a></h6>
                                                                    <span>{{item.Filesize}}</span>
                                                                </div>
                                                                <div class="card-footer">{{item.LastModified}}</div>
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
                </div>

            </div>
            <!-- /Page Content -->

        </div>
        <!-- /Page Wrapper -->
    </div>
</template>

<script>
import RecentFile from '@/assets/json/recent-file.json'
import FilesTwo from '@/assets/json/files.json'
export default {
    data() {
        return {
            RecentFile: RecentFile,
            FilesTwo: FilesTwo
        }
    },
}
</script>