import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {Nullable} from "@/assets/types/util";
import {CharacterType} from "@/assets/types/character";


export const useCharacter = (): Nullable<CharacterType> => {
  const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

  const router = useRouter()

  useEffect(() => {
    axios.get<CharacterType>(`${process.env.NEXT_PUBLIC_RAM_API}/character/${router.query.id}`)
        .then(res => setCharacter(res.data))
  }, [character])

  return character
}