<template>
    <v-container>
        <v-layout justify-center>
            <v-select
                :items="mazeSizes"
                v-model="mazeSize"
                filled
                label="Maze Size"
                @change="updateMazeSize(mazeSize)"
            ></v-select>
        </v-layout>
        <v-layout justify-center>
            <maze :width="mazeSize.split(' ')[0]" :height="mazeSize.split(' ')[2]" />
        </v-layout>
        <div />
        <v-layout justify-center>
            <v-btn @click="solve" raised="true" round="true" dark="true" color="blue-grey"
                >Solve</v-btn
            >
        </v-layout>
    </v-container>
</template>

<script>
import Maze from '../components/Maze';
import Graph from '../graph';
export default {
    data() {
        return {
            mazeSize: '7 x 7',
            mazeSizes: ['7 x 7', '10 x 10']
        };
    },
    methods: {
        updateMazeSize(mazeSize) {
            const sizes = mazeSize.split(' ');
            this.$store.commit('updateMazeSize', {
                width: sizes[0],
                height: sizes[2]
            });
        },
        solve() {
            this.$store.commit('solveMaze')
        }
    },
    components: {
        Maze
    }
};
</script>
