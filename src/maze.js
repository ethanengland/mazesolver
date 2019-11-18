import Graph from './graph'

export default class Maze {

    constructor(width, height) {
        this.width = width
        this.height = height
        this.Maze = []
        this.startId = null
        this.endId = null

        let count = 0;
        for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
                if (i == 0 || i == height - 1 || j == 0 || j == height - 1) {
                    this.Maze.push({
                        color: 'black',
                        border: true,
                        id: count
                    })
                } else {
                    this.Maze.push({
                        color: 'white',
                        border: false,
                        id: count
                    })
                }
                count++;
            }
        }
    }

    getBlocks() {
        return this.Maze;
    }

    getMaze() {
        return this
    }

    setupGraph() {

        var graph = new Graph((this.width - 2) * (this.height - 2));

        for (var i = 0; i < this.Maze.length; i++) {
            if (this.Maze[i].border === false) graph.addVertex(this.Maze[i].id)
            if (this.Maze[i].color === 'green') this.startId = this.Maze[i].id
            if (this.Maze[i].color === 'red') this.endId = this.Maze[i].id
        }

        for (var i = 0; i < this.Maze.length; i++) {
            debugger
            //add up edge
            if (i - 7 >= 0 && i - 7 <= this.Maze.length - 1)
                if (this.Maze[i].color !== 'black' && this.Maze[i - 7].color !== 'black')
                    graph.addEdge(this.Maze[i].id, this.Maze[i - 7].id)
            //add down edge
            if (i + 7 >= 0 && i + 7 <= this.Maze.length - 1)
                if (this.Maze[i].color !== 'black' && this.Maze[i + 7].color !== 'black')
                    graph.addEdge(this.Maze[i].id, this.Maze[i + 7].id)
            //add left edge
            if (i - 1 >= 0 && i - 1 <= this.Maze.length - 1)
                if (this.Maze[i].border === false && this.Maze[i - 1].border === false)
                    graph.addEdge(this.Maze[i].id, this.Maze[i - 1].id)
            //add right edge
            if (i + 1 >= 0 && i + 1 <= this.Maze.length - 1)
                if (this.Maze[i].border === false && this.Maze[i + 1].border === false)
                    graph.addEdge(this.Maze[i].id, this.Maze[i + 1].id)
        }
        return graph

    }


    solve() {
        var graph = this.setupGraph();
        graph.printGraph();
        graph.bfs(this.startId)
    }

}