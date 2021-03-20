import { ComplexStateStore } from "./complex-state.store"

export function ComplexStateComponent() {
  const store = ComplexStateStore.useContainer()

  return (
    <div>
      <span>{store.name}</span>
      <br />
      <span>{store.age}</span>
      <br />
      <span>{store.count}</span>
    </div>
  )
}