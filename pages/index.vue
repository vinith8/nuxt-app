<template>
    <div>
        <h1>Home</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum pariatur id eius libero deserunt voluptate dolorem doloribus? Qui, vitae sequi enim accusamus animi magni culpa ullam. Dicta quasi nihil necessitatibus.
        </p>
    </div>
</template>


<script setup>
    definePageMeta({
        layout: "products"
    })

    useHead({
        title: "Home Page", 
      meta: [
        { name: 'description', content: "Everything about Nuxt framework"}
      ],
      link: [
        {
          rel: 'stylesheet', href:"https://fonts.googleapis.com/icon?family=Material+Icons" 
        }
      ]
    })
</script>

<style scoped>
    
</style>