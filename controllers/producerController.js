const db = require('../db/db');
const producer = db.Producer;

function create(req, res) {
    producer.create(
        req.body
    )
        .then(result => {
            res.json(result.dataValues);
        })
        .catch(err => res.json(err));
}
function getAll(req, res){
    console.log( producer)
    producer.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
}
function get(req, res){
    producer.findAll({where: { id: req.params.id }})
        .then(result => {
            res.json(result[0]);
        })
        .catch(err => res.json(err));
}
function update(req, res) {
    producer.update( req.body, { where: { id: req.params.id } })
        .then(updated => {
            producer.findAll({where: { id: req.params.id}})
                .then(result => {
                    res.json(result[0]);
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
}
function deleteById(req, res) {
    producer.destroy({
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
