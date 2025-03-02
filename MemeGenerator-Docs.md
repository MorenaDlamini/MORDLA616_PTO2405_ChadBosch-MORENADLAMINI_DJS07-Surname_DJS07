# Meme Generator

## Project Overview
This is a React-based Meme Generator application that allows users to create and customize memes by selecting images and adding text overlays.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation & Execution](#installation--execution)
- [Folder Structure](#folder-structure)
- [Approach to the Application](#approach-to-the-application)
- [How to Run the Application](#how-to-run-the-application)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Getting Started
To use this Meme Generator, clone the repository and follow the installation steps.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (Node Package Manager)

## Installation & Execution
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd MORDLA616_PTO2405_ChadBosch-MORENADLAMINI_DJS07-Surname_DJS07
   ```
2. Install dependencies:
   ```sh
   npm install  
   ```
3. Start the development server:
   ```sh
   npm run dev  
   ```

## Folder Structure
```
/MORDLA616_PTO2405_ChadBosch-MORENADLAMINI_DJS07-Surname_DJS07
│-- /src
│   │-- /components        # Reusable UI components
│   │-- /images            # Image and static assets
│   │-- /styles            # CSS styles
│   │-- App.js             # Main application entry point
│   │-- index.js           # Renders App component
│-- package.json           # Project dependencies and scripts
│-- README.md              # Project Objective
│-- MemeGenerator-Docs.md  # Project documentation
```

## Approach to the Application
- The application fetches meme images from an API or local storage.
- Users can add top and bottom text overlays to the selected meme.
- Application to work with full window and minimized window

## How to Run the Application
- The main entry point of the application is `index.js`, which renders the `App.js` component.
- Start the application using `npm run dev`.

## Features
- Select a meme template.
- Add and customize text overlays.
- Download the generated meme.

## Technologies Used
- React.js
- JavaScript (ES6+)
- CSS for styling

