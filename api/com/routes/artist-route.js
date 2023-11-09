import express from "express";
import * as artistController from './../controllers/artist-controller.js';

const router = express.Router();

//set different restful method for different hanlding function
router.route('/')
    .post(artistController.post)
    .get(artistController.index)
    .put(artistController.updateById)
    .delete(artistController.removeById);
router.route('/findById')
    .post(artistController.findById)
router.route('/update')
    .post(artistController.updateByCondition)
router.route('/findByName')
    .post(artistController.findByName)

export default router;