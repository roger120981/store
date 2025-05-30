import { Store } from '@tanstack/svelte-store'

// You can instantiate a Store outside of Svelte files too!
export const store = new Store({
  dogs: 0,
  cats: 0,
})

export function updateState(animal: 'cats' | 'dogs') {
  store.setState((state) => {
    return {
      ...state,
      [animal]: state[animal] + 1,
    }
  })
}
