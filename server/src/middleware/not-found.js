const defaultMessage = 'Not found';

module.exports = (req, res) => {
    res.status(404);

    if(req.accepts('json')) {
        res.json({error: defaultMessage});
        return;
    }

    res.send(defaultMessage);
} 