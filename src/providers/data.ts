import { BaseRecord, DataProvider, GetListParams } from "@refinedev/core";
import { Subject } from "../types/subject.types";

// Mock subject data for 3 university courses
const mockSubjects: Subject[] = [
  {
    id: 1,
    courseCode: "CSC101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering fundamental programming concepts, data structures, and algorithms. Students will learn problem-solving techniques and basic software development principles.",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: 2,
    courseCode: "MTH201",
    name: "Calculus II",
    department: "Mathematics",
    description:
      "Advanced calculus topics including integration techniques, sequences, series, and differential equations. Builds upon foundational calculus concepts with applications in engineering and science.",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: 3,
    courseCode: "PHYS301",
    name: "Quantum Mechanics",
    department: "Physics",
    description:
      "An exploration of quantum theory covering wave-particle duality, Schrödinger equation, quantum states, and applications in modern physics. Prerequisites include advanced mathematics and classical mechanics.",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: 3,
    courseCode: "CSC402",
    name: "Software Engineering",
    department: "Compute Science",
    description:
      "Advanced course covering advanced software engineering concepts, data structures, and algorithms. Students will learn problem-solving techniques and basic software development principles.",
    createdAt: new Date("2025-02-01"),
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams) => {
    if (resource !== "subjects") {
      return {
        data: [] as TData[],
        total: 0,
      };
    }
    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getOne: async () => {
    throw new Error("This function is not present in mock data provider.");
  },
  create: async () => {
    throw new Error("This function is not present in mock data provider.");
  },
  update: async () => {
    throw new Error("This function is not present in mock data provider.");
  },
  deleteOne: async () => {
    throw new Error("This function is not present in mock data provider.");
  },
  getApiUrl: () => {
    return "";
  },
};
// export const { dataProvider, kyInstance } = createSimpleRestDataProvider({
//   apiURL: API_URL,
// });
