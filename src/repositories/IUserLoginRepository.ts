export interface IUsersLoginRepository{
    login(username: string, password: string) : Promise<any>;
}