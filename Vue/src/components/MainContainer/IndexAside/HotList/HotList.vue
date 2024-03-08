<template>
  <div class="hot-list-container">
    <div class="hot-list-item">
      <div class="hot-item-header">
        <div class="hot-title">
          <img
            src="./assets/article.png"
            type="icon"
            alt="icon"
            class="hot-icon"
          />
          <span title="文章榜" class="title-text"> 文章榜 </span>
        </div>
        <div class="item-header-button">
          <!-- TODO -->
          <Refresh />
          <span class="text">换一换</span>
        </div>
      </div>
      <div class="divider" style="margin-bottom: 4px">
        <div class="content"></div>
      </div>
      <ul class="hot-item-body">
        <div class="skeleton">
          <li class="hot-item hot-item-article">
            <div class="body-index first-index">1</div>
            <HotItem />
          </li>
          <li class="hot-item hot-item-article">
            <div class="body-index second-index">2</div>
            <HotItem />
          </li>
          <li class="hot-item hot-item-article">
            <div class="body-index third-index">3</div>
            <HotItem />
          </li>
          <li class="hot-item hot-item-article">
            <div class="body-index">4</div>
            <HotItem />
          </li>
          <li class="hot-item hot-item-article">
            <div class="body-index">5</div>
            <HotItem />
          </li>
        </div>
      </ul>
      <div class="divider" style="margin-top: 4px">
        <div class="content"></div>
      </div>
      <div class="hot-item-footer">
        <a href="#" class="item-footer-button" target="_self">
          <span>查看更多</span> <More
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="HostList">
//icons
import Refresh from "@/components/MainContainer/IndexAside/HotList/assets/icons/Refresh.vue";
import More from "@/components/MainContainer/IndexAside/HotList/assets/icons/More.vue";

// components
import HotItem from "@/components/MainContainer/IndexAside/HotList/HotItem/HotItem.vue";
</script>

<style lang="scss" scoped>
.hot-list-container {
  .hot-list-item {
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 1.66rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 12px 8px;
    overflow: hidden;
    .divider {
      width: 100%;
      height: 1px;
      box-sizing: border-box;
      .content {
        margin: 0 8px;
        height: 100%;
        background: rgba(228, 230, 235, 0.5);
      }
    }

    .hot-item-header {
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      align-items: center;
      padding: 0 8px;
      .hot-title {
        font-weight: 500;
        font-size: 1.33rem;
        line-height: 2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #252933;
      }

      .hot-icon {
        width: 1.66rem;
        height: 1.66rem;
        line-height: 0;
        margin-right: 0.66rem;
      }

      .item-header-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        &:hover path {
          fill: #1e80ff;
        }

        &:hover .text {
          color: #1e80ff;
        }

        .text {
          margin-left: 4px;
          color: #8a919f;
        }
      }
    }

    .hot-item-body {
      min-height: 7rem;
      .hot-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        font-size: 1.16rem;
        line-height: 1.83rem;
        :hover {
          background-color: #f7f8fa;
        }
        :last-child {
          margin-bottom: 0;
        }
      }
    }

    .hot-item-footer {
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      .item-footer-button {
        font-size: 14px;
        color: #8a919f;
        line-height: 1.66rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        path {
          fill: #8a919f;
        }
      }
    }
  }
}

.skeleton {
  margin: 0.17rem -1px;
}

.body-index {
  font-weight: 800;
  min-width: 18px;
  line-height: 22px;
  margin: 0 0.92rem 0 0;
  color: #8a919f;
  font-family: Archivo;
  text-align: left;
}

.first-index {
  background: linear-gradient(180deg, #f64242 20%, rgba(246, 66, 66, 0.4) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.second-index {
  background: linear-gradient(180deg, #ff7426 20%, rgba(255, 116, 38, 0.4) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.third-index {
  background: linear-gradient(180deg, #ffac0c 20%, rgba(255, 172, 12, 0.4) 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
