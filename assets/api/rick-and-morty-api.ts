import {CharacterType} from "@/assets/types/character";
import {ParamsType, ResponseType} from "@/assets/types/response";
import {LocationType} from "@/assets/types/location";
import {EpisodeType} from "@/assets/types/episode";
import {instance} from "@/assets/api/instances";


export const rickAndMortyApi = {

  getCharacters(params?: ParamsType) {
    return instance
        .get<ResponseType<CharacterType>>(`/character/?page=${params ? params : 1}`)
        .then((res) => res.data);
  },
  getCharacter(id: string) {
    return instance
        .get<CharacterType>(`/character/${id}`)
        .then((res) => res.data);
  },

  getLocations(params?: ParamsType) {
    return instance
        .get<ResponseType<LocationType>>("/location", {params})
        .then((res) => res.data);
  },
  getLocation(id: string) {
    return instance
        .get<LocationType>(`/location/${id}`)
        .then((res) => res.data);
  },

  getEpisodes(params?: ParamsType) {
    return instance
        .get<ResponseType<EpisodeType>>("/episode", {params})
        .then((res) => res.data);
  },
  getEpisode(id: string) {
    return instance
        .get<EpisodeType>(`/episode/${id}`)
        .then((res) => res.data);
  }
}

