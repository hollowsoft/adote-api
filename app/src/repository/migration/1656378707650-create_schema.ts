import { Table, TableForeignKey, QueryRunner, MigrationInterface } from 'typeorm'

export class CreateSchema_1656378707650 implements MigrationInterface {
  TABLE_CITY = new Table({
    name: 'city',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
      { name: 'create', type: 'timestamp', default: 'now()' },
      { name: 'update', type: 'timestamp', default: 'now()' },
      { name: 'name', type: 'text' },
      { name: 'state_id', type: 'uuid' }
    ],
    indices: [
      { name: 'city_name', columnNames: ['name'] }
    ]
  })

  TABLE_STATE = new Table({
    name: 'state',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
      { name: 'create', type: 'timestamp', default: 'now()' },
      { name: 'update', type: 'timestamp', default: 'now()' },
      { name: 'name', type: 'text' },
      { name: 'country_id', type: 'uuid' }
    ],
    indices: [
      { name: 'state_name', columnNames: ['name'] }
    ]
  })

  TABLE_COUNTRY = new Table({
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

  TABLE_POST = new Table({
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

  TABLE_PET = new Table({
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

  TABLE_BREED = new Table({
    name: 'breed',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
      { name: 'create', type: 'timestamp', default: 'now()' },
      { name: 'update', type: 'timestamp', default: 'now()' },
      { name: 'key', type: 'text' },
      { name: 'kind', type: 'enum', enum: ['cat', 'dog'] },
      { name: 'en', type: 'text' },
      { name: 'pt', type: 'text' }
    ],
    indices: [
      { name: 'breed_name_en', columnNames: ['en'] },
      { name: 'breed_name_pt', columnNames: ['pt'] }
    ]
  })

  TABLE_USER = new Table({
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

  TABLE_WISH = new Table({
    name: 'wish',
    columns: [
      { name: 'id', type: 'uuid', isPrimary: true, default: 'uuid_generate_v1mc()' },
      { name: 'post_id', type: 'uuid' },
      { name: 'user_id', type: 'uuid' }
    ]
  })

  TABLE_CONTACT = new Table({
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

  TABLE_HISTORY = new Table({
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

  // city
  FOREIGN_KEY_CITY_STATE = new TableForeignKey({
    name: 'city_state',
    columnNames: ['state_id'],
    referencedTableName: 'state',
    referencedColumnNames: ['id']
  })

  // state
  FOREIGN_KEY_STATE_COUNTRY = new TableForeignKey({
    name: 'state_country',
    columnNames: ['country_id'],
    referencedTableName: 'country',
    referencedColumnNames: ['id']
  })

  // post
  FOREIGN_KEY_POST_PET = new TableForeignKey({
    name: 'post_pet',
    columnNames: ['pet_id'],
    referencedTableName: 'pet',
    referencedColumnNames: ['id']
  })

  FOREIGN_KEY_POST_CITY = new TableForeignKey({
    name: 'post_city',
    columnNames: ['city_id'],
    referencedTableName: 'city',
    referencedColumnNames: ['id']
  })

  FOREIGN_KEY_POST_USER = new TableForeignKey({
    name: 'post_user',
    columnNames: ['user_id'],
    referencedTableName: 'user',
    referencedColumnNames: ['id']
  })

  // pet
  FOREIGN_KEY_PET_BREED = new TableForeignKey({
    name: 'pet_breed',
    columnNames: ['breed_id'],
    referencedTableName: 'breed',
    referencedColumnNames: ['id']
  })

  // user
  FOREIGN_KEY_USER_CITY = new TableForeignKey({
    name: 'user_city',
    columnNames: ['city_id'],
    referencedTableName: 'user',
    referencedColumnNames: ['id']
  })

  FOREIGN_KEY_USER_CONTACT = new TableForeignKey({
    name: 'user_contact',
    columnNames: ['contact_id'],
    referencedTableName: 'user',
    referencedColumnNames: ['id']
  })

  // wish
  FOREIGN_KEY_WISH_POST = new TableForeignKey({
    name: 'wish_post',
    columnNames: ['post_id'],
    referencedTableName: 'post',
    referencedColumnNames: ['id']
  })

  FOREIGN_KEY_WISH_USER = new TableForeignKey({
    name: 'wish_user',
    columnNames: ['user_id'],
    referencedTableName: 'user',
    referencedColumnNames: ['id']
  })

  // history
  FOREIGN_KEY_HISTORY_BREED = new TableForeignKey({
    name: 'history_breed',
    columnNames: ['breed_id'],
    referencedTableName: 'breed',
    referencedColumnNames: ['id']
  })

  async up(query: QueryRunner): Promise<void> {
    await query.query('create extension if not exists "uuid-ossp"')

    await query.createTable(this.TABLE_CITY)
    await query.createTable(this.TABLE_STATE)
    await query.createTable(this.TABLE_COUNTRY)

    await query.createTable(this.TABLE_POST)
    await query.createTable(this.TABLE_PET)
    await query.createTable(this.TABLE_BREED)

    await query.createTable(this.TABLE_USER)
    await query.createTable(this.TABLE_WISH)
    await query.createTable(this.TABLE_CONTACT)

    await query.createTable(this.TABLE_HISTORY)

    await query.createForeignKeys(this.TABLE_CITY, [
      this.FOREIGN_KEY_CITY_STATE
    ])

    await query.createForeignKeys(this.TABLE_STATE, [
      this.FOREIGN_KEY_STATE_COUNTRY
    ])

    await query.createForeignKeys(this.TABLE_POST, [
      this.FOREIGN_KEY_POST_PET,
      this.FOREIGN_KEY_POST_CITY,
      this.FOREIGN_KEY_POST_USER
    ])

    await query.createForeignKeys(this.TABLE_PET, [
      this.FOREIGN_KEY_PET_BREED
    ])

    await query.createForeignKeys(this.TABLE_USER, [
      this.FOREIGN_KEY_USER_CITY,
      this.FOREIGN_KEY_USER_CONTACT
    ])

    await query.createForeignKeys(this.TABLE_WISH, [
      this.FOREIGN_KEY_WISH_POST,
      this.FOREIGN_KEY_WISH_USER
    ])

    await query.createForeignKeys(this.TABLE_HISTORY, [
      this.FOREIGN_KEY_HISTORY_BREED
    ])
  }

  public async down(query: QueryRunner): Promise<void> {
    await query.dropForeignKeys(this.TABLE_CITY, [
      this.FOREIGN_KEY_CITY_STATE
    ])

    await query.dropForeignKeys(this.TABLE_STATE, [
      this.FOREIGN_KEY_STATE_COUNTRY
    ])

    await query.dropForeignKeys(this.TABLE_POST, [
      this.FOREIGN_KEY_POST_PET,
      this.FOREIGN_KEY_POST_CITY,
      this.FOREIGN_KEY_POST_USER
    ])

    await query.dropForeignKeys(this.TABLE_PET, [
      this.FOREIGN_KEY_PET_BREED
    ])

    await query.dropForeignKeys(this.TABLE_USER, [
      this.FOREIGN_KEY_USER_CITY,
      this.FOREIGN_KEY_USER_CONTACT
    ])

    await query.dropForeignKeys(this.TABLE_WISH, [
      this.FOREIGN_KEY_WISH_POST,
      this.FOREIGN_KEY_WISH_USER
    ])

    await query.dropForeignKeys(this.TABLE_HISTORY, [
      this.FOREIGN_KEY_HISTORY_BREED
    ])

    await query.dropTable(this.TABLE_CITY)
    await query.dropTable(this.TABLE_STATE)
    await query.dropTable(this.TABLE_COUNTRY)

    await query.dropTable(this.TABLE_POST)
    await query.dropTable(this.TABLE_PET)
    await query.dropTable(this.TABLE_BREED)

    await query.dropTable(this.TABLE_USER)
    await query.dropTable(this.TABLE_WISH)
    await query.dropTable(this.TABLE_CONTACT)

    await query.dropTable(this.TABLE_HISTORY)
  }
}
