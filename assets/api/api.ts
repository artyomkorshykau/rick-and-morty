import { instance } from "./instances";
import { RickAndMortyApi } from "./rick-and-morty-api";

const rickAndMortyApi = new RickAndMortyApi(instance);

export const API = {
  rickAndMorty: rickAndMortyApi,
};
