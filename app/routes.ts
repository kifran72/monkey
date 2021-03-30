export const routes = (app: any, twing: any) => {
    app.get('/', function(req: any, res: any) {
        twing.render("index.twig", { name: "Titi" }).then((output: any) => {
            res.end(output);
        });
    });

    // ALL OTHER ROUTES REDIRECT TO '/'
    app.get('*', function(req: any, res: any) {
        res.redirect('/');
    });
};