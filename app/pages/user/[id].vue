<script setup lang="ts">
import { useRoute } from '#imports'
import ProfileHeader from 'blocks/ProfileHeader/ProfileHeader.vue'
import { useGetUser } from '~/composables/api'

const route = useRoute()
const userId = route.params.id as string
const userDetail = await useGetUser(userId)
</script>

<template>
  <ProfileHeader :username="userDetail?.data?.username || 'ERROR'" />
</template>
