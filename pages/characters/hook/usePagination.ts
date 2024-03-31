import {useEffect, useState} from "react";
import {CharacterType} from "@/assets/types/character";
import {rickAndMortyApi} from "@/assets/api/rick-and-morty-api";


const usePagination = () => {
  const [page, setPage] = useState<number>(0)
  const [items, setItems] = useState<CharacterType[]>([])
  const [totalItems, setTotalItems] = useState<number>(0)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    if (fetching) {
      rickAndMortyApi.getCharacters({page})
          .then(res => {
                setItems([...items, ...res.results])
                setPage(prevState => prevState + 1)
                setTotalItems(res.info.count)
              }
          )
          .finally(() => {
            setFetching(false)
          })
    }

  }, [fetching, items, page])

  useEffect(() => {
    window.document.addEventListener('scroll', scrollHandler)

    return () => {
      window.document.removeEventListener('scroll', scrollHandler)
    }
  })

  const scrollHandler = (e: any) => {
    if (e.currentTarget.documentElement.scrollHeight - (e.currentTarget.documentElement.scrollTop + window.innerHeight) < 100 && items.length < totalItems) {
      setFetching(true)
    }
  }

  return items
}

export default usePagination