// import axios from "axios";
// import { login } from "../../Services/userServices";
// import { BaseUrl } from "../BaseUrl";
// jest.mock("axios");

// describe("login", () => {
//   describe("when API call is successful", () => {
//     it("should return users list", async () => {
//       // given
//       const users = 'diconium1@yopmail.com'
//       axios.get.mockResolvedValueOnce(users);

//       // when
//         const email= "diconium1@yopmail.com"
//         const password = "User@123"
//       const result = await login(email,password);
//       // then
      
//       expect(result).toEqual(users);
//     });
//   });

// //   describe("when API call fails", () => {
// //     it("should return empty users list", async () => {
// //       // given
// //       const message = "Network Error";
// //       axios.get.mockRejectedValueOnce(new Error(message));

// //       // when
// //       const result = await login();

// //       // then
// //       expect(axios.get).toHaveBeenCalledWith(`${BaseUrl}/users`);
// //       expect(result).toEqual([]);
// //     });
// //   });
// });