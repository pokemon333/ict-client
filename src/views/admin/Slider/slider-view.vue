<template>
  <div class="justify-end flex">
    <div class="w-5/6 flex justify-center mt-5">
      <table class="bg-white border-collapse border w-5/6 border-slate-400">
        <thead class="flex justify-start bg-gray-200 w-full rounded-t-lg">
          <tr class="w-full bg-gary-50 flex justify-between">
            <td class="ml-7">id</td>
            <td>image</td>
            <td class="mr-32">status</td>
          </tr>
        </thead>
        <tbody class="justify-start">
          <tr
            class="w-full flex justify-between border-b"
            v-for="sliderData in sliderDatas"
            :key="sliderData"
          >
            <td class="ml-7">{{ sliderData.id }}</td>
            <td>
              <img
                src="/home/virnus/Desktop/slider/ict-portfolio/storage/app/photos/1672652638_anime-girl-laptop-wallpaper-preview.jpg"
                class="w-20 h-20"
                alt
              />
            </td>
            <td>{{ sliderData.status}}</td>
            <td class="ml-16">
              <button>Edit</button>
              <button class>Delete</button>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sliderDatas: []
    };
  },
  mounted() {
    axios.get("http://localhost:8000/api/admin/sliders").then(response => {
      //   this.sliderDatas = response.data.data;
      console.log(response.data.data.image);
    });
  }
};
</script>