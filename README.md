# JavaScript-challenge

![UFO](Images/nasa.jpg)

The data avaialble for this task is the eye-witness report of the extra-terrestrial sightings. This information is to be made available online. The collection of information is extensive and the objective is to locate specific reports online easily instead of searching through the extensive list.

The process involved writing the code that will create a table dynamically based on the dataset provided, that will allow the usrs to filter through the table data for specific values. The coding languages used for this is JavaScript, HTML, CSS, and D3.js on the web pages.

The process of creating a web page with different filters was done at two levels:

### Level 1: Automatic Table and Date Search

* The basic HTML page that was provided was used as a base for creating the tables with the filter functions.

* Using the UFO dataset provided in the form of an array of JavaScript objects, the code was written that appends a table to the web page and then adds new rows of data for each UFO sighting.

* The columns were made avaialble for `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* The date form was used in the HTML document and JavaScript code was written that will listen for events and search through the `date/time` column to find rows that match the user input.

### Level 2: Multiple Search Categories 

* The Level 1 criteria was used as a base for this level.

* Using multiple `input` tags and/or select dropdowns, JavaScript code was written so the user can set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape` 
