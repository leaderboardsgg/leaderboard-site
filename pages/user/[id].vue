<script setup lang="ts">
import ProfileHeader from 'blocks/ProfileHeader/ProfileHeader.vue'
import { useGetUserDetail } from 'composables/api/useGetUserDetail'

const route = useRoute()
const userId = route.params.id as string
const userDetail = await useGetUserDetail(userId)
</script>

<template>
  <ProfileHeader :username="userDetail?.data?.username || 'ERROR'" />
</template>
