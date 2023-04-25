<template>
    <h1>HelloWorld</h1>
    <button @click="onClick">{{ text }}</button>
    <template v-if="show">{{ text }}</template>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const text = ref('Button text')
const show = ref(false)
const onClick = () => {
    show.value = !show.value
}

</script>
