import { banco_dados } from "../../db";
import { ICreatePlaylistRepositories } from "../ICreatePlaylistRepositories";

export class CreatePlaylistRepositories implements ICreatePlaylistRepositories{
    
    async save(playlist: any, id: string): Promise<void>{
        banco_dados.map((item: any) => {
            if(item.id === id){
                item.playlist = playlist;
            }
        });

        
    }
}