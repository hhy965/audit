<template>
  <div class="relative overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out transform"
      v-for="(image, index) in imageList"
      :key="index"
    >
      <img
        :src="image"
        alt="error"
        class="w-full rounded-xl"
        :class="{ hidden: index !== selectedImage }"
      />
    </div>
    <div class="flex justify-center w-full gap-36 mt-2">
      <button @click="backImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12H8m4-4l-4 4l4 4" />
          </g>
        </svg>
      </button>
      <button @click="nextImage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8m-4 4l4-4l-4-4" />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const imageList = [
  "https://rmrbcmsonline.peopleapp.com/upload/ueditor/image/20180313/1520938328383399.jpg",
  "https://imgs.rednet.cn/data/112/IMAGE_TENANT_LIB/IMAGE/7009353/2021/3/31/00a66614492d4240abdfd9a5a1deb859.jpg",
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.qN_FlxoFMam73WFnVH8AJwHaFj?rs=1&pid=ImgDetMain",
];
const selectedImage = ref(0);

function backImage() {
  selectedImage.value =
    selectedImage.value === 0 ? imageList.length - 1 : selectedImage.value - 1;
}
function nextImage() {
  selectedImage.value =
    selectedImage.value === imageList.length - 1 ? 0 : selectedImage.value + 1;
}
</script>

<style scoped></style>
