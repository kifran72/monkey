const routes = (app: any, client: any) => {
    app.get('/get-accountInfo', async (req: any, res: any) => {
        res.send(await client.accountInfo());
    });

    app.get('/get-infos', async (req: any, res: any) => {
        res.send(await client.getInfo());
    });

    app.get('/get-prices', async (req: any, res: any) => {
        res.send(await client.prices());
    });

    // ALL OTHER ROUTES REDIRECT TO '/'
    app.get('*', function(req: any, res: any) {
        res.redirect('/');
    });
};

module.exports = routes
