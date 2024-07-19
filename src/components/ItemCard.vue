<template>
  <var-card :title="props.title" :subtitle="props.subtitle" :src="props.src" :description="props.description" ripple
    class="item" @click="openLink(props.href)" :layout="props.layout">
  </var-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  src: string
  description: string
  href: string
  layout?: 'row' | 'column'
}>()

const openLink = (href: string) => {
  window.open(href)
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.3s ease;
  --card-image-height: 300px;
  --card-title-font-size: 1.5rem;
  --card-subtitle-font-size: 1rem;
  --card-padding: 0.5rem;
}

.item:hover {
  transform: scale(1.05);
}
</style>
