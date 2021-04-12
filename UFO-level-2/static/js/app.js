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

    var filteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");
    
    // iterate through all the input values
    for (var i = 0; i < inputId.length; i++) {
      
      var idName = inputId[i].id;
      var field = d3.select("#" + idName).property("value");
      
      // Empty fields will search for all the values
      if (field.trim() !== "") {
        var filteredData = filteredData.filter(ufo => ufo[idName].toUpperCase().trim() === field.toUpperCase().trim());
      };
    };

    //Displaying the message when there is no records found
    if (filteredData.length===0){
        d3.select("tbody").append("tr").append("td").attr("colspan",7).html("<h4>No Records Found</h4>");
    };

console.log(filteredData);
tableDisplay(filteredData);
};
