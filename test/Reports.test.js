import { render,screen, within } from "@testing-library/react";
import {  Router } from "react-router-dom";
import Reports from "../Reports";
import {createMemoryHistory} from 'history';

describe("Test the Login Component", () => {


    test("render the login form submit button on the screen", async () => {
        const history = createMemoryHistory();
        render(<Router  location={history.location} navigator={history}><Reports /></Router>);
       
        const { getByText } = within(screen.getByTestId('h1-reports'))
        expect(getByText('Reports')).toBeInTheDocument()
      });
    });  