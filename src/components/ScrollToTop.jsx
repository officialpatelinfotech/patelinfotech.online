import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useLayoutEffect(() => {
        // Force an instant jump even if global CSS uses `scroll-behavior: smooth`.
        const html = document.documentElement;
        const body = document.body;

        const prevHtmlBehavior = html.style.scrollBehavior;
        const prevBodyBehavior = body.style.scrollBehavior;

        html.style.scrollBehavior = "auto";
        body.style.scrollBehavior = "auto";

        // Some browsers still animate when `scroll-behavior: smooth` is set globally.
        // Setting scrollTop directly avoids that.
        html.scrollTop = 0;
        body.scrollTop = 0;
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });

        // Restore after the browser applies the scroll.
        const rafId = window.requestAnimationFrame(() => {
            html.style.scrollBehavior = prevHtmlBehavior;
            body.style.scrollBehavior = prevBodyBehavior;
        });

        return () => window.cancelAnimationFrame(rafId);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
