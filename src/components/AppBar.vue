<template>
  <div class="sticky">
    <var-sticky>
      <var-app-bar round title-position="center" class="app-bar">
        <var-link type="info" underline="none" text-size="large" to="/">Unv APP!</var-link>
        <template #left>
          <var-link href="https://github.com/krau" target="_blank" underline="none">
            <var-button color="transparent" text-color="#fff" round text>
              <var-icon name="github" :size="24" />
            </var-button>
          </var-link>
        </template>

        <template #right>
          <var-menu placement="bottom" same-width :offset-y="6">
            <var-button color="transparent" text-color="#fff" text>
              <var-icon name="palette" size="24" />
              <var-icon name="chevron-down" />
            </var-button>

            <template #menu>
              <var-button text block @click="switchTheme(null)">混沌邪恶</var-button>
              <var-button text block @click="switchTheme(Themes.dark)">混沌善良</var-button>
              <var-button text block @click="switchTheme(Themes.md3Light)">守序邪恶</var-button>
              <var-button text block @click="switchTheme(Themes.md3Dark)">守序善良</var-button>
            </template>
          </var-menu>
        </template>
      </var-app-bar>
    </var-sticky>
  </div>
  <slot></slot>

  <view ref="comment" class="comment"></view>


  <var-divider>
    <var-icon name="heart-outline" style="margin: 0 16px; color: var(--color-danger)" />
  </var-divider>
  <var-back-top :duration="300" />

  <div class="footer">
    <var-snackbar v-model:show="showSnackbar">
      你的喜欢就是给我的最大的支持~
      <template #icon>
        <var-icon name="heart-outline" />
      </template>
    </var-snackbar>
    <div class="divider-vertical-container">
      <var-button text text-color="pink" @click="showSnackbar = !showSnackbar">赞助</var-button>
      <var-divider vertical />
      <var-link underline="none" text-color="#39c5bb" href="https://krau.top" target="_blank">博客</var-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui'
import { onMounted, onUnmounted, ref } from 'vue'
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'
import type { StyleVars } from '@varlet/ui/types/styleVars';

const comment = ref<HTMLElement>()
let artalk: Artalk

onMounted(() => {
  StyleProvider(Themes.md3Dark)
  artalk = Artalk.init({
    el: comment.value,
    server: 'https://artalk.unv.app',
    site: 'Unv APP Homepage',
    darkMode: true,
  })
})

onUnmounted(() => {
  artalk.destroy()
})

const switchTheme = (theme: StyleVars | null) => {
  StyleProvider(theme)
  if (theme === null) {
    artalk.setDarkMode(false)
  } else
    if (theme === Themes.dark || theme === Themes.md3Dark) {
      artalk.setDarkMode(true)
    } else {
      artalk.setDarkMode(false)
    }
}

const showSnackbar = ref(false)
</script>

<style scoped>
.sticky {
  min-height: 2vh;
}

.app-bar {
  margin-bottom: 20px;
}

.footer {
  margin-top: 20px;
  margin-bottom: 20px;
}

.divider-vertical-container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
}

.divider-vertical-container span {
  font-size: 14px;
  color: #888;
}


.comment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
