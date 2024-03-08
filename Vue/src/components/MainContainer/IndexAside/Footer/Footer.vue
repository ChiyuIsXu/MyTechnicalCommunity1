<template>
  <div class="index-aside-footer">
    <ul class="more-list">
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
          >用户协议</a
        >
      </li>
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
        >
          营业执照
        </a>
      </li>
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
          >隐私政策</a
        >
      </li>
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
          >关于我们</a
        >
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a href="/Vue/test-page/index.html" target="_blank">站点地图</a>
      </li>
      <li class="item">
        <a href="/Vue/test-page/index.html" target="_blank">使用指南</a>
      </li>
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel=""
          class="jj-link"
        >
          友情链接
        </a>
      </li>
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel=""
          class="jj-link"
        >
          更多文章
        </a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <span>
          举报邮箱：
          <a href="/Vue/test-page/index.html">xxxxxxxxxxxx</a>
        </span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <span>
          座机电话：
          <a href="/Vue/test-page/index.html">xxxxxxxxx</a>
        </span>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
        >
          京ICP备：xxxxxxxx号-x
        </a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
        >
          京ICP证：京xxxxxxxx
        </a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <a
          href="/Vue/test-page/index.html"
          target="_blank"
          rel="nofollow"
          class="jj-link"
        >
          <img
            src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/police.d0289dc.png"
            alt="police"
            style="vertical-align: middle"
          />
          京公网安备xxxxxxxxxx号
        </a>
      </li>
    </ul>
    <ul class="more-list">
      <li class="item">
        <span>©2024 踏沙寻影</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.index-aside-footer {
  background-color: transparent;
  box-shadow: none;
  .more-list {
    font-size: 0.75rem;
    line-height: 1.6;
    color: #9aa3ab;
    &:after {
      display: table;
      content: "";
      clear: both;
    }
    .item {
      float: left;
      margin-bottom: 4px;
      &:not(:last-child):after {
        content: "";
        margin-right: 12px;
      }
      a,
      span {
        font-size: 0.75rem;
        color: #8a919f;
      }
      img {
        overflow-clip-margin: content-box;
        overflow: clip;
        width: 20px;
        height: 20px;
      }
    }
  }
  .account-list {
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    .icon {
      width: 24px;
      cursor: pointer;
      &:hover + .qr-panel {
        opacity: 1;
      }
    }
    .wechat {
      position: relative;
      .qr-panel {
        position: absolute;
        background: #fff;
        width: 10rem;
        top: 100%;
        left: -100%;
        z-index: 2;
        padding: 0.8rem 0 0;
        opacity: 0;
        border: 1px solid #ddd;
        transform: translate(-24px);
      }
      .title {
        text-align: center;
      }
      .qr {
        width: 100%;
      }
    }
  }
}
</style>
