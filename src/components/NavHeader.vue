<template>
<div class="header">
    <div class="heade-img-wrap">
        <!-- <span class="heade-img"></span> -->
    </div>

    <div class="nav-topbar">
        <div class="container">
            <div class="topbar-menu">
                <a href="javascript:;">小米商城</a>
                <a href="javascript:;"> MIUI</a>
                <a href="javascript:;"> IoT</a>
                <a href="javascript:;">云服务</a>
                <a href="javascript:;">金融</a>
                <a href="javascript:;">有品</a>
                <a href="javascript:;">小爱开放平台</a>
            </div>
            <div class="topbar-user">
                <a href="javascript:;" v-if="username">{{username}}</a>
                <a href="javascript:;" v-if="!username" @click="login">登录</a>
                <a href="javascript:;" v-if="username">我的订单</a>
                <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
            </div>
        </div>
    </div>
    <div class="nav-header">
        <div class="container">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="header-menu">
                <div class="item-menu">
                    <span>小米手机</span>
                    <div class="children">
                        <ul>
                            <li class="product" v-for="(item,index) in phoneList" :key="index">
                                <a :href="'/#/product/' + item.id" target="_blank">
                                    <div class="pro-img">
                                        <img :src="item.mainImage" :alt="item.subtitle">
                                    </div>
                                    <div class="pro-name">{{item.name}}</div>
                                    <div class="pro-price">{{item.price | currency}}</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>Redmi红米</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>电视</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>笔记本</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>家电</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>路由器</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>智能硬件</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>服务</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="item-menu">
                    <span>社区</span>
                    <div class="children">
                        <ul>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                            <li class="product">
                                <a href="" target="_blank">
                                    <div class="pro-img">
                                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b11742a0be47f9d97bb6a13ea580018d.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                                    </div>
                                    <div class="pro-name">小米10至尊纪念版</div>
                                    <div class="pro-price">5299元起</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="headedr-search">
                <div class="wrapper">
                    <input type="text" name="keyword" placeholder="手机">
                    <span class="icon-bg"><a href="jsvascript:;"></a></span>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'nav-header',
    props: {},
    data() {
        return {
            username: '',
            phoneList: []
            
        };
    },
    filters:{
        currency(val){
            if(!val) return '0.00';
            return '￥' + val.toFixed(2) + '元'
        }
    },
    computed: {},
    created() {},
    mounted() {
        this.getProductList();
    },
    watch: {},
    methods: {
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId: '100012',
                    pageSize: 6
                }
            }).then((res)=>{

                console.log(res)
                // if(res.list.length >= 6){
                //     this.phoneList = res.list.slice(0,6);
                // }
            })
        },
        goToCart(){
            this.$router.push('/cart')
        },
        login(){
            this.$router.push('/login')
        },
    },
    components: {},
};
</script>
<style lang="scss">
@import '../assets/scss/config';
@import '../assets/scss/base';
@import '../assets/scss/mixin';
.header {
    position: relative;
    .heade-img-wrap {
        background-image: url('https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/271a0ad51f0b0760ed9cb46791fb2b31.jpg?w=5120&h=240');
        top: 0;
        height: 120px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: auto 120px;
    }
    .nav-topbar {
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #b0b0b0;
        .container {
            @include flex();
            a {
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
                &:hover {
                    color: $colorG;
                }
                &:last-child {
                    margin-right: 0;
                }
            }
            .my-cart {
                width: 110px;
                background-color: $colorA;
                text-align: center;
                color: $colorG;
                .icon-cart {
                    // @include bgImg(16px, 16px, '/imgs/icon-cart-checked.png');
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    background: url('../../public/imgs/icon-cart-checked.png')no-repeat center;
                    background-size: contain;
                    margin-right: 4px;
                }
            }
        }
    }
    .nav-header {
        .container {
            position: relative;
            height: 112px;
            @include flex();
            .header-logo {
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: $colorA;
                a {
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &::before {
                        content: ' ';
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('../../public/imgs/mi-logo.png')no-repeat center;
                        background-size: 55px;
                        transition: margin .2s;
                    }
                    &::after {
                        content: ' ';
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        background: url('../../public/imgs/mi-home.png')no-repeat center;
                        background-size: 55px;
                    }
                    &:hover {
                        margin-left: -55px;
                        transition: margin .2s;
                    }
                }
            }
            .header-menu {
                display: inline-block;
                padding-left: 200px;
                box-sizing: border-box;
                .item-menu {
                    display: inline-block;
                    color: $colorB;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 112px;
                    margin-right: 20px;
                    span {
                        cursor: pointer;
                    }
                    &:hover {
                        color: $colorA;
                        .children {
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0;
                        opacity: 0;
                        overflow: hidden;
                        border-top: 1px solid $colorH;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 10;
                        transition: height .5s;
                        .product {
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            &::before {
                                content: '';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child::before {
                                display: none;
                            }
                            a {
                                display: inline-block;
                            }
                            img {
                                width: auto;
                                height: 111px;
                                margin-top: 26px;
                            }
                            .pro-img {
                                width: 137px;
                            }
                            .pro-name {
                                font-weight: bold;
                                margin-top: 19px;
                                color: $colorB;
                            }
                            .pro-price {
                                font-weight: bold;
                                margin-top: 10px;
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .headedr-search {
                width: 319px;
                .wrapper {
                    height: 50px;
                    border: 1px solid #e0e0e0;
                    display: flex;
                    align-items: center;
                    input {
                        border: none;
                        border-right: 1px solid #e0e0e0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                        box-sizing: border-box;
                    }
                    span {
                        width: 55px;
                        height: 50px;
                        &:hover {
                            background-color: $colorA;
                        }
                        a {
                            // @include bgImg(18px, 18px, '/imgs/icon-search.png');
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            background: url('../../public/imgs/icon-search.png')no-repeat center;
                            background-size: contain;
                            margin-left: 17px;
                            margin-top: 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>