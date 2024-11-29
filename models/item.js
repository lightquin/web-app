// item.js

class Item {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description || '';
    }
}

// Example of creating an item
const exampleItem = new Item('Sample Item', 19.99, 'This is a sample item description.');

// Export the Item class or the example item
module.exports = Item; // or module.exports = exampleItem; if you want to export a specific instance
