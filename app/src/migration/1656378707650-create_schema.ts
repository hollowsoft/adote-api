import { Table, TableForeignKey, QueryRunner, MigrationInterface } from 'typeorm'

export class CreateSchema_1656378707650 implements MigrationInterface {
  async up(query: QueryRunner): Promise<void> {
    await query.query('create extension "uuid-ossp"')

    await query.createTable(
      new Table({
        name: 'city',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'name', type: 'text' },
          { name: 'state_id', type: 'uuid' },
        ],
        indices: [{ name: 'city_name', columnNames: ['name'] }],
      }),
    )

    await query.createTable(
      new Table({
        name: 'state',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'name', type: 'text' },
          { name: 'country_id', type: 'uuid' },
        ],
        indices: [{ name: 'state_name', columnNames: ['name'] }],
      }),
    )

    await query.createTable(
      new Table({
        name: 'country',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'key', type: 'text' },
          { name: 'en', type: 'text' },
          { name: 'pt', type: 'text' },
        ],
        indices: [
          { name: 'country_name_en', columnNames: ['en'] },
          { name: 'country_name_pt', columnNames: ['pt'] },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'post',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'title', type: 'text' },
          { name: 'description', type: 'text' },
          { name: 'image', type: 'text[]' },
          { name: 'pet_id', type: 'uuid' },
          { name: 'city_id', type: 'uuid' },
          { name: 'user_id', type: 'uuid' },
          { name: 'publish', type: 'boolean', default: true },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'pet',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'name', type: 'text' },
          { name: 'age', type: 'integer[]' },
          { name: 'size', type: 'enum', enum: ['small', 'medium', 'large'] },
          { name: 'gender', type: 'enum', enum: ['male', 'female'] },
          { name: 'breed_id', type: 'uuid' },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'breed',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'key', type: 'text' },
          { name: 'en', type: 'text' },
          { name: 'pt', type: 'text' },
          { name: 'kind', type: 'enum', enum: ['cat', 'dog'] },
        ],
        indices: [
          { name: 'breed_name_en', columnNames: ['en'] },
          { name: 'breed_name_pt', columnNames: ['pt'] },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'mail', type: 'text', isUnique: true },
          { name: 'name', type: 'text', isNullable: true },
          { name: 'image', type: 'text', isNullable: true },
          { name: 'description', type: 'text', isNullable: true },
          { name: 'city_id', type: 'uuid', isNullable: true },
          { name: 'contact_id', type: 'uuid', isNullable: true },
          { name: 'admin', type: 'boolean', default: false },
          { name: 'enable', type: 'boolean', default: true },
        ],
        indices: [
          { name: 'user_name', columnNames: ['name'] },
          { name: 'user_mail', columnNames: ['mail'] },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'wish',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'post_id', type: 'uuid' },
          { name: 'user_id', type: 'uuid' },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'contact',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'mail', type: 'text', isNullable: true },
          { name: 'phone', type: 'text', isNullable: true },
          { name: 'social', type: 'text', isNullable: true },
        ],
      }),
    )

    await query.createTable(
      new Table({
        name: 'history',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'name', type: 'text' },
          { name: 'image', type: 'text' },
          { name: 'age', type: 'integer[]' },
          { name: 'size', type: 'enum', enum: ['small', 'medium', 'large'] },
          { name: 'gender', type: 'enum', enum: ['make', 'female'] },
          { name: 'breed_id', type: 'uuid' },
        ],
      }),
    )

    // city
    await query.createForeignKey(
      'city',
      new TableForeignKey({ columnNames: ['state_id'], referencedTableName: 'state', referencedColumnNames: ['id'] }),
    )

    // state
    await query.createForeignKey(
      'state',
      new TableForeignKey({ columnNames: ['country_id'], referencedTableName: 'country', referencedColumnNames: ['id'] }),
    )

    // post
    await query.createForeignKey(
      'post',
      new TableForeignKey({ columnNames: ['pet_id'], referencedTableName: 'pet', referencedColumnNames: ['id'] }),
    )

    await query.createForeignKey(
      'post',
      new TableForeignKey({ columnNames: ['city_id'], referencedTableName: 'city', referencedColumnNames: ['id'] }),
    )

    await query.createForeignKey(
      'post',
      new TableForeignKey({ columnNames: ['user_id'], referencedTableName: 'user', referencedColumnNames: ['id'] }),
    )

    // pet
    await query.createForeignKey(
      'pet',
      new TableForeignKey({ columnNames: ['breed_id'], referencedTableName: 'breed', referencedColumnNames: ['id'] }),
    )

    // user
    await query.createForeignKey(
      'user',
      new TableForeignKey({ columnNames: ['city_id'], referencedTableName: 'user', referencedColumnNames: ['id'] }),
    )

    await query.createForeignKey(
      'user',
      new TableForeignKey({ columnNames: ['contact_id'], referencedTableName: 'user', referencedColumnNames: ['id'] }),
    )

    // wish
    await query.createForeignKey(
      'wish',
      new TableForeignKey({ columnNames: ['post_id'], referencedTableName: 'post', referencedColumnNames: ['id'] }),
    )

    await query.createForeignKey(
      'wish',
      new TableForeignKey({ columnNames: ['user_id'], referencedTableName: 'user', referencedColumnNames: ['id'] }),
    )

    // history
    await query.createForeignKey(
      'history',
      new TableForeignKey({ columnNames: ['breed_id'], referencedTableName: 'breed', referencedColumnNames: ['id'] }),
    )
  }

  public async down(query: QueryRunner): Promise<void> {
    query.dropTable('city')
    query.dropTable('state')
    query.dropTable('country')

    query.dropTable('post')
    query.dropTable('pet')
    query.dropTable('breed')

    query.dropTable('user')
    query.dropTable('wish')
    query.dropTable('contact')

    query.dropTable('history')
  }
}
