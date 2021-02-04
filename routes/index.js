const express = require('express');


const router = express.Router();
router.get('/',(req, res)=>{
    let nome = req.query.nome;
    if(nome){
        res.send('ola, '+nome);
    }else{
        res.send('Ola Mundo!');
    }
    
});
router.get('/posts', (req, res)=>{
    let post = req.query.post;
    if(post){
        res.send(post);
    }else{
        res.send('nenhum post encontrado');
    }
}),

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