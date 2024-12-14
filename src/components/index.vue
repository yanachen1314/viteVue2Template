<template>
    <div>
        <h1>Counter</h1>
        <p>Count: {{ counter.count }}</p>
        <p>Double Count: {{ counter.doubleCount }}</p>
        <el-button @click="counter.increment">Increment</el-button>
        <el-button @click="counter.decrement">Decrement</el-button>
    </div>
</template>
<script>
import { useCounterStore } from '../stores/counter'
export default {
    name: 'index',
    data() {
        const counter = useCounterStore();
        return {
            counter
        }
    },
    /*     setup() {
            const counter = useCounterStore();
            return { counter };
        }, */
}
</script>
<style lang="less"></style>