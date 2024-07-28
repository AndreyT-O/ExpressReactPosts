import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    surname: faker.lorem.words(5),
    is_admin: faker.datatype.boolean(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.number.int(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    surname: faker.lorem.words(5),
    is_admin: faker.datatype.boolean(),
  };
}
export function fakePost() {
  return {
    title: faker.lorem.words(5),
    content: faker.lorem.words(5),
    published: faker.datatype.boolean(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.number.int(),
    title: faker.lorem.words(5),
    content: faker.lorem.words(5),
    published: faker.datatype.boolean(),
    userId: faker.number.int(),
  };
}
