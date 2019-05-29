<template>
    <v-sheet
        @click="cycleColor()"
        :color="color"
        elevation="10"
        class="mx-auto"
        height="100"
        width="100"
    ></v-sheet>
</template>

<script>
export default {
    name: 'Block',
    data() {
        return {
            colors: ['black', 'white', 'red', 'green'],
            index: 0
        };
    },
    props: {
        border: Boolean
    },
    computed: {
        color: function() {
            return this.colors[this.index];
        }
    },
    methods: {
        cycleColor: function() {
            if (this.border === false) {
                if (this.index == 3) this.index = 0;
                else this.index++;
            }
        }
    }
};
</script>

<style></style>
