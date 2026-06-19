<script setup lang="ts">
import { useTemplateRef } from 'vue'

interface BaseTooltipProps {
  tooltipId: string
}

interface PositionTooltip {
  trigger: HTMLDivElement
  tooltip: HTMLDivElement
}

defineProps<BaseTooltipProps>()

const popoverContent = useTemplateRef<HTMLDivElement>('popoverContent')
const popoverTrigger = useTemplateRef<HTMLDivElement>('popoverTrigger')

function showTooltip() {
  if (!popoverContent.value || !popoverTrigger.value) {
    return
  }
  popoverContent.value.showPopover()
  positionTooltip({ trigger: popoverTrigger.value, tooltip: popoverContent.value })
}

function hideTooltip() {
  popoverContent.value?.hidePopover()
}

function positionTooltip({ trigger, tooltip }: PositionTooltip) {
  tooltip.style.left = 'unset'
  tooltip.style.top = 'unset'

  const triggerRect = trigger.getBoundingClientRect()

  tooltip.style.left = `${triggerRect.left - trigger.clientWidth}px`
  tooltip.style.top = `${triggerRect.bottom + 8}px`
}
</script>

<template>
  <span
    class="cursor-default"
    ref="popoverTrigger"
    :popoverTarget="tooltipId"
    :aria-describedby="tooltipId"
    :focus="showTooltip"
    :focusout="hideTooltip"
    :mouseover="showTooltip"
    :mouseout="hideTooltip"
  >
    <slot name="component" />
  </span>

  <div
    popover
    :id="tooltipId"
    class="tooltip fixed bg-[#333] text-white text-sm m-0 px-2 py-3 rounded-lg"
    ref="popoverContent"
  >
    <slot name="tooltip" />
  </div>
</template>
