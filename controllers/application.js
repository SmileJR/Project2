applicationController = {
    index: (req, res) => {
        // res.send(`hello world, this is from app index`)
        res.render('app/index')
    }
}

module.exports = applicationController