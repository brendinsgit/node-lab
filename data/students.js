const students = [
    {name: 'Alex', age: 20, passed: true},
    {name: 'Jess', age: 21, passed: true},
    {name: 'Dude', age: 24, passed: false}
];

module.exports = {
    getAll: function() {
        return students;
    }
};