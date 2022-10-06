import { Table, TableForeignKey, QueryRunner, MigrationInterface } from 'typeorm'

export class CreateSchema_1656378707650 implements MigrationInterface {
  async up(query: QueryRunner) {
    await query.query('create extension if not exists "uuid-ossp"')

    await query.createTable(
      new Table({
        name: 'city',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'key', type: 'text' },
          { name: 'en', type: 'text' },
          { name: 'pt', type: 'text' },
          { name: 'state_id', type: 'uuid' }
        ],
        indices: [
          { name: 'city_name', columnNames: ['name'] }
        ]
      })
    )

    await query.createTable(
      new Table({
        name: 'state',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'key', type: 'text' },
          { name: 'en', type: 'text' },
          { name: 'pt', type: 'text' },
          { name: 'country_id', type: 'uuid' }
        ],
        indices: [
          { name: 'state_name', columnNames: ['name'] }
        ]
      })
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
          { name: 'pt', type: 'text' }
        ],
        indices: [
          { name: 'country_name_en', columnNames: ['en'] },
          { name: 'country_name_pt', columnNames: ['pt'] }
        ]
      })
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
          { name: 'publish', type: 'boolean', default: true }
        ]
      })
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
          { name: 'breed_id', type: 'uuid' }
        ]
      })
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
          { name: 'kind', type: 'enum', enum: ['cat', 'dog'] }
        ],
        indices: [
          { name: 'breed_name_en', columnNames: ['en'] },
          { name: 'breed_name_pt', columnNames: ['pt'] }
        ]
      })
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
          { name: 'enable', type: 'boolean', default: true }
        ],
        indices: [
          { name: 'user_name', columnNames: ['name'] },
          { name: 'user_mail', columnNames: ['mail'] }
        ]
      })
    )

    await query.createTable(
      new Table({
        name: 'fav',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
          { name: 'create', type: 'timestamp', default: 'now()' },
          { name: 'update', type: 'timestamp', default: 'now()' },
          { name: 'post_id', type: 'uuid' },
          { name: 'user_id', type: 'uuid' }
        ]
      })
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
          { name: 'social', type: 'text', isNullable: true }
        ]
      })
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
          { name: 'breed_id', type: 'uuid' }
        ]
      })
    )

    // city
    await query.createForeignKey('city', new TableForeignKey({
      name: 'city_state',
      columnNames: ['state_id'],
      referencedTableName: 'state',
      referencedColumnNames: ['id']
    }))

    // state
    await query.createForeignKey('state', new TableForeignKey({
      name: 'state_country',
      columnNames: ['country_id'],
      referencedTableName: 'country',
      referencedColumnNames: ['id']
    }))

    // post
    await query.createForeignKey('post', new TableForeignKey({
      name: 'post_pet',
      columnNames: ['pet_id'],
      referencedTableName: 'pet',
      referencedColumnNames: ['id']
    }))

    await query.createForeignKey('post', new TableForeignKey({
      name: 'post_city',
      columnNames: ['city_id'],
      referencedTableName: 'city',
      referencedColumnNames: ['id']
    }))

    await query.createForeignKey('post', new TableForeignKey({
      name: 'post_user',
      columnNames: ['user_id'],
      referencedTableName: 'user',
      referencedColumnNames: ['id']
    }))

    // pet
    await query.createForeignKey('pet', new TableForeignKey({
      name: 'pet_breed',
      columnNames: ['breed_id'],
      referencedTableName: 'breed',
      referencedColumnNames: ['id']
    }))

    // user
    await query.createForeignKey('user', new TableForeignKey({
      name: 'user_city',
      columnNames: ['city_id'],
      referencedTableName: 'city',
      referencedColumnNames: ['id']
    }))

    await query.createForeignKey('user', new TableForeignKey({
      name: 'user_contact',
      columnNames: ['contact_id'],
      referencedTableName: 'contact',
      referencedColumnNames: ['id']
    }))

    // fav
    await query.createForeignKey('fav', new TableForeignKey({
      name: 'fav_post',
      columnNames: ['post_id'],
      referencedTableName: 'post',
      referencedColumnNames: ['id']
    }))

    await query.createForeignKey('fav', new TableForeignKey({
      name: 'fav_user',
      columnNames: ['user_id'],
      referencedTableName: 'user',
      referencedColumnNames: ['id']
    }))

    // history
    await query.createForeignKey('history', new TableForeignKey({
      name: 'history_breed',
      columnNames: ['breed_id'],
      referencedTableName: 'breed',
      referencedColumnNames: ['id']
    }))
  }

  async down(query: QueryRunner) {
    // city
    await query.dropForeignKey('city', 'city_state')

    // state
    await query.dropForeignKey('state', 'state_country')

    // post
    await query.dropForeignKey('post', 'post_pet')
    await query.dropForeignKey('post', 'post_city')
    await query.dropForeignKey('post', 'post_user')

    // pet
    await query.dropForeignKey('pet', 'pet_breed')

    // user
    await query.dropForeignKey('user', 'user_city')
    await query.dropForeignKey('user', 'user_contact')

    // fav
    await query.dropForeignKey('fav', 'fav_post')
    await query.dropForeignKey('fav', 'fav_user')

    // history
    await query.dropForeignKey('history', 'history_breed')

    await query.dropTable('city')
    await query.dropTable('state')
    await query.dropTable('country')

    await query.dropTable('post')
    await query.dropTable('pet')
    await query.dropTable('breed')

    await query.dropTable('user')
    await query.dropTable('fav')
    await query.dropTable('contact')

    await query.dropTable('history')
  }
}
