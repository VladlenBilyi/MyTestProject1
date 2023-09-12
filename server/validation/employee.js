const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEmployeeInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.age = !isEmpty(data.age) ? data.age : '';
    data.salary = !isEmpty(data.salary) ? data.salary : '';

    if(Validator.isEmpty(data.name)) errors.name = 'name field required';

    if(Validator.isEmpty(data.age)) errors.age = 'age field required';

    if(Validator.isEmpty(data.salary)) errors.salary = 'salary field required';

    return {
        errors,
        isValid: isEmpty(errors)
    }
}