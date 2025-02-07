<script setup>
import { ref, onMounted } from "vue";
import api from "@/api";
import FolderComponent from "./components/folderComponent.vue";

const folders = [
  {
    id: 1,
    name: 'home',
    children: [{
      id: 2,
      name: 'child1'
    }]
  },
  {
    id: 3,
    name: 'folder1',
    children: [{
      id: 4,
      name: 'child2',
      children: [
      {
        id: 5,
        name: 'grandchild1'
      }
      ]
    },
    {
      id: 6,
      name: 'child3'
    }
  ]
  }
]

const currentFolder = ref(null);

const selectFolder = (folder) => {
  console.log(folder)
  currentFolder.value = folder;
};

// const fetchFolders = async () => {
//   try {
//     const { data } = await api.get("/folders"); // Calls backend API
//     folders.value = data;
//   } catch (error) {
//     console.error("Error fetching folders:", error);
//   }
// };

// onMounted(fetchFolders);
</script>

<template>
  <div style="width: 100vw; height:100vh; display: flex;">
    <div style="width: 30%; padding: 20px;">
      <h1>Folder Explorer</h1>
      <div>
        <div v-for="folder in folders" :key="folder.id">
          <FolderComponent :folder=folder @select-folder="selectFolder" :onSelectFolder="selectFolder"/>
        </div>
      </div>
    </div>
    <div style="width: 70%; padding: 20px;">
      <h1>{{ currentFolder?.name }}</h1>
      <div v-if="currentFolder.children.length > 0" style="display: flex;">
        <div v-for="child in currentFolder.children" :key="currentFolder.children.id" ref="items" style="padding: 8px;">
            <h2>{{ child.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
