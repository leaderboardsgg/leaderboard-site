<template>
  <nav class="flex flex-wrap flex-row-reverse justify-between border-b border-gray-300 px-5 py-3 lg:flex-row">
    <div class="flex lg:hidden" @click="mobileNavIsActive = !mobileNavIsActive">
      <button class="flex items-center border border-gray-300 rounded px-4 py-1 text-gray-600 hover:text-black hover:border-black hover:bg-gray-100">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>    
    <div class="flex flex-grow">
      <h1 class="w-full py-2 text-lg text-center font-semibold leading-6 tracking-tight lg:text-left">speedrun.website</h1>
    </div>
    <div class="flex">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-1 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="flex flex-col w-full my-2 text-center font-semibold lg:flex-row lg:w-auto lg:my-0" v-show="mobileNavIsActive || lg">
      <a class="rounded px-3 py-2 m-1 text-gray-600 lg:my-0 hover:bg-gray-100 hover:text-gray-800" href="#">Home</a>
      <a class="rounded px-3 py-2 m-1 text-gray-600 lg:my-0 hover:bg-gray-100 hover:text-gray-800" href="#">Games</a>
      <a class="rounded px-3 py-2 m-1 text-gray-600 lg:my-0 hover:bg-gray-100 hover:text-gray-800" href="#">About</a>
    </div>
    <div class="relative flex flex-col w-full px-2 my-1 lg:flex-row lg:w-auto lg:my-0" v-show="mobileNavIsActive|| lg">
      <input class="border border-gray-400 rounded bg-white px-4 py-2 pr-12 focus:outline-none" name="search" placeholder="Search...">
      <button type="submit" class="absolute right-6 bottom-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>      
    </div>
    <div class="flex flex-col w-full my-2 text-center lg:flex-row lg:w-auto lg:my-0" v-show="mobileNavIsActive || lg">
      <a class="border border-gray-300 rounded px-3 py-2 m-1 text-gray-600 lg:my-0 hover:text-gray-800 hover:bg-gray-100" href="#">Log In</a>
      <a class="bg-gray-600 rounded px-3 py-2 m-1 text-gray-100 lg:my-0 hover:text-white hover:bg-gray-900" href="#">Sign Up</a>
    </div>    
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileNavIsActive: false,
      lg: false,
    }
  },
  beforeMount() {
    let lgSetBool = () => {
      this.lg = innerWidth >= 1024
    }

    lgSetBool()
    addEventListener('resize', lgSetBool)
  },
  beforeDestroy() {
    removeEventListener('resize', lgSetBool)
  },
}
</script>
