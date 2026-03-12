export interface AuthStrategy {
  authentication(data: any): Promise<any>;
}
