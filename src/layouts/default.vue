<script setup lang="ts">
const { naiveThemeMode, naiveThemeOverrides, naiveLocale, naiveDateLocale }
  = storeToRefs(useAppStore())
</script>

<template>
  <naive-provider
    :theme="naiveThemeMode"
    :theme-overrides="naiveThemeOverrides"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
  >
    <div wfull hfull flex-center bg="white dark:gray-900">
      <div max-w-xl hfull flex-center select-none flex="col">
        <slot />
        <default-menu />
      </div>
    </div>
  </naive-provider>
</template>

<style scoped lang="less"></style>
