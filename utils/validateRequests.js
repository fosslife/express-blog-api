const validateRequest = () => {
    return (req, res, next) => {
        console.log("middleware", req.body);
        next()
    }
}

module.exports = validateRequest
