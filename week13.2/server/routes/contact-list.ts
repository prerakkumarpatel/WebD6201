// Import the Express module
import express from 'express';

// Create an instance of the Router class from the Express module
const router = express.Router();

// Import various controller functions from the ../controllers module
import {
    DisplayAboutUsPage,
    DisplayContactPage,
    DisplayHomePage,
    DisplayProjectPage,
    DisplayServicesPage,
    ProcessContactPage
} from "../controllers";

/* ****************************** TOP LEVEL ROUTES *************************************** */

// Define a route  DisplayHomePage function
router.get('/', DisplayHomePage);

// Define a route  DisplayHomePage function
router.get('/home', DisplayHomePage);

// Define a route  DisplayAboutUsPage function
router.get('/about', DisplayAboutUsPage);

// Define a route DisplayProjectPage function
router.get('/projects', DisplayProjectPage);

// Define a route  DisplayServicesPage function
router.get('/services', DisplayServicesPage);

// Define a route  DisplayContactPage function
router.get('/contact', DisplayContactPage);

// Define a route  ProcessContactPage function
router.post('/contact', ProcessContactPage);

// Export the router object
export default router;
