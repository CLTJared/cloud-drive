import { int, text, singlestoreTable } from
"drizzle-orm/singlestore-core";

export const files = singlestoreTable("files_table", {
  id: int("id", { mode: "int" }).primaryKey().autoincrement(),

})