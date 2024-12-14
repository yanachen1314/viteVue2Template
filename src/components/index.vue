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
        return {

        }
    },
}
</script>
<style lang="less"></style>