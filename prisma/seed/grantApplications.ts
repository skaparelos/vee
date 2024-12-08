const UserStatus = {
  NULL: 0,
  INTERESTED: 1,
  NOT_INTERESTED: 2,
} as const;

const ApplicationStatus = {
  NULL: 0,
  APPLIED: 1,
  ACCEPTED: 2,
  REJECTED: 3,
} as const;

export const grantApplications = [
  {
    id: "ga_id_1",
    userId: "usr_id_1",
    grantId: "grt_id_1",
    userStatus: UserStatus.INTERESTED,
    applicationStatus: ApplicationStatus.APPLIED,
    feedback: "Application submitted successfully",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "ga_id_2",
    userId: "usr_id_1",
    grantId: "grt_id_2",
    userStatus: UserStatus.NOT_INTERESTED,
    applicationStatus: ApplicationStatus.NULL,
    feedback: "Not aligned with current goals",
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "ga_id_3",
    userId: "usr_id_2",
    grantId: "grt_id_3",
    userStatus: UserStatus.INTERESTED,
    applicationStatus: ApplicationStatus.ACCEPTED,
    feedback: "Congratulations! Your application has been accepted.",
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "ga_id_4",
    userId: "usr_id_3",
    grantId: "grt_id_1",
    userStatus: UserStatus.INTERESTED,
    applicationStatus: ApplicationStatus.REJECTED,
    feedback: "Thank you for applying. Unfortunately...",
    createdAt: new Date("2024-02-10"),
  },
  {
    id: "ga_id_5",
    userId: "usr_id_4",
    grantId: "grt_id_5",
    userStatus: UserStatus.INTERESTED,
    applicationStatus: ApplicationStatus.APPLIED,
    feedback: null,
    createdAt: new Date("2024-03-01"),
  },
]



