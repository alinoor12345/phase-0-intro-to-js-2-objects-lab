// Write your solution in this file!
const employee = {
    name: "Ali", 
    streetAddress: "New York",
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    return{
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const deletedEmployee = {...obj};
    delete deletedEmployee[key];
    return deletedEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}