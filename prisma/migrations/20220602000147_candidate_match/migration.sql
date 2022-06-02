/*
  Warnings:

  - Added the required column `candidateMatch` to the `CandidateJobPosting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationMatch` to the `CandidateJobPosting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CandidateJobPosting" ADD COLUMN     "candidateMatch" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "organizationMatch" DECIMAL(65,30) NOT NULL;
