<!-- navbar.vue -->

<template>
  <div class="main-header visible">
    <div class="main-header-container">
      <!-- Logo -->
      <a href="../../index.html" class="logo">
        <img src="@/assets/icons/icon.png" alt="icon" class="logo-image" />
        <span class="logo-text">&nbsp;踏沙寻影</span>
      </a>

      <!-- Nav -->
      <nav role="navigation" class="main-nav">
        <ul class="nav-list">
          <!-- Left-side navbar -->
          <li class="main-nav-list">
            <!-- PC -->
            <ul class="phone-hide">
              <li class="nav-item active">
                <a href="../../index.html">首页</a>
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
              <li>
                <a href="/test-page/index.html">
                  <img
                    src="@/components/NavBar/assets/AI-Agent.jpg"
                    alt="image"
                    class="lazy"
                    loading="lazy"
                    style="
                      max-width: 115px;
                      vertical-align: middle;
                      margin-left: 1rem;
                    "
                  />
                </a>
              </li>
            </ul>
          </li>

          <!-- Right side nav -->
          <ul class="right-side-nav">
            <li class="search-add">
              <ul class="search-add-ul">
                <li class="nav-item search">
                  <form role="search" class="search-form">
                    <input
                      type="search"
                      maxlength="64"
                      placeholder="探索踏沙寻影"
                      value=""
                      class="search-input isResourceVisible"
                    />
                    <div class="search-icon-container">
                      <el-icon size="size" color="color">
                        <Search />
                      </el-icon>
                    </div>
                  </form>
                </li>
                <li class="nav-item creator-item">
                  <div class="add-group">
                    <button
                      class="add-btn"
                      @click="gotoPage('/creator-page/index.html')"
                    >
                      创作者中心
                    </button>
                    <div class="more">
                      <el-icon><ArrowDownBold /></el-icon>
                      <div class="more-mask"></div>
                      <div class="more-list">
                        <ul class="menu">
                          <!-- TODO -->
                          <li
                            class="item"
                            @click="gotoPage('/writing-page/index.html')"
                          >
                            <div class="icon write-article"></div>
                            <div class="title">写文章</div>
                          </li>
                          <li
                            class="item"
                            @click="gotoPage('/test-page/index.html')"
                          >
                            <div class="icon issue-points"></div>
                            <div class="title">发沸点</div>
                          </li>
                          <li
                            class="item"
                            @click="gotoPage('/test-page/index.html')"
                          >
                            <div class="icon write-note"></div>
                            <div class="title">写笔记</div>
                          </li>
                          <li
                            class="item"
                            @click="gotoPage('/test-page/index.html')"
                          >
                            <div class="icon create-jcode"></div>
                            <div class="title">写代码</div>
                          </li>
                          <li
                            class="item"
                            @click="gotoPage('/test-page/index.html')"
                          >
                            <div class="icon drafts"></div>
                            <div class="title">草稿箱</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <el-dropdown class="nav-item menu">
              <div class="avatar-wrapper">
                <div class="avatar jj-avatar">
                  <img
                    loading="eager"
                    src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3044413937~40x40.awebp"
                    alt="NoVarYe的头像"
                    class="lazy avatar-img immediate"
                  />
                </div>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item><DropdownMenu /></el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </ul>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts" name="NavBar">
// icons
import type { Search } from "@element-plus/icons-vue";
import { ArrowDownBold } from "@element-plus/icons-vue";
// utils
import { gotoPage } from "@/utils/page/pages";
// components
import { ArrowDown } from "@element-plus/icons-vue";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu.vue";
</script>

<style lang="scss" scoped>
.visible {
  transform: translateZ(0);
}

.byte-icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

.byte-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  pointer-events: none;
}

.byte-icon--spin {
  -webkit-animation: IconSpin 1s infinite linear;
  animation: IconSpin 1s infinite linear;
}

