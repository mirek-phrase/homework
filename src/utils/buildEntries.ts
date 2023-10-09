import fs from 'fs';
import {faker} from "@faker-js/faker";
import {Entry, Tag} from "../types.ts";

let entries = [];

// get 1-4 unique random tags
const getRandomTags = () => {
  const tags = Object.values(Tag);
  const randomTags: number[] = [];
  const numberOfTags = Math.floor(Math.random() * 4) + 1;
  for (let i = 0; i < numberOfTags; i++) {
    const tag = Math.floor(Math.random() * tags.length);
    if (!randomTags.includes(tag)) randomTags.push(tag);
  }
  return randomTags.map(tag => tags[tag]);
}

for (let i = 1; i < 1001; i++) {

  const entry: Entry = {
    id: i,
    createdAt: faker.date.past({years: 3, refDate: '2023-07-05T05:49:47.894Z' }),
    updatedAt: faker.date.recent({days: 30}),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    author: faker.person.fullName(),
    tags: getRandomTags(),
  }

  entries.push(entry);

}

entries.sort((a, b) => {
  return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
});

for (let i = 0; i < entries.length; i++) {
  entries[i].id = i + 1;
}

console.log("\n[Seeding entries...]");
console.log("\n[Entries seeded successfully]")


fs.writeFileSync('src/entries/entries.json', JSON.stringify(entries));
