<template>
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
          <a-form-item
            name="code"
            :rules="[{ required: true, message: '必填' }]"
          >
            <a-input v-model:value="formState.code" placeholder="验证码">
            </a-input>
            <!-- <div>
            <a-image
              :width="200"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div> -->
          </a-form-item>
          <div>
            <a-image
              :width="120"
              :height="38"
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
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
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "custom",
});

import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
interface FormState {
  username: string;
  password: string;
  code: string;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  code: "",
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
