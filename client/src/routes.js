import {
  ADMIN_ROUTES,
  LOGIN_ROUTES,
  MAIL_ROUTES,
  MESSAGE_ROUTES,
  REGISTRATION_ROUTES,
  USERPROFILE_ROUTES
} from "./utils/consts";
import AdminMenu from "./pages/AdminMenu";
import MailPage from "./pages/MailPage";
import Mail from "./pages/Mail";
import Auth from "./pages/Auth";
import userProfile from "./pages/UserProfile";

export const authRoutes = [
  {
    path: ADMIN_ROUTES,
    Component: AdminMenu
  },
  {
    path: MAIL_ROUTES,
    Component: Mail
  },
  {
    path: MESSAGE_ROUTES +'/:id',
    Component: MailPage
  },
  {
    path: USERPROFILE_ROUTES,
    Component: userProfile
  },
  {
    path: REGISTRATION_ROUTES,
    Component: Auth
  }
]
export const publicRoutes = [
  {
    path: LOGIN_ROUTES,
    Component: Auth
  }
]