import {CharactersInfo} from "@/assets/types/character";


export type ResponseType<T> = {
  info: CharactersInfo;
  results: T[];
}

export type ParamsType = {
  page: number;
};