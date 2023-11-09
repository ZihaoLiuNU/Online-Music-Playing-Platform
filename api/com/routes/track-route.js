import express from "express";
import * as trackController from './../controllers/track-controller.js';

const router = express.Router();

//set different restful method for different hanlding function
router.route('/')
    .post(trackController.post)
    .get(trackController.index)
    .put(trackController.updateById)
    .delete(trackController.removeById);
router.route('/find')
    .post(trackController.findByCondition)
router.route('/findById')
    .post(trackController.findById)
router.route('/findByArt')
    .post(trackController.findByArt)
router.route('/findByAlbum')
    .post(trackController.findByAlbum)
router.route('/findByName')
    .post(trackController.findByName)
router.route('/update')
    .post(trackController.updateByCondition)

export default router;