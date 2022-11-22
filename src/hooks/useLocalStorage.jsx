import { useEffect, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localvalue = window.localStorage.getItem(key);
      return localvalue ? JSON.parse(localvalue) : initialValue;
    } catch(err) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue];
}

export default useLocalStorage