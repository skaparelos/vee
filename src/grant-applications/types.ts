export enum UserInteractionStatus {
  PENDING = 0, // Initial state, shown in card view
  INTERESTED = 1, // User clicked 👍
  NOT_INTERESTED = 2 // User clicked 👎
}

export enum ApplicationStatus {
  APPLIED = 1, // User clicked Apply  
  ACCEPTED = 2, // Grant accepted
  REJECTED = 3 // Grant rejected
} 