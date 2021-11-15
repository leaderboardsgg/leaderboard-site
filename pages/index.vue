<template>
  <div class="flex flex-grow justify-center p-5">
    <div class="w-full rounded border border-gray-300 p-5">
      <h2 class="text-2xl text-center font-bold">Welcome!</h2>
      <p class="text-center">This is just a primary content placeholder.</p>
      <ProfileHeader></ProfileHeader>
      <BioCard></BioCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ProfileHeader from '~/components/blocks/ProfileHeader/ProfileHeader.vue';
import BioCard from '~/components/blocks/cards/BioCard/BioCard.vue';

export default defineComponent({
  components: { BioCard, ProfileHeader },
});
</script>
