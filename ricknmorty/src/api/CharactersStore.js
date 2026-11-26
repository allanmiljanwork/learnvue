const URL = 'https://rickandmortyapi.com/api/character'

export async function getCharacters(page = 1) {
  const res = await fetch(`${URL}?page=${page}`)

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  const data = await res.json()
  return data.results
}

export async function getCharacterCount() {
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  const data = await res.json()
  return data.info.count
}

export async function loadCharacters(page = 1, filters = {}) {
  try {
    return await getCharacters(page, filters)
  } catch (error) {
    console.error(error)
    return []
  }
}
