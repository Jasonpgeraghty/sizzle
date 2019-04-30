# Sizzle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Purpose of application

The application allows users to view the ingredients required to create recipes from a wide variety of sources. 

## Features

1. View recipes categorised by meal type (.e.g. starter, main course, dessert)

2. View recipe for a particular country, this can be achieved by getting coordinates and then sending the coordinates to a 3rd party API to retrieve the country the user is in, or by allowing the user to choose from a dropdown menu.

3. View a recipe based on an ingredient that the recipe contains.

4. Search for a recipe.

5. Favourite a recipe, favourited recipes are stored in localstorage and don't need to call the API to retrieve.

6. Change language to either french or english. This feature can be accessed from the settings page, which is located in the top right corner of the home page.

7. Change the theme to dark mode in settings.

8. Store last query made to API in localstorage to avoid unnecessary API calls, manage state and increase performance.

9. Can be added to home screen, as it contains a web manifest file and a compat script.

10. Custom made icons for home page boxes.

## Mistakes

Angular generates SASS files instead of SCSS files when creating components. These had to be changed to SCSS files.

Repeatedly forgot to add skipTests flags, when generating components and services.

Information being passed through URL and into query needed to be sanitised of characters that could break the link.

Bug causing content not to load if localstorage value was undefined, instead of an object on category.
