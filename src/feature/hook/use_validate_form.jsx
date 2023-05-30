import { useState } from "react";

const UseValidateForm = () => {
    const [isValid, setIsValid] = useState(true);

    const validateFields = (fields) => {
      const isEmpty = Object.values(fields).some((value) => value === "");
      const isPasswordMatch = fields.password === fields.confirmPassword;
      setIsValid(!isEmpty && isPasswordMatch);
      return !isEmpty && isPasswordMatch;
    };
  
    return { isValid, validateFields };
}

export default UseValidateForm;


