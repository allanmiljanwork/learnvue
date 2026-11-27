const URL = 'https://rickandmortyapi.com/api/character'

function createFilterParams(filters = {}) {
  const params = new URLSearchParams()

  if (filters.status) {
    params.set('status', filters.status)
  }

  return params
}

export async function getCharacters(page = 1, filters = {}) {
  const params = createFilterParams(filters)
  params.set('page', page)

  const res = await fetch(`${URL}?${params}`)

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`)
  }

  const data = await res.json()
  return data.results
}

export async function getCharacterCount(filters = {}) {
  const params = createFilterParams(filters)
  const query = params.toString()
  const res = await fetch(query ? `${URL}?${query}` : URL)

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
