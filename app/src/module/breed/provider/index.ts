import { ListBreed } from './list.breed'

export enum Provider {
  ListBreed
}

export type BreedProvider = [ListBreed]

export const BreedProvider = Symbol('BreedProvider')

export { ListBreed }
