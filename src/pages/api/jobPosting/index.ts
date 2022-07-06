import { salaryType, seniority, jobPostingType } from '@prisma/client';

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

function parseSalaryType(salaryString: String): salaryType {
  switch (salaryString.toLowerCase()) {
    case 'ars':
      return salaryType.ARS;
    case 'usd':
      return salaryType.USD;
    case 'both':
    default:
      return salaryType.BOTH;
  }
}

function parseJobPostingType(jobPostingTypeString: String): jobPostingType {
  switch (jobPostingTypeString.toLowerCase()) {
    case 'Remoto':
      return jobPostingType.REMOTE;
    case 'Presencial':
      return jobPostingType.OFFICE;
    case 'Hibrido':
    default:
      return jobPostingType.BOTH;
  }
}

const getMethod = async (req: any, res: any) => {
  try {
    const jobPostings = await prisma.jobPosting.findMany({
      include: {
        techs: {
          include: {
            tech: true,
          },
        },
        candidates: {
          include: {
            candidate: {
              include: {
                techs: true,
              },
            },
          },
        },
        timelines: true,
      },
    });
    return res.status(200).send(jobPostings);
  } catch (err: any) {
    return res.status(503).json({ err: err.toString() });
  }
};

const postMethod = async (req: any, res: any) => {
  const {
    user,
    title,
    description,
    requirements,
    commodities,
    usdMinSalary,
    usdMaxSalary,
    arsMinSalary,
    arsMaxSalary,
    vacaciones,
    seniority: jobPostingSeniority,
    salaryType: jobPostingSalaryType,
    jobPostingType: type,
    technologies,
    timeline,
  } = req.body;

  try {
    const techs = await Promise.all(
      technologies.map((techTitle: string) =>
        prisma.tech.upsert({
          where: {
            title: techTitle,
          },
          create: {
            title: techTitle,
          },
          update: {},
        })
      )
    );

    const jobPosting = await prisma.jobPosting.create({
      data: {
        title,
        description,
        requirements,
        commodities,
        usdMinSalary: parseInt(usdMinSalary, 10),
        usdMaxSalary: parseInt(usdMaxSalary, 10),
        arsMinSalary: parseInt(arsMinSalary, 10),
        arsMaxSalary: parseInt(arsMaxSalary, 10),
        authorId: user.id,
        vacaciones: parseInt(vacaciones, 10),
        seniority: parseSeniority(jobPostingSeniority),
        salaryType: parseSalaryType(jobPostingSalaryType),
        type: parseJobPostingType(type),
        techs: {
          createMany: {
            data: techs.map((tech) => ({ techId: tech.id })),
            skipDuplicates: true,
          },
        },
        timelines: {
          createMany: {
            data: timeline,
            skipDuplicates: true,
          },
        },
      },
    });

    return res.status(200).send(jobPosting);
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
        .json({ error: 'This request only supports DELETE and GET requests' });
  }
};

export default handler;
