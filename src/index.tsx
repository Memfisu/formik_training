import { render } from 'react-dom';
import { Table } from './сomponents/Table';
import './style.css';
import {useState} from "react";

const App = (): JSX.Element => {
    const [name, setName] = useState('New user');

    const updateName = (value: string) => {
        setName(value);
    }

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Start editing to see some magic happen :)</p>
            <Table updateName={updateName} />
        </div>
    );
}

render(<App />, document.getElementById('root'));
