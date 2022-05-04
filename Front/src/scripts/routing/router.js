class Router {

    /**
     * Display a listing of the resource.
     */
    router() {
        let view = routes[location.pathname];

        if (view) {
            document.title = view.title;
            app.innerHTML = view.render();
        } else {
            history.replaceState("", "", "/");
            router();
        }
    };
}

export default new Router();



// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);