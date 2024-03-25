import {CharactersInfo} from "@/assets/types/character";


export type ResponseType<T> = {
  info: CharactersInfo;
  results: T[];
}