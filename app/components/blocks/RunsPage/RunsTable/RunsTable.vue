<script setup lang="ts">
import { ref, watch } from 'vue'
import type {
  CategoryViewModel,
  TimedRunViewModel,
  ScoredRunViewModel,
} from '~~/lib/api/data-contracts'
import useGetRecordsForCategory from 'composables/api/useGetRecordsForCategory'
import { useFormatDate } from 'composables/useFormatDate'

interface RunsTableProps {
  category: CategoryViewModel
}

const { category } = defineProps<RunsTableProps>()
const { formatDate } = useFormatDate()

const runs = ref<(TimedRunViewModel | ScoredRunViewModel)[]>()

const fetchRuns = async () => {
  if (!category?.id) return

  const { data } = await useGetRecordsForCategory({
    id: category.id,
  })

  runs.value = data?.data
}

await fetchRuns()

watch(
  () => category?.id,
  async () => {
    await fetchRuns()
  },
)
</script>

<template>
  <table
    v-if="runs?.length"
    class="table h-fit table-auto bg-bg-content text-[var(--text-colour)]"
  >
    <thead class="table-header-group bg-bg-table-row">
      <tr class="text-left">
        <th class="pb-3 pl-6 pt-6">Rank</th>
        <th class="pb-3 pt-6">Player</th>
        <th class="pb-3 pt-6">{{ category.type }}</th>
        <th class="pb-3 pr-6 pt-6 text-right">Run Date</th>
      </tr>
    </thead>
    <tbody class="table-row-group text-sm">
      <tr v-for="run in runs" :key="run.id">
        <td class="py-3 pl-6">{{ run.rank }}</td>
        <td>{{ run.user.username }}</td>
        <td>
          {{
            category.type === 'Score'
              ? (run as ScoredRunViewModel).score
              : (run as TimedRunViewModel).time
          }}
        </td>
        <td class="text-right pr-6">{{ formatDate(run.playedOn) }}</td>
      </tr>
    </tbody>
  </table>
  <h2 v-else class="mx-auto font-extrabold text-5xl">No runs found</h2>
</template>
