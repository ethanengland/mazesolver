<template>
    <v-sheet
        @click="cycleColor()"
        :color="color"
        elevation="10"
        class="mx-auto"
        height="50"
        width="50"
    ></v-sheet>
</template>

<script>
export default {
    name: 'Block',
    data() {
        return {
            colors: ['white', 'black', 'red', 'green'],
            index: 0
        };
    },
    props: {
        border: Boolean
    },
    computed: {
        color: function() {
            if (this.border === true) {
                return 'black';
            }
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
