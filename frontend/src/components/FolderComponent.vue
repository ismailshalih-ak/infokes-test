<script setup>
const props = defineProps(['folder', 'onSelectFolder'])
const emit = defineEmits(["select-folder"]);
</script>

<template>
    <h2 @click="emit('select-folder', props.folder)">{{props.folder.name}}</h2>
    <div style="margin-left: 20px;">
        <div v-for="child in props.folder.children" :key="props.folder.children.id" ref="items">
            <FolderComponent :folder="child" @select-folder="props.onSelectFolder" :onSelectFolder="props.onSelectFolder"/>
        </div>
    </div>
</template>