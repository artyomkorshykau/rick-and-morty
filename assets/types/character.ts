export type CharactersInfo = {
  count: number
  next: string
  pages: number
  prev?: any
}

export type CharactersOrigin = {
  name: string
  url: string
}
export type CharactersLocation = {
  name: string
  url: string
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'

export type CharacterSex = 'female' | 'genderless' | 'male' | 'unknown'

export type CharacterType = {
  created: string
  episode: string[]
  gender: CharacterSex
  id: number
  image: string
  location: CharactersLocation
  name: string
  origin: CharactersOrigin
  species: string
  status: CharacterStatus
  type: string
  url: string
}
