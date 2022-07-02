-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "jobPostingType" AS ENUM ('REMOTE', 'OFFICE', 'BOTH');

-- CreateEnum
CREATE TYPE "seniority" AS ENUM ('TRAINEE', 'JUNIOR', 'SEMISENIOR', 'SENIOR');

-- CreateEnum
CREATE TYPE "salaryType" AS ENUM ('ARS', 'USD', 'BOTH');

-- CreateEnum
CREATE TYPE "nivelIngles" AS ENUM ('PRINCIPIANTE', 'BASICO', 'INTERMEDIO', 'AVANZADO');

-- CreateEnum
CREATE TYPE "sexo" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "profilePictureURL" TEXT,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "requirements" TEXT,
    "commodities" TEXT,
    "usdMinSalary" DECIMAL(65,30) NOT NULL,
    "usdMaxSalary" DECIMAL(65,30) NOT NULL,
    "arsMinSalary" DECIMAL(65,30) NOT NULL,
    "arsMaxSalary" DECIMAL(65,30) NOT NULL,
    "authorId" INTEGER NOT NULL,
    "vacaciones" INTEGER NOT NULL,
    "seniority" "seniority" NOT NULL,
    "salaryType" "salaryType" NOT NULL,
    "type" "jobPostingType" NOT NULL,

    CONSTRAINT "JobPosting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobPostingTech" (
    "id" SERIAL NOT NULL,
    "jobPostingId" INTEGER NOT NULL,
    "techId" INTEGER NOT NULL,

    CONSTRAINT "JobPostingTech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateTech" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "techId" INTEGER NOT NULL,

    CONSTRAINT "CandidateTech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tech" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Tech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePictureURL" TEXT NOT NULL,
    "seniority" "seniority" NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "education" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "permanencia" DECIMAL(65,30) NOT NULL,
    "perfilExterno" TEXT NOT NULL,
    "empresaActual" TEXT NOT NULL,
    "vacaciones" INTEGER NOT NULL,
    "fecha_nac" TIMESTAMP(3) NOT NULL,
    "edad" INTEGER NOT NULL,
    "sexo" "sexo" NOT NULL,
    "posicionActual" TEXT NOT NULL,
    "ingles" "nivelIngles" NOT NULL,
    "modalidad" "jobPostingType" NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateJobPosting" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "jobPostingId" INTEGER NOT NULL,
    "instanceKanban" INTEGER NOT NULL,
    "timelineId" INTEGER NOT NULL,

    CONSTRAINT "CandidateJobPosting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "endDate" TIMESTAMP(3),
    "jobPostingId" INTEGER NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "JobPosting_id_key" ON "JobPosting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostingTech_id_key" ON "JobPostingTech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostingTech_jobPostingId_techId_key" ON "JobPostingTech"("jobPostingId", "techId");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateTech_id_key" ON "CandidateTech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateTech_candidateId_techId_key" ON "CandidateTech"("candidateId", "techId");

-- CreateIndex
CREATE UNIQUE INDEX "Tech_id_key" ON "Tech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tech_title_key" ON "Tech"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_id_key" ON "Candidate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_key" ON "Candidate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateJobPosting_id_key" ON "CandidateJobPosting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateJobPosting_jobPostingId_candidateId_key" ON "CandidateJobPosting"("jobPostingId", "candidateId");

-- CreateIndex
CREATE UNIQUE INDEX "Timeline_id_key" ON "Timeline"("id");

-- AddForeignKey
ALTER TABLE "JobPosting" ADD CONSTRAINT "JobPosting_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPostingTech" ADD CONSTRAINT "JobPostingTech_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobPostingTech" ADD CONSTRAINT "JobPostingTech_techId_fkey" FOREIGN KEY ("techId") REFERENCES "Tech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateTech" ADD CONSTRAINT "CandidateTech_techId_fkey" FOREIGN KEY ("techId") REFERENCES "Tech"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateTech" ADD CONSTRAINT "CandidateTech_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateJobPosting" ADD CONSTRAINT "CandidateJobPosting_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateJobPosting" ADD CONSTRAINT "CandidateJobPosting_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateJobPosting" ADD CONSTRAINT "CandidateJobPosting_timelineId_fkey" FOREIGN KEY ("timelineId") REFERENCES "Timeline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timeline" ADD CONSTRAINT "Timeline_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
