const Router = require('koa-router');
const router = Router();


//export router
router.get('/', async(ctx) => {
    await ctx.render('mainpage', {         
        title: 'mainpage',         
        name: 'mainpage',         
        engine: 'ejs'     
    }) 
});
router.get('/about', async(ctx) => {
    ctx.body = 'About Me';
});

module.exports = router;