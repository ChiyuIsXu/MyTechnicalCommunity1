<template>
  <div class="hot-item-text hot-item-text-article">
    <a
      href="#"
      class="title-articles"
      target="_blank"
      title="React 19 发布在即，抢先学习一下新特性"
    >
      React 19 发布在即，抢先学习一下新特性
    </a>
    <!-- TODO  -->
    <a
      href="#"
      class="info"
      target="_blank"
      title="React 19 发布在即，抢先学习一下新特性"
    ></a>
  </div>
</template>

<script lang="ts" setup name="HostItem"></script>

<style lang="scss" scoped>

.hot-item-text {
  color: #252933;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
  .hot-item-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
    line-height: 0;
  }
}
.hot-item-text-authors {
  height: 100%;
  align-items: center;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 140px;
    .title {
      font-size: 14px;
      color: #252933;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }

    .description {
      font-size: 12px;
      color: #515767 !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
}

.hot-item-text-authors .title-authors,
.hot-item-text-authors {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.hot-item-text-authors .title-authors .action {
  display: flex;
  cursor: pointer;
  align-items: center;
  .follow {
    color: #1e80ff;
  }

  .followed {
    color: #c2c8d1;
  }
}

.hot-item-text-authors .title-authors .action.byte-btn:hover {
  background: none !important;
}
.hot-item-text-article {
  height: 24px;
  display: flex;
  align-items: center;
}

.title-articles {
  font-size: 0.9rem;
  color: #252933;
  display: inline-block;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.hot-item-authors {
  height: 42px;
}
</style>
