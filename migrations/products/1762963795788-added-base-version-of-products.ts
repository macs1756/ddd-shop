import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddedBaseVersionOfProducts1762963305687
  implements MigrationInterface
{
  name = 'AddedBaseVersionOfProducts1762963305687';

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`
        CREATE TABLE "products" (
          "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "title" character varying NOT NULL,
          "quantity" integer NOT NULL,
          CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")
        )
      `);
    } catch (error) {
      console.error('Error running migration UP:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`DROP TABLE "products"`);
    } catch (error) {
      console.error('Error running migration DOWN:', error);
      throw error;
    }
  }
}
