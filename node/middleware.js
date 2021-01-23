module.exports = (req, res, next) => {
    if (true) {
        next();
    } else {
        return res.status(401).json({ 'msg': 'You are not authorized', 'result': "0" });
    }

}
// req.headers.authorization == "harsh"