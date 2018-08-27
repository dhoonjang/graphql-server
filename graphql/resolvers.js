import { getPeople, getById, addPerson, deletePerson } from './db'

const resolvers = {
  Query: {
    people: (obj, args) => getPeople(),
    person: (obj, args) => getById(args)
  },
  Mutation: {
    addPerson: (_, {name, age, gender}) => addPerson(name, age, gender),
    deletePerson: (_, {id}) => deletePerson(id)
  }
};

export default resolvers
