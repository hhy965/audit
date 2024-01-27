<template>
  <div class="flex gap-10 max-phone:flex-col max-phone:items-center">
    <div class="w-full max-phone:w-10/12 relative overflow-hidden">
      <div
        class="flex justify-center transition-transform duration-500 ease-in-out transform"
        v-for="(image, index) in imageList"
        :key="index"
      >
        <img
          :src="image"
          alt="error"
          class="rounded-xl max-phone:h-56 max-phone:w-80 h-96 w-img-max"
          :class="{ hidden: index !== selectedImage }"
        />
      </div>
      <button
        class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"
        @click="backImage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"
        @click="nextImage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
    <div class="border-t-2 border-gray-300 w-11/12">
      <h2 class="font-bold bg-stone-300 p-2 w-fit rounded-b-lg">新闻资讯</h2>
      <ul class="px-8 py-2 list-disc space-y-1.5">
        <li class="hover:text-emerald-600">
          <a href="">2014年全省教育审计工作座谈会在济南召开</a>
        </li>
        <li class="hover:text-emerald-600">
          <a href="">2014年审计人员继续教育东营培训班开班</a>
        </li>
        <li class="hover:text-emerald-600">
          <a href="">刘家义强调：领导干部要做尊法学法守法用法的表率</a>
        </li>
        <li class="hover:text-emerald-600">
          <a href=""
            >刘家义在审计署党组派驻纪检组长述职会议上强调：忠诚履职尽责
            干净无私担当</a
          >
        </li>
        <li class="hover:text-emerald-600">
          <a href="">全省2014年度教育审计先进集体、个人受到表彰</a>
        </li>
        <li class="hover:text-emerald-600">
          <a href="">山东省教育审计学会四届三次常务理事会在济南召开</a>
        </li>
        <li class="hover:text-emerald-600">
          <a href=""
            >审计署关于印发培养审计业务骨干人才和审计专业领军人才实施意见的通知</a
          >
        </li>
        <li class="hover:text-emerald-600">
          <a href="">学会第五届会员代表大会在济南召开</a>
        </li>
        <li class="hover:text-emerald-600"><a href="">学会换届会议综述</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
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
