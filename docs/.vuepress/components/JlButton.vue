<template>
    <button @click="onClick">{{ text }}</button>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
    const text = ref('Button text')
    const onClick = () => {

    }
</script>
