<template>
  <div class="sidebar-block banner-block">
    <div class="banner banner">
      <a href="/test-page/index.html" target="_blank"
        ><img src="./assets/ad1.jpg" class="banner-image"
      /></a>
      <div class="ctrl-box" @click="closeAd()">
        <i class="close-btn byte-icon byte-icon--close-circle" title="关闭"
          ><Close
        /></i>
        <a class="label" href="/test-page/index.html" target="_blank"
          ><span class="inco">投放</span> <span>广告</span></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Ad">
import Close from "./assets/icons/Close.vue";

const closeAd = (): void => {
  const parent = document.querySelector(".banner-block");
  if (parent) {
    parent.remove();
  }
};
</script>

<style lang="scss" scoped>
.sidebar-block {
  box-shadow: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  margin-bottom: 1.66rem;
  font-size: 1.16rem;
  line-height: 1.29;
  border-radius: 4px;
  color: #252933;
  .banner-block {
    overflow: hidden;
  }
  .banner {
    height: 120px;
    position: relative;
    font-size: 0;
    cursor: pointer;
    .banner-image {
      width: "240";
      height: "200";
      width: 100%;
      height: 100%;
      overflow-clip-margin: content-box;
      overflow: clip;
    }
    .ctrl-box {
      .close-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1rem;
        color: #909090;
        opacity: 0.5;
        display: none;
        &:hover {
          opacity: 1;
        }
      }

      .label {
        position: absolute;
        right: 10px;
        bottom: 10px;
        line-height: 36px;
        height: 36px;
        font-size: 20px;
        z-index: 1;
        transform: scale(0.5);
        -webkit-transform: scale(0.5);
        transform-origin: right bottom;
        -webkit-transform-origin: right bottom;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
        border: 1px solid #fff;
        border-radius: 6px;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: 300;
        &:hover {
          background-color: rgba(0, 0, 0, 0.4);
          .inco {
            display: inline-block;
          }
        }
        span {
          vertical-align: top;
        }

        .inco {
          display: none;
        }
      }
    }

    &:hover .ctrl-box .close-btn {
      display: block;
    }
  }
}

.byte-icon {
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
  line-height: 1 svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    pointer-events: none;
  }
  &--spin {
    -webkit-animation: IconSpin 1s infinite linear;
    animation: IconSpin 1s infinite linear;
  }
}
</style>
