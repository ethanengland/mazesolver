<template>
  <v-container>
    <v-layout justify-center>
      <maze/>
    </v-layout>
    <div/>
    <v-layout justify-center>
      <v-btn raised="true" round="true" dark="true" color="blue-grey">Solve</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Maze from '../components/Maze';

export default {
    components: {
        Maze
    }
};
</script>
