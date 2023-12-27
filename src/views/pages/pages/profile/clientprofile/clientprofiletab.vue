<template>
  <!-- Projects Tab -->
  <div id="myprojects" class="tab-pane fade show active">
    <div class="row">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
  <!-- /Projects Tab -->
</template>
<script>
import ProjectCard from "./ClientProfileList.vue";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          id: "1",
          title: "Office Management",
          openTasks: 1,
          completedTasks: 9,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
          deadline: "17 Apr 2023",
          projectLeaders: [
            {
              id: "1",
              name: "Jeffery Lalor",
              avatar: "avatar-16.jpg",
            },
          ],
          teamMembers: [
            {
              id: "2",
              name: "John Doe",
              avatar: "avatar-02.jpg",
            },
            {
              id: "3",
              name: "Richard Miles",
              avatar: "avatar-09.jpg",
            },
            {
              id: "4",
              name: "John Smith",
              avatar: "avatar-10.jpg",
            },
            {
              id: "5",
              name: "Mike Litorus",
              avatar: "avatar-05.jpg",
            },
          ],
          progress: 40,
        },
        {
          id: "2",
          title: "Project Management",
          openTasks: 2,
          completedTasks: 5,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
          deadline: "17 Apr 2023",
          projectLeaders: [
            {
              id: "1",
              name: "Jeffery Lalor",
              avatar: "avatar-16.jpg",
            },
          ],
          teamMembers: [
            {
              id: "2",
              name: "John Doe",
              avatar: "avatar-02.jpg",
            },
            {
              id: "3",
              name: "Richard Miles",
              avatar: "avatar-09.jpg",
            },
            {
              id: "4",
              name: "John Smith",
              avatar: "avatar-10.jpg",
            },
            {
              id: "5",
              name: "Mike Litorus",
              avatar: "avatar-05.jpg",
            },
          ],
          progress: 40,
        },
        {
          id: "3",
          title: "Video Calling App",
          openTasks: 3,
          completedTasks: 3,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
          deadline: "17 Apr 2023",
          projectLeaders: [
            {
              id: "1",
              name: "Jeffery Lalor",
              avatar: "avatar-16.jpg",
            },
          ],
          teamMembers: [
            {
              id: "2",
              name: "John Doe",
              avatar: "avatar-02.jpg",
            },
            {
              id: "3",
              name: "Richard Miles",
              avatar: "avatar-09.jpg",
            },
            {
              id: "4",
              name: "John Smith",
              avatar: "avatar-10.jpg",
            },
            {
              id: "5",
              name: "Mike Litorus",
              avatar: "avatar-05.jpg",
            },
          ],
          progress: 40,
        },
        {
          id: "4",
          title: "Hospital Administration",
          openTasks: 12,
          completedTasks: 4,
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it...",
          deadline: "17 Apr 2023",
          projectLeaders: [
            {
              id: "1",
              name: "Jeffery Lalor",
              avatar: "avatar-16.jpg",
            },
          ],
          teamMembers: [
            {
              id: "2",
              name: "John Doe",
              avatar: "avatar-02.jpg",
            },
            {
              id: "3",
              name: "Richard Miles",
              avatar: "avatar-09.jpg",
            },
            {
              id: "4",
              name: "John Smith",
              avatar: "avatar-10.jpg",
            },
            {
              id: "5",
              name: "Mike Litorus",
              avatar: "avatar-05.jpg",
            },
          ],
          progress: 40,
        },
      ],
    };
  },
};
</script>
