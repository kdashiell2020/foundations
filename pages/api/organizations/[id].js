import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handle(req, res) {
  const orgId = req.query.id

  if (req.method === 'GET') {
    handleGET(orgId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/organization/:id
async function handleGET(orgId, res) {
  const organization = await prisma.organization.findUnique({
    where: { id: parseInt(orgId) },
  })
  res.json(organization)
}