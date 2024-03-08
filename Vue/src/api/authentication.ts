
// api/authentication.ts

import { request } from '@/utils/request';
import type { ILoginInfo, IRegisterInfo, IResetPassInfo} from '@/types/userManagement';

export const postLogin = (LoginInfo: ILoginInfo) => request({
    url: '/user/login',
    method: 'POST',
    // `responseType` indicates the type of data that the server will respond with
    // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
    //   browser only: 'blob'
    responseType: 'json',
    
    // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8',
    
    data: LoginInfo,
}).then((response) => {
    console.log(response.data);
}).catch((error) => {
    return Promise.reject(error);
});

export const postRegisterInfo = (RegisterInfo: IRegisterInfo) => request({
    url: '/user/register',
    method: 'POST',
    data: RegisterInfo,
})
.then((response) => {
    console.log("post register info:", response.data);
})
.catch((error) => {
    return Promise.reject(error);
});

export const postResetPassInfo = (ResetPassInfo: IResetPassInfo) => request({
    url: '/user/resetPassword',
    method: 'POST',
    data: ResetPassInfo,
})
.then((response) => {
    console.log("post reset password info:", response.data);
})
.catch((error) => {
    return Promise.reject(error);
});

export const getCategories = () => request({
    url: '/categorys',
    method: 'GET'
});

// interface IApi {
//     request<T>(method: string, url: string, params: any): Promise<T>;
// }

// const api:IApi = {
//     request(method: string, url: string, params: any) {
//         return axios({
//             method: method,
//             url: url,
//             data: params
//         });
//     }
// };  