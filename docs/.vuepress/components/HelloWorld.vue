<template>
    <h1>Hello World App</h1>
    <p>Azure SSO login redirect page for Hivetest</p>
    <!-- <button @click="onClick">{{ text }}</button>
    <template v-if="show">{{ text }}</template> -->
</template>
<script lang="ts" setup>
import {ref} from 'vue'
const text = ref('Button text')
const show = ref(false)
const onClick = () => {
    show.value = !show.value
}

</script>
