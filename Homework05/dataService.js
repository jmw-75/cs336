 // Constructor and getData()
 class DataService {
    // Data with all the requested fields
    data = [{name: "John White", gender: "M", address: "1234 address St. SE", age: 39, phoneNumber: "911-911-9119"},
            {name: "Jim White", gender: "M", address: "12345 address St. SE", age: 40, phoneNumber: "119-911-9119"},
            {name: "Jack White", gender: "M", address: "123456 address St. SE", age: 41, phoneNumber: "191-911-9119"}];
 
    // Constructor that does absolutely nothing
    constructor() {};
    
    // If parameter is provided: return the whole array
    //    Otherwise: return the first numRecords of the data array using slice()
    getData(numRecords) {return (numRecords !== null ? this.data.slice(0, numRecords) : this.data);}

 }
