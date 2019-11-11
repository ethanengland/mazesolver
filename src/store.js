import Vue from 'vue';
import Vuex from 'vuex';
import Maze from './maze'
import { white } from 'ansi-colors';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        maze: new Maze(7, 7),
    },
    getters: {
        getBlocks: state => {
            return state.maze.getBlocks()
        },
        getMaze: state => {
            return state.maze.getMaze()
        }
    },
    mutations: {
        updateBlockColor(state, payload) {
            state.maze.getBlocks()[payload.id].color = payload.color;
        },
        updateMazeSize(state, payload) {
            debugger
            state.maze = new Maze(payload.width, payload.height)
        },
        addVertices(state, payload) {
            state.sevenBlocks.forEach(s => {
                state.graph.addVertex(s);
            });
        },
        solveMaze(state, payload) {
            state.maze.solve();
        }
    },
    actions: {
        
    }
});
