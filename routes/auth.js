const router = require('express').Router();

router.post('/register', async(req, res) => {
    res.json({
        error: null,
        data: ''
    });
});

module.exports = router;