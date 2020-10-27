<template>
    <TheNavbar/>
    <slot/>
</template>
<script>

import TheNavbar from './TheNavbar.vue'
export default {
    name: 'Layout',
    components: {
        TheNavbar
    }
}
</script>