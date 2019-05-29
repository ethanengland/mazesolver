<template>
    <div class="grid-container">
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block :border="true" />
        <Block :border="true" />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block :border="true" />
        <Block :border="true" />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block :border="true" />
        <Block :border="true" />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block :border="true" />
        <Block :border="true" />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
        <Block :border="true" />
    </div>
</template>

<script>
import Block from '../components/Block';
export default {
    name: 'Maze',
    components: {
        Block
    },
    props: {
        width: {
            default: 7,
            type: Number
        },
        height: {
            default: 7,
            type: Number
        }
    }
};
</script>

<style>
.grid-container {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(7, 50px);
}
</style>
