Example:
https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f

1
chmod u+x ./src/scripts/start-db.sh
inside start-db.sh (because I already had 5432 taken locally):
  -p 5555:5432 \


2
inside .env:
POSTGRES_PORT=5555


3
comment out inside src/config/config.service.ts:

    //   cli: {
    //     migrationsDir: 'src/migration',
    //   },


4
Don't need:
src/scripts/write-type-orm-config.ts
Don't need in package.json:
"pretypeorm": "(rm ormconfig.json || :) && ts-node -r tsconfig-paths/register src/scripts/write-type-orm-config.ts",
Need in package.json:
"typeorm:migration:generate": "npm run typeorm -- migration:generate -d ormconfig.ts src/migrations/migration",
"typeorm:migration:run": "npm run typeorm -- migration:run -d ormconfig.ts",

So command is:
npm run typeorm:migration:generate


DTO part (missing User in example) - STOP!!!



