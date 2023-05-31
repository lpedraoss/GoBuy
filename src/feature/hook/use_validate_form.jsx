import { useState } from "react";

const UseValidateForm = () => {
    const [isValid, setIsValid] = useState(true);

    const validateFields = (fields) => {
      const isEmpty = Object.values(fields).some((value) => value === "");
      const equalPassword = (fields.password === fields.confirmPassword);
      const isValidForm = !isEmpty && equalPassword;
      setIsValid( isValidForm );
      return isValidForm;
    };
  
    return { validateFields };
}

export default UseValidateForm;


