<template>
  <nav class="flex flex-wrap flex-row-reverse border-b justify-between border-gray-300 px-5 py-3 lg:flex-row">
    <div class="flex lg:hidden" @click="mobileView = !mobileView">
      <button class="flex items-center border rounded text-gray-600 border-gray-300 px-4 py-1 hover:text-black hover:border-black hover:bg-gray-100">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>    
    <div class="flex flex-grow">
      <h1 class="w-full text-lg text-center font-semibold leading-6 tracking-tight py-2 lg:text-left">speedrun.website</h1>
    </div>
    <div class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-1 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="flex w-full flex-col font-semibold lg:flex-row lg:w-auto text-center my-2 lg:my-0" v-show="mobileView">
      <a class="text-gray-900 border border-gray-200 rounded bg-gray-200 px-3 py-2 mx-1 my-1 lg:my-0" href="#">Home</a>
      <a class="text-gray-600 rounded px-3 py-2 mx-1 my-1 lg:my-0 hover:text-gray-800 hover:bg-gray-100" href="#">Games</a>
      <a class="text-gray-600 rounded px-3 py-2 mx-1 my-1 lg:my-0 hover:text-gray-800 hover:bg-gray-100" href="#">About</a>
    </div>
    <div class="flex flex-col relative w-full px-2 my-1 lg:my-0 lg:flex-row lg:w-auto" v-show="mobileView">
      <input class="border border-gray-400 bg-white rounded px-4 py-2 pr-12 focus:outline-none" name="search" placeholder="Search...">
      <button type="submit" class="absolute right-6 bottom-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>      
    </div>
    <div class="flex w-full flex-col lg:flex-row lg:w-auto text-center my-2 lg:my-0" v-if="mobileView">
      <a class="text-gray-600 border border-gray-300 rounded px-3 py-2 mx-1 my-1 lg:my-0 hover:text-gray-800 hover:bg-gray-100" href="#">Log In</a>
      <a class="text-gray-100 bg-gray-600 rounded px-3 py-2 mx-1 my-1 lg:my-0 hover:text-white hover:bg-gray-900" href="#">Sign Up</a>
    </div>    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileView: false,
    }
  }
}
</script>