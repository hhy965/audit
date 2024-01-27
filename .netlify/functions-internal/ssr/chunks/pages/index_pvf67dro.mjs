/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_VZfSTZly.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './about_-wtgnHaW.mjs';
/* empty css                          */
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate` ${maybeRenderHead()}<header class="header max-phone:h-40 relative" data-astro-cid-3ef6ksr2> <div class="flex justify-between items-center mx-40 py-10 max-phone:mx-0" data-astro-cid-3ef6ksr2> <div class="header-left w-3/12 max-phone:w-9/12 max-phone:mx-auto" data-astro-cid-3ef6ksr2> <h1 class="name text-4xl font-black max-phone:text-2xl" data-astro-cid-3ef6ksr2>山东教育审计学会</h1> <p class="text-base font-meidum text-slate-300" data-astro-cid-3ef6ksr2>
ShanDong Educational Audit Society
</p> </div> <div class="header-right max-phone:hidden" data-astro-cid-3ef6ksr2> <ul class="flex gap-6" data-astro-cid-3ef6ksr2> <li class="border-b-4 border-indigo-700" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>首页</a></li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" target="_blank" data-astro-cid-3ef6ksr2>财政部</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>审计署</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>审计厅</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>教育厅</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>中国教育审计学会</a> </li> </ul> </div> <!-- 移动端适配，右上角Header开关 --> <div class="hidden max-phone:block absolute top-2 right-2" data-astro-cid-3ef6ksr2> <button class="more-button" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" data-astro-cid-3ef6ksr2><line x1="4" x2="20" y1="12" y2="12" data-astro-cid-3ef6ksr2></line><line x1="4" x2="20" y1="6" y2="6" data-astro-cid-3ef6ksr2></line><line x1="4" x2="20" y1="18" y2="18" data-astro-cid-3ef6ksr2></line></svg> </button> </div> <!-- 移动端适配，侧窗内容 --> <div class="more-content absolute hidden top-0 right-0 mt-12 bg-white p-4 rounded shadow-md z-10" data-astro-cid-3ef6ksr2> <ul class="flex flex-col gap-6" data-astro-cid-3ef6ksr2> <li class="border-b-4 border-indigo-700" data-astro-cid-3ef6ksr2><a href="/" data-astro-cid-3ef6ksr2>首页</a></li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" target="_blank" data-astro-cid-3ef6ksr2>财政部</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>审计署</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>审计厅</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>教育厅</a> </li> <li class="hover:border-b-4 border-indigo-600" data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>中国教育审计学会</a> </li> </ul> </div> </div> </header> `;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate` ${maybeRenderHead()}<nav> <ul class="flex justify-center items-center gap-4 h-14 bg-cyan-700 text-white text-base max-phone:hidden"> <li class="h-full flex items-center justify-center border-b-2 border-gray-100 bg-teal-600 w-36"> <a href="">首页</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 w-36"> <a href="">法规制度</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">工作动态</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">相关下载</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">学术交流</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">新闻资讯</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">通知公告</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">学习园地</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36 relative group"> <a href="">关于我们</a> <div class="absolute hidden group-hover:block shadow-md top-full"> <ul class="flex flex-col justify-center items-center gap-2 h-14 bg-cyan-700 text-white text-base h-40"> <li class="h-full flex items-center justify-center border-gray-100 w-36 hover:bg-teal-600"> <a href="">学会简介</a> </li> <li class="h-full flex items-center justify-center border-gray-100 w-36 hover:bg-teal-600"> <a href="">学会简章</a> </li> <li class="h-full flex items-center justify-center border-gray-100 w-36 hover:bg-teal-600"> <a href="">学会机构</a> </li> <li class="h-full flex items-center justify-center border-gray-100 w-36 hover:bg-teal-600"> <a href="">学会会员条目</a> </li> </ul> </div> </li> </ul> <!-- 移动端适配，左上角导航开关 --> <div class="hidden max-phone:block absolute top-2 light-2"> <button class="nav-button flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-panel-top"><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>导航栏
</button> </div> <!-- 移动端适配，侧窗内容 --> <div class="nav-content absolute hidden top-0 left-0 mt-12 rounded shadow-md z-10 w-5/12 h-3/6"> <ul class="flex flex-col justify-center items-center h-14 bg-cyan-700 text-white text-base h-full"> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 w-36"> <a href="">首页</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 w-36"> <a href="">法规制度</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">工作动态</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">相关下载</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">学术交流</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">新闻资讯</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">通知公告</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36"> <a href="">学习园地</a> </li> <li class="h-full flex items-center justify-center hover:border-b-2 hover:bg-teal-600 border-gray-100 w-36 relative group"> <a href="">关于我们</a> </li> </ul> </div> </nav> `;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/Nav.astro", void 0);

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DynamicNews",
  setup(__props, { expose: __expose }) {
    __expose();
    const imageList = [
      "https://rmrbcmsonline.peopleapp.com/upload/ueditor/image/20180313/1520938328383399.jpg",
      "https://imgs.rednet.cn/data/112/IMAGE_TENANT_LIB/IMAGE/7009353/2021/3/31/00a66614492d4240abdfd9a5a1deb859.jpg",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.qN_FlxoFMam73WFnVH8AJwHaFj?rs=1&pid=ImgDetMain"
    ];
    const selectedImage = ref(0);
    function backImage() {
      selectedImage.value = selectedImage.value === 0 ? imageList.length - 1 : selectedImage.value - 1;
    }
    function nextImage() {
      selectedImage.value = selectedImage.value === imageList.length - 1 ? 0 : selectedImage.value + 1;
    }
    const __returned__ = { imageList, selectedImage, backImage, nextImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-10 max-phone:flex-col max-phone:items-center" }, _attrs))}><div class="w-full max-phone:w-10/12 relative overflow-hidden"><!--[-->`);
  ssrRenderList($setup.imageList, (image, index) => {
    _push(`<div class="flex justify-center transition-transform duration-500 ease-in-out transform"><img${ssrRenderAttr("src", image)} alt="error" class="${ssrRenderClass([{ hidden: index !== $setup.selectedImage }, "rounded-xl max-phone:h-56 max-phone:w-80 h-96 w-img-max"])}"></div>`);
  });
  _push(`<!--]--><button class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"></path></svg></button><button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div><div class="border-t-2 border-gray-300 w-11/12"><h2 class="font-bold bg-stone-300 p-2 w-fit rounded-b-lg">\u65B0\u95FB\u8D44\u8BAF</h2><ul class="px-8 py-2 list-disc space-y-1.5"><li class="hover:text-emerald-600"><a href="">2014\u5E74\u5168\u7701\u6559\u80B2\u5BA1\u8BA1\u5DE5\u4F5C\u5EA7\u8C08\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00</a></li><li class="hover:text-emerald-600"><a href="">2014\u5E74\u5BA1\u8BA1\u4EBA\u5458\u7EE7\u7EED\u6559\u80B2\u4E1C\u8425\u57F9\u8BAD\u73ED\u5F00\u73ED</a></li><li class="hover:text-emerald-600"><a href="">\u5218\u5BB6\u4E49\u5F3A\u8C03\uFF1A\u9886\u5BFC\u5E72\u90E8\u8981\u505A\u5C0A\u6CD5\u5B66\u6CD5\u5B88\u6CD5\u7528\u6CD5\u7684\u8868\u7387</a></li><li class="hover:text-emerald-600"><a href="">\u5218\u5BB6\u4E49\u5728\u5BA1\u8BA1\u7F72\u515A\u7EC4\u6D3E\u9A7B\u7EAA\u68C0\u7EC4\u957F\u8FF0\u804C\u4F1A\u8BAE\u4E0A\u5F3A\u8C03\uFF1A\u5FE0\u8BDA\u5C65\u804C\u5C3D\u8D23 \u5E72\u51C0\u65E0\u79C1\u62C5\u5F53</a></li><li class="hover:text-emerald-600"><a href="">\u5168\u77012014\u5E74\u5EA6\u6559\u80B2\u5BA1\u8BA1\u5148\u8FDB\u96C6\u4F53\u3001\u4E2A\u4EBA\u53D7\u5230\u8868\u5F70</a></li><li class="hover:text-emerald-600"><a href="">\u5C71\u4E1C\u7701\u6559\u80B2\u5BA1\u8BA1\u5B66\u4F1A\u56DB\u5C4A\u4E09\u6B21\u5E38\u52A1\u7406\u4E8B\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00</a></li><li class="hover:text-emerald-600"><a href="">\u5BA1\u8BA1\u7F72\u5173\u4E8E\u5370\u53D1\u57F9\u517B\u5BA1\u8BA1\u4E1A\u52A1\u9AA8\u5E72\u4EBA\u624D\u548C\u5BA1\u8BA1\u4E13\u4E1A\u9886\u519B\u4EBA\u624D\u5B9E\u65BD\u610F\u89C1\u7684\u901A\u77E5</a></li><li class="hover:text-emerald-600"><a href="">\u5B66\u4F1A\u7B2C\u4E94\u5C4A\u4F1A\u5458\u4EE3\u8868\u5927\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00</a></li><li class="hover:text-emerald-600"><a href="">\u5B66\u4F1A\u6362\u5C4A\u4F1A\u8BAE\u7EFC\u8FF0</a></li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/DynamicNews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DynamicNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro$4 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Search;
  function getCurrentDateFormatted() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    return `${year}\u5E74${month}\u6708${day}\u65E5`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="w-8/12 my-4 mx-auto flex justify-between max-phone:justify-center max-phone:w-full"> <span class="text-sm font-light max-phone:hidden">今天是${getCurrentDateFormatted()}</span> <div class="flex justify-end items-center gap-2"> <span class="text-sm font-medium leading-6 text-gray-900">全站搜索</span> <div class="relative rounded-md shadow-sm"> <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> <span class="text-gray-500 sm:text-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg> </span> </div> <input type="text" class="w-full rounded-md border-0 py-1 pl-10 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="请输入关键字"> </div> <button class="px-4 py-0.5 bg-sky-400 hover:bg-sky-600 active:bg-sky-700 rounded focus:outline-none focus:ring focus:ring-sky-300">搜索</button> </div> </div>`;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/Search.astro", void 0);

const $$Astro$3 = createAstro();
const $$Plate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Plate;
  const { title, list } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h2 class="font-medium text-xl text-sky-700 py-2 px-4 bg-stone-300 rounded-t-lg w-fit"> ${title} </h2> <div class="border-t-2 border-gray-400"> <ul class="px-8 py-2 list-disc space-y-1.5"> ${list.map((item) => renderTemplate`<li class="hover:text-emerald-600"> <a href="" class="flex justify-between"> <div class="whitespace-nowrap overflow-hidden overflow-ellipsis w-9/12"> ${item.content} </div> <div>[${item.date}]</div> </a> </li>`)} </ul> </div> </div>`;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/Plate.astro", void 0);

const $$Astro$2 = createAstro();
const $$FriendLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FriendLink;
  const { friendLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-6"> <div class="container mx-auto"> <h2 class="font-medium text-xl text-sky-700 mb-4">友情链接</h2> <div class="flex flex-wrap -mx-4"> ${friendLinks.map((item) => renderTemplate`<div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4"> <a href="" class="text-gray-600 hover:text-amber-500 transition duration-300">${item.name}</a> </div>`)} </div> </div> </div>`;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/FriendLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-6"> <div class="container mx-auto flex flex-col items-center flex-wrap items-center justify-between"> <span>Copyright © 2024 山东教育审计学会 版权所有</span> <span>地址：济南市历山路36号 邮政编码：250013</span> <span>信箱：sdjysjxh9163.com 电话：0531-86593088</span> <span>鲁ICP备xxxxxxxxx号</span> </div> </footer>`;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const list = [
    { content: "2014\u5E74\u5168\u7701\u6559\u80B2\u5BA1\u8BA1\u5DE5\u4F5C\u5EA7\u8C08\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00", date: "2024-01-24" },
    { content: "2014\u5E74\u5BA1\u8BA1\u4EBA\u5458\u7EE7\u7EED\u6559\u80B2\u4E1C\u8425\u57F9\u8BAD\u73ED\u5F00\u73ED", date: "2024-01-24" },
    {
      content: "\u5218\u5BB6\u4E49\u5F3A\u8C03\uFF1A\u9886\u5BFC\u5E72\u90E8\u8981\u505A\u5C0A\u6CD5\u5B66\u6CD5\u5B88\u6CD5\u7528\u6CD5\u7684\u8868\u7387",
      date: "2024-01-24"
    },
    {
      content: "\u5218\u5BB6\u4E49\u5728\u5BA1\u8BA1\u7F72\u515A\u7EC4\u6D3E\u9A7B\u7EAA\u68C0\u7EC4\u957F\u8FF0\u804C\u4F1A\u8BAE\u4E0A\u5F3A\u8C03\uFF1A\u5FE0\u8BDA\u5C65\u804C\u5C3D\u8D23\u5E72\u51C0\u65E0\u79C1\u62C5\u5F53",
      date: "2024-01-24"
    },
    { content: "\u5168\u77012014\u5E74\u5EA6\u6559\u80B2\u5BA1\u8BA1\u5148\u8FDB\u96C6\u4F53\u3001\u4E2A\u4EBA\u53D7\u5230\u8868\u5F70", date: "2024-01-24" },
    {
      content: "\u5C71\u4E1C\u7701\u6559\u80B2\u5BA1\u8BA1\u5B66\u4F1A\u56DB\u5C4A\u4E09\u6B21\u5E38\u52A1\u7406\u4E8B\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00",
      date: "2024-01-24"
    },
    {
      content: "\u5BA1\u8BA1\u7F72\u5173\u4E8E\u5370\u53D1\u57F9\u517B\u5BA1\u8BA1\u4E1A\u52A1\u9AA8\u5E72\u4EBA\u624D\u548C\u5BA1\u8BA1\u4E13\u4E1A\u9886\u519B\u4EBA\u624D\u5B9E\u65BD\u610F\u89C1\u7684\u901A\u77E5",
      date: "2024-01-24"
    },
    { content: "\u5B66\u4F1A\u7B2C\u4E94\u5C4A\u4F1A\u5458\u4EE3\u8868\u5927\u4F1A\u5728\u6D4E\u5357\u53EC\u5F00", date: "2024-01-24" },
    { content: "\u5B66\u4F1A\u6362\u5C4A\u4F1A\u8BAE\u7EFC\u8FF0", date: "2024-01-24" }
  ];
  const friendLinks = [
    { name: "\u6559\u80B2\u90E8", url: "" },
    { name: "\u8D22\u653F\u90E8", url: "" },
    { name: "\u5BA1\u8BA1\u7F72", url: "" },
    { name: "\u6C11\u653F\u90E8", url: "" },
    { name: "\u6559\u80B2\u5385", url: "" },
    { name: "\u8D22\u653F\u5385", url: "" },
    { name: "\u5BA1\u8BA1\u5385", url: "" },
    { name: "\u6C11\u653F\u5385", url: "" },
    { name: "\u4E2D\u56FD\u5185\u5BA1\u5B66\u4F1A", url: "" },
    { name: "\u5C71\u4E1C\u5185\u5BA1\u5B66\u4F1A", url: "" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5C71\u4E1C\u7701\u6559\u80B2\u5BA1\u8BA1\u5B66\u4F1A" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Search", $$Search, {})} ${maybeRenderHead()}<main class="mt-6 mx-80 max-phone:m-0"> ${renderComponent($$result2, "DynamicNews", DynamicNews, { "client:load": true, "class": "col-span-3 row-span-2", "client:component-hydration": "load", "client:component-path": "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/components/DynamicNews.vue", "client:component-export": "default" })}<br> <div class="grid grid-cols-2 gap-4 max-phone:grid-cols-1"> ${renderComponent($$result2, "Plate", $$Plate, { "title": "\u901A\u77E5\u516C\u544A", "list": list })} ${renderComponent($$result2, "Plate", $$Plate, { "title": "\u6CD5\u89C4\u5236\u5EA6", "list": list })} ${renderComponent($$result2, "Plate", $$Plate, { "title": "\u5DE5\u4F5C\u52A8\u6001", "list": list })} ${renderComponent($$result2, "Plate", $$Plate, { "title": "\u76F8\u5173\u4E0B\u8F7D", "list": list })} </div> ${renderComponent($$result2, "FriendLink", $$FriendLink, { "friendLinks": friendLinks })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} `;
}, "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/pages/index.astro", void 0);

const $$file = "/Users/wang/Documents/Vscode_project/astro/extinct-ellipse/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
