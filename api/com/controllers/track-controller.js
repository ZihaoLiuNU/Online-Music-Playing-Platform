import { set } from 'mongoose';
//import service functions from certain service file.
import {setSuccessfulResponse,setErrorResponse} from "../util/util.js"
import {save, 
    get, 
    remove, 
    search, 
    update,
    findByParams,findByArt as findByArtService,findByAlbum as findByAlbumService,
    updateByParams,findById as findByIdService,findByName as findByNameService } from '../services/track-service.js';

//call service that adding one new Track object handle function
export const post = async (request, response) => {
    try {
        
        const newTrack = request.body;
        const savedTrack = await save(newTrack);
        //code 201 means we have created new resource
        setSuccessfulResponse(savedTrack,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that adding one new Track object handle function
export const findById = async (request, response) => {
    try {
        
        const params = request.body;
        const track = await findByIdService(params.id);
        //code 201 means we have created new resource
        setSuccessfulResponse(track,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//find one track from database by name
export const findByName = async (request, response) => {
    try {
        
        const params = request.body;
        const track = await findByNameService(params.key);
        //code 201 means we have created new resource
        setSuccessfulResponse(track,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that get all existing Tracks from database
export const index = async (request, response) => {
    try {
        const params = {};
        const Tracks = await search(params);
        setSuccessfulResponse(Tracks, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//call service that find one existing Tracks from database by conditions
export const findByCondition = async (request, response) => {
    try {
        const params = request.body;
        const Tracks = await findByParams(params);
        setSuccessfulResponse(Tracks, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//find tracks by arytists id.
export const findByArt = async (request, response) => {
    try {
        const params = request.body;
        const Tracks = await findByArtService(params);
        setSuccessfulResponse(Tracks, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}
//find tracks by Albums id.
export const findByAlbum = async (request, response) => {
    try {
        const params = request.body;
        const Tracks = await findByAlbumService(params);
        setSuccessfulResponse(Tracks, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}

//call service that find one Tracks from database by id
export const find = async (request, response) => {
    try {
        const id = request.params.id;
        const Track = await get(id);

        //if the Track from service is null, means cannot find the Track in database, throw error.
        if(!Track){
            throw new Error();
        }else{
            setSuccessfulResponse(Track, response,200);
        }
    } catch (err) {
        setErrorResponse("find error, please check the id", response,400);
    }
}

//call service that update one Tracks in database by posting the new Track object.
export const updateById = async (request, response) => {
    try {
        const id = request.body._id;
        const newTrack = request.body;
        const Track = await update(id,newTrack);

        setSuccessfulResponse(Track, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//call service that update one Tracks in database by posting the new Track object.
export const updateByCondition = async (request, response) => {
    try {
        const newTrack = request.body;
        const Track = await updateByParams(newTrack);

        setSuccessfulResponse(Track, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that delete one Tracks in database by id
export const removeById = async (request, response) => {
    try {
        const id = request.query._id;
        const Track = await remove(id);
        //if the Track from service is null, means cannot find the Track in database, throw error.
        if(!Track){
           throw new Error();
        }else{
            setSuccessfulResponse(Track, response,200);
        }
        
    } catch (err) {
        setErrorResponse("deleted error, please check the id!", response,400);
    }
}
