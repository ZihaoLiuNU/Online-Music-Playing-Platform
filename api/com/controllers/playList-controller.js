import { set } from 'mongoose';
//import service functions from certain service file.
import AsyncLock from 'async-lock';
import {save, 
    get, 
    remove, 
    search, 
    update,
    findByParams, findById as findByIdService,  findEx as findExService,init as initService,
    updateByParams,updateFavorite as updateFavoriteSerive,addItem as addItemSerive,removeItem as removeItemService,findCurList as findCurListSerive} from '../services/playList-service.js';

import {setSuccessfulResponse,setErrorResponse} from "../util/util.js"
//call service that adding one new PlayList object handle function
export const post = async (request, response) => {
    try {
        
        const newPlayList = request.body;
        const savedPlayList = await save(newPlayList);
        setSuccessfulResponse(savedPlayList,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//call service that get all existing PlayLists from database
export const index = async (request, response) => {
    try {
        const params = {};
        const PlayLists = await search(params);
        setSuccessfulResponse(PlayLists, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//call service that get all existing PlayLists except 0 and 1 which are saved from database
export const findEx = async (request, response) => {
    try {
        const PlayLists = await findExService();
        setSuccessfulResponse(PlayLists, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//call service that find one existing PlayLists from database by condition
export const findByCondition = async (request, response) => {
    try {
        const params = request.body;
        const PlayLists = await findByParams(params);
        setSuccessfulResponse(PlayLists, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//call service that find one PlayLists from database by id
export const find = async (request, response) => {
    try {
        const id = request.params.id;
        const PlayList = await get(id);

        //if the PlayList from service is null, means cannot find the PlayList in database, throw error.
        if(!PlayList){
            throw new Error();
        }else{
            setSuccessfulResponse(PlayList, response,200);
        }
    } catch (err) {
        setErrorResponse("find error, please check the id", response,400);
    }
}

//call service that update one PlayLists in database by posting the new PlayList object.
export const updateById = async (request, response) => {
    try {
        const id = request.body._id;
        const newPlayList = request.body;
        validation(newPlayList);
        const PlayList = await update(id,newPlayList);

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that update one PlayLists favorite in database by posting the new PlayList object.
export const updateFavorite = async (request, response) => {
    try {
        const newPlayList = request.body;
        const PlayList = await updateFavoriteSerive(newPlayList);

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that find one PlayLists from database by id
export const findById = async (request, response) => {
    try {
        
        const params = request.body;
        const PlayList = await findByIdService(params.id);
        //code 201 means we have created new resource
        setSuccessfulResponse(PlayList,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that add one in certain PlayLists in database
export const addItem = async (request, response) => {
    try {
        const newItem = request.body;
        const PlayList = await addItemSerive(newItem);

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//initiate the database with 0 and 1 playlists
export const init = async (request, response) => {
    try {

        const PlayList = await initService();

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//remove one certain track from item in certain playlist
export const removeItem = async (request, response) => {
    try {
        const item = request.body;
        const PlayList = await removeItemService(item);

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//find or add one track in current playlist and return the index of the track in this playlist
export const findCurList = async (request, response) => {
    try {
        const params = request.body;
        const lock = new AsyncLock();
        //lock the thread in case of dirty data.
        const PlayList = await lock.acquire('myKey',  function() {
            // 在此处编写需要同步执行的代码块
            const res = findCurListSerive(params);
            return res;
          });
        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that update one PlayLists in database by posting the new PlayList object.
export const updateByCondition = async (request, response) => {
    try {
        const newPlayList = request.body;
        const PlayList = await updateByParams(newPlayList);

        setSuccessfulResponse(PlayList, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that delete one PlayLists in database by id
export const removeById = async (request, response) => {
    try {
        const id = request.query._id;
        const PlayList = await remove(id);
        //if the PlayList from service is null, means cannot find the PlayList in database, throw error.
        if(!PlayList){
           throw new Error();
        }else{
            setSuccessfulResponse(PlayList, response,200);
        }
        
    } catch (err) {
        setErrorResponse("deleted error, please check the id!", response,400);
    }
}