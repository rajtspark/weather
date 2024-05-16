# WeatherForecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

This project is intended to show the weather forecast to users who want to see graphical representations of the weather forecast for two cities: Kansas and District of Columbia.

Apart from the basic Angular files and folders, this project contains three folders:

## Headers:
* This folder contains the header part of the page, which includes the title and two buttons.
* Clicking on the title navigates the user to the home page route '/', while clicking on the buttons navigates the user to the respective city's weather page, where they can see the weather forecast in a chart.
* This folder contains a component named "weather". The component uses an anchor tag with routerLink, which is imported from the router module.

## Weather:
* The Weather folder mainly contains the chart and error messages that users may receive in HTTP responses.
* The chart has been implemented using the chart.js package, representing temperature on various dates depending on the HTTP REST APIs response.
* Error messages are retrieved from the observable returned by the HTTP service named HttpService. In this service, API calls are made.

## Service:
* This folder contains an HttpService.ts file, which enables the weather component to make HTTP requests to the server to fetch data.
* This service returns an observable, which is subscribed to in the weather component's TypeScript file.

## Additional Modules and packages used 
   There are some Modules and Packages are being used in this project apart from defualt. these are following. 
   ### Chart.js 
   This package is used to create chart of the weather data. Line chart has been implemented using this chart. 
   ### Moment.js
   This package is used to format the data in a desired manner. The dates appearing at the bottom of the chart (on X-axis) is formatted using moment. 
   ### Common Module 
   This module is allowing to use angular's attribute directives and other angular features. 
   ### HttpClient Module 
   This module is being used to call the http request to the server for fetching data. This project has used its get method. 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
