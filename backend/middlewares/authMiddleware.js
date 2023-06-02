const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    try {
        const token = req.headers["auth-token"]
        if(!token) return res.status(403).send("Access Denied")

        const isExist = jwt.verify(token, process.env.SECRET)
        if(!isExist) return res.status(403).send("Access Denied")

        req.user = isExist
        next()
    }
    catch(err) {
        console.log(err)
        return res.status(500).send("Internal Server Error")
    }
}