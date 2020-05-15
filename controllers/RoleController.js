const db = require('../db/db');
const role = db.Role;

function create(req, res) {
    role.create(
        req.body
    )
        .then(res => {
            res.json(res);
        })
        .catch(err => res.json(err));
}
function getAll(req, res){
    console.log( role)
    role.findAll()
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json(err));
}
function get(req, res){
    role.findAll({where: { id: req.params.id }})
        .then(user => {
            res.json(user[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    role.update( req.body, { where: { id: req.params.id } })
        .then(updatedUser => {
            res.json(updatedUser);
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    role.destroy({
        where: { id: req.params.id }
    })
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
    deleteById
};
