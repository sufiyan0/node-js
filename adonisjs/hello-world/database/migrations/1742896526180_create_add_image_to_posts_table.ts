import { BaseSchema } from '@adonisjs/lucid/schema'

// export default class extends BaseSchema {
//   protected tableName = 'add_image_to_posts'

//   async up() {
//     this.schema.createTable(this.tableName, (table) => {
//       table.increments('id')

//       table.timestamp('created_at')
//       table.timestamp('updated_at')
//     })
//   }

//   async down() {
//     this.schema.dropTable(this.tableName)
//   }
// }

export default class AddImageToPosts extends BaseSchema {
  public async up() {
    this.schema.alterTable('posts', (table) => {
      table.string('image').nullable()  // Add image column
    })
  }

  public async down() {
    // this.schema.alterTable('posts', (table) => {
    //   table.dropColumn('image')
    // })
  }
}