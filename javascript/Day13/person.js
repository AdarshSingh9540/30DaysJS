
export const person = {
    name: 'Adarsh Singh',
    age: 22,
    greet() {
        return `Hello, my name is ${this.name}!`;
    },

    celebrateBirthday() {
        this.age += 1;
        return `Happy Birthday ${this.name}! You are now ${this.age} years old.`;
    }
};

