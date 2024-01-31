<script setup lang="ts">
import BaseModal from 'elements/modals/BaseModal/BaseModal.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import Card from 'elements/cards/Card/Card.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import { useModalAlert } from 'composables/useModalAlert'

const { closeAlert, state } = useModalAlert()
const modalAlertState = state.value
</script>

<template>
  <transition
    v-if="modalAlertState.show"
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-200"
    enter-to-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <BaseModal v-show="modalAlertState.show" @close="closeAlert">
      <Card
        id="basicModalAlert"
        :class="['basic-modal-alert', modalAlertState.type]"
        data-testid="basic-modal-alert"
      >
        <CardHeader class="basic-modal-alert__header">
          <i-svg-circle-info v-if="modalAlertState.type === 'info'" />
          <i-svg-circle-check v-if="modalAlertState.type === 'success'" />
          <i-svg-circle-exclamation v-if="modalAlertState.type === 'error'" />
          <i-svg-triangle-exclamation
            v-if="modalAlertState.type === 'warning'"
          />
          <h2 class="basic-modal-alert__title">
            {{ modalAlertState.title }}
          </h2>
          <CloseButton
            class="basic-modal-alert__close-button"
            data-testid="basic-modal-alert-close-button"
            @click.prevent="closeAlert"
          />
        </CardHeader>
        <CardBody class="basic-modal-alert__body">
          {{ modalAlertState.body }}
        </CardBody>
      </Card>
    </BaseModal>
  </transition>
</template>

<style lang="postcss" scoped>
.basic-modal-alert {
  @apply bg-white w-full max-w-xl;

  svg {
    @apply h-5 w-5 mr-2;
  }

  &.info svg {
    @apply fill-blue-500;
  }

  &.success svg {
    @apply fill-green-500;
  }

  &.error svg {
    @apply fill-red-500;
  }

  &.warning svg {
    @apply fill-yellow-500;
  }

  & .basic-modal-alert__header {
    @apply flex flex-row items-center;
  }

  & .basic-modal-alert__title,
  & .basic-modal-alert__body {
    @apply flex flex-1;
  }

  & .basic-modal-alert__title {
    @apply text-lg font-medium py-2;
    @apply flex items-center;
  }

  & .basic-modal-alert__body {
    @apply justify-center m-8;
  }
}
</style>
