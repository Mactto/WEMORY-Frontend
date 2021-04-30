import axios from 'axios';
const API = axios.create();

// 휴대폰 번호 인증 API, 번호 Req 후, 
export const PhoneAuthAPI = ((PhoneNumber) => API.post("", {
    phone: PhoneNumber
}))

// 회원가입 API , 이메일/이름/비번/비번확인/휴대폰번호
export const SignupAPI = ((email, name, pw, pw2, phone) => API.post("/users/signup/", {
    email: email,
    username: name,
    password: pw,
    password_confirm: pw2,
    phone: phone
}))