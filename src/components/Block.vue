<template>
    <v-sheet
        @click="changeColor()"
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
            colorIndex: 0,
            blockColors: ['white', 'black', 'red', 'green']
        };
    },
    props: ['id'],
    computed: {
        color: function() {
            if (this.border === true) {
                return 'black';
            }
            return this.blockColors[this.colorIndex];
        },
        border() {
            return this.$store.getters.getBlocks[this.id].border;
        }
    },
    methods: {
        changeColor: function() {
            if (this.border === false) {
                if (this.colorIndex == 3) {
                    this.colorIndex = 0;
                    this.$store.commit('updateBlockColor', {
                        id: this.id,
                        color: this.blockColors[this.colorIndex]
                    });
                } else {
                    this.colorIndex++;
                    this.$store.commit('updateBlockColor', {
                        id: this.id,
                        color: this.blockColors[this.colorIndex]
                    });
                }
            }
        }
    }
};
</script>

<style></style>
