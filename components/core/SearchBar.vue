<template>
  <div
    class="
      search-bar
      relative
      flex items-center
      w-full px-2
      text-gray-300
    "
  >
    <input
      class="
        border border-current rounded
        bg-white
        w-full pr-12 px-4 py-1
        focus:outline-none
      "
      name="search"
      placeholder="search..."
    />
    <button type="submit" class="absolute right-4 text-current">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</template>
