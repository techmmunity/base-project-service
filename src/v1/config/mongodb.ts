import type { MongodbConnectionOptions } from "@techmmunity/symbiosis-mongodb";
import { Connection } from "@techmmunity/symbiosis-mongodb";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const MongoDB = () =>
	SymbiosisModule.forRoot<MongodbConnectionOptions>({
		class: Connection,
		options: {
			entities: [],
			databaseConfig: {
				databaseName: "FormsAPI",
				url: process.env.DATABASE_URL,
			},
		},
	});
