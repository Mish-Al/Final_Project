function errorHandling(err, req, res, next) {
    if (err) {
        let status = err.status || 500
        res.json({
            status,
            msg: "Oops, there was an error. Please try again"
        })
    }
    next()
}
module.exports = errorHandling