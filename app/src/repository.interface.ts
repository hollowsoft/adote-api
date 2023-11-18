import {
  SaveOptions,
  RemoveOptions,
  FindOneOptions,
  FindManyOptions
} from 'typeorm'

export default interface EntityRepository<Entity> {
  all(option?: FindManyOptions<Entity>): Promise<Entity[]>

  find(option: FindOneOptions<Entity>): Promise<Entity | null>

  save(entity: Entity, option?: SaveOptions): Promise<Entity>

  remove(entity: Entity, option?: RemoveOptions): Promise<Entity>
}
