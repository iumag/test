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
    product.findAll({ include:[db.Producer]})
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
}
function get(req, res){
    product.findAll({include:[db.Producer], where: { id: req.params.id }})
        .then(result => {
            res.json(result[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    product.update( req.body, { where: { id: req.params.id } })
        .then(updated => {
            product.findAll({include:[db.Producer], where: { id: req.params.id }})
                .then(result => {
                    res.json(result[0]);
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    product.destroy({
        where: { id: req.params.id }
    })
        .then(result => {
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
