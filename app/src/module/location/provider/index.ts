import { SearchLocation } from './search.location'

export enum Provider {
  SearchLocation
}

export type LocationProvider = [SearchLocation]

export const LocationProvider = Symbol('LocationProvider')

export { SearchLocation }
