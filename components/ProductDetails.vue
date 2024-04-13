<template>
    <div style="display: flex; align-items: center; justify-content: center;">
        <div>
        <img :src="product.image" style="width:200px" />
        </div>
        <div>
            <h1>Product Title: {{ product.title }}</h1>
            <div>Product price: {{ product.price }}</div>
        </div>
    </div>
</template>

<script setup>
    const {product} = defineProps(['product']);
</script>