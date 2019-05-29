<template>
    <v-container fluid>
        <v-layout>
            <maze />
        </v-layout>
    </v-container>
</template>

<script>
import Maze from '../components/Maze';
export default {
    name: 'HowToUse',
    components: {
        Maze
    }
};
</script>
<style scoped>
.grid-container {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(7, 50px);
}
</style>
