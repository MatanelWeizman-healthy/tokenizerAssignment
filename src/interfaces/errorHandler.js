module.exports = (err, req, res, next) => {
    res.json({
        name: err.name,
        message: err.message,
    });
};