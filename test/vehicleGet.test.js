import axios from "axios";
import { fetchUsers } from "../../Services/getVehicles";
import { BaseUrl } from "../BaseUrl";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [{"vehicle":"10114","mission":"faction_to_stafl","network_status":"online","state":"driverless","battery":"50","software_configuration":"software_configuration#1","hardware_configuration":"hardware_configuration#1"},{"vehicle":"10115","mission":"test1","network_status":"online","state":"manual","battery":"34","software_configuration":"software_configuration#2","hardware_configuration":"hardware_configuration#2"},{"vehicle":"1","mission":"faction_to_stafl","network_status":null,"state":"driverless","battery":null,"software_configuration":null,"hardware_configuration":null},{"vehicle":"10210","mission":null,"network_status":"online","state":null,"battery":"35","software_configuration":"software_configuration#5","hardware_configuration":"hardware_configuration#5"},{"vehicle":"10184","mission":null,"network_status":"online","state":null,"battery":"23","software_configuration":"software_configuration#3","hardware_configuration":"hardware_configuration#3"},{"vehicle":"10013","mission":null,"network_status":"offline","state":null,"battery":"42","software_configuration":"software_configuration#4","hardware_configuration":"hardware_configuration#4"},{"vehicle":"10280","mission":null,"network_status":"online","state":null,"battery":"34","software_configuration":"software_configuration#7","hardware_configuration":"hardware_configuration#7"},{"vehicle":"10195","mission":null,"network_status":"online","state":null,"battery":"45","software_configuration":"software_configuration#6","hardware_configuration":"hardware_configuration#6"}]
      axios.get.mockResolvedValueOnce(users);

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BaseUrl}/vehicle/get`);
      expect(result).toEqual(users);
    });
  });

//   describe("when API call fails", () => {
//     it("should return empty users list", async () => {
//       // given
//       const message = "Network Error";
//       axios.get.mockRejectedValueOnce(new Error(message));

//       // when
//       const result = await fetchUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BaseUrl}/users`);
//       expect(result).toEqual([]);
//     });
//   });
});