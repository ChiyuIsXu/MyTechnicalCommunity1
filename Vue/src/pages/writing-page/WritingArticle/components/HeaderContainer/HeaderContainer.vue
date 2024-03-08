<template>
  <header class="header editor-header">
    <div class="left-box"></div>
    <input
      placeholder="输入文章标题..."
      spellcheck="false"
      maxlength="80"
      class="title-input title-input"
    />
    <div class="right-box">
      <div title="" class="status-text status-text with-padding">
        文章将自动保存至草稿箱
      </div>
      <button class="xitu-btn btn-drafts with-padding xitu-btn-outline">
        草稿箱
      </button>
      <div class="publish-popup publish-popup with-padding">
        <button class="xitu-btn">发布</button>
      </div>
      <nav class="navigator main-navigator with-padding">
        <!-- TODO -->
        <el-dropdown class="nav-item menu">
          <div class="avatar-wrapper">
            <div class="avatar jj-avatar">
              <img
                loading="eager"
                src="https://p26-passport.byteacctimg.com/img/mosaic-legacy/3795/3044413937~40x40.awebp"
                alt="NoVarYe的头像"
                class="lazy avatar-img immediate toggle-btn"
              />
            </div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><DropdownMenu /></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts" name="HeaderContainer"></script>

<style lang="scss" scoped>
.header {
  padding: 0 27px;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 100;
}

.header,
.left-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.left-box {
  padding-right: 14px;
  cursor: pointer;
}

.title-input {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 500;
  color: #1d2129;
  border: none;
  outline: none;
  &::-webkit-input-placeholder {
    color: #86909c;
    opacity: 1;
  }
}

// right-box
.right-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  .btn-drafts {
    min-width: 76px;
  }

  .publish-popup {
    min-width: 62px;
  }
}

.with-padding {
  margin-left: 8px;
  margin-right: 8px;
}

.status-text {
  font-size: 14px;
  white-space: nowrap;
  color: #c9cdd4;
  cursor: default;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  a {
    margin: 0 0 0 0.4em;
    padding: 0.2em 0.4em;
    color: inherit;
    text-decoration: none;
    border: 1px solid currentColor;
    border-radius: 2px;
  }
}
.xitu-btn {
  height: 32px;
  padding: 2px 16px;
  font-size: 14px;
  line-height: 22px;
  border: 1px solid #1d7dfa;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #1d7dfa;
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #388eff;
  }

  &-outline {
    color: #1d7dfa;
    background-color: #fff;
  }

  &-outline:hover {
    color: #388eff;
    background-color: #fff;
  }
}

.navigator {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.toggle-btn {
  width: 2.667rem;
  height: 2.667rem;
  border-radius: 50%;
  background-color: #eee;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
