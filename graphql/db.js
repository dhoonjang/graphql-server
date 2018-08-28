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

export const getById = async (id) => {
  return await Person.findOne({ id })
};

export const addPerson = async (name, age, gender) => {
  let people = await Person.find();

  return await new Person({
    id: people.length,
    name,
    age,
    gender
  }).save()
};
