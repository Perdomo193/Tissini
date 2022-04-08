<template>
    <div class="footerPage">
        <nav class="menu">
            <a href="">
                <img src="./../../static/icons/house-solid.svg" alt="" class="iconFooter">
                <p>{{ data.category }}</p>
            </a>
            <a href="">
                <img src="./../../static/icons/shop.svg" alt="" class="iconFooter">
                <p>{{ data.catalogue }}</p>
            </a>
            <a href="">
                <img src="./../../static/icons/cart-shopping.svg" alt="" class="iconFooter">
                <p>{{ data.shopping_card }}</p>
            </a>
            <a href="" @click="closeSession">
                <img src="./../../static/icons/close.svg" alt="" class="iconFooterClose">
            </a>
        </nav>
    </div>
</template>

<style src = "./footer.css"></style>
<script src = "./footer.js"></script>