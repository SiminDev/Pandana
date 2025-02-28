import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T)  {
    const [value, setValue] = useState<T>(() => {
        let storedValue = localStorage.getItem(key);

        if (storedValue != null) {
            return JSON.parse(storedValue)
        } else {
            return initialValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue] as [typeof value, typeof setValue]
}