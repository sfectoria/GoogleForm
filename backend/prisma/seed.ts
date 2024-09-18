// prisma/seed.ts

import { PrismaClient} from '@prisma/client';
import * as bcrypt from 'bcrypt';
// import demandesData from './data';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt();
  const users = [
    {
      username: 'Ahmed',
      age: 30,
      email: 'ahmed.benali@gmail.com',
      avatar:
        'https://pbs.twimg.com/profile_images/1253008253786771456/QkRjhGEe_400x400.jpg',
    },
    {
      username: 'Fatima',
      age: 28,
      email: 'fatima.zahra@gmail.com',
      avatar:
        'https://www.leaders.com.tn/uploads/content/thumbnails/168871479345_content.jpg',
    },
    {
      username: 'Khaled',
      age: 35,
      email: 'khaled.boucetta@gmail.com',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOWMjbOxfzeH5HbXMLVKNryKtqlllNqvy4AQ&s',
    },
    {
      username: 'Leila',
      age: 24,
      email: 'leila.jebali@gmail.com',
      avatar:
        'https://www.francetvinfo.fr/pictures/-6IgzBNjeCOOMDAGaP8G3MpP5ko/1200x1200/2024/03/13/leila-bekhti-65f19d732657d766182997.jpg',
    },
    {
      username: 'Moez',
      age: 32,
      email: 'moez.khemiri@gmail.com',
      avatar:
        'https://realites.com.tn/fr/wp-content/uploads/2024/01/%D9%83%D8%AE%D8%AB%D8%B5-%D9%81%D8%AE%D8%B9%D9%83%D9%87.jpg',
    },
    {
      username: 'Nadia',
      age: 29,
      email: 'nadia.ben.slimane@gmail.com',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ux6VgCCkwYMYnNWLtfk0MPb6D0sDAHmUPQ&s',
    },
    {
      username: 'Omar',
      age: 27,
      email: 'omar.sghaier@gmail.com',
      avatar:
        'https://ktla.com/wp-content/uploads/sites/4/2024/05/OMAR-LEWIS-2024_HEADSHOTS-1280-X-720-e1714772309689.jpg?strip=1&w=640',
    },
    {
      username: 'Rania',
      age: 31,
      email: 'rania.cherif@gmail.com',
      avatar: 'https://example.com/avatar8.jpg',
    },
    {
      username: 'Sami',
      age: 26,
      email: 'sami.mahfoudh@gmail.com',
      avatar: 'https://example.com/avatar9.jpg',
    }]
  for (const user of users) {
    const hashPassword = await bcrypt.hash('123456', salt);
    await prisma.user.create({
      data: {
        username: user.username,
        age: user.age,
        email: user.email,
        password: hashPassword,
      },
    });
  }
   // Create a user for the document creator
   const creator = await prisma.user.create({
    data: {
      username: 'John_Doe',
      email: 'john@example.com',
      password: await bcrypt.hash('password', salt),
    },
  });
  // await prisma.document.create({
  //   data: {
  //     documentName: 'Sample Document',
  //     documentDescription: 'This is a sample document for testing purposes.',
  //     createdByUserID: creator.id,
  //     createdOn: new Date(),
  //     updatedOn: new Date(),
  //     questions: {
  //       create: [
  //         {
  //           question: 'What is your favorite color?',
  //           questionType: 'multiple-choice',
  //           open: false,
  //           required: true,
  //           points: 10,
  //           options: {
  //             create: [
  //               { option: 'Red' },
  //               { option: 'Blue' },
  //               { option: 'Green' },
  //               { option: 'Yellow' },
  //             ],
  //           },
  //         },
  //         {
  //           question: 'Please describe your experience with the product.',
  //           questionType: 'text',
  //           open: true,
  //           required: false,
  //           points: 0,
  //         },
  //       ],
  //     },
  //   },
  // });
  
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
