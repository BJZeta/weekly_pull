const router = require("express").Router();
const comicController = require("../../controllers/comicController");

router.route("/")
  .get(comicController.findAllComics)
  .post(comicController.createComic);

router.route("/:id")
  .get(comicController.findComicById)
  .put(comicController.updateComic)
  .delete(comicController.removeComic);

module.exports = router;