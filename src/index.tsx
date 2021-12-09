import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function App(): JSX.Element {
    const [name, setName] = useState('React');
    return (
        <div>
            <Hello name={name} />
            <p>Start editing to see some magic happen :)</p>
            <p>
                <table>
                    <tr>
                        <td>
                            Я про цифры
                            <input />
                        </td>
                        <td>
                            Я про телефоны
                            <input />
                        </td>
                        <td>
                            Я про деньги
                            <input />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            User name
                            <input />
                        </td>
                        <td>
                            Фамилия
                            <input />
                        </td>
                        <td>
                            Дата рождения
                            <input />
                        </td>
                    </tr>
                </table>
            </p>
        </div>
    );
}

render(<App />, document.getElementById('root'));
