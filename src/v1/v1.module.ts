import { Module } from "@nestjs/common";

import { API } from "./api";

import { MongoDB } from "./config/mongodb";

@Module({
	imports: [MongoDB(), ...API],
})
export class V1Module {}
