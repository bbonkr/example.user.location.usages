export interface LocationHelper {
  getEndpoint(argument?: unknown): string;

  getLocation(): Promise<unknown>;

  getHelpDocument(): string;
}
