export const grants = [
  {
    id: "grt_id_1",
    name: "Community Development Initiative",
    foundationName: "Gates Foundation",
    amount: 50000.00,
    deadline: new Date("2024-12-31"),
    location: "Global",
    gettingStarted: "Apply through online portal",
    areaOfFunding: "Education",
  },
  {
    id: "grt_id_2",
    name: "Environmental Innovation Grant",
    foundationName: "Ford Foundation",
    amount: 25000.00,
    deadline: new Date("2024-09-15"),
    location: "North America",
    gettingStarted: "Submit letter of intent",
    areaOfFunding: "Environment",
  },
  {
    id: "grt_id_3",
    name: "Arts & Culture Fund",
    foundationName: "Rockefeller Foundation",
    amount: 15000.00,
    deadline: new Date("2024-10-01"),
    location: "United States",
    gettingStarted: "Apply Online",
    areaOfFunding: "Arts",
  },
  {
    id: "grt_id_4",
    name: "Healthcare Innovation Grant",
    foundationName: "Robert Wood Johnson Foundation",
    amount: 75000.00,
    deadline: new Date("2024-11-30"),
    location: "United States",
    gettingStarted: "Contact program officer",
    areaOfFunding: "Healthcare",
  },
  {
    id: "grt_id_5",
    name: "Social Justice Initiative",
    foundationName: "Open Society Foundations",
    amount: 40000.00,
    deadline: new Date("2024-08-15"),
    location: "Global",
    gettingStarted: "Apply Online",
    areaOfFunding: "Social Justice",
  },
] as const;

