import express from "express";
import * as playListController from './../controllers/playList-controller.js';

const router = express.Router();

//set different restful method for different hanlding function
router.route('/')
    .post(playListController.post)
    .get(playListController.index)
    .put(playListController.updateById)
    .delete(playListController.removeById);
router.route('/init')
    .get(playListController.init)
router.route('/find')
    .post(playListController.findByCondition)
router.route('/getPlayList')
    .get(playListController.findEx)
router.route('/update')
    .post(playListController.updateByCondition)
router.route('/favorite')
    .post(playListController.updateFavorite)
router.route('/addItem')
    .post(playListController.addItem)
router.route('/findCurList')
    .post(playListController.findCurList)
router.route('/findById')
    .post(playListController.findById)
router.route('/removeItem')
    .post(playListController.removeItem)
    

export default router;