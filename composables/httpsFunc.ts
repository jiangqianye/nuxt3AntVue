import { message } from 'ant-design-vue';
import aesjs from "aes-js";
import CryptoJS from 'crypto-js';
// const obj = {
//   url: "url",
//   method: "",

//   params: values,
// };
/**
 * url
 * mothods
 * token
 * params
 */


// 自定义请求接口处理----代替拦截器
// userfetch在utils无效
export default async function (obj: object, token?: boolean) {
    if (!token) {
        // token验证
        navigateTo('/login')
        return
    }
    // JSON.stringify({a:1})
    const aaa=aesEncrypt('1122334')
console.log('加密：',aaa);
console.log('解密:',aesDecrypt(aaa));
// { data, pending, error, refresh }
    const res = await useFetch('/api/item', {
        params: obj
    })
    console.log('/=/进入拦截器：', res);
    // console.log('/=/进入拦截器：', res.data.value);
    // message.error('This is an error message');
    if (false) {
        // 错误拦截
        return
    }
    if (false) {
        // http拦截
        return
    }

    return '你日日'
}
const key=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
function aesEncrypt(text:any) {
    const textBytes = aesjs.utils.utf8.toBytes(text); // to二进制
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const encryptedBytes = aesCtr.encrypt(textBytes); // 加密
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes); // to十六进制
    return encryptedHex;
  }
  // aes解密-与客户端相同
function aesDecrypt(encryptedHex:any) {
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex); // 十六进制->二进制
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes); // 解密
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes); // 而进驻->utf-8
    return decryptedText;
  }