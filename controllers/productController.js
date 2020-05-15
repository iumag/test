const db = require('../db/db');
const product = db.Product;

function create(req, res) {
    product.create(
        req.body
    )
        .then(result => {
            res.json(result.dataValues);
        })
        .catch(err => res.json(err));
}
function getAll(req, res){
    console.log( product)
    product.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
}
function get(req, res){
    product.findAll({where: { id: req.params.id }})
        .then(result => {
            res.json(result[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    product.update( req.body, { where: { id: req.params.id } })
        .then(updated => {
            res.json(updated);
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    product.destroy({
        where: { id: req.params.id }
    })
        .then(result => {
            res.json(result);
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
