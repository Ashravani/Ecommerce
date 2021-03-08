const item = require('../models/item');

module.exports.get_items = (req,res) => {
    item.find().sort({date:-1}).then(items => res.json(items));
}

module.exports.post_item = (req,res) => {
    const newitem = new item(req.body);
    newitem.save().then(item => res.json(item));
}

module.exports.update_item = (req,res) => {
    Item.findByIdAndUpdate({_id: req.params.id},req.body).then(function(item){
        Item.findOne({_id: req.params.id}).then(function(item){
            res.json(item);
        });
    });
}

module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    });
}