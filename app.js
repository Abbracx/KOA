const Koa = require('koa');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');

const router = new KoaRouter();

const app = new Koa();


const things = ['My Family', 'Programming', 'Mathematics',
 'Food', 'Javascript', 'Goat',
 'Programming', 'Mathematics', 'Food', 'Javascript',]
// simple middleware
// app.use(async ctx => ctx.body = 'Hello world');
render(app, {
    root: path.join(__dirname, 'views'), // where the template engine should look for templates
    layout: 'layout',// wrapper for the every view
    viewExt: 'html',
    cache: false,
    debug: false
})

//Routes
router.get('/', index);
router.get('/showAdd', showAdd);
router.post('/register', register);
router.get ('/payfees', payfees);

//list of things
async function showAdd(ctx){
        await ctx.render('add');
}

// pay fees here
async function payfees(ctx){
    console.log('Pay fees here')
    await ctx.render('payfees', {message: 'wow! Added', status: "success"});
}

//add things
async function register(ctx){
    
    console.log(ctx);
    // console.log(body.matNum)
    // console.log(body.studentName)
    // console.log(body.password)
    //Takes care of writing to blockchain
    // if(!body == undefined){
    //     return ctx.redirect('/',
    //         {message: 'could not add...', status: "error"});
    // }
    // things.push(body);
    ctx.redirect('payfees');
}

//show Add... Page
async function index(ctx){
        await ctx.render('index', {
        title: 'Registration goes Here',
        things: things
    });
}


// Router Middleware
app.use(router.routes()).use(router.allowedMethods());
//body parser middleware
app.use(bodyParser());
app.listen(3000,() => console.log("ohk.. server listening at port 3000..."));
