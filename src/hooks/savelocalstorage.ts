// import {Signal,  createSignal} from "solid-js";

// function useLocalStorage<T>(
//  key: string,
//  defaultValue: T,
//  storage = localStorage
// ): Signal<T> {
//  const item = storage.getItem(key);
//  const initialValue = item ? (JSON.parse(item) as T) : defaultValue;
//  const [value, setValue] = createSignal<T>(initialValue);

//  const setValueAndStore = ((arg) => {
//   const v = setValue(arg);
//   storage.setItem(key, JSON.stringify(v));
//   return v;
//  }) as typeof setValue;

//  return [value, setValueAndStore];
// }

// export default useLocalStorage;
