interface Animal {
  makeSound(): void;
}

class Cat implements Animal {
  makeSound() {
    console.log("Meow!");
  }
}

class Dog implements Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cow implements Animal {
  makeSound() {
    console.log("Moo!");
  }
}

class AnimalFactory {
  createAnimal(type: string): Animal {
    switch (type) {
      case "cat":
        return new Cat();
      case "dog":
        return new Dog();
      case "cow":
        return new Cow();
      default:
        throw new Error(
          "I'm not familiar with that animal. Maybe it's a unicorn?",
        );
    }
  }
}

// Usage
const animalFactory = new AnimalFactory();
const cat = animalFactory.createAnimal("cat");
cat.makeSound(); // Output: Meow!

const dog = animalFactory.createAnimal("dog");
dog.makeSound(); // Output: Woof!

const cow = animalFactory.createAnimal("cow");
cow.makeSound(); // Output: Moo!
