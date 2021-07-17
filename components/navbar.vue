<template>
  <nav class="flex items-center flex-wrap bg-transparent border-b border-gray-300 px-5 py-3">
    <div class="flex flex-grow flex-shrink-0">
      <span class="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
        </svg>        
      </span>
      <span class="text-2xl tracking-tight font-bold text-gray-700">speedrun.website</span>
    </div>
    <ul class="flex px-5 font-semibold">
      <li class="hidden lg:inline">
        <a class="inline-block border border-white text-purple-500 rounded hover:border-gray-200 hover:bg-purple-50 py-2 px-4" href="#">Games</a>
      </li>
      <li class="hidden lg:inline">
        <a class="inline-block border border-white text-purple-500 rounded hover:border-gray-200 hover:bg-purple-50 py-2 px-4" href="#">About</a>
      </li>      
    </ul>
    <ul class="flex">
      <li class="mr-3 hidden md:inline">
        <div class="relative mx-auto text-gray-600">
          <input class="border border-gray-400 bg-white rounded px-4 py-2 pr-12 focus:outline-none" name="search" placeholder="Search...">
          <button type="submit" class="absolute right-0 bottom-3 mt-5 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </li>
    </ul>
    <ul class="flex">
      <li class="mr-3 hidden lg:inline">
        <a class="inline-block border border-gray-200 rounded text-purple-500 py-2 px-4 hover:border-gray-200 hover:bg-purple-50" href="#">Log In</a>
      </li>
      <li class="mr-3 hidden lg:inline">
        <a class="inline-block border border-purple-500 rounded bg-purple-500 text-white py-2 px-4 hover:bg-purple-700" href="#">Sign Up</a>
      </li>
    </ul>
    <div class="flex lg:hidden">
      <button class="flex items-center border rounded text-gray-600 border-gray-300 px-3 py-2 hover:text-black hover:border-black">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </nav>
</template>