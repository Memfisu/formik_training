import { useCallback } from 'react';
import { Formik, Form , Field, ErrorMessage } from 'formik';
import { validationSchema } from '../helpers/validation';
import { initialValues } from '../helpers/initialValues';
import { checkUser } from '../helpers/api';
import { SubmitButton } from './SubmitButton';

type Props = {
    updateName: (name: string) => void
}

const renderError = (message: string) => <div className="error">{message}</div>;

export const Table = ({ updateName }: Props): JSX.Element => {

    const onSubmit = useCallback(values => {
        console.log(JSON.stringify(values, null, 2));
        updateName(values.login);
    }, [updateName]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
        <Form>
            <table className="table">
                <tbody>
                    <tr>
                        <td className="number">
                            <label htmlFor="number">Я про числа</label>
                            <Field type="text" name="number" />
                            <ErrorMessage name="number">{renderError}</ErrorMessage>
                        </td>

                        <td className="phone">
                            <label htmlFor="phone">Я про телефоны</label>
                            <Field type="phone" name="phone" />
                            <ErrorMessage name="phone">{renderError}</ErrorMessage>
                        </td>

                        <td className="money">
                            <label htmlFor="money">Я про деньги</label>
                            <div className="money_container">
                                <Field type="text" name="money" />
                            </div>
                            <ErrorMessage name="money">{renderError}</ErrorMessage>
                        </td>
                    </tr>

                    <tr>
                        <td className="login">
                            <label htmlFor="login">Имя пользователя</label>
                            <Field
                                type="text"
                                name="login"
                                validate={checkUser}
                            />
                            <ErrorMessage name="login">{renderError}</ErrorMessage>
                        </td>

                        <td className="lastName">
                            <div className="lastName_container">
                                <label htmlFor="lastName">Фамилия</label>
                                <Field type="text" name="lastName" />
                            </div>
                            <ErrorMessage name="lastName">{renderError}</ErrorMessage>
                        </td>

                        <td className="date">
                            <div className="date_container">
                                <label htmlFor="date">Дата рождения</label>
                                <Field type="date" name="date" />
                            </div>
                            <ErrorMessage name="date">{renderError}</ErrorMessage>
                        </td>
                    </tr>
                </tbody>
            </table>

            <SubmitButton />
        </Form>
        </Formik>
    );
}