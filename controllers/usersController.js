exports.login = (req, res) => {
    let obj = {
        title: 'Login'
    }
    res.render('login', obj);
}
