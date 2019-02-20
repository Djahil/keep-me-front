import mock from "../data/employees.mock";

export const getEmployees = () => mock;

export const deleteEmployee = (employees, id) => employees.filter(index => index.id !== id);

export const editEmployee = id => {
    console.log('Editer l\'employee', id);
}

export const shareEmployee = id => {
    console.log('Partager l\'employee ', id);
}