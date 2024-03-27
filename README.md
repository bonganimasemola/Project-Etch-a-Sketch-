# Project: Etch-a-Sketch Documentation

Introduction:

This documentation outlines the structure and functionality of a Dynamic Sketchpad game developed using vanilla JavaScript for logic and basic CSS for styling. The game offers a creative and interactive experience where users can draw on a pixelated grid, with features including grid resizing, color randomization, and progressive darkening of squares.

Project Overview:

The Dynamic Sketchpad game features a grid of square divs that users can interact with to create pixelated drawings. Users can dynamically change the grid size and enjoy a hover effect that changes the color of the squares, creating a unique drawing experience every time. The project focuses on DOM manipulation, Flexbox layout, and interactive JavaScript functionalities.

Project Structure:

* index.html: Contains the HTML structure, including the container div for the grid and a button for resizing the grid.
* style.css: Provides custom CSS for the project's layout, responsiveness, and styling of the grid container and squares. Flexbox is used to arrange the squares in a grid layout.
* index.js: This JavaScript file contains the project's logic and functionality. It handles dynamic grid generation, user interactions, and UI updates.

Installation and Usage:

To experience the Sketchpad locally, follow these steps:

1. Clone the project repository from GitHub or download the project files directly.
2. Open the index.html file in a web browser.
3. Interact with the grid to draw, and use the button to change the grid size as desired.

Project Logic:

The project's logic, implemented in index.js, encompasses several key functionalities:

* Dynamic Grid Generation: Uses JavaScript to create a grid of square divs inside the container div based on a specified size.
* Hover Effect Implementation: Adds event listeners to the squares for the hover effect, changing the square's color upon mouseover.
* Grid Resizing Feature: Includes a button that, when clicked, prompts the user for a new grid size. It validates the input and generates a new grid accordingly.
* Color Randomization and Progressive Darkening: Incorporates logic to randomize the colors of squares and progressively darken them upon multiple interactions.

CSS Flexbox Integration:

CSS Flexbox is utilized to style the sketchpad's layout, ensuring that the squares are displayed in a neat grid arrangement. It aids in maintaining the design responsive and organized, irrespective of the grid size.

Conclusion:

The Dynamic Sketchpad game project showcases the use of vanilla JavaScript for dynamic web page interaction and CSS Flexbox for responsive layout design. It offers users a fun and interactive platform to unleash their creativity through pixelated art, demonstrating the power and flexibility of modern web development techniques.