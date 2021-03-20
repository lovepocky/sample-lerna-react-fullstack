import { merge } from "lodash"
import { useState } from "react"
import useSWR from "swr"
import { createContainer } from "unstated-next"

export interface ComplexStateValues {
  count: number
  name: string
  age: number
}

function useComplexState(init: Partial<ComplexStateValues> = {}) {
  const initValues: ComplexStateValues = merge({ count: 0, name: "TODO", age: 20 } as ComplexStateValues, init)
  let [count, setCount] = useState(initValues.count)
  let [name, setName] = useState(initValues.name)
  let [age,] = useState(initValues.age)
  let hello = useSWR('/api/hello')

  console.log('fetch hello', hello)

  let decrement = () => setCount(count - 1)
  let increment = () => setCount(count + 1)
  return { count, decrement, increment, name, setName, age, hello }
}

export const ComplexStateStore = createContainer(useComplexState)