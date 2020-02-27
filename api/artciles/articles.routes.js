var article = require("./articles.controller");

module.exports = function(router){
    router.post('/create', article.createAritcle);
    router.get('/articles', article.getArticles);
    router.get('/article/:name', article.getByNameArticle);
    router.put('/update/:id', article.updateArticle);
    router.delete('/delete/:id', article.removeArticle)
    }