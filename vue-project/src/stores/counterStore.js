import { reactive } from 'vue'

// state
export let counter = reactive({
  count: 0,

  // action
  increment() {
    if (this.count > 9) {
      return
    }

    this.count++
  },
})
