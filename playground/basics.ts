// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Maphanew';

let bool: boolean;

bool = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Sleeping'];

let person: { name: string, age: number };

person = {
    name: 'Maphanew',
    age: 32
}

let people: { name: string, age: number }[];

people = [ person ]

// Type inference

let course = '';

// course = 1;

let union: string | number = '';

union = 1;

// Type Alias

type Person = { name: string, age: number }

let Maphanew: Person;

let ManyMaphanew: Person[];
