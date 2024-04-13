<template>
    <div style="padding:10px; margin:10px; border:solid black 1px;">
        <div style="margin:10px;">
            <img :src="product.image" alt="" style="width:50px;" />
        </div>
        <nuxt-link :to="`/products/${product.id}`">{{ product.title }}</nuxt-link>
    </div>

</template>

<script setup>
    const {product} = defineProps(['product']);
</script>