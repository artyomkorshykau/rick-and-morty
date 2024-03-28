import {ReactNode} from "react";


export type CharactersInfo = {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export type CharactersOrigin = {
  name: string;
  url: string;
}
export type CharactersLocation = {
  name: string;
  url: string;
}

export type CharacterStatus = "alive" | "dead" | "unknown";

export type CharacterSex = "female" | "male" | "genderless" | "unknown";

export type CharacterType = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterSex
  origin: CharactersOrigin;
  location: CharactersLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
