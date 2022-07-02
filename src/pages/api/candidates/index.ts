import { prisma } from '@/core/db';
import { jobPostingType, nivelIngles, seniority, sexo } from '@prisma/client';

function parseSeniority(seniorityString: String): seniority {
  switch (seniorityString.toLowerCase()) {
    case "trainee":
      return seniority.TRAINEE
    case "junior":
      return seniority.JUNIOR
    case "senior":
      return seniority.SENIOR
    case "semisenior":
    default:
      return seniority.SEMISENIOR
  }
}

function parseSexo(sexoString: String): sexo {
  switch (sexoString.toLowerCase()) {
    case "masculino":
    case "m":
      return sexo.MASCULINO;
    case "femenino":
    case "f":
      return sexo.FEMENINO;
    default:
      return sexo.OTRO;
  }
}

function parseIngles(ingles: String): nivelIngles {
  switch (ingles.toLowerCase()) {
    case "principiante":
      return nivelIngles.PRINCIPIANTE;
    case "basico":
      return nivelIngles.BASICO;
    case "intermedio":
      return nivelIngles.INTERMEDIO;
    default:
      return nivelIngles.AVANZADO;
  }
}

function parseModalidad(modalidad: any): jobPostingType {
  switch (modalidad.toLowerCase()) {
    case "remote":
      return jobPostingType.REMOTE;
    case "office":
      return jobPostingType.OFFICE;
    default:
      return jobPostingType.BOTH;
  }
}

const getMethod = async (_: any, res: any) => {
  try {
    const candidates = await prisma.candidate.findMany();

    return res.status(200).json(candidates);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      return getMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This endpoint only supports GET requests' });
  }
};

export default handler;

