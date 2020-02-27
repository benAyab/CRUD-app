var Article = require('./articles.dao')

exports.createAritcle = function(req, res){
    art = {
        name: req.body.name,
        quantite: req.body.quantite,
        prix: req.body.prix,
        vendeur: req.body.vendeur,
        description: req.body.description,
    }
    Article.create(art, function(err, art){
        if(err){
            res.json({error: err})
        }
        res.json({message: "article ajoute avec succes !"})
    })
}

exports.getArticles = function(req, res, next){
       Article.get({}, function(err, art){
           if(err){
               res.json({error: err})
           }
           res.json({message: art})
       }) 
}

exports.getByNameArticle = function(req, res, next){
    Article.getByName({name: req.params.name}, function(err, art){
        if(err){
            res.json({error: err})
        }
        res.json({message: art})
    })
}

exports.removeArticle = function(req, res, next){
    Article.delete({_id: req.params.id}, function(err, art){
        if(err){
            res.json({err: err})
        }
        res.json({message: 'article suprime avec succes'})
    })
}

exports.updateArticle = function(req, res, next){
    let article = {
                name: req.params.name,
                prix: req.params.price
            }
    Article.update({_id: req.params.id}, article, function(err, article){
        if(err)
            res.json({err: err});

        res.json({message: 'Mise a jour effectue avec succes !'})
    })
}