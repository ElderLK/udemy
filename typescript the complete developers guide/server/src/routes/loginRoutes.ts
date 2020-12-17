import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: {
        [key: string] : string | undefined
    }
}

function requireAuth(req: Request, resp: Response, next: NextFunction) {
    if(req.session && req.session.loggedIn) {
        next();
        return;
    }
    resp.status(403);
    resp.send('Not permitted');
}

const router = Router();

router.get('/login', (req, res) => {
    res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email"/>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password"/>
            </div>
            <button>Submit</button>
        </form> 
    `)
})

router.post('/login', (req: RequestWithBody, res) => {
    const { email, password } = req.body;

    if(email && password) {
        // login and redirect
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send("Invalid email or password");
    }
})

router.get('/', (req, res) => {
    if(req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>
                    You are logged in
                </div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>
                    You are not logged in
                </div>
                <a href="/login">Login</a>
            </div>
        `)
    }
})

router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
});

router.get('/protect', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in user')
})


export { router };