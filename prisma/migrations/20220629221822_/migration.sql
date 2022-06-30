/*
  Warnings:

  - The primary key for the `Candidate` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Candidate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CandidateJobPosting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CandidateJobPosting` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `JobPosting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `JobPosting` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `JobPostingTech` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `JobPostingTech` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tech` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tech` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `empresaActual` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingles` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modalidad` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfilExterno` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permanencia` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacaciones` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `candidateId` on the `CandidateJobPosting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jobPostingId` on the `CandidateJobPosting` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jobPostingId` on the `JobPostingTech` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `techId` on the `JobPostingTech` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "nivelIngles" AS ENUM ('PRINCIPIANTE', 'BASICO', 'INTERMEDIO', 'AVANZADO');

-- DropForeignKey
ALTER TABLE "CandidateJobPosting" DROP CONSTRAINT "CandidateJobPosting_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateJobPosting" DROP CONSTRAINT "CandidateJobPosting_jobPostingId_fkey";

-- DropForeignKey
ALTER TABLE "JobPostingTech" DROP CONSTRAINT "JobPostingTech_jobPostingId_fkey";

-- DropForeignKey
ALTER TABLE "JobPostingTech" DROP CONSTRAINT "JobPostingTech_techId_fkey";

-- AlterTable
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_pkey",
ADD COLUMN     "empresaActual" TEXT NOT NULL,
ADD COLUMN     "ingles" "nivelIngles" NOT NULL,
ADD COLUMN     "modalidad" "jobPostingType" NOT NULL,
ADD COLUMN     "perfilExterno" TEXT NOT NULL,
ADD COLUMN     "permanencia" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "vacaciones" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CandidateJobPosting" DROP CONSTRAINT "CandidateJobPosting_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "candidateId",
ADD COLUMN     "candidateId" INTEGER NOT NULL,
DROP COLUMN "jobPostingId",
ADD COLUMN     "jobPostingId" INTEGER NOT NULL,
ADD CONSTRAINT "CandidateJobPosting_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "JobPosting" DROP CONSTRAINT "JobPosting_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "JobPosting_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "JobPostingTech" DROP CONSTRAINT "JobPostingTech_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "jobPostingId",
ADD COLUMN     "jobPostingId" INTEGER NOT NULL,
DROP COLUMN "techId",
ADD COLUMN     "techId" INTEGER NOT NULL,
ADD CONSTRAINT "JobPostingTech_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tech" DROP CONSTRAINT "Tech_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tech_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "CandidateTech" (
    "id" SERIAL NOT NULL,
    "candidateId" INTEGER NOT NULL,
    "techId" INTEGER NOT NULL,

    CONSTRAINT "CandidateTech_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CandidateTech_id_key" ON "CandidateTech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateTech_candidateId_techId_key" ON "CandidateTech"("candidateId", "techId");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_id_key" ON "Candidate"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateJobPosting_id_key" ON "CandidateJobPosting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CandidateJobPosting_jobPostingId_candidateId_key" ON "CandidateJobPosting"("jobPostingId", "candidateId");

-- CreateIndex
CREATE UNIQUE INDEX "JobPosting_id_key" ON "JobPosting"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostingTech_id_key" ON "JobPostingTech"("id");

-- CreateIndex
CREATE UNIQUE INDEX "JobPostingTech_jobPostingId_techId_key" ON "JobPostingTech"("jobPostingId", "techId");

-- CreateIndex
CREATE UNIQUE INDEX "Tech_id_key" ON "Tech"("id");

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
