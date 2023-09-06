async function login(req, res) {
    res.render('login')
}

async function register(req, res) {
    res.render('register')
}

async function storeUser(req,res){
    let newUser = req.body
    console.log(newUser)
    res.redirect('/login')
}

const loginController = {
    register,
    storeUser,
    login
}

export default loginController