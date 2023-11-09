import { set } from 'mongoose';
//import service functions from certain service file.
import {save, 
    get, 
    remove, 
    search, 
    update,
    findByParams,   
    updateByParams,findByName as findByNameService,findById as findByIdService} from '../services/artists-service.js';
import {setSuccessfulResponse,setErrorResponse} from "../util/util.js"

//call service that adding one new Artist object handle function
export const post = async (request, response) => {
    try {
        const newArtist = request.body;
        const savedArtist = await save(newArtist);
        setSuccessfulResponse(savedArtist,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//call service that get all existing Artists from database
export const index = async (request, response) => {
    try {
        const params = {};
        const Artists = await search(params);
        setSuccessfulResponse(Artists, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}

//call service that find one existing Artists from database by conditions
export const findByCondition = async (request, response) => {
    try {
        const params = request.body;
        const Artists = await findByParams(params);
        setSuccessfulResponse(Artists, response,200);
    } catch (err) {
        setErrorResponse(err, response,500);
    }
}

//call service that find one existing Artists from database by name
export const findByName = async (request, response) => {
    try {
        
        const params = request.body;
        const Artists = await findByNameService(params.key);
        //code 201 means we have created new resource
        setSuccessfulResponse(Artists,response,201);

    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}
//call service that find one Artists from database by id
export const findById = async (request, response) => {
    try {
     
        const id = request.body.id;
        const Artist = await findByIdService(id);

        //if the Artist from service is null, means cannot find the Artist in database, throw error.
        setSuccessfulResponse(Artist, response,200);
    } catch (err) {
        setErrorResponse("find error, please check the id", response,400);
    }
}

//call service that update one Artists in database by posting the new Artist object.
export const updateById = async (request, response) => {
    try {
        const id = request.body._id;
        const newArtist = request.body;
        validation(newArtist);
        const Artist = await update(id,newArtist);

        setSuccessfulResponse(Artist, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//call service that update one Artists in database by posting the new Artist object.
export const updateByCondition = async (request, response) => {
    try {
        const newArtist = request.body;
        const Artist = await updateByParams(newArtist);

        setSuccessfulResponse(Artist, response,200);
    } catch (err) {
        setErrorResponse(err.message, response,400);
    }
}

//call service that delete one Artists in database by id
export const removeById = async (request, response) => {
    try {
        const id = request.query._id;
        const Artist = await remove(id);
        //if the Artist from service is null, means cannot find the Artist in database, throw error.
        if(!Artist){
           throw new Error();
        }else{
            setSuccessfulResponse(Artist, response,200);
        }
        
    } catch (err) {
        setErrorResponse("deleted error, please check the id!", response,400);
    }
}