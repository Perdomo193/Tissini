<template>
    <div class="carouselOffersPage">
        <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-50 imageCarouselOffers" src="./../../static/img/carousel_offers/product1.png" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h4>{{ dataOffers.blusaAzul.name }} T:{{ dataOffers.blusaAzul.talla }}</h4>
                        <p>${{ dataOffers.blusaAzul.price }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-50 imageCarouselOffers" src="./../../static/img/carousel_offers/product2.png" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block description">
                        <h4>{{ dataOffers.blusaBaige.name }} T:{{ dataOffers.blusaBaige.talla }}</h4>
                        <p>${{ dataOffers.blusaBaige.price }}</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<style src = "./carouselOffers.css"></style>
<script src ="./carouselOffers.js"></script>
