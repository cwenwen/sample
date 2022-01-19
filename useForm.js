import { useState } from 'react';

const useForm = ({
  initialValues = { account: '', password: '', rememberMe: false },
  validation,
  onSubmit,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = () => {
    const errorResult = validation(values);
    setErrors(errorResult);

    if (Object.keys(errorResult).length === 0) {
      onSubmit(values);
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
