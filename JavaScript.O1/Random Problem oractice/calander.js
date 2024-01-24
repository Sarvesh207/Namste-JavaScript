<div class="container">

<h1>Calendar</h1>

<div class="controls">

<select id="month">

<option value="0">January</option>

<option value="1">February</option>

<option value="2">March</option>

<option value="3">April</option>

<option value="4">May</option>

<option value="5">June</option>

<option value="6">July</option>

<option value="7">August</option>

<option value="8">September</option>

<option value="9">October</option>

<option value="10">November</option>

<option value="11">December</option>

</select>

<input type="number" id="year" placeholder="Enter Year">

<input type="text" id="date" placeholder="Enter Any Date">

</div>

<div id="calendar"></div>

</div>

var currentDate = new Date();

var currentYear = currentDate.getFullYear();

var currentMonth = currentDate.getMonth();

// Populate year dropdown

var yearDropdown = $('#year');

for (var i = currentYear - 10; i <= currentYear + 10; i++) {

yearDropdown.append($('<option>', {

value: i,

text: i

}));

}
