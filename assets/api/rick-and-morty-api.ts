import { instance } from '@/assets/api/instances'
import { CharacterType } from '@/assets/types/character'
import { EpisodeType } from '@/assets/types/episode'
import { LocationType } from '@/assets/types/location'
import { ParamsType, ResponseType } from '@/assets/types/response'

export const rickAndMortyApi = {
  getCharacter(id: string) {
    return instance.get<CharacterType>(`/character/${id}`).then(res => res.data)
  },
  getCharacters(params?: ParamsType) {
    return instance
      .get<ResponseType<CharacterType>>(`/character/?page=${params?.page ? params.page : 1}`)
      .then(res => res.data)
  },

  getEpisode(id: string) {
    return instance.get<EpisodeType>(`/episode/${id}`).then(res => res.data)
  },
  getEpisodes(params?: ParamsType) {
    return instance
      .get<ResponseType<EpisodeType>>(`/episode/?page=${params?.page ? params.page : 1}`)
      .then(res => res.data)
  },

  getLocation(id: string) {
    return instance.get<LocationType>(`/location/${id}`).then(res => res.data)
  },
  getLocations(params?: ParamsType) {
    return instance
      .get<ResponseType<LocationType>>(`/location/?page=${params?.page ? params.page : 1}`)
      .then(res => res.data)
  },
}
