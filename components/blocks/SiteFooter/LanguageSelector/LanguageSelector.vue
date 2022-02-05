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
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api';
import { Locale } from '@/types';

export default defineComponent({
  name: 'LanguageSelector',
  setup() {
    const { i18n } = useContext();

    const locales = computed(() => {
      return i18n.locales as Locale[];
    });

    const currentLocale = computed(() => {
      return locales.value.find(
        (locale: Locale) => locale.code === i18n.locale,
      );
    });

    const selected = ref(currentLocale.value?.code);

    const onChange = (event: Event | MouseEvent | TouchEvent) => {
      i18n.setLocale((<HTMLSelectElement>event.target).value);
    };

    return {
      currentLocale,
      locales,
      onChange,
      selected,
    };
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
