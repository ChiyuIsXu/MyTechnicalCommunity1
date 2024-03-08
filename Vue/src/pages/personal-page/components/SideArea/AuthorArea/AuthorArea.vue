<template>
  <div class="sidebar-block author-block author-block-container pure">
    <!-- TODO -->
    <a href="#" target="_blank" rel="" class="jj-link user-item item"
      ><div class="avatar jj-avatar avatar">
        <img
          loading="eager"
          src="https://p9-passport.byteacctimg.com/img/user-avatar/fe9f8bda5d8cdec4153d6aab1d9359af~170x170.awebp"
          alt="avatar"
          class="lazy avatar-img immediate"
        />
      </div>
      <div class="info-box" style="visibility: visible">
        <span to="[object Object]" blank="true" class="username"
          ><span class="name" style="max-width: 128px"> 抹茶san </span>
          <span to="" blank="true" class="rank"
            ><img
              src="./assets/创作等级LV.4.jpg"
              alt="创作等级LV.4"
              title="创作等级LV.4"
              class="lazy"
              style="aspect-ratio: NaN"
              loading="lazy"
          /></span>
        </span>
        <div title="前端开发" class="position">前端开发</div>
        <div class="extra-container"></div></div
    ></a>
    <div class="count-container">
      <a
        href="/test-page/index.html"
        target="_blank"
        rel=""
        class="jj-link stat-item item"
        ><div class="count" style="">50</div>
        <div>文章</div></a
      >
      <a
        href="/test-page/index.html"
        target="_blank"
        rel=""
        class="jj-link stat-item item"
        ><div class="count" style="">96k</div>
        <div>阅读</div></a
      >
      <a
        href="/test-page/index.html"
        target="_blank"
        rel=""
        class="jj-link stat-item item"
        ><div class="count" style="">515</div>
        <div>粉丝</div></a
      >
    </div>
    <div
      class="operate-btn"
      style="position: relative; z-index: 2; min-height: 36px"
    >
      <span z-index="100"
        ><div
          class="byte-tooltip byte-tooltip--dark"
          x-placement="left"
          style="
            display: none;
            position: absolute;
            max-width: none;
            will-change: transform;
            z-index: 1005;
            top: 0px;
            left: 0px;
            transform: translate3d(-10px, 18px, 0px);
          "
        >
          <span>加个关注，精彩更新不错过~</span>
          <i
            class="byte-icon byte-icon--close"
            style="cursor: pointer; color: #8a919f; margin-left: 10px"
            ><svg
              t="1561638608887"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="441911"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M512 448l288-288c6.4-6.4 19.2-6.4 32 0l25.6 32c6.4 6.4 6.4 19.2 0 32L569.6 505.6l288 288c6.4 6.4 6.4 19.2 0 32l-32 32c-6.4 6.4-19.2 6.4-32 0L512 569.6l-288 288c-6.4 6.4-19.2 6.4-32 0l-32-32c-6.4-6.4-6.4-19.2 0-32L448 505.6 160 224c-6.4-12.8-6.4-25.6 0-32l32-32c6.4-6.4 19.2-6.4 32 0L512 448z"
                p-id="441912"
              ></path>
              <path
                d="M512 448l288-288c6.4-6.4 19.2-6.4 32 0l25.6 32c6.4 6.4 6.4 19.2 0 32L569.6 505.6l288 288c6.4 6.4 6.4 19.2 0 32l-32 32c-6.4 6.4-19.2 6.4-32 0L512 569.6l-288 288c-6.4 6.4-19.2 6.4-32 0l-32-32c-6.4-6.4-6.4-19.2 0-32L448 505.6 160 224c-6.4-12.8-6.4-25.6 0-32l32-32c6.4-6.4 19.2-6.4 32 0L512 448z"
                p-id="441913"
              ></path></svg
          ></i>
          <div x-arrow="" class="popper__arrow" style="top: 0px"></div>
        </div>
        <span class="byte-tooltip__wrapper">
          <div
            class="animation-follow-btn no-animation"
            style="width: 122px; height: 36px"
            @click="open()"
          >
            <div class="follow-ctx show" style="width: 120px">关注</div>
            <div class="follow-ctx" style="width: 120px">
              <i class="byte-icon byte-icon--check" style="margin-right: 6px"
                ><svg
                  t="1561631650213"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="229010"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M393.6 679.04l467.2-467.84a21.12 21.12 0 0 1 30.08 0l30.08 30.08a21.12 21.12 0 0 1 0 30.08l-512 512a21.12 21.12 0 0 1-30.08 0L106.88 512a21.12 21.12 0 0 1 0-30.08l30.08-30.08a21.12 21.12 0 0 1 30.08 0z"
                    p-id="229011"
                  ></path></svg
              ></i>
              已关注
            </div>
            <div class="follow-ctx" style="width: 34px"></div></div></span
      ></span>
      <a href="/test-page/index.html" class="im-button im-btn">
        <div>私信</div></a
      >
    </div>
  </div>
