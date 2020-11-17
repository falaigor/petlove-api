import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createimages1605236638222 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [{
        name: 'id',
        type: 'integer',
        unsigned: true,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'path',
        type: 'varchar',
      },
      {
        name: 'ongs_id',
        type: 'integer',
      }
      ],
      foreignKeys: [
        {
          name: 'ImagesOngs',
          columnNames: ['ongs_id'],
          referencedTableName: 'ongs',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }

}
