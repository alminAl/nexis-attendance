import * as yup from "yup";

export const firstLastNameValidation = () =>
  yup.object().shape({
    first_name: yup.string().required("This field is required"),
    last_name: yup.string().required("This field is required"),
  });

export const phoneEmailValidation = () =>
  yup.object().shape({
    phone_number: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
  });

export const passwordValidation = () =>
  yup.object().shape({
    password: yup.string().min(8).required("This field is required"),
  });

export const loginValidation = () =>
  yup.object().shape({
    email: yup.string().email().required("This field is required"),
    password: yup.string().min(8).required("This field is required"),
  });
