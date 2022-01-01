const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []    
      },
  
    addDishToCourse: function(dishName, dishPrice, courseName) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);  
    },  
  
    getRandomDishFromCourse: function(courseName) {
      dishes = this._courses[courseName];
      const randx = Math.floor(Math.random() * dishes.length);
      return dishes[randx];
    },
  
    get appetizers() {
      return this._courses.appetizers;
    },
  
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
  
     get mains() {
       return this._courses.mains;
    },
  
    set mains(mains) {
      this._courses.mains = mains;
    },
  
     get desserts() {
       return this._courses.desserts;
    },
  
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
  
    get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        };
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      
      const totalPrice = appetizer.price + dessert.price + main.price;
      
      console.log(`Your order: `);
      console.log(`     ${appetizer.name}: £ ${appetizer.price}`);
      console.log(`     ${main.name}: £ ${main.price}`);
      console.log(`     ${dessert.name}: £ ${dessert.price}`);
      console.log('----------------------------------');
      console.log(`Total Price:         £ ${totalPrice}`);
      // console.log('Thank you for patronising us.')
      return 'Thank you for patronising us.';
    }  
  }
  
  menu.addDishToCourse('Caesar Salad', 1.25, 'appetizers');
  menu.addDishToCourse('Chicken Samosa', 1.50, 'appetizers');
  menu.addDishToCourse('Veggieball with Humuous', 2.00, 'appetizers');
  menu.addDishToCourse('Couscous', 4.00, 'mains');
  menu.addDishToCourse('Amala with Ewedu', 3.50, 'mains');
  menu.addDishToCourse('Jollof Rice', 3.50, 'mains');
  menu.addDishToCourse('Strawberry Souffle', 1.50, 'desserts');
  menu.addDishToCourse('Mingau', 2.00, 'desserts');
  menu.addDishToCourse('Fistik Halwa', 1.75, 'desserts');
  
  const myMeal = menu.generateRandomMeal();
  console.log(myMeal);