<template>
  <div class="flex flex-row">
    <!-- side bar -->
    <div
      class="w-1/6 h-screen bg-gray-600/50 bg-transparentml-0.5 mt-0.5 border-gary-600 border-2 mb-0.5 rounded-2xl drop-shadow-2xl z-40 fixed"
    >
      <div class="flex border-b-2 h-20 w-52 ml-0.5">
        <i class="fa-solid text-white fa-2x mt-4 ml-3 fa-graduation-cap"></i>
        <h1 class="mt-3 ml-2 italic text-red-500 font-bold text-5xl">F</h1>
        <h1
          class="italic mt-5 text-3xl border-gray-800 text text-white text-thin"
        >
          irst Ict
        </h1>
      </div>
      <h1 class="text-2xl mr-10 text-white mt-6">Control Pannel</h1>
      <div class="flex mt-5 text-white ml-12">
        <i class="fa-regular fa-xl mt-4 fa-image"></i>
        <router-link to="/admin/sliders-view" class="ml-5 text-xl"
          >Slider</router-link
        >
      </div>
      <div class="flex mt-5 text-white ml-12">
        <i class="fa-solid fa-xl mt-4 fa-file-word"></i>
        <h1 class="ml-5 text-xl">Content</h1>
      </div>
      <div class="flex mt-5 text-white ml-12">
        <i class="fa-sharp fa-xl mt-4 fa-solid fa-tags"></i>
        <router-link to="/admin/sliders-edit" class="ml-4 text-xl"
          >Slider edit</router-link
        >
      </div>
    </div>

    <!-- Nav Bar -->
    <div class="w-full border-b-0 z-30 fixed bg-blue-600">
      <div
        class="p-5 border-b-0 z-30 h-20 flex justify-end bg-white drop-shadow-2xl"
      >
        <div class="mr-52 relative">
          <input
            class=" border-2 w-96 z-10 drop-shadow-lg px-5 text-white border-gray-300 rounded-3xl focus:outline-none h-10"
            type="text"
          />
          <i
            class="fa-solid absolute text-white top-3 border-l-2 pl-2 right-28 z-20 fa-magnifying-glass"
          ></i>
          <button
            class="bg-zinc-400 border-gray-300 border-2 rounded-xl w-20 drop-shadow-lg border-b-2 ml-3 h-10 text-white"
          >
            Search
          </button>
        </div>
        <div class="flex">
          <img src="../../assets/images.jpeg" alt class="mr-4 rounded-full" />
          <i class="fa-solid fa-bell fa-2x mr-4 mt-1"></i>
          <i class="fa-solid fa-bars fa-2x mt-1"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-20">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>
