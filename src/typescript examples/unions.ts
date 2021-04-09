let maybeNumber: number | string = 5;
maybeNumber = "5";

interface Dog {
  bark: string;
}
interface Cat {
  purr: string;
}

type DogCat = Dog & Cat;

const doggo: DogCat = {
  bark: "WOOF",
  purr: "Nya!",
};
