import { prisma } from '@/core/db';
import { salaryType, seniority, jobPostingType, JobPostingTech, Timeline } from '@prisma/client';

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
    case 'remote':
      return jobPostingType.REMOTE;
    case 'office':
      return jobPostingType.OFFICE;
    case 'both':
    default:
      return jobPostingType.BOTH;
  }
}

const handler = async (req: any, res: any) => {
  if (req.method === 'GET') {
    const jobPostings = await prisma.jobPosting.findMany({
      include: {
        techs: {
          include: {
            tech: true
          }
        },
        candidates: {
          include: {
            candidate: {
              include: {
                techs: true
              }
            }
          }
        },
        timelines: true
      }
    });
    return res.status(200).send(jobPostings);
  }
  if (req.method === 'POST') {
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
      seniority,
      salaryType,
      jobPostingType,
      technologies,
      timeline
    } = req.body;

    var jobPosting = await prisma.jobPosting.create({
      data: {
        title: title,
        description: description,
        requirements: requirements,
        commodities: commodities,
        usdMinSalary: parseInt(usdMinSalary),
        usdMaxSalary: parseInt(usdMaxSalary),
        arsMinSalary: parseInt(arsMinSalary),
        arsMaxSalary: parseInt(arsMaxSalary),
        authorId: user.id,
        vacaciones: parseInt(vacaciones),
        seniority: parseSeniority(seniority),
        salaryType: parseSalaryType(salaryType),
        type: parseJobPostingType(jobPostingType)
      }
    });

    const techs: Array<JobPostingTech> = []

    technologies.forEach(async (title: string) => {
      var tech = await prisma.tech.findFirst({
        where: {
          title: title
        }
      });
      if (!tech) {
        tech = await prisma.tech.create({
          data: {
            title: title
          }
        })
      }
      const jobPostingTech = await prisma.jobPostingTech.create({
        data: {
          jobPostingId: jobPosting.id,
          techId: tech.id
        }
      });
      techs.push(jobPostingTech)
    });

    timeline.forEach(async (time: Timeline) => {
      await prisma.timeline.create({
        data: {
          title: time.title,
          description: time.description,
          jobPostingId: jobPosting.id,
          candidateId: null
        }
      });
    });

    return res.status(200).send(jobPosting);
  }

  return res
    .status(405)
    .json({ error: 'This request only supports GET and POST requests' });
};

export default handler;
