let people = [
  {
    id: 0,
    name: "donghoon",
    age: 20,
    gender: "male"
  },
  {
    id: 1,
    name: "gyuhwan",
    age: 20,
    gender: "male"
  },
  {
    id: 2,
    name: "jungho",
    age: 20,
    gender: "male"
  },
  {
    id: 3,
    name: "myunggyu",
    age: 20,
    gender: "male"
  }
];

export const getPeople = () => people;

export const getById = (id) => {
  const filteredPeople = people.filter(person => person.id === id);

  return filteredPeople[0]
};

export const deletePerson = (id) => {
  const cleanedPeople = people.filter(person => person.id !== id);

  if(people.length > cleanedPeople.length) {
    people = cleanedPeople;

    return true;
  } else {
    return false;
  }
};

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: people.length,
    name,
    age,
    gender
  };
  people.push(newPerson);
  return newPerson;
}
