import { useEffect, useState } from 'react'

import { rickAndMortyApi } from '@/assets/api/rick-and-morty-api'
import { CharacterType } from '@/assets/types/character'
import { EpisodeType } from '@/assets/types/episode'
import { LocationType } from '@/assets/types/location'

type Props = {
  characters?: boolean
  episodes?: boolean
  locations?: boolean
}

const usePagination = ({ characters, episodes, locations }: Props) => {
  const [page, setPage] = useState<number>(0)
  const [fetching, setFetching] = useState<boolean>(true)

  const [charactersItems, setCharactersItems] = useState<CharacterType[]>([])
  const [episodesItems, setEpisodesItems] = useState<EpisodeType[]>([])
  const [locationsItems, setLocationsItems] = useState<LocationType[]>([])

  const [totalCharacters, setTotalCharacters] = useState<number>(0)
  const [totalEpisodes, setTotalEpisodes] = useState<number>(0)
  const [totalLocations, setTotalLocations] = useState<number>(0)

  useEffect(() => {
    if (fetching) {
      if (characters) {
        rickAndMortyApi
          .getCharacters({ page })
          .then(res => {
            setCharactersItems([...charactersItems, ...res.results])
            setPage(prevState => prevState + 1)
            setTotalCharacters(res.info.count)
          })
          .finally(() => {
            setFetching(false)
          })
      }
      if (episodes) {
        rickAndMortyApi
          .getEpisodes({ page })
          .then(res => {
            setEpisodesItems([...episodesItems, ...res.results])
            setPage(prevState => prevState + 1)
            setTotalEpisodes(res.info.count)
          })
          .finally(() => {
            setFetching(false)
          })
      }
      if (locations) {
        rickAndMortyApi
          .getLocations({ page })
          .then(res => {
            setLocationsItems([...locationsItems, ...res.results])
            setPage(prevState => prevState + 1)
            setTotalLocations(res.info.count)
          })
          .finally(() => {
            setFetching(false)
          })
      }
    }
  }, [
    fetching,
    charactersItems,
    page,
    characters,
    episodes,
    locations,
    episodesItems,
    locationsItems,
  ])

  useEffect(() => {
    window.document.addEventListener('scroll', scrollHandler)

    return () => {
      window.document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = (e: any) => {
    if (characters) {
      if (
        e.currentTarget.documentElement.scrollHeight -
          (e.currentTarget.documentElement.scrollTop + window.innerHeight) <
          100 &&
        charactersItems.length < totalCharacters
      ) {
        setFetching(true)
      }
    }
    if (episodes) {
      if (
        e.currentTarget.documentElement.scrollHeight -
          (e.currentTarget.documentElement.scrollTop + window.innerHeight) <
          100 &&
        episodesItems.length < totalEpisodes
      ) {
        setFetching(true)
      }
    }
    if (locations) {
      if (
        e.currentTarget.documentElement.scrollHeight -
          (e.currentTarget.documentElement.scrollTop + window.innerHeight) <
          100 &&
        locationsItems.length < totalLocations
      ) {
        setFetching(true)
      }
    }
  }

  return { charactersItems, episodesItems, locationsItems }
}

export default usePagination
