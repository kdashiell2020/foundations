import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function getOrganizations(params) {
  const orgs = await prisma.organization.findMany()
  return orgs;
};

export default async function handler(req, res) {
  const { method, body } = req;
  let result;

  switch (method) {
    case 'POST':
      break;

    case 'GET':
      result = await getOrganizations(body)
      res.send(result);
      break;

    default:
      console.log('Err...');
      res.status(500).json({ name: 'John Doe' });
  }
}
