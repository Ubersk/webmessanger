import Admin from "./pages/Admin";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIL_ROUTE, MAILONE_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Mail from "./pages/Mail";
import MailOne from "./pages/MailOne";
import Auth from "./pages/Auth";

export const authRoutes =
    [
        {
            path:ADMIN_ROUTE,
            Component: Admin
        },

        {
            path:MAIL_ROUTE,
            Component: Mail
        },

        {
            path:MAILONE_ROUTE +'/:id',
            Component: MailOne
        },
        {
            path:REGISTRATION_ROUTE,
            Component: Auth
        }
    ]
export const publicRoutes =
    [
        {
            path:LOGIN_ROUTE,
            Component: Auth
        }
    ]