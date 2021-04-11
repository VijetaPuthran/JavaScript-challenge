// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(sightings) {
    var tbody = d3.select("tbody");
    sightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear the table for new data
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

// Select the button
var button = d3.select("#filter-btn");

// Select event handlers
button.on("click", runEnter);

// Complete the event handler function 
function runEnter(){
    //prevent the page from refreshing
    d3.event.preventDefault();
    deleteTbody();
// Select the input element and get the new HTML node
    var inputElement = d3.select("#datetime");

// Get the value property of the input element
    var inputValue = inputElement.property("value");
    //Displays all the data when there is no input value
    if (inputValue.trim()===""){
        var filteredData = tableData;
    }
    //Applying filter function for the entered date
    else {
        var filteredData = tableData.filter(ufo=>ufo.datetime===inputValue.trim());
    };
    //Displaying the message when there is no records found
    if (filteredData.length===0){
        d3.select("tbody").append("tr").append("td").attr("colspan",7).html("<h4>No Records Found</h4>");
    };

console.log(filteredData);
tableDisplay(filteredData);
};