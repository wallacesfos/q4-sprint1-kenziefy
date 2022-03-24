import { banco_dados } from "../../db";
import { ICreatePlaylistRepositories } from "../ICreatePlaylistRepositories";

export class CreatePlaylistRepositories implements ICreatePlaylistRepositories{
    
    async save(playlist: any, id: string): Promise<void>{
        for(let i of Object.keys(playlist)){
            playlist[i].map((item: any) =>{
                item.listenedByMe = 0
            })
        }

        banco_dados.map((item: any) => {
            if(item.id === id){
                for(let i of Object.keys(playlist)){
                    if(item.playlist[i] === undefined){
                        item.playlist[i] = playlist[i];
                    }else{
                        item.playlist[i].push(playlist[i][0]);
                    }
                }
            }
        });
    }

    async delete(artist: string, song: string, id: string): Promise<void>{

        banco_dados.map((item: any) => {
            if(item.id === id){
                let newArr: any[] = []
                item.playlist[artist].map((item : any) => {
                    if(item.title !== song){
                        newArr.push(item)
                    }
                })

                item.playlist[artist] = newArr
            }
        })
    }


    async update(artist: string, song: string, id: string): Promise<void>{

        banco_dados.map((item: any) => {
            if(item.id === id){
                item.playlist[artist].map((item : any) => {
                    if(item.title === song){
                        item.listenedByMe += 1
                    }
                })
            }
        })
    }

    async findUsers(): Promise<any[]>{
        return banco_dados
    }
}