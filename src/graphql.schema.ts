
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class GrantApplication {
    id: string;
    userId: string;
    user: User;
    grantId: string;
    grant: Grant;
    userStatus?: Nullable<number>;
    applicationStatus?: Nullable<number>;
    feedback?: Nullable<string>;
    createdAt: DateTime;
}

export abstract class IQuery {
    abstract grantOpportunities(userId: string, status?: Nullable<number>): GrantApplication[] | Promise<GrantApplication[]>;

    abstract grants(): Grant[] | Promise<Grant[]>;

    abstract grant(id: string): Nullable<Grant> | Promise<Nullable<Grant>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createGrantApplication(userId: string, grantId: string): GrantApplication | Promise<GrantApplication>;

    abstract updateGrantApplication(id: string, userStatus?: Nullable<number>, applicationStatus?: Nullable<number>, feedback?: Nullable<string>): GrantApplication | Promise<GrantApplication>;
}

export class Grant {
    id: string;
    name: string;
    foundationName: string;
    amount: number;
    deadline?: Nullable<DateTime>;
    location?: Nullable<string>;
    gettingStarted?: Nullable<string>;
    areaOfFunding?: Nullable<string>;
}

export class User {
    id: string;
    email: string;
    name?: Nullable<string>;
    userGrants?: Nullable<Nullable<GrantApplication>[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
