import { useState, useEffect } from 'react';
import { itemValidationService } from '../service/itemValidationService';

export const useItemValidation = (data) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validateData = async () => {
      const result = await itemValidationService(data);
      setIsValid(result);
    };
    validateData();
  }, [data]);

  return isValid;
};


