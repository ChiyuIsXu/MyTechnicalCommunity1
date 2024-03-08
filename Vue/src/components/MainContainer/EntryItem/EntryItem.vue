<template>
  <li
    data-growing-container="true"
    data-growing-title="entryList"
    class="item"
    @click="toArticle"
  >
    <div data-original-type="0" class="entry" enter-method="item_display_feed">
      <div class="content-wrapper">
        <div class="content-main">
          <div class="title-row">
            <a
              href="/reading-page/index.html"
              target="_blank"
              rel=""
              class="jj-link title"
              title="从零开始写一个Vue3+Element Plus的后台管理系统"
              >从零开始写一个Vue3+Element Plus的后台管理系统</a
            >
          </div>
          <div class="abstract">
            <a
              href="/reading-page/index.html"
              target="_blank"
              rel=""
              class="jj-link"
              ><div>
                接触Vue3有一年的时间，除了刚开始用Vue3做了一个小小的项目，其后一直没有机会在项目中真正使用Vue3，反而一直维护Vue2的老项目。作为一个有追求（wuliao）的前端，那就自己开一个仓库练手
              </div></a
            >
          </div>
          <div class="entry-footer">
            <ul class="action-list jh-timeline-action-area">
              <li class="item meta-container">
                <!-- TODO -->
                <a
                  href="/test-page/index.html"
                  target="_blank"
                  rel=""
                  class="jj-link user-message"
                  ><div class="popover-box user-popover">抹茶san</div></a
                >
                <div class="footer-divider"></div>
              </li>

              <li class="item view">
                <Eyes />
                <span>13k</span>
              </li>
              <li class="item like">
                <div class="liked-wrap">
                  <Likes />
                </div>
                <span> 185 </span>
              </li>

              <li class="item dislike-item">
                <div class="dislike-button">
                  <span class="icon-close"></span>
                </div>
              </li>
            </ul>
            <!-- tags -->
            <div class="entry-footer-tags">
              <a
                href="/test-page/index.html"
                target="_blank"
                rel=""
                class="jj-link footer-tag width-limited"
                title="前端"
              >
                前端
              </a>
            </div>
          </div>
        </div>
        <img
          src="./assets/preview01.jpg"
          alt="从零开始写一个Vue3+Element Plus的后台管理系统"
          class="lazy thumb"
          loading="lazy"
          style=""
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts" name="EntryItem">
// ui
import Eyes from "@/assets/icons/Eyes.vue";
import Likes from "@/assets/icons/Likes.vue";

const toArticle = () => {
  console.log("toArticle");
};
</script>

<style scoped lang="scss">
li {
  list-style: none;
}
.item {
  transition: all 0.3s ease-in;
}
.entry-list-enter,
.entry-list-leave-to {
  opacity: 0;
}

.entry-list-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}
.empty {
  padding: 2rem 0;
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
}

.entry {
  cursor: pointer;
  position: relative;
  background: #fff;
  padding: 12px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .dislike-menu {
    position: absolute;
    top: 100%;
    right: 0;
  }

  .dislike-button {
    transition: all 0.15s linear;
  }

  .collection-button-wrap {
    position: absolute;
    top: 1rem;
    right: 1.667rem;
    transition: all 0.15s linear;
  }

  &:hover {
    background: #f7f8fa;
  }
}
.entry.entry-last-one {
  margin-bottom: 20px;
  .content-wrapper {
    border-bottom: unset;
  }
}

.content-wrapper {
  display: flex;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
  width: 100%;
  .content-main {
    flex: 1 1 auto;
  }
}

.meta-container {
  display: flex;
  align-items: center;
  color: #8a919f;
  font-size: 0.5rem;
  .user-message {
    display: flex;
    align-items: center;
    color: #8a919f;
  }

  .user-message {
    max-width: 132px;
    font-size: 13px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .user-message:hover {
    color: #1171ee;
  }

  .user-message .user-popover {
    font-size: 0.75rem;
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    position: relative;
    padding: 0 12px;
    line-height: 22px;
    font-size: 13px;
    flex-shrink: 0;
  }

  .date:after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 12px;
    background: #e4e6eb;
    content: " ";
  }
  .date:before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 12px;
    background: #e4e6eb;
    content: " ";
  }

  .date:before {
    left: 0;
  }

  .date:after {
    right: 0;
  }
}
.thumb {
  flex: 0 0 auto;
  width: 108px;
  height: 72px;
  margin-left: 24px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(228, 230, 235, 0.5);
}

.title-row {
  display: flex;
  margin-bottom: 2px;
  .audit-tag {
    transform: none;
    margin-right: 8px;
    border-radius: 4px;
    padding: 3px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
  }
}

