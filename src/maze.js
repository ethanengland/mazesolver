import Graph from './graph'

export default class Maze {

    constructor(width, height) {
        this.width = width
        this.height = height
        this.Maze = []

        let count = 0;
        for(var i = 0; i < height; i++)
        {
            for(var j = 0; j < width; j++) {
                if(i == 0 || i == height - 1 || j == 0 || j == height - 1) {
                    this.Maze.push({
                        color: 'black',
                        border: true,
                        id: count
                    })
                }
                else {
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

        var graph = new Graph(this.width * this.height);

        for(var i = 0; i < this.Maze.length; i++) {
            
            if(this.Maze[i].border == false)  graph.addVertex(this.Maze[i].id)
        }

        debugger
        for(var i = 0; i < this.Maze.length; i++) {
            //add up edge
            if(this.Maze.includes(i - 7)) 
                if(this.Maze[i - 7].border == false)
                    graph.addEdge(this.Maze[i].id, this.maze[i - 7].id)
            //add down edge
            if(this.Maze.includes(i + 7)) 
                if(this.Maze[i + 7].border == false)
                    graph.addEdge(this.Maze[i].id, this.maze[i + 7].id)
            //add left edge
            if(this.Maze.includes(i - 1)) 
                if(this.Maze[i - 1].border == false)
                    graph.addEdge(this.Maze[i].id, this.maze[i - 1].id)
            //add right edge
            if(this.Maze.includes(i + 1)) 
                if(this.Maze[i + 1].border == false)
                    graph.addEdge(this.Maze[i].id, this.maze[i + 1].id)
        }

        return graph

    }


    solve() {
        var graph = this.setupGraph();
        graph.printGraph();
        
    }

}
