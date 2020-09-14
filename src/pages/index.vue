<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper v-bind:options="swiperOption">
                    <swiper-slide v-for="(item,index) in sliderList" :key="index">
                        <a v-bind:href="'/#/product/' + item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name: 'nav-home',
    props: {},
    data() {
        return {
            swiperOption: {
                autoplay: true,
                loop: true,
                effect : 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            sliderList: [
                {
                    id:'42',
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/84cec825f1cd04ea6554fece8ecbc236.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
                },
                {
                    id:'45',
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f834e0dcded7308aaedb77b5ee7269c.jpg?w=2452&h=920'
                },
                {
                    id:'46',
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/733138cea0a4d0e77127124cceb91bc3.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
                },
                {
                    id:'',
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cffcccd38ab20f2cfecc5b5c51a77bb6.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
                },
                {
                    id:'',
                    img:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6d74432da3ee355087e8e9d5eb46057.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
                }
            ]
        };
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {},
    components: {
        swiper,
        swiperSlide,
        ServiceBar
    },
};
</script>
<style lang="scss">
    @import '../assets/scss/config';
    @import '../assets/scss/mixin';
    .index {
        .swiper-box {
            position: relative;
            .nav-menu {
                position: absolute;
                width: 264px;
                height: 451px;
                z-index: 9;
                padding: 26px 0;
                background-color: #55585a73;
                box-sizing: border-box;
                .menu-wrap {
                    .menu-item {
                        height: 50px;
                        line-height: 50px;
                        a{
                            position:relative;
                            display:block;
                            font-size:16px;
                            color:#ffffff;
                            padding-left:30px;
                            &:after{
                                position:absolute;
                                right:30px;
                                top:17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover {
                            background-color: $colorA;
                        }
                    }
                }
            }
            .swiper-container {
                height: 451px;
                .swiper-button-prev {
                    left: 274px;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>