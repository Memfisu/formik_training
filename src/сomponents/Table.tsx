import React, { useEffect, useCallback, useState } from 'react';
import { Formik, Form , Field, ErrorMessage, useFormikContext } from 'formik';
import { validationSchema } from '../helpers/validation';
import { initialValues } from '../helpers/initialValues';
import { checkUser } from '../helpers/api';

const renderError = (message: string) => <div className="error">{message}</div>;

export const Table = (): JSX.Element => {
    const [disabled, setDisabled] = useState(true);

    const onSubmit = useCallback(values => {
        console.log(JSON.stringify(values, null, 2));
    }, []);

    const EnableSubmitButton = () => {
        const formik = useFormikContext();

        useEffect(() => {
            // @ts-ignore
            if (Object.values(formik.values).every(item => !!item)) setDisabled(false);
            else setDisabled(true);
        }, [
            formik.values
        ]);
        return null;
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
        <Form>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="number">Я про числа</label>
                            <Field type="text" name="number" />
                            <ErrorMessage name="number">{renderError}</ErrorMessage>
                        </td>

                        <td>
                            <label htmlFor="phone">Я про телефоны</label>
                            <Field type="phone" name="phone" />
                            <ErrorMessage name="phone">{renderError}</ErrorMessage>
                        </td>

                        <td>
                            <label htmlFor="money">Я про деньги</label>
                            <Field type="text" name="money" />
                            <ErrorMessage name="money">{renderError}</ErrorMessage>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label htmlFor="login">Имя пользователя</label>
                            <Field
                                type="text"
                                name="login"
                                validate={checkUser}
                            />
                            <ErrorMessage name="login">{renderError}</ErrorMessage>
                        </td>

                        <td>
                            <label htmlFor="lastName">Фамилия</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName">{renderError}</ErrorMessage>
                        </td>

                        <td>
                            <label htmlFor="date">Дата рождения</label>
                            <Field type="date" name="date" />
                            <ErrorMessage name="date">{renderError}</ErrorMessage>
                        </td>
                    </tr>
                </tbody>
            </table>

            <EnableSubmitButton />
            <button type="submit" disabled={disabled}>Отправить</button>
        </Form>
        </Formik>
    );
}