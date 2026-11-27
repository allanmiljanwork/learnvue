import { onMounted, ref } from 'vue'
import { getCharacters, getCharacterCount } from '@/api/CharactersStore'

export function useCharacters() {
  const characters = ref([])
  const totalCharacters = ref(0)
  const status = ref('')

  async function loadCharacters(page = 1) {
    try {
      characters.value = await getCharacters(page, { status: status.value })
    } catch (error) {
      console.error('Could not load characters:', error)
    }
  }

  async function applyFilters() {
    try {
      totalCharacters.value = await getCharacterCount({ status: status.value })
    } catch (error) {
      console.error('Could not load character count:', error)
      totalCharacters.value = 0
    }

    await loadCharacters(1)
  }

  onMounted(applyFilters)

  return {
    characters,
    totalCharacters,
    status,
    loadCharacters,
    applyFilters,
  }
}
