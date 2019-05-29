<template>
    <v-sheet
        @click="cycleColor()"
        :color="color"
        elevation="5"
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
            colors: ['Black', 'White', 'Red', 'Green'],
            color: 'Black',
            index: 0
        };
    },
    props: {
        clickable: Boolean
    },
    computed: {
        watchColor: function() {
            return this.color;
        }
    },
    methods: {
        cycleColor: function() {
            if (this.index == 4) this.index = 0;
            this.color = this.colors[this.index++];
        }
    }
};
</script>

<style></style>
