import { render,screen } from "@testing-library/react";
import LoginScreen from "../LoginScreen";
import * as loginUtils from '../../Services/userServices';
import { Router } from "react-router-dom";
import {createMemoryHistory} from 'history';
jest.mock('axios');

describe("Test the Login Component", () => {
  const users = [ 
  
    {tesla:"50 millons"}
    /* mock users data */ ];
  
  const mocklogin = jest.spyOn(loginUtils, 'login');
  mocklogin.mockResolvedValue(users);

  

    test("render the login form submit button on the screen", async () => {
      const history = createMemoryHistory();
      render(<Router  location={history.location} navigator={history}><LoginScreen /></Router>);
      const buttonList = await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(1);
    });
   
    test('render email input', () => {
      const history = createMemoryHistory();
      render(<Router  location={history.location} navigator={history}><LoginScreen /></Router>);        
      const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
      });

      test('render email password', () => {
        const history = createMemoryHistory();
        render(<Router  location={history.location} navigator={history}><LoginScreen /></Router>);        
        const inputEl = screen.getByTestId("password-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "password");
      });


      test("illustrate mocks", () => {const mock = jest.fn().mockReturnValue({token : "00112233"})
       
      const loginService = require('../../Services/userServices')
        loginService.login = mock
     
        const result = loginService.login("diconium1@yopmail.com", "User@123")
     
        expect(result.token).toBe("00112233")
        expect(mock).toHaveBeenCalled()
        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveBeenCalledWith("diconium1@yopmail.com","User@123")
    })
      });