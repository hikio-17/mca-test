import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

function useInput(defaultValue: string = ''): [string, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState<string>(defaultValue);

  function handleValueChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;