exports.userMiddleware = (req, res, next) => {

    let info = {name: 'Lucas', id:'123'};
    req.userInfo = info;
    next();
}; 

exports.index =(req, res)=>{
    let obj = {
        title: 'Home',
        userInfo: req.userInfo,
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