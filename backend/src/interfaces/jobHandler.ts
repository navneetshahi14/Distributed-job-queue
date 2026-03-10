export interface JobHandler{
    handle(data:any): Promise<void>;
}