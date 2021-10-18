# BASIC REQUIEREMENTS FOR CORRECT VISUALIZATION AND PERFORMING;

- execute, inside the main folder of this proyect (ToySerious), the command 'npm install'

- execute command "ng serve -o" for web visualization

- for modifications of the proyect, play with the different options of the command 'ng generate ?????', where ????? can be 'component', 'class', 'interface', 'service', etc.. And ending with the name of the chosen option



# HAVE IN MIND..;

- Navigation through different parts of the project via web is done via Router objects from Angular

- app-module is the main module of the entire project, there is specified imports and usage of external components inside node_modules, such as Angular's forms. Everything in node_modules is intalles with the previously mentioned command 'npm install'

- The main html file everything hangs on is 'index.html', from there you can observe how components are used with their caller tags

- There's an existing file called 'load-script.service.ts' at ToySerious/src/app/shared/services, this file is imported inside a few components' TypeScript (ts) file to use Javascript code inside the assets' folder (at the same level as the 'src' folder). This was done this way due to lack of knowledge of how to write the same code in the TypeScript programming language

- On the file called 'user.ts' (ToySerious/src/app/shared/classes/user.ts)


# ABOUT USE OF IMAGES

All images that can be found inside the project's assets/img folder are of totally free use (public domain), collected through Microsoft Bing web searcher along with specified license filter as 'public domain'




EVERYTHING BELOW THIS POINT WAS GENERATED BY DEFAULT UPON UPLOAD OF PROJECT FILES FROM ANGULAR CLI CONFIGURATION
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ToySerious

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
