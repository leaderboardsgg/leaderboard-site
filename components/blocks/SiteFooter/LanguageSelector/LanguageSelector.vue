<template>
  <select
    v-model="selected"
    class="language-selector"
    role="listbox"
    @change="onChange"
  >
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Locale } from '@/types';

export default defineComponent({
  name: 'LanguageSelector',
  data: () => ({
    selected: '',
  }),
  computed: {
    currentLocale(): Locale | undefined {
      return this.locales.find(
        (locale: Locale) => locale.code === this.$i18n.locale,
      );
    },
    locales(): Locale[] {
      return this.$i18n.locales as Locale[];
    },
  },
  mounted() {
    this.selected = this.currentLocale?.code ?? '';
  },
  methods: {
    onChange(event: any): void {
      this.$i18n.setLocale(event.target.value);
      this.selected = event.target.value;
    },
  },
});
</script>

<style scoped>
.language-selector {
  @apply bg-white border border-current rounded;
  @apply flex items-center px-2 py-2 relative;
}

.language-selector > option {
  @apply flex items-center py-2;
}
</style>
