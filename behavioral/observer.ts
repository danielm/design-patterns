interface Observer {
  update(news: string): void;
}

// Our observer
class Subscriber implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(news: string) {
    console.log(`${this.name} received news: ${news}`);
  }
}

// Our subject
class NewsChannel {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);

    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  broadcastNews(news: string) {
    this.observers.forEach((observer) => observer.update(news));
  }
}

// Usage
const newsChannel = new NewsChannel();
const subscriber1 = new Subscriber("Alice");
const subscriber2 = new Subscriber("Bob");

newsChannel.subscribe(subscriber1);
newsChannel.subscribe(subscriber2);

newsChannel.broadcastNews(
  "Breaking news: A cat has been spotted wearing a hat!",
);
