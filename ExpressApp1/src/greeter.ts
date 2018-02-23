import { Person } from './Person/Contracts/PersonInterface';

/**
 * @param person
 */
export function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};