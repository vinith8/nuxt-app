<template>
    <div>
        <Head>
            <Title>Page Details {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <productDetails :product="product"/>
    </div>
</template>

<script setup>
   import { useRoute } from 'vue-router';

    const {id} = useRoute().params

    definePageMeta({
        layout: "products"
    })

    //fetch the product

    const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`, {key: id})

    if(!product.value){
        throw createError({statusCode: 404, statusMessage: "Product not found"})
    }

</script>
