<template>
  <div class="signin-tip sidebar-block signin">
    <div class="first-line">
      <div class="icon-text">
        <span class="title">限时领掘金会员</span>
        <div class="second-line">点亮在社区的每一天</div>
      </div>
      <button class="btn signin-btn">
        <span class="btn-text">去签到</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts" name="SigninTips"></script>

<style scoped lang="scss">
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
}
.signin-tip {
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
}
.first-line {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.first-line .icon-text {
  display: flex;
  flex-direction: column;
}

.first-line .title {
  color: #252933;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.first-line .title-days {
  margin-left: 4px;
  color: #1e80ff;
}

.first-line .btn {
  border-radius: 4px;
  height: 36px;
  width: 74px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(30, 128, 255, 0.3);
  background-color: rgba(30, 128, 255, 0.05);
}

.first-line .btn-text {
  color: #1e80ff;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
}

.first-line .signed-text {
  color: #abcdff;
}

.second-line {
  color: #8a919f;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 2px;
}

.sign-in-with-animation {
  width: 74px;
  height: 36px;
  cursor: pointer;
}

.sign-in-with-animation img {
  width: 100%;
  height: 100%;
}

.btn.signin-btn:hover {
  background-color: rgba(30,128,255,0.1);
  border-color: rgba(30,128,255,0.45);
}

.btn.signin-btn:hover .btn-text {
  color: #1171ee;
}

.btn.signin-btn:active {
  background-color: rgba(30,128,255,0.2);
  border-color: rgba(30,128,255,0.6);
}

.btn.signin-btn:active .btn-text {
  color: #0060dd;
}
</style>
