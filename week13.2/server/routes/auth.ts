// login 2 route
// 2 register
// and logout

// roter.get('/login',displayloginpage);
// export default router;
import express from 'express';
import {
    DisplayLoginPage,
    DisplayRegisterPage,
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage
} from "../controllers/auth";
const router = express.Router();


/* ****************************** AUTHENTICATION ROUTES *************************************** */

/* Get display the login page */
router.get('/login', DisplayLoginPage);

/* Process the login request*/
router.post('/login', ProcessLoginPage);

/* Get display the register page */
router.get('/register', DisplayRegisterPage);

/* Process the register request */
router.post('/register', ProcessRegisterPage);

/* Process the logout request */
router.get('/logout', ProcessLogoutPage);



export default router;