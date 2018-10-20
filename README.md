# MSRCOSMOS - Demo Project

A Demo Library management Project based on MERN Stack for MSRCOSMOS

## Installation Instructions

1. In order to run the application, first clone this repository
2. Issue the command `npm run server-install` to install Server's node modules dependencies
3. Issue the command `npm run client-install` to install Client's node modules dependencies
4. Issue the command `npm run dev` to start the application
5. Visit the location http://localhost:3000 to run the application
6. Register a user using 'nirajkvinit@gmail.com' to get the admin account.
7. Other users can be registered using any other email address

## Assumptions

- Port 8080 and 3000 should be free
- Not maintaining Authors and Publishers records
- Catalog contains only books
- If you register an account with email address `nirajkvinit@gmail.com` that account will become super admin
- Later in the admin dashboard, the super admin will have the Capability to assign admin capabilities to other users
- Normal Registered User will only be able to browse the catalog. Late, more functionality can be added where they can checkout books and other catalog items
