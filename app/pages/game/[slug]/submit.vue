<script setup lang="ts">
import { useRoute } from '#imports'

const {
  params: { slug },
} = useRoute()

</script>

<template>
  <div>
    {{ slug }}
  </div>
</template>
