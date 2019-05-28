<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="blue-grey lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="blue-grey darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn flat class="hidden-sm-and-down">Home</v-btn>
            <v-btn flat class="hidden-sm-and-down">About DFS</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn color="blue-grey lighten-3" class="hidden-sm-and-down">How To Use</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'DFS Maze Solver',
            drawer: false,
            items: [
                { title: 'Home' },
                { title: 'Depth First Search' },
                { title: 'How To Use' }
            ]
        };
    }
};
</script>

<style scoped>
</style>