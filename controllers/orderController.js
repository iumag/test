const db = require('../db/db');
const Order = db.Order;

function create(req, res) {
    Order.create(
        req.body
    )
        .then(create => {
            res.json(create.dataValues);
        })
        .catch(err => res.json(err));
}

function get(req, res){
    Order.findOne({ include:[db.User], where: { id: req.params.id }})
        .then(order => {
            res.json(order);
        })
        .catch(err => res.json(err));
}

function update(req, res) {
    Order.update( req.body, { where: { id: req.params.id } })
        .then(updatedOrder => {
            Order.findOne({ include:[db.User], where: { id: req.params.id}})
                .then(order => {
                    res.json(order);
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
}


function deleteById(req, res) {
    Order.destroy({
        where: { id: req.params.id }
    })
        .then(order => {
            res.json({status:'deleted'});
        })
        .catch(err => res.json(err));
}

module.exports = {
    get,
    create,
    update,
    deleteById
}
