const URL = 'https://rickandmortyapi.com/api/character'

export async function getCharacters() {
  const res = await fetch(URL)

  if (!res.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  const data = await respose.json()
  return data.results
}
