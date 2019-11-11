import Vue from 'vue';
import Vuex from 'vuex';
import { white } from 'ansi-colors';
import Graph from './Graph';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sevenBlocks: [
            {
                color: white,
                border: true,
                id: 0
            },
            {
                color: white,
                border: true,
                id: 1
            },
            {
                color: white,
                border: true,
                id: 2
            },
            {
                color: white,
                border: true,
                id: 3
            },
            {
                color: white,
                border: true,
                id: 4
            },
            {
                color: white,
                border: true,
                id: 5
            },
            {
                color: white,
                border: true,
                id: 6
            },
            {
                color: white,
                border: true,
                id: 7
            },
            {
                color: white,
                border: false,
                id: 8
            },
            {
                color: white,
                border: false,
                id: 9
            },
            {
                color: white,
                border: false,
                id: 10
            },
            {
                color: white,
                border: false,
                id: 11
            },
            {
                color: white,
                border: false,
                id: 12
            },
            {
                color: white,
                border: true,
                id: 13
            },
            {
                color: white,
                border: true,
                id: 14
            },
            {
                color: white,
                border: false,
                id: 15
            },
            {
                color: white,
                border: false,
                id: 16
            },
            {
                color: white,
                border: false,
                id: 17
            },
            {
                color: white,
                border: false,
                id: 18
            },
            {
                color: white,
                border: false,
                id: 19
            },
            {
                color: white,
                border: true,
                id: 20
            },
            {
                color: white,
                border: true,
                id: 21
            },
            {
                color: white,
                border: false,
                id: 22
            },
            {
                color: white,
                border: false,
                id: 23
            },
            {
                color: white,
                border: false,
                id: 24
            },
            {
                color: white,
                border: false,
                id: 25
            },
            {
                color: white,
                border: false,
                id: 26
            },
            {
                color: white,
                border: true,
                id: 27
            },
            {
                color: white,
                border: true,
                id: 28
            },
            {
                color: white,
                border: false,
                id: 29
            },
            {
                color: white,
                border: false,
                id: 30
            },
            {
                color: white,
                border: false,
                id: 31
            },
            {
                color: white,
                border: false,
                id: 32
            },
            {
                color: white,
                border: false,
                id: 33
            },
            {
                color: white,
                border: true,
                id: 34
            },
            {
                color: white,
                border: true,
                id: 35
            },
            {
                color: white,
                border: false,
                id: 36
            },
            {
                color: white,
                border: false,
                id: 37
            },
            {
                color: white,
                border: false,
                id: 38
            },
            {
                color: white,
                border: false,
                id: 39
            },
            {
                color: white,
                border: false,
                id: 40
            },
            {
                color: white,
                border: true,
                id: 41
            },
            {
                color: white,
                border: true,
                id: 42
            },
            {
                color: white,
                border: true,
                id: 43
            },
            {
                color: white,
                border: true,
                id: 44
            },
            {
                color: white,
                border: true,
                id: 45
            },
            {
                color: white,
                border: true,
                id: 46
            },
            {
                color: white,
                border: true,
                id: 47
            },
            {
                color: white,
                border: true,
                id: 48
            }
        ],
        tenBlocks: [],
        maze: {
            width: {
                default: 7,
                type: Number
            },
            height: {
                default: 7,
                type: Number
            }
        },
        // graph: new Graph(width * height)
    },
    getters: {
        getBlocks: state => {
            return state.sevenBlocks;
        }
    },
    mutations: {
        updateBlockColor(state, payload) {
            state.sevenBlocks[payload.id].color = payload.color;
        },
        updateMazeSize(state, payload) {
            state.maze.width = payload.width;
            state.maze.height = payload.height;
        },
        addVertices(state, payload) {
            state.sevenBlocks.forEach(s => {
                state.graph.addVertex(s);
            });
        }
    },
    actions: {}
});
