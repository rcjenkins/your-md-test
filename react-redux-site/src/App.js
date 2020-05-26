import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    loadConditions,
    selectConditions
} from './features/conditions/conditionsSlice';

import List from './conditions/List' 
import styled from 'styled-components';

const StyledApp = styled.div`
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `;

function App() {
    const dispatch = useDispatch();
    const data = useSelector(selectConditions);

    if (data.error) {
        return <>Error: {data.error}</>
    }

    if (!data.conditions && !data.isFetching) {
        dispatch(loadConditions());
        return <></>
    }
    
    

    if (data.isFetching || !data.conditions) {
        return <>Loading...</>
    }

    return (
        <StyledApp className="App">
            <header>
            </header>
            <main>
               <List conditions={data.conditions.conditions} />
            </main>
        </StyledApp>
    );
}

export default App;
