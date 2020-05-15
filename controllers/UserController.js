const db = require('../db/db');
const User = db.User;

function create(req, res) {
    User.create(
        req.body
    )
        .then(crete => {
            res.json({id: crete.dataValues.id});
        })
        .catch(err => res.json(err));
}
function getAll(req, res){
    console.log( User)
    User.findAll({ include:[db.Role]})
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err)
            res.json(err)});
}
function get(req, res){
    User.findAll({ include:[db.Role], where: { id: req.params.id }})
        .then(user => {
            res.json(user[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    User.update( req.body, { where: { id: req.params.id } })
        .then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json(err));
}

function login(req, res){
    User.findOne({include:[db.Role], where: { login: req.body.login, password: req.body.password }})
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json(err));
}
module.exports = {
    create,
    getAll,
    get,
    update,
    deleteById,
    login
};
