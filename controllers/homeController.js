exports.index =(req, res)=>{
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

}