<script setup lang="ts">
import type { CategoryViewModel } from '~~/lib/api/data-contracts'

interface RunsTableProps {
  category: CategoryViewModel
}

defineProps<RunsTableProps>()

// TODO: Fetch runs
</script>

<template>
  <table class="table h-fit table-auto bg-bg-content text-[var(--text-colour)]">
    <thead class="table-header-group bg-bg-table-row">
      <tr class="text-left">
        <th class="pb-3 pl-6 pt-6">Rank</th>
        <th class="pb-3 pt-6">Name</th>
        <th class="pb-3 pt-6">Run Type</th>
        <th class="pb-3 pt-6">{{ category.type }}</th>
        <th class="pb-3 pr-6 pt-6">Date</th>
      </tr>
    </thead>
    <tbody class="table-row-group text-sm">
      <!-- TODO: Fetch runs -->
      <tr v-for="i in Array.from(Array(100)).map((_, i) => i)" :key="i" class="table-row even:bg-bg-table-row-alt">
        <td class="py-3 pl-6">{{ i + 1 }}</td>
        <td>Test</td>
        <td>Time</td>
        <td>01:23:34.555</td>
        <td class="pr-6">11/01/2025</td>
      </tr>
    </tbody>
  </table>
</template>
