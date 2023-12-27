<template>
    <a-table class="stripped table-hover" :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'JobTitle'">
                <div>
                    <a href="javascript:;">{{record.JobTitle}}</a>
                </div>
            </template>
            <template v-else-if="column.key === 'JobType'">
                <div class="text-center">
                    <div class="action-label">
                        <a class="btn btn-white btn-sm btn-rounded" href="javascript:;">
                            <i :class="record.Class"></i>
                            {{record.JobType}}
                        </a>
                    </div>
                </div>
            </template>
            <template v-else-if="column.key === 'action'">
                <td class="text-center">
                    <router-link to="job-aptitude" class="btn btn-primary aptitude-btn"><span>Click
                            Here</span></router-link>
                </td>
            </template>
        </template>
    </a-table>
</template>

<script>
const columns = [
    {
        title: "#",
        dataIndex: "id",
        sorter: {
            compare: (a, b) => {
                a = a.id.toLowerCase();
                b = b.id.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Job Title",
        dataIndex: "JobTitle",
        key: "JobTitle",
        sorter: {
            compare: (a, b) => {
                a = a.JobTitle.toLowerCase();
                b = b.JobTitle.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Department",
        dataIndex: "Department",
        key: "Department",
        sorter: {
            compare: (a, b) => {
                a = a.Department.toLowerCase();
                b = b.Department.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Job Type",
        dataIndex: "JobType",
        key: "JobType",
        class: "text-center",
        sorter: {
            compare: (a, b) => {
                a = a.JobType.toLowerCase();
                b = b.JobType.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Apptitude Test",
        key: "action",
        sorter: true,
        // class: "text-end",
    },
]
const data = [
    {
        id: 1,
        JobTitle: "Web Developer",
        Department: "Development",
        JobType: "Full Time",
        Class: "fa-regular fa-circle-dot text-danger"
    },
    {
        id: 2,
        JobTitle: "Web Developer",
        Department: "Development",
        JobType: "Part Time",
        Class: "fa-regular fa-circle-dot text-warning"
    },
    {
        id: 3,
        JobTitle: "Web Designing",
        Department: "Development",
        JobType: "Part Time",
        Class: "fa-regular fa-circle-dot text-warning"
    }
]
export default {
    data() {
        return {
            columns,
            data
        }
    },
}
</script>