.abstract {
  margin-bottom: 4px;
  font-weight: 400 a {
    color: #8a919f;
    font-size: 13px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}

.entry-footer {
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.entry-footer-tags,
.entry-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    font-size: 0.75rem;
  }
}

.footer-tag {
  background-color: #f2f3f5;
  padding: 0 6px;
  border-radius: 2px;
  max-width: 76px;
  box-sizing: border-box;
  margin-left: 6px;
  color: #8a919f;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-height: 18px;
  line-height: 18px;
  &:hover {
    color: #1171ee;
  }
  &.width-limited {
    max-width: 65px;
  }

  &-only {
    max-width: 104px;
  }
}

.action-list > .item,
.action-list {
  font-size: 0.75rem;
  display: flex;
  align-items: center;
}

.action-list > .item {
  position: relative;
  margin-right: 24px;
  font-size: 0.75rem;
  line-height: 20px;
  color: #8a919f;
  flex-shrink: 0;
}

.action-list > .item.dislike-item {
  margin: 0;
}

.action-list > .item i {
  display: block;
  width: 16px;
  height: 16px;
  background-size: 100%;
}

.action-list > .item span {
  margin-left: 4px;
}

.action-list > .item.com ment:hover span,
.action-list > .item.like:hover span,
.action-list > .item.more:hover span {
  color: #1171ee;
}

.action-list > .item.view,
.action-list > .item.like {
  span {
    font-size: 0.75rem;
  }
}

.action-list > .item.like i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
}

.action-list > .item.like .liked-wrap {
  font-size: 0.75rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-list > .item.like:hover i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKYSURBVHgB7VddbtNAEJ7ZdVJFtMKPSE2EjxBOgHOChhOQnCDilTaqoYLncIK2J6g5QZ0bpCeoVUDi0RCkQOzdZfyTHztO5brFPMD3EI1ndmc+r+dnA/CvA+GeaA1nPQB2QK50peAq0MToq9Vwi+6/F4HmkX+MqKyM2vW56BQlwaAknlgzYxVc9JUUHUSY0INRE/y0qJ/SBGoBayei8+mkcfb5XcNhrNahI/VIZzYPZ2YRP6UJELrhj5JqvFC4FnpSwXmkB2wXcVKeAMLzKJBCO6VXyovNqBdxU4pAnPloUNZPvryvT1JGLBa4NIEw+WjbcbSZsVHWTol5EEvSgQK4EwHdUroW8Iv47ZV981Y7X7c3D30ztJHohklZxKcGBbH/et7DwB9QqYXJ5WqafJVdg0yeJq1Fbw1/XW96wbBH9Nd7BGbfgJwMYC2BptPai73duUlne5GoXE6Nxs1pNHFQNOB2eFJAZ5E7yxOIGotQl9nm+GjP70ohgXFOT3LM+U7XtepenmfO688Afm5JQqEHQb1HJzhgHOgloZ8iQI3FimMrW0n5AZlGi1Q37YRdh7UOW5DYttrphG1AFQY3lh5XZnwahafgUQIp+Q0eGIyJRXNycwj8eSjF4hJFZldOwKASpk9shvL0Ox9XTkAEVEkxHG+0yqMqP0GU0FLKj+vK6ggkwwsUc6BqAvvWvL1o0dnhVQkBLqSZiE7WVgmBvPKrjMC28tskgHFpIK89hgeElP7LREyV3wLLWUAt+AoZdkmwW8O5Q6q8O51JtksoCLoxhf8VIj+I7CxvTXocH81H4bRKOaHrdrSQ8cKBN4OoNzcnO1a+LQODxnLgx9NKqwnPtXYnsf5HO/D5ne574X4a6O5tE/Q//jp+A4uQ/sJMdO/iAAAAAElFTkSuQmCC);
}

.action-list > .item.like:hover .liked-icon path {
  fill: #1171ee;
}

.action-list > .item.like.active {
  color: #1171ee;
}

