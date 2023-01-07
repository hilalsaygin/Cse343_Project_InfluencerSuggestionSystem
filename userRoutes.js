const express = require("express");
const userController = require("./../controllers/userController");
const router = express.Router();

router.get("/hello", async (req, res) => {
  userController.hello(req, res);
});

router.get("/logout", async (req, res) => {
  userController.logout(req, res);
});

router.post("/register", async (req, res) => {
  userController.register(req, res);
});

router.post('/reset-password', (req, res) => userController.resetPassword(req, res));
router.post('/:userId/:token', (req, res) => userController.resetPasswordConfirm(req, res));

router.put("/update/favorites", async (req, res) => {
  userController.updateFavorites(req, res);
});

module.exports = router;

