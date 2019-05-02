# Sizzle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Purpose of application

The application allows users to view the ingredients required to create recipes from a wide variety of sources. 

## Screenshots

![Screenshot 2019-05-02 at 23 50 18](https://user-images.githubusercontent.com/43608290/57111775-56e42f80-6d35-11e9-896e-00e8aca439b1.png)
![Screenshot 2019-05-02 at 23 53 21](https://user-images.githubusercontent.com/43608290/57111826-8004c000-6d35-11e9-92a2-11620cb12370.png)
![Screenshot 2019-05-02 at 23 54 23](https://user-images.githubusercontent.com/43608290/57111874-a32f6f80-6d35-11e9-8aec-c6de071906c2.png)
![Screenshot 2019-05-03 at 00 00 29](https://user-images.githubusercontent.com/43608290/57112094-7e87c780-6d36-11e9-9775-e86f57919d6c.png)
![Screenshot 2019-05-03 at 00 00 05](https://user-images.githubusercontent.com/43608290/57112097-80ea2180-6d36-11e9-97ae-060832bcf52e.png)
![Screenshot 2019-05-02 at 23 55 27](https://user-images.githubusercontent.com/43608290/57112106-89daf300-6d36-11e9-817b-446e05345dbd.png)
![Screenshot 2019-05-02 at 23 56 08](https://user-images.githubusercontent.com/43608290/57112112-8e071080-6d36-11e9-8e85-133793a3c85a.png)
![Screenshot 2019-05-02 at 23 56 21](https://user-images.githubusercontent.com/43608290/57112118-92332e00-6d36-11e9-95bb-d07fcd6e1227.png)

## Screenshots – Dark mode


![Screenshot 2019-05-03 at 00 02 19](https://user-images.githubusercontent.com/43608290/57112211-f229d480-6d36-11e9-8d8e-0e3acc41c106.png)
![Screenshot 2019-05-03 at 00 02 39](https://user-images.githubusercontent.com/43608290/57112212-f2c26b00-6d36-11e9-9a73-7523aae5823f.png)
![Screenshot 2019-05-03 at 00 03 20](https://user-images.githubusercontent.com/43608290/57112214-f2c26b00-6d36-11e9-8dab-a80f105b09c0.png)


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
