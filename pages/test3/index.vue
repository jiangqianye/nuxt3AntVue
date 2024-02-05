<template>
  <!-- <div>测试页面4</div>
  <div style="font-size: 40px; line-height: 60px">
    <div>Hi! I'm nuxt project!</div>


    <h1  @click="add2">{{ website.name }}</h1>
    <p>{{ website.description }}</p>
    <div class="a" @click="add">
      <div class="b">222</div>
    </div>
  </div> -->
  <div class="login">
    <div class="logindIV">
      <h3>登录</h3>
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: '必填' }]"
        >
          <a-input v-model:value="formState.username" placeholder="用户名">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: '必填' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            placeholder="密码"
          >
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>
        </a-form-item>

        <a-form-item>
          <a-button
            :loading="loading"
            type="primary"
            html-type="submit"
            class="login-form-button"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <!-- <h1 @click="counter.increment()">111</h1>
      <h3>{{ counter.times }}</h3> -->
      <h1 @click="add">222</h1>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "custom",
});

// onMounted

// const counter = useStore();
// console.log("==:?、/:", counter);

// const aa = testStore();
// console.log("==:?、22/:", aa.times);

// // import { useWebsiteStore } from '~/composables/website';

// // const store = useStateStore()
// // console.log('/=/打印：',store);
// const website = useWebsiteStore();
// console.log("/=/打印22：", website);
// await callOnce(website.fetch);

// import { storeToRefs } from "pinia";
// // import { useCountrStore } from "@/store/counter";

// // const countrStore = useCountrStore();
// // const { counter } = storeToRefs(countrStore);
// // console.log(counter);
const add = async () => {
  // console.log();
  // countrStore.increment();
  const { data } = await useFetch("/api/item", { params: { a: 1 } });
  console.log("/=/响应：", data);
};

// const add2 = async () => {
//   const website = useWebsiteStore();
//   console.log("/=/打印22333：", website);
//   // await callOnce(website.fetch)
//   website.fetch();
//   console.log("/=/响应333：", data);
// };
// const { data } = await useFetch("/api/item");
// console.log("/=/响应：", data);

import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const loading = ref<boolean>(false);
const onFinish = (values: any) => {
  console.log("Success:", values);
  console.log(formState);
  loading.value = true;
  const obj = {
    url: "url",
    method: "",
    params: values,
  };
  useLoginStore().login(obj);
};

// const onFinishFailed = (errorInfo: any) => {
//   console.log("Failed:", errorInfo);
// };
// const disabled = computed(() => {
//   return !(formState.username && formState.password);
// });
</script>

<style lang="scss" scoped>
.login {
  backdrop-filter: blur(6.5px);
  position: fixed;
  height: 100%;
  width: 100%;
  background: #f0f2f5 url("~/assets/login.svg") no-repeat 50%;
  background-size: 100%;
  .logindIV {
    padding: 20px;
    width: 400px;
    background: #fff;
    border-radius: 8px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-form-button {
      width: 100%;
    }
  }
}
</style>
