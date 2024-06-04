import { Home } from "./scenes/home";
import { Login } from "./scenes/login";
import { Register } from "./scenes/register";
import { NotFound } from "./scenes/not-found";

export const routes = {
    public: [
        { path: "/home", scene: Home },
        { path: "/not-found", scene: NotFound}
    ],
    private: [
        { path: "/login", scene: Login },
        { path: "/register", scene: Register },
    ],
}