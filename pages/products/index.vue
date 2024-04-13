<template>
    <div>
        <h1>Products</h1>
        <div style="display: flex; align-items: center; flex-wrap: wrap;">
            <div v-for="each in products">
                <ProductCard :product="each"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products"
    })

    //fetch the products

    const {data: products} = await useFetch('https://fakestoreapi.com/products');
</script>