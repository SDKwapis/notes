# Notes Application

## Overview
A simple Express.js web application for serving static content and providing API endpoints. This project was imported from GitHub and configured to run in the Replit environment.

## Project Structure
- `server.js` - Main Express server file
- `public/` - Static assets and HTML files
  - `index.html` - Main HTML page
  - `assets/` - CSS and JavaScript files
- `db/db.json` - Database file (currently empty)
- `package.json` - Node.js dependencies and scripts

## Recent Changes (October 28, 2025)
- Configured server to run on port 5000 (from port 4000) for Replit compatibility
- Updated server to bind to 0.0.0.0 instead of localhost for proper access in Replit
- Enabled CORS, JSON, and URL-encoded middleware
- Installed npm dependencies (express, cors, nodemon)
- Set up Server workflow with nodemon for automatic reloading
- Configured deployment settings for autoscale deployment

## Configuration
- **Port**: 5000 (configurable via PORT environment variable)
- **Host**: 0.0.0.0 for Replit compatibility
- **Development**: Uses nodemon for automatic server reloading

## Available Routes
- `/` - Root endpoint (redirects to /send)
- `/send` - Serves the main HTML page
- `/api` - Returns JSON data about API terminology

## Dependencies
- express: ^5.1.0
- cors: ^2.8.5
- nodemon: ^3.1.10 (development)

## Running the Application
The application runs automatically via the Server workflow using `npm start`, which executes `nodemon server.js`.
