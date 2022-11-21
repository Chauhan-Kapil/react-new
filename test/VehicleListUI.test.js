import { render, screen } from '@testing-library/react';
import VehicleViewScreen from '../VehicleViewScreen';
import {createMemoryHistory} from 'history';
import { Router } from 'react-router-dom';

describe('vehicle list', () => {

test('renders lists if request succeeds',async () =>{
    const history = createMemoryHistory();
    render(<Router  location={history.location} navigator={history}><VehicleViewScreen/></Router>);
    const listitemElements =await screen.findAllByRole('listitem')
    expect(listitemElements).not.toHaveLength(0);

})

})