import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function findOrCreateOrganization(params) {
  const org = await prisma.organization.upsert({
    where: { url: params.url },
    update: {},
    create: { url: params.url, name: params.name },
  });
  return org;
}

async function createUser(params) {
  const org = await findOrCreateOrganization({
    url: params.organization,
    name: params.organization
  });

  const userParams = {
    email: params.email,
    full_name: params.full_name,
    password: params.password,
    phone: params.phone,
    organizationId: org.id
  };
  const result = await prisma.user.create({ data: userParams });
  return result;
}

async function getUsers(params) {
  const users = await prisma.user.findMany()
  return users;
};

export default async function handler(req, res) {
  const { method, body } = req;
  let result;

  switch (method) {
    case 'POST':
      result = await createUser(body);
      console.log('xxxx:  ', result);
      res.send(body);
      break;

    case 'GET':
      result = await getUsers(body)
      res.send(result);
      break;

    default:
      console.log('Err...');
      res.status(500).json({ name: 'John Doe' });
  }
}