</template>

<script setup lang="ts" name="AuthorArea">
import { ElMessage, ElMessageBox } from "element-plus";
import type { Action } from "element-plus";

const open = () => {
  ElMessageBox.alert("Working in Process", "WIP", {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: "OK",
    callback: (action: Action) => {
      ElMessage({
        type: "info",
        message: `action: ${action}`,
      });
    },
  });
};
</script>

<style scoped>
.author-block {
  border-radius: 4px;
  background: #fff;
  padding: 20px;
}
.sidebar-block {
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 2px;

  &:after {
    display: table;
    content: "";
    clear: both;
  }

  &:not(.pure) {
    background-color: #fff;

    .block-title {
      padding: 1rem 0;
      font-size: 1.33rem;
      color: #252933;
      border-bottom: 1px solid #e4e6eb;
    }
  }
}
.item {
  display: flex;
  align-items: center;

  &.user-item {
    padding-bottom: 8px;

    .avatar {
      flex: 0 0 auto;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    .info-box {
      flex: 1 1 auto;
      min-width: 0;
      margin-left: 12px;

      .username {
        font-size: 16px;
        font-weight: 500;
        line-height: 2rem;
        color: #252933;
        white-space: pre-wrap;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &,
        .rank {
          display: flex;
          align-items: center;
        }
      }

      .position {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #8a919f;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
}
.count-container {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .stat-item.item {
    flex-direction: column;
    margin-bottom: 8px;
    color: #8a919f;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;

    .count {
      color: #252933;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }

    &:hover {
      cursor: pointer;
      color: #1e80ff;

      .count {
        color: #1e80ff;
      }
    }
  }
}

.hidden {
  visibility: hidden;
}

.operate-btn {
  display: flex;
  align-items: center;
  .im-btn {
    margin-left: 16px;
    flex: 1;
    width: 122px;
  }
}

.animation-follow-btn {
  box-sizing: border-box;
  position: relative;
  border: 1px solid #1e80ff;
  background: #1e80ff;
  color: #fff;
  overflow: hidden;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  flex-shrink: 0;
  transition: width 0.4s, background 0.2s, border 0.2s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.animation-follow-btn {
  box-sizing: border-box;
}

.animation-follow-btn:hover {
  border-color: #1171ee;
  background-color: #1171ee;
}

.animation-follow-btn .follow-ctx {
  position: absolute;
  height: 100%;
  left: 0;
  opacity: 0;
  transform: translate3d(0, -25%, 0);
  transition: transform 0.4s, opacity 0.4s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-follow-btn .follow-ctx.show {
  opacity: 1;
  transform: translateZ(0);
}

.animation-follow-btn.followed {
  border: 1px solid #e4e6eb;
  background: #fff;
  color: #8a919f;
}

.animation-follow-btn.followed:hover {
  opacity: 0.8;
}

.animation-follow-btn.no-animation .follow-ctx,
.animation-follow-btn.no-animation {
  transition: none;
}

.operate-btn {
  display: flex;
  align-items: center;
  .im-btn {
    margin-left: 16px;
    flex: 1;
    width: 122px;
  }
}
.im-button {
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  width: 122px;
  height: 36px;
  background: rgba(30, 128, 255, 0.05);
  border: 1px solid rgba(30, 128, 255, 0.3);
  border-radius: 4px;
  color: #1e80ff;
  justify-content: center;
  align-items: center;
}

.im-button:hover {
  border: 1px solid rgba(30, 128, 255, 0.45);
  background: rgba(30, 128, 255, 0.1);
}

.im-button.has-icon {
  width: 96px;
  height: 34px;
  line-height: 34px;
}

.im-button.has-icon .im-icon {
  margin-right: 6px;
  width: 14px;
  height: 14px;
}
.rank {
  display: inline-flex;
  align-items: center;
  margin-left: 0.33rem;
  vertical-align: middle;
  img {
    width: 35px;
    height: 16px;
  }
}
.jj-avatar {
  display: inline-flex;
  position: relative;
}

.jj-avatar,
.jj-avatar {
  box-sizing: border-box;
}

.jj-avatar .avatar-img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #f7f8fa;
}
</style>
