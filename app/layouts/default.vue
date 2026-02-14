<script setup lang="ts">
import BasicAlert from 'blocks/cards/BasicAlert/BasicAlert.vue'
import ResendConfirmationBar from 'blocks/ResendConfirmationBar/ResendConfirmationBar.vue'
import SiteFooter from 'blocks/SiteFooter/SiteFooter.vue'
import SiteNavbar from 'blocks/nav/SiteNavbar/SiteNavbar.vue'
import { enableMocking } from 'mocks/browser'

await enableMocking()
</script>

<template>
  <div class="mx-auto flex h-screen flex-col">
    <BasicAlert />
    <SiteNavbar />
    <ResendConfirmationBar />
    <slot />
    <SiteFooter />
  </div>
</template>

<style lang="postcss" scoped></style>
