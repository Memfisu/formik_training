import React from 'react';
import { render } from 'react-dom';
import { Hello } from './сomponents/Hello';
import { Table } from './сomponents/Table';
import './style.css';

const App = (): JSX.Element => {
    return (
        <div>
            <Hello />
            <p>Start editing to see some magic happen :)</p>
            <Table />
        </div>
    );
}

render(<App />, document.getElementById('root'));
