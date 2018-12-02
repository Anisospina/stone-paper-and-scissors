const defaultMessage = 'Not found';

export default (req, res) => {
    res.status(404);

    if(req.accepts('json')) {
        res.json({error: defaultMessage});
        return;
    }

    res.send(defaultMessage);
};