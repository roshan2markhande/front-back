
const userController = require('../controllers/user.controller');
module.exports=(app)=>{
    app.post('/create', userController.createUser);
}