.action-list > .item.like.active i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7ZdbTsJAFIb/MwWMEZI+moix7oAdCCsQdwAr4F00VI0+4wrUFagrAHcAO5h4SXxsxISEtjNOJZByCRTo5UG/J+YMw3y055xpgb8OYUP2z/sVgB2rn9KlRNdJuc1Pc5sHXb+RQP7MbhBJcyrMbc0tBZVgWJNds2/M2dzDSLvaHQKytkDaYYUF08V8vV9ElAKK8qJJCVokGIIA4WjxNOmISmCY+WQgBFYW8JJPLWss/6ZoIwArlaFuSj3r2C0iLLu//O0qc4gwBfZOBxViqAXY3MNSaWjN2c7rEVV/j5gQyNftIjFRgy+Ber30SS47KILoEeFgCRelj5tMxxukRtHfxuLK1vRF2cnZZeEKME1DSOhMg/qTqHqDcRKqxmIiPozRB18V0AHig2NWIEaIPSFJgd6X9oIEBdpWk6zEBIQQz/5x/FdAsjYSFOCjBpSUQHs6EK+Ar/wSEfCX36wAkYVomSi/GQEpRBcRQsTu58XHAu/XW6Z6sbidWShcrp4BODbZHPLi9TL1MH9uCkMdy449PK1SadfiZrYzjH8XHFsL9KA5wluvDnTOzchv7z/r8wP0gYciEk0ZYQAAAABJRU5ErkJggg==);
}

.action-list > .item.like.active .liked-icon path {
  stroke: transparent;
  fill: #1171ee;
}

.action-list > .item.comment i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
}

.action-list > .item.comment:hover i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALDSURBVHgB7ZZdTttAEMdnd+0UikB+rASl5gRNb5CcAHqCkhOQ51IaA6Kv7Q0IJ6CcoOEGcALcAlLfaolKlNi705m1Q53UBhKMeOEvRd74Y+a3s7szA/CkJz2yBIyp+ff9Ol3qQqAvpHjF99Dgd6nUiU7M8fmn2tE49u4E4AXozZlkDRHb/PeW10P69WKlN38G0yHcF2DxY9wZdowhfdbjWSOa0BoRkqIBr2lI0RH+tXEhgh9b7iZMAvAiuPSdRO0LwUatumj03tnOdA9u0ML6ZYOAVsn7u+xWSNFolkVDlDl3tfyWzSYkx63bHI/KJxs6Z6MMQhZ9PHCOCEdKuW/Gdc4KyZlSpkkR5E1po+m10bsVYOFD3BlQO45+GwYiggnFEFK6Td43vJRzs/326DtDS5CGXp3wWCm9FN5hF99Fdl9IRVGF6OLCXYq+/JvUUARcDY10ZA6qcs6yS4jQo6E3M3O1mn82vASo0p0rnF2oWIZOkHUo5XIpwODIKRkfQ8VyazYCrHopAGbJpsrwD5Sz6ZUCDFR0XB5KIwCcZgFmnsc+VKz5wBYx4NxSDoBwyBelcAUqltKmwdcsMRUDUHHpphxiDSrWtU0hv5YCpCnXLoO3uHEVQEXKZ9fTLeegFMCSGtOClLjDGQzuKc6u1LwEqW3dGn3+HwBHgWq9reGUPvcXN/604R5yYsfPhr2iolZ4DM92ngUZhIcgP7/c6O/yTGASADcJs6Ff9PzGjmhh/Sqgvq+Tu0VNidj77TpH0UiV5LZtNtENEIZTLYVddvsyPpyCqUjr+Be/c7pdE2MBWGxuLBIZ5DqcTBgiphC0xl6+FRtRj5zUOctSb0EVVoRjAeRBjFHLaGCFvmoUvBLZJIN4KCT3ilx0xFA+MQCt8+1adyKAIqAkpk7H1RQFFRXVj7QtI1iuslTojIbmuG37kx5cfwGYmi/QPMKjGgAAAABJRU5ErkJggg==);
}

.action-list > .item.comment:hover .comment-icon path {
  fill: #1171ee;
}

.action-list > .item.more {
  min-width: 0;
}

.action-list > .item.more:hover {
  color: #1171ee;
}

.action-list > .item.more.active .more-list {
  display: block;
}

.action-list > .item.more .more-list {
  position: absolute;
  top: 100%;
  padding: 4px 0;
  margin-top: 4px;
  background: #fff;
  border: 1px solid #e4e6eb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: none;
  z-index: 10;
}

.action-list > .item.more .more-list .item {
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  color: #252933;
  padding: 7px 12px;
  min-width: 54px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
}

.action-list > .item.more .more-list .item.delete {
  color: #f64242;
}

.action-list > .item.more .more-list .item:hover {
  background-color: #f2f3f5;
}

.title-row {
  display: flex;
  margin-bottom: 2px;
  .audit-tag {
    transform: none;
    margin-right: 8px;
    border-radius: 4px;
    padding: 3px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
  }
}
.title {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #252933;
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 &-collection {
    color: #1d2129;
  }
}
.abstract {
  color: #c1cbdf;
  margin-bottom: 4px;
  font-weight: 400;
  a {
    color: #abb4c6;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    div {
      font-size: 0.75rem;
    }
  }
}
</style>
