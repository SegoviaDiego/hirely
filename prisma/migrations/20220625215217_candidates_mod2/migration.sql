/*
  Warnings:

  - Added the required column `posicionActual` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "posicionActual" TEXT NOT NULL;