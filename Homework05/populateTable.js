// 
addDataRows = () => {
    dataSrv = new DataService();

    // get the data from the DataService
    data = dataSrv.getData();
    // log the results
    console.log(data);

    table = document.getElementById('myTable');
    // forEach loop to continuously call createRow
    data.forEach(rowData  => {
        createRow(table, rowData);
    });
}

createRow = (parentElem, rowData) => {
    // Add new row to the bottom of the table (-1)
    row = parentElem.insertRow(-1);

    // fill the cells with the data from dataService
    row.insertCell(0).innerHTML = rowData.name;
    row.insertCell(1).innerHTML = rowData.gender;
    row.insertCell(2).innerHTML = rowData.address;
    row.insertCell(3).innerHTML = rowData.age;
    row.insertCell(4).innerHTML = rowData.phoneNumber;
}