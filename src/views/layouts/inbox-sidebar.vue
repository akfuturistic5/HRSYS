<template>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li>
                        <router-link to="admin-dashboard"><i class="la la-home"></i> <span>Back to Home</span></router-link>
                    </li>
                    <li class="active">
                        <router-link to="inbox">Inbox <span class="mail-count">(21)</span></router-link>
                    </li>
                    <li>
                        <a href="javascript:;">Starred</a>
                    </li>
                    <li>
                        <a href="javascript:;">Sent Mail</a>
                    </li>
                    <li>
                        <a href="javascript:;">Trash</a>
                    </li>
                    <li>
                        <a href="javascript:;">Draft <span class="mail-count">(8)</span></a>
                    </li>
                    <li class="menu-title">Label <a href="javascript:;"><i class="fa-solid fa-plus"></i></a></li>
                    <li>
                        <a href="javascript:;"><i class="fa fa-circle text-success mail-label"></i> Work</a>
                    </li>
                    <li>
                        <a href="javascript:;"><i class="fa fa-circle text-danger mail-label"></i> Office</a>
                    </li>
                    <li>
                        <a href="javascript:;"><i class="fa fa-circle text-warning mail-label"></i> Personal</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /Sidebar -->
</template>