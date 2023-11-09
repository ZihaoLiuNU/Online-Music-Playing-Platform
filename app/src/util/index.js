import MyApi from "../api";

export const msToMinSec= (ms)=> {
    const minutes = Math.floor(ms / 60000); // 1 分钟 = 60,000 毫秒 
    const seconds = ((ms % 60000) / 1000).toFixed(0); // 取余得到秒数，toFixed(0) 取整数部分 
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`; // 格式化输出 
}

export const changeFavorite = (songs,track,setTracks) => {
    const id = track.id;
    let value;
    songs.forEach((song) => {
        if(song.id == id){
            value =  !song.favorite
            song.favorite = value;
        }
    });
    
    const body = {
                    "filte":{
                            "id":0, "track_id": id 
                    },
                    "update":{
                        "value":value
                    }
                };

    MyApi("POST", "playlists/favorite", body).then((res)=>{
        setTracks([...songs]);
    })   
    if(value){
        console.log("true!!!");
        delete track._id;
        MyApi("POST", "playlists/addItem", {"listId":0,"track":track}).then((res)=>{
            
        })
    }else{ console.log("false!!!")
        MyApi("POST", "playlists/removeItem", {"listId":0,"trackId":id}).then((res)=>{
            
        }) 
    }   
};