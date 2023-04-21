function insert_Row() {
    //Write your code here
  var row = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');

	td1.textContent = 'New cell1';
	td2.textContent = 'New cell2';

	var table = document.getElementById('sampleTable');
	table.appendChild(td1)
	table.appendChild(td2)

	row.appendChild(td1)
	row.appendChild(td2)

	row.appendChild(table)
  
}
