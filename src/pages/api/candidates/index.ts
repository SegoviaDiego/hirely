import { jobPostingType, nivelIngles, seniority, sexo } from '@prisma/client';

import { prisma } from '@/core/db';

function parseSeniority(seniorityString: String): seniority {
  switch (seniorityString.toLowerCase()) {
    case 'trainee':
      return seniority.TRAINEE;
    case 'junior':
      return seniority.JUNIOR;
    case 'senior':
      return seniority.SENIOR;
    case 'semisenior':
    default:
      return seniority.SEMISENIOR;
  }
}

function parseSexo(sexoString: String): sexo {
  switch (sexoString.toLowerCase()) {
    case 'masculino':
    case 'm':
      return sexo.MASCULINO;
    case 'femenino':
    case 'f':
      return sexo.FEMENINO;
    default:
      return sexo.OTRO;
  }
}

function parseIngles(ingles: String): nivelIngles {
  switch (ingles.toLowerCase()) {
    case 'principiante':
      return nivelIngles.PRINCIPIANTE;
    case 'basico':
      return nivelIngles.BASICO;
    case 'intermedio':
      return nivelIngles.INTERMEDIO;
    default:
      return nivelIngles.AVANZADO;
  }
}

function parseModalidad(modalidad: any): jobPostingType {
  switch (modalidad.toLowerCase()) {
    case 'remote':
      return jobPostingType.REMOTE;
    case 'office':
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

const postMethod = async (req: any, res: any) => {
  try {
    const {
      fullName,
      email,
      seniority: candidateSeniority,
      salary,
      education,
      experience,
      permanencia,
      perfilExterno,
      empresaActual,
      vacaciones,
      fecha_nac: fechaNacimiento,
      edad,
      sexo: candidateSexo,
      posicionActual,
      ingles,
      modalidad,
      tecnologies,
    } = req.body;

    const techs = await prisma.tech.findMany({
      where: {
        title: {
          in: tecnologies,
          mode: 'insensitive',
        },
      },
    });

    const candidate = await prisma.candidate.create({
      data: {
        fullName,
        email,
        seniority: parseSeniority(candidateSeniority),
        salary,
        education,
        experience: parseInt(experience, 10),
        permanencia,
        perfilExterno,
        empresaActual,
        vacaciones: parseInt(vacaciones, 10),
        fecha_nac: new Date(fechaNacimiento),
        edad: parseInt(edad, 10),
        sexo: parseSexo(candidateSexo),
        posicionActual,
        ingles: parseIngles(ingles),
        modalidad: parseModalidad(modalidad),
        techs: {
          createMany: {
            data: techs.map((tech) => ({
              techId: tech.id,
            })),
            skipDuplicates: true,
          },
        },
      },
    });

    return res.status(200).json(candidate);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const handler = async (req: any, res: any) => {
  switch (req.method) {
    case 'GET':
      return getMethod(req, res);
    case 'POST':
      return postMethod(req, res);
    default:
      return res
        .status(405)
        .json({ error: 'This endpoint only supports GET requests' });
  }
};

export default handler;
