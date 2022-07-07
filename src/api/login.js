import request from '@/utils/request';


export const GetCode = params => request({
  requestURL: 'slime',
  url: '/slime/spring/login/send',
  method: 'get',
  params
});


//手机验证码登录
export const PhoneCodeLogin = params => request({
  requestURL: 'slime',
  url:'/slime/spring/login/sms',
  method:'post',
  params
});

//密码登录
export const PasswordLogin = params => request({
  requestURL: 'slime',
  url:'/slime/spring/login/pin',
  method:'post',
  params
});

//退出登录
export const LoginOut = data => request({
  requestURL: 'slime',
  url: '/slime/spring/login/out',
  method: 'post',
  data
});