<template>
    <v-container fluid>
        <v-layout>
            <h1>How To Use Page</h1>
                <div class="flex-container">
                    <Block :border="true"/>
                    <Block :border="true"/>
                    <Block :border="true"/>
                    <Block :border="true"/>
                    <Block :border="true"/>
                    <Block :border="true"/>
                </div>
        </v-layout>
    </v-container>
</template>
<script>
import Block from '../components/Block';
export default {
    name: 'HowToUse',
    components: {
        Block
    }
};
</script>
<style scoped>
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
</style>
