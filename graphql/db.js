import mongoose from "mongoose";

const Person = mongoose.model("person",
  { id: Number,
    name: String,
    age: Number,
    gender: String
  });

export const getPeople = async () => {
  return await Person.find()
};

export const getById = async (args) => {
  return await Person.findOne({id: args.id})
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

export const addPerson = async (name, age, gender) => {
  return await new Person({
    id: people.length,
    name,
    age,
    gender
  }).save()
}
