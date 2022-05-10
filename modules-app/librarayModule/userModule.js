/**
 * userModule.js
 * this library defines set of functionality
 * that prsents data about a user. i.e 
 * their name, location and dateOfBirth.
 */
const getName=()=>{
    return "luli";
};
const getLocation=()=>{
    return "Fairfield, Iowa, USA";

};
const dateOfBirth = new Date(1995,1,15);

exports.getName=getName;
exports.getLocation=getLocation;
exports.dob=dateOfBirth;