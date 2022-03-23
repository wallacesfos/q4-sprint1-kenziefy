export interface IGetUserRepository{
    findUsers() : Promise<any[]>
}