<script setup lang="ts">
import ItemCard from '../components/ItemCard.vue'

</script>

<template>
  <var-space direction="column" size="large">
    <ItemCard title="Krauの杂货铺" subtitle="1 个发各种东西的 Telegram 频道" src="/acherkrau.webp"
      description="其实很多时候是搬运互联网废料 ( 但是偶尔也有 有 用 的 东西 !" href="https://acherkrau.t.me" />
    <ItemCard title="自建 RSSHub" subtitle="比官方实例缓存时间短得多的自建示例 (" src="/rsshub.webp"
      description="好像不需要解释什么, 总之调整了设置所以缓存时间比较短, 域名就是这里的域名加上 rss. " href="https://rss.unv.app" layout="row">
    </ItemCard>
    <ItemCard title="kmua" subtitle="用 Python 写的 ① 个 Telegram 机器人" src="/kmua.webp"
      description="一开始只是写着自己玩, 但是没想到自从写了个'抽老婆'之后就很多人用了 ( 现在还写了一些比较实用的小功能, 可以来用用看 ("
      href="https://github.com/krau/kmua-bot" />
    <ItemCard title="ManyACG" subtitle="一套 ACG 图片爬取和收集方案?" src="/manyacg.webp" description="打了个问号是因为还没写完, 但是现在已经咕咕很久了. 总之一开始的时候设想很美好,
        还用到了一些过度设计的东西 (  以及有同名 Telegram 频道, 欢迎关注 " href="https://manyacg.t.me/">
    </ItemCard>
    <ItemCard title="Alist 云盘" subtitle="用 Alist 搭建的公开云盘" src="/alist.svg" description="主要是 1 些二次元资源 ( "
      href="https://alist.unv.app" layout="row">
    </ItemCard>
    <ItemCard title="Gopeed Chrome Extension" subtitle="Gopeed 浏览器插件"
      src="https://socialify.git.ci/krau/Gopeed-Chrome-Extension/image?font=Source%20Code%20Pro&forks=1&issues=1&language=1&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F125134399%3Fs%3D200%26v%3D4&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Auto"
      description="把浏览器的下载传递到 Gopeed 下载器...但有一说一我自己都不咋用 ( " href="https://github.com/krau/Gopeed-Chrome-Extension">
    </ItemCard>
  </var-space>

  <div class="text-container">
    至于其他的...现在想不到还有什么可以放上去, 就先这样吧!
    <br />
    或者你也可以点左上角去 Github 看看!
  </div>

</template>

<style scoped>
  
.var-card--layout-row .var-card__image {
    height:105px!important;
    width:105px!important;
    margin:20px;
    margin-top:22px;
}

.var-card__container {
    padding: 20px 5px 25px 5px!important;
}

.var-space--auto {
  margin: 0 0 30px 0!important;
}

.var-card__description {
  margin-top:15px!important;
}

.var-card__title {
  margin-top:0px!important;
}

.var-card__subtitle {
  margin-top:5px!important;
}
  
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 20vh;
}
</style>
