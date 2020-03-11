interface Pizza {
  crust: string;
  sauce: string;
  toppings: string[];
}

class PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = {
      crust: "",
      sauce: "",
      toppings: [],
    };
  }

  setCrust(crust: string): PizzaBuilder {
    this.pizza.crust = crust;
    return this;
  }

  setSauce(sauce: string): PizzaBuilder {
    this.pizza.sauce = sauce;
    return this;
  }

  addTopping(topping: string): PizzaBuilder {
    this.pizza.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return this.pizza;
  }
}

// Usage
const pizzaBuilder = new PizzaBuilder();
const pizza = pizzaBuilder
  .setCrust("thick")
  .setSauce("marinara")
  .addTopping("pepperoni")
  .addTopping("mushrooms")
  .build();

console.log(pizza); // Output: { crust: 'thick', sauce: 'marinara', toppings: ['pepperoni', 'mushrooms'] }
