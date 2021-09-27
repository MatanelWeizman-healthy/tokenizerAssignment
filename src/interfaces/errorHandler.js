module.exports = (err, req, res, next) => {
    res.status(500).json({
        status:500,
        message: err.message,
        stack: err.stack,
    });
    process.exit(1);
};