import { get, post } from "../../lib/Api"
import { BaseUrl } from "../BaseUrl"

// export default async function GetVehicleList() {
//     let config = {
//        headers: { 'Content-Type': 'application/json' },
//     }
    
//     //    const { data } = await get(`${BaseUrl}vehicle/list`, config)
//     return await get(`${BaseUrl}vehicle/list`, config)
//     .then(resp => resp.data);
    
//  }
//  class VehicleListData {
//     static all() {
//         let config = {
//                    headers: { 'Content-Type': 'application/json' },
//                 }
//       return get((`${BaseUrl}vehicle/list`, config).then(resp => resp));
//     }
//   }
  
//   export default VehicleListData;
export const  login = async(username, password) => {
   await post(`${BaseUrl}auth/sign-in`, {
        username,
        password
    })
    .then(res => res)
    .catch(e => e);
};