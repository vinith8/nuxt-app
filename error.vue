<template>
    <div>
        <h1>Custom Error Page</h1>
        <p>{{ error.statusCode }}</p>
        <p>Oops.</p>
        <p>{{ error.message }}</p>

        <button @click="handleClearError" >Go Home......</button>
    </div>

</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: "/", fatal: true})
</script>