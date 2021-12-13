import * as Yup from 'yup';

export const phoneNumberMask = [
    "+",
    /\d/,
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
];

const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/g;
const moneyRegExp = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
const loginRegExp = /^[a-zA-Z1-9]+$/g;
const nameRegExp = /^[a-zA-Z]+$/g;
const numberRegExp = /^[0-9]+$/g;

export const validationSchema = Yup.object({
    number: Yup.string()
        .matches(numberRegExp, 'Только числа')
        .required('Обязательное для заполнения'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Неверный формат телефона')
        .required('Обязательное для заполнения'),
    money: Yup.string()
        .matches(moneyRegExp, 'Неверный формат валюты')
        .required('Обязательное для заполнения'),
    login: Yup.string()
        .matches(loginRegExp, 'Неверный формат логина')
        .required('Обязательное для заполнения'),
    lastName: Yup.string()
        .matches(nameRegExp, 'Неверный формат фамилии')
        .required('Обязательное для заполнения'),
    date: Yup.string()
        .required('Обязательное для заполнения')
});