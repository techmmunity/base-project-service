import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HealthCheck, HealthCheckService } from "@nestjs/terminus";

import { ApiHealthIndicator } from "./health.indicator";

import { CONFIG } from "v1/config";

@ApiTags(`${CONFIG.version} - Health`)
@Controller(`${CONFIG.version}/health`)
export class HealthController {
	public constructor(
		private readonly health: HealthCheckService,
		private readonly api: ApiHealthIndicator,
	) {}

	@Get()
	@HealthCheck()
	public check() {
		return this.health.check([
			() => this.api.pingCheck(`api/${CONFIG.version}`),
		]);
	}
}
