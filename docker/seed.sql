-- Create databases
CREATE DATABASE todos;
CREATE DATABASE todos_cvr;
CREATE DATABASE todos_cdb;

-- Switch to the main database
\c todos;

-- ========================================
-- 1. Create Tables
-- ========================================

CREATE TABLE todos (
  "id" VARCHAR PRIMARY KEY,
  "name" VARCHAR,
  "checked" BOOLEAN,
  "createdAt" VARCHAR NOT NULL,
  "updatedAt" VARCHAR NOT NULL
);

-- ========================================
-- 2. Seed Data
-- ========================================

-- Insert example todos
INSERT INTO todos (id, name, checked, "createdAt", "updatedAt") VALUES
  ('t1', 'Buy groceries', true, '2024-01-15T08:00:00Z', '2024-01-15T16:30:00Z'),
  ('t2', 'Complete project presentation', false, '2024-01-16T09:15:00Z', '2024-01-16T09:15:00Z'),
  ('t3', 'Schedule dentist appointment', true, '2024-01-14T11:20:00Z', '2024-01-17T14:45:00Z'),
  ('t4', 'Review quarterly reports', false, '2024-01-17T13:00:00Z', '2024-01-17T13:00:00Z'),
  ('t5', 'Update portfolio website', false, '2024-01-15T15:30:00Z', '2024-01-15T15:30:00Z'),
  ('t6', 'Call mom', true, '2024-01-16T10:00:00Z', '2024-01-16T18:20:00Z'),
  ('t7', 'Fix kitchen sink', false, '2024-01-18T09:00:00Z', '2024-01-18T09:00:00Z'),
  ('t8', 'Submit expense reports', true, '2024-01-14T16:45:00Z', '2024-01-16T11:30:00Z'),
  ('t9', 'Plan team building event', false, '2024-01-17T14:20:00Z', '2024-01-17T14:20:00Z'),
  ('t10', 'Backup work files', true, '2024-01-15T11:00:00Z', '2024-01-15T16:15:00Z');
