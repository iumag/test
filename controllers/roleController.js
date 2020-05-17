const db = require('../db/db');
const role = db.Role;

function create(req, res) {
    role.create(
        req.body
    )
        .then(result => {
            res.json(result.dataValues);
        })
        .catch(err => res.json(err));
}
function getAll(req, res){
    console.log( role)
    role.findAll()
        .then(role => {
            res.json(role);
        })
        .catch(err => res.json(err));
}
function get(req, res){
    role.findAll({where: { id: req.params.id }})
        .then(role => {
            res.json(role[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    role.update( req.body, { where: { id: req.params.id } })
        .then(updatedRole => {
            role.findAll({where: { id: req.params.id}})
                .then(role => {
                    res.json(role[0]);
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    role.destroy({
        where: { id: req.params.id }
    })
        .then(role => {
            res.json({status:'deleted'});
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
