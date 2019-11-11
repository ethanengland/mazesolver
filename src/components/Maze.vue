<template>
    <div class="grid-container">
        <Block v-for="b in getBlocks" :id="b.id" :key="b.id" />
    </div>
</template>

<script>
import store from '../store';
import Block from '../components/Block';
import { mapGetters } from 'vuex';
export default {
    name: 'Maze',
    components: {
        Block
    },
    computed: mapGetters(['getBlocks'])
};
</script>

<style>
.grid-container {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(7, 50px);
}
</style>
