var mongoose = require('mongoose');
var articlesSchema = require('./articles.model');

articlesSchema.statics = {
    create: function(data, cb){
        var article = new this(data);
        article.save(cb)
    },

    get: function(query, cb){
        this.find(query, cb)
    },

    getByName: function(query, cb){
        this.find(query, cb)
    },

    update: function(query, updateData, cb){
        this.findOnedeAndUpdate(query, {$set: updateData}, {new: true}, cb)
    },

    delete: function(query, cb){
        this.findOnedeAndDelete(query, cb)
    }
}
var ArticlesModel = mongoose.model('Articles', articlesSchema);
module.exports = ArticlesModel

