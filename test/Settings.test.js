import { render,screen, within } from "@testing-library/react";
import {  Router } from "react-router-dom";
import Settings from "../Settings";
import {createMemoryHistory} from 'history';

describe("Test the Login Component", () => {


    test("render the login form submit button on the screen", async () => {
        const history = createMemoryHistory();
        render(<Router  location={history.location} navigator={history}><Settings /></Router>);
       
        const { getByText } = within(screen.getByTestId('h1'))
        expect(getByText('Settings')).toBeInTheDocument()
      });
    });  