<template>
    <div class="grid-container" :style="[cols(), rows()]">
        <Block v-for="b in getBlocks" :id="b.id" :key="b.id" />
    </div>
</template>

<script>
import Block from '../components/Block';
import { mapGetters } from 'vuex';
export default {
    name: 'Maze',
    components: {
        Block
    },
    props: [
        'width',
        'height'
    ],
    watch: {
        width() {
            this.cols()
        },
        height() {
            this.rows()
        }
    },
    computed: mapGetters(['getBlocks']),
    methods: {
        cols() {
            return {
                'grid-template-columns': 'repeat(' + this.width + ', 50px)'
            }
        },
        rows() {
            return {
                'grid-template-rows': 'repeat(' + this.height + ', 50px)'
            }
        }
    }
};
</script>

<style>
.grid-container {
    display: grid;
    grid-gap: 8px;
}
</style>
