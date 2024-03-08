
<!-- navbar.vue -->

<template>

    <el-container class="hidden">
        <el-row class="navbar-container" justify="center">
            <!-- icon -->
            <div class="navbar-container-icon">
                <a class="site-icon" href="../../index.html">
                    <img src="@/assets/icons/icon.png" class="site-icon-image" >
                    <span class="site-icon-text">&nbsp;踏沙寻影</span>
                </a>
            </div >
            <!-- nav -->
            <div class="navbar-container-nav">
                <ul>
                    <li class="nav-item active">
                        <a href="/test-page/index.html">首页</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">沸点</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">课程</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">直播</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">活动</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">竞赛</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">商城</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">APP</a>
                    </li>
                    <li class="nav-item">
                        <a href="/test-page/index.html">插件</a>
                    </li>
                </ul>
            </div>
            <!-- Search -->
            <div class="right-side-nav">
                <ul class="search-add-ul">
                    <li class="search">search</li>
                    <li class="add-group">
                        <div class="add-btn">add</div>
                        <div class="add-more">more</div>
                    </li>
                </ul>
            </div>
        </el-row>   
    </el-container>
    <div class="main-header">
        dfdf
    </div>

    

    <img src= "@/assets/icons/AI-Agent.jpg" alt="image" class="lazy hidden" loading="lazy" style="max-width: 115px; vertical-align: middle;">
</template>

<script setup lang="ts" name="NavBar">

</script>

<style lang="scss" scoped>
.visible{
    display: block;
}
.navbar-container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 3.75rem;
    
    background-color: $white;
    box-shadow: 0 0 0.05rem 0.01rem $white;
    
    a{
        &:hover{
            cursor: pointer;
        }
    }
    &-icon{
        display: flex;
        align-items: center;

        .site-icon{
                display: flex; 
                align-items: center;
                
                margin: 0 0.5rem 0 1rem;

                white-space: nowrap;
                text-align: center;
                vertical-align: middle;
                font-weight: bolder;
            
                &-image{
                    max-height: 1.5rem;
                    max-width: 1.5rem;
                    user-select: none;
                }
    
                &-text{
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: $black;
                    user-select: none;
                }
        }
    }
    &-nav{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        ul{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            height: 100%;

            .active{
                a{
                    color: $primary;
                }
            }

            li{
                display: flex;
                align-items: center;
                height: 100%;

                margin: 0 .75rem;
               
                a{
                    color: $surface-600;
                    font-size: 1rem;
                    font-weight: 400;
                    &:hover{
                        color: $primary;
                    }
                }
            }
        }
    }
}

.main-header{
    display: block;
    position: fixed;    
    top: 0;
    left: 0;
    right: 0;
    transition: transform .2s;

    .logo{}
    nav{
        .nav-list{
            .main-nav-list{
                ul{
                    li{

                    }
                }
            }
            .right-side-nav{
                .nav-item{}
                .search-add{}
                .vip-entry{}
                .notification{}
                .menu{}
            }
        } 
    }
}

</style>