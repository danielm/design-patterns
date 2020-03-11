interface SortingStrategy {
  sort(numbers: number[]): number[];
}

class BubbleSortStrategy implements SortingStrategy {
  sort(numbers: number[]): number[] {
    // Implementation of bubble sort
    return numbers;
  }
}

class QuickSortStrategy implements SortingStrategy {
  sort(numbers: number[]): number[] {
    // Implementation of quick sort
    return numbers;
  }
}

class Sorter {
  private strategy: SortingStrategy;

  constructor(strategy: SortingStrategy) {
    this.strategy = strategy;
  }

  sort(numbers: number[]): number[] {
    return this.strategy.sort(numbers);
  }
}

// Usage
const sorter = new Sorter(new BubbleSortStrategy());
const sortedNumbers1 = sorter.sort([3, 1, 4, 1, 5, 9]);

sorter.setStrategy(new QuickSortStrategy());
const sortedNumbers2 = sorter.sort([3, 1, 4, 1, 5, 9]);
