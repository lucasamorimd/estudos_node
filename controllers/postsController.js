exports.posts = (req, res)=>{
    let obj = {
        userInfo: req.userInfo,
        title:'Posts',
        post:
        [{titulo: 'Post01', conteudo: 'Este é um post sobre nada', id:'1', comentario:'Muito legal'},
        {titulo: 'Post02', conteudo: 'Este é um segundo post sobre nada também', id:'2', comentario:'Esse foi ruim'}]
    };
res.render('posts',obj);
};
exports.postId = (req, res)=>{
    let obj = {
        userInfo: req.userInfo,
        id: req.params.id,
        comentario: req.query.coments,
        title: "Post "+req.params.id
    }
        res.render('postId',obj);
    };
const mongoose = require('mongoose');
const post = mongoose.model('Post');
exports.addPost = (req, res)=>{
    res.render('addPost');

};
exports.addAction = async(req, res)=>{
    const Post = new post(req.body);
    await Post.save();
    res.redirect('/');
    
}