.main-header {
  z-index: 250;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: $white;
  box-shadow: 0 0 0.05rem 0.01rem $white;

  transition: transform 0.2s;

  a {
    font-size: inherit;
    &:hover {
      cursor: pointer;
    }
  }

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;
    width: 100%;
    max-width: 1440px;
    height: 100%;

    margin: auto;
  }
  .logo {
    display: flex;
    align-items: center;

    width: auto;

    padding: 0.75rem 0 0.75rem 0;
    margin: 0 1rem 0 24px;

    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    font-weight: 700;

    &-image {
      max-height: 1.5rem;
      max-width: 1.5rem;
      user-select: none;
    }
    &-text {
      font-size: 1.05rem;
      font-weight: 600;
      color: $black;
      user-select: none;
    }
  }
  .main-nav {
    height: 100%;
    flex: 1 0 auto;
    line-height: normal;
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      flex-direction: row-reverse;
      height: 100%;
      margin: 0;

      .main-nav-list {
        display: flex;
        order: 99;

        .phone-hide {
          display: flex;
          .nav-item {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 100%;
            padding: 0 0.6rem;
            margin: 0;

            font-size: 0.8rem;

            color: #86909c;
            cursor: pointer;
          }
        }
      }
      .right-side-nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        height: 100%;
        margin: 0;
        order: 0;
        .nav-item {
          color: #86909c;
          padding: 0 1rem;
          font-size: 1.167rem;
          margin: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .search-add {
          flex: 1 1 auto;
          height: 3.75rem;
          display: flex;
          justify-content: flex-end;
          &-ul {
            display: flex;
            justify-content: flex-start;
          }
          .search {
            cursor: auto;
            padding-left: 0;
            &-form {
              display: flex;
              align-items: center;
              justify-content: space-between;
              box-sizing: border-box;
              background-color: #fff;
              border-radius: 4px;
              position: relative;
              height: 1.834rem;
              border: 1px solid #c2c8d1;
              transition: width 0.2s;
            }
            .search-input {
              border: none;
              width: calc(100% + 15.2rem);
              padding: 0.5rem 0 0.5rem 0.5rem;
              box-shadow: none;
              outline: none;
              font-size: 0.75rem;
              color: #1e80ff;
              background-color: transparent;
              transition: width 0.3s;
            }
            .search-icon-container {
              position: relative;
              left: -2px;
              width: 4rem;
              height: 1.65rem;
              background: #f2f3f5;
              border-radius: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              // .search-icon{}
            }
          }
          .creator-item {
            overflow: visible;
            width: 11rem;
            padding-left: 5px;
            .add-group {
              display: flex;
              align-items: center;
              position: relative;
              cursor: pointer;
              width: 115px;
              height: 1.95rem;
              .update-icon {
                position: absolute;
                top: -12px;
                left: 56px;
                z-index: auto;
              }
              .add-btn,
              .more {
                color: #fff;
                background-color: #1e80ff;
                border-radius: 3px;
                height: 100%;
                transition: background-color 0.1s linear 0.05s;
              }
              .add-btn.hide,
              .more.hide {
                background-color: transparent !important;
              }
              .add-btn {
                font-size: 1rem;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                white-space: nowrap;
                padding: 0 1rem;
                &:hover {
                  background-color: #1171ee;
                }
              }
              .more {
                flex: 0 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.667rem;
                border-left: 1px solid hsla(0, 0%, 100%, 0.1);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                box-sizing: border-box;
                &:hover {
                  background-color: #1171ee;
                  .more-list {
                    display: flex;
                  }
                  .more-mask {
                    width: 100%;
                    transition-delay: 0s;
                  }
                }
              }
              .new-user-modal {
                cursor: default;
                position: absolute;
                left: -118px;
                top: 50px;
                z-index: 1;
              }
              .more-mask {
                transition: width 0.1s linear 0.5s;
                position: absolute;
                right: 0;
                top: 100%;
                width: 0;
                height: 30px;
                z-index: 9;
                opacity: 0;
              }
              .more-list {
                display: none;
                position: absolute;
                width: 402px;
                max-height: 344px;
                flex-direction: column;
                right: 0;
                top: 47px;
                padding: 20px;
                background: #fff;
                border: 1px solid #f7f8fa;
                box-shadow: 0 0 24px rgba(81, 87, 103, 0.16);
                border-radius: 4px;
                box-sizing: border-box;
                z-index: 10;
                .menu {
                  display: flex;
                  flex-wrap: wrap;
                  .item {
                    width: 72px;
                    height: 72px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    border-radius: 2px;
                    &:hover {
                      background: #f7f8fa;
                    }
                    .icon {
                      width: 40px;
                      height: 40px;
                      background-position-x: center;
                      background-position-y: center;
                    }
                    .write-article {
                      background-image: url("/src/components/NavBar/assets/icons/article.svg");
                    }
                    .issue-points {
                      background-image: url("/src/components/NavBar/assets/icons/points.svg");
                    }

                    .create-jcode {
                      background-image: url("/src/components/NavBar/assets/icons/jcode.svg");
                    }

                    .drafts {
                      background-image: url("/src/components/NavBar/assets/icons/drafts.svg");
                    }

                    .write-note {
                      background-image: url("/src/components/NavBar/assets/icons/note.svg");
                    }

                    .title {
                      font-size: 14px;
                      line-height: 24px;
                      color: #1e80ff;
                    }
                  }
                }
              }
            }
          }
        }
        .menu {
          position: relative;
          padding-left: 0;
          background-color: #fff;
          .avatar-wrapper {
            margin-right: 2rem;
            .avatar {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              position: relative;
              display: inline-flex;
              box-sizing: border-box;
              .avatar-img {
                border-radius: 50%;
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
                background-color: #f7f8fa;
              }
            }
            .badge {
              position: absolute;
              top: 10px;
              left: 28px;
              width: 8px;
              height: 8px;
              border: 1.5px solid #fff;
              border-radius: 50%;
              background-color: #f64242;
            }
          }
        }
      }
    }
  }
}
</style>
