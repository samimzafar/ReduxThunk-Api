import { DogAPI } from "./urls";
import request from "../request";

export const GetDogBreedService = (breedName) => {
  return request
    .GetApi(DogAPI.DogGetBreedApi(breedName))
    .then((response) => response)
    .catch((error) => error);
};

const DogService = {
  GetDogBreedService,
};

export default DogService;
