<script >

export default {
      data() {
            return{
                  open : false
            }
      }
}

</script>

<template>
<main>
      <div class="flex w-full">
                              <!-- SIDE BAR -->
            <div class="flex flex-col w-1/6 text-gray-500 bg-gray-100">
                              <!-- logo -->
                  <router-link to="/" class="pt-2 pb-2 text-xl italic border-b-2 px-14 border-gray hover:text-blue-700">
                        <img src="../../../public/images/logo.png"  class="w-2/3" alt="">
                  </router-link>

                                    <!-- Admin pannel -->
                  <div class="p-3 border-b-2 border-gray px-7">                   
                        <h1 class="px-5 pb-2 font-bold">ADMIN LAYOUTS</h1>
                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin"><i class="text-xs fas fa-tv-alt"></i> Dashboard</router-link>
                        </p>

                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/customers"><i class="text-xs fas fa-user-friends"></i> Customers</router-link>
                        </p>
                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/roles"><i class="text-xs fas fa-user-tag"></i> Roles</router-link>
                        </p>
                  </div>

                                    <!-- contents management -->
                  <div class="p-4 border-b-2 border-gray px-7">                   
                        <h1 class="px-5 pb-2 text-sm font-bold">CONTENTS</h1>
                        <p class="p-2 hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/sliders"><i class="text-xs fas fa-image"></i> Sliders</router-link>
                        </p>
                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/categories"><i class="text-xs fas fa-tag"></i> Categories</router-link>
                        </p>
                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/contents"><i class="text-xs fas fa-pen"></i> Contents</router-link>
                        </p>
                        <p class="p-2 text-sm hover:text-blue-500 hover:text-lg">
                              <router-link to="/admin/messages"><i class="text-xs far fa-comment"></i> Messages</router-link>
                        </p>
                  </div>
                                    
                  
            </div>
                                                                              <!-- MAIN FEED -->
            <div class="w-5/6">
                              <!-- NAV  BAR -->
                  <div class="flex flex-row bg-gray-200 h-14">
                              <!-- search box -->
                        <form action="" class="flex flex-row justify-center w-2/3 p-1 mt-2">
                              <input type="text" class="w-1/3 p-2 border border-transparent border-none rounded caret-gray-400 h-2/3 focus:outline-none" placeholder="search">
                              <button class="px-1 ml-2 text-sm text-gray-500 bg-transparent border border-gray-400 rounded h-2/3 hover:text-white hover:border-transparent hover:bg-gray-700">search</button>
                        </form>
                              
                        <!-- noti + profile -->
                        <div class="flex flex-row justify-end w-1/3">
                              <div class="flex flex-row mx-4">
                                    <a href="" class="mx-3 my-5 ml-16 text-gray-500 hover:text-blue-500"><i class="far fa-comment"></i> </a>
                                    <a href="" class="mx-4 my-5 text-gray-500 hover:text-blue-500"><i class="fas fa-bell"></i> </a>
                                    <div @click="open = !open" class="relative flex flex-row mt-1 ml-8 cursor-pointer" >
                                          <img  src="../../../public/images/profile2.webp"  class="w-6 h-6 mt-3 rounded-full" alt="">
                                          <p  class="m-3 text-xl font-thin text-gray-500 cursor-pointer select-none hover:text-blue-500" >Zwe Zar Ni <i class="text-sm text-gray-500 fa-solid fa-circle-chevron-down text-thin"></i></p>
                                          <button  v-if="open != false" class="absolute w-24 h-8 py-2 text-sm font-bold text-white bg-gray-500 rounded right-4 top-10 hover:bg-gray-800">Log out</button>

                                    </div>

                              </div>
                        </div>
                  </div>

                              <!-- MAIN FEED -->
                  <div>
                        <RouterView />
                  </div>
            </div>

      </div>

</main>
</template>
