const express = require('express');


const router = express.Router();
router.get('/',(req, res)=>{
    let obj = {

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
        post:
        [{titulo: 'Post01', conteudo: 'Este é um post sobre nada'},
        {titulo: 'Post01', conteudo: 'Este é um segundo post sobre nada também'}]
    };
res.render('posts',obj);
});

router.get('/:id/post', (req, res)=>{
    let id = req.params.id;
    let coments = req.query.coments;
    if(coments){
        res.send('o post de id '+id+' tem este comentário: '+coments);
    }else{
        res.send('este post não tem comentários');
    }
})

module.exports = router;