<template>
    <div>
        About Page
    </div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, est alias iste quisquam cupiditate provident fugiat sint non delectus, voluptatum, eligendi ad consectetur. Officiis provident voluptates illo, sequi ea a?</p>
    <div>{{ data}}</div>
</template>

<script setup>
    const { data } = await useFetch('/api/index?name=marie', {method:"post", body:{age:30}});
</script>

<style scoped>
    
</style>