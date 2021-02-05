const express = require('express');


const router = express.Router();
router.get('/',(req, res)=>{
    let obj = {
        title: 'Home',
        nome: req.query.nome,
        idade: req.query.idade,
        mostrar:true,
        ingredientes:[
        ],
        interesses:[
            'php',
            'node',
            'js',
            'css'
        ]
    };
res.render('home', obj);

});
router.get('/posts', (req, res)=>{
    let obj = {
        title:'Posts',
        post:
        [{titulo: 'Post01', conteudo: 'Este é um post sobre nada', id:'1', comentario:'Muito legal'},
        {titulo: 'Post02', conteudo: 'Este é um segundo post sobre nada também', id:'2', comentario:'Esse foi ruim'}]
    };
res.render('posts',obj);
});

router.get('/:id/post', (req, res)=>{
let obj = {
    
    id: req.params.id,
    comentario: req.query.coments,
    title: "Post "+req.params.id
}
    res.render('postId',obj);
});

module.exports = router;