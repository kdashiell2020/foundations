import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// const handleGet = () => {}

// Use Prisma Client to send queries to your database
export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      const org = await prisma.organization.create({
        data: {
          url: body.organization,
          name: body.organization,
        },
      });

      body.organization = org;

      const result = await prisma.user.create({
        data: {
          ...body,
        },
      });
      console.log('xxxx:  ', result);
      res.send(body);
      break;

    case 'GET':
      res.send('got me');
      break;

    default:
      console.log('Err...');
      res.status(500).json({ name: 'John Doe' });
  }
}
