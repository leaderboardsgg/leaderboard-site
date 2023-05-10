<script setup lang="ts">
import { useGetUserDetail } from 'composables/api/useGetUserDetail'

const route = useRoute()
const userId = route.params.id as string
const userDetail = await useGetUserDetail(userId)
</script>

<template>
  <p>Username: {{ userDetail?.data?.username || 'ERROR' }}</p>
</template>
