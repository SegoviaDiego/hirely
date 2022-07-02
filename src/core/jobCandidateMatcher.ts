import { Candidate, JobPosting } from "@prisma/client";

const WEIGHT = {
    TECHNOLOGY: 0.4,
    EXPERIENCE: 0.4,
    PERMANENCE: 0.2,

    WORK_FLEXIBILITY: 0.4,
    SALARY: 0.4,
    BENEFITS: 0.2
};

const HUNDRED_PERCENT = 100;

const CONSTANTS = {
    PERMANENCE_YEARS: 3,
    BENEFITS: 5
};

type JobPostingMatch = {
    candidate: Candidate
    matchPercent: number
    companyMatch: CompanyMatch
    candidateMatch: CandidateMatch
};

type CompanyMatch = {
    technologyPercent: number
    experiencePercent: number
    permanencePercent: number
    total: number
};

type CandidateMatch = {
    workFlexibilityPercent: number
    salaryPercent: number
    benefitsPercent: number
    total: number
};

function processMatch(jobPosting: JobPosting & { techs: JobPostingTech[] }, candidate: Candidate & { techs: CandidateTech[] }): JobPostingMatch {
    let companyMatch = {
        technologyPercent: calculateTechnologyMatch(jobPosting, candidate),
        experiencePercent: calculateExperienceMatch(jobPosting, candidate),
        permanencePercent: calculatePermanenceMatch(candidate),
        total: 0
    };
    companyMatch.total = calculateCompanyTotal(companyMatch.technologyPercent,
        companyMatch.experiencePercent,
        companyMatch.permanencePercent)

    let candidateMatch = {
        workFlexibilityPercent: calculateWorkFlexibilityMatch(jobPosting, candidate),
        salaryPercent: calculateSalaryMatch(jobPosting, candidate),
        benefitsPercent: calculateBenefitsMatch(jobPosting),
        total: 0
    };
    candidateMatch.total = calculateCandidateTotal(candidateMatch.workFlexibilityPercent,
        candidateMatch.salaryPercent,
        candidateMatch.benefitsPercent)

    return {
        candidate: candidate,
        matchPercent: (companyMatch.total + candidateMatch.total) / 2,
        companyMatch: companyMatch,
        candidateMatch: candidateMatch
    };
};

function seniorityToYears(seniorty: seniority): number {
    switch (seniorty) {
        case seniority.JUNIOR:
            return 2;
        case seniority.SEMISENIOR:
            return 5;
        case seniority.SENIOR:
            return 8;
        case seniority.TRAINEE:
        default:
            return 1;
    }
}

function modalityMatch(jobPostingModality: string, candidateModality: string): number {
    if (jobPostingModality == candidateModality) {
        return 1;
    } else if (jobPostingModality.toLowerCase() == "both" ||
        candidateModality.toLowerCase() == "both") {
        return 0.5;
    } else {
        return 0;
    }
}

function vacationMatch(vacation: number): number {
    if (vacation > 28) {
        return 1;
    }

    return vacation / 28
}

//************* COMPANY MATCH *************

//Tecnologias = (cant tecnologia candidato / cant tecnologia requerida)>100=1 * peso de tecnologia
function calculateTechnologyMatch(jobPosting: JobPosting & { techs: JobPostingTech[] }, candidate: Candidate & { techs: CandidateTech[] }): number {
    var percent = candidate.techs.length / jobPosting.techs.length;
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

//experiencia = (experiencia del candidato / experiencia requerida)>100=1 * peso de experiencia
function calculateExperienceMatch(jobPosting: JobPosting, candidate: Candidate): number {
    var percent = candidate.experience / seniorityToYears(jobPosting.seniority);
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

// permanencia = (promedio años trabajados / cantidad de años que pensamos(3 anios))>100=1 * peso rotacion
function calculatePermanenceMatch(candidate: Candidate): number {
    var percent = candidate.permanencia.toNumber() / CONSTANTS.PERMANENCE_YEARS;
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

function calculateCompanyTotal(techPercent: number, expPercent: number, permanencePercent: number): number {
    return techPercent * WEIGHT.TECHNOLOGY + expPercent * WEIGHT.EXPERIENCE + permanencePercent * WEIGHT.PERMANENCE;
}

//************* CANDIDATE MATCH *************

// flexibilidad laboral = ((vacaciones ofrecidas / vac preten o 28 dias)>100=1  * peso vacaciones + modalidad * peso modalidad) / 2
function calculateWorkFlexibilityMatch(jobPosting: JobPosting, candidate: Candidate): number {
    var percent = (vacationMatch(jobPosting.vacaciones) + modalityMatch(jobPosting.type, candidate.modalidad)) / 2
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

// salario = (salario ofrecido / salario pretendido)>100=1 * peso de salario
function calculateSalaryMatch(jobPosting: JobPosting, candidate: Candidate): number {
    var percent;
    if (jobPosting.salaryType == salaryType.ARS) {
        percent = jobPosting.arsMaxSalary.toNumber() / candidate.salary.toNumber()
    } else {
        percent = jobPosting.usdMaxSalary.toNumber() / candidate.salary.toNumber()
    }
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

// beneficios(*) = (cantidad de beneficios ofrecidos / lo que pensamos que va a ser buenos beneficios)>100=1 * peso beneficio
function calculateBenefitsMatch(jobPosting: JobPosting): number {
    var percent = jobPosting.commodities?.split(" ").length!! / CONSTANTS.BENEFITS
    if (percent > 1) percent = 1;
    return percent * HUNDRED_PERCENT
}

function calculateCandidateTotal(techPercent: number, expPercent: number, permanencePercent: number): number {
    return techPercent * WEIGHT.WORK_FLEXIBILITY + expPercent * WEIGHT.SALARY + permanencePercent * WEIGHT.BENEFITS;
}

//**********************************************************************************************************************************

export const matcher = function (jobPosting: JobPosting & { techs: JobPostingTech[] }, candidates: Array<Candidate & { techs: CandidateTech[] }>): Array<JobPostingMatch> {
    var recommendations: Array<JobPostingMatch> = [];
    candidates.forEach(candidate => {
        recommendations.push(processMatch(jobPosting, candidate));
    });
    return recommendations.sort((a, b) => b.matchPercent - a.matchPercent);
};

// ingles = (nivel de ingles de candidato / nivel de ingles requerido)>100=1 * peso de ingles
