import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const fromCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = 'This field is required'] =
        formValidations[formField];
      fromCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(fromCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,

    isFormValid,
    ...formValidation,
  };
};
