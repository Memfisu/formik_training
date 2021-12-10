import { useFormikContext } from 'formik';
import { IValues } from '../helpers/initialValues';
import { useEffect, useState } from 'react';

export const SubmitButton = () => {
    const { values } = useFormikContext<IValues>();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (typeof values === 'object' && values !== null) {
            if (Object.values(values).every(item => !!item)) setDisabled(false);
            else setDisabled(true);
        }
    }, [values]);


    return (
        <div className="buttonContainer">
            <button type="submit" disabled={disabled}>Отправить</button>
        </div>
    )
};