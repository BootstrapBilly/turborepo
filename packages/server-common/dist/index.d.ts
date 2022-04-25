import { ValidationError } from 'express-validator';
import * as node_nats_streaming from 'node-nats-streaming';
import { Message, Stan } from 'node-nats-streaming';
import { Request, Response, NextFunction } from 'express';

declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract format(): {
        message: string;
        field?: string;
    }[];
}

declare class BadRequestError extends CustomError {
    private reason;
    statusCode: number;
    constructor(reason: string);
    format(): {
        message: string;
    }[];
}

declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    constructor();
    format(): {
        message: string;
    }[];
}

declare class RequestValidationError extends CustomError {
    validationErrors: ValidationError[];
    statusCode: number;
    constructor(validationErrors: ValidationError[]);
    format(): {
        message: any;
        field: string;
    }[];
}

declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    format(): {
        message: string;
    }[];
}

declare class UnauthorisedError extends CustomError {
    statusCode: number;
    constructor();
    format(): {
        message: string;
    }[];
}

declare enum Subjects {
    Placeholder = "placeholder"
}

interface Event$1 {
    subject: Subjects;
    data: any;
}
declare abstract class Listener<T extends Event$1> {
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage: (data: T["data"], msg: Message) => void;
    protected client: Stan;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): node_nats_streaming.SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}

interface Event {
    subject: Subjects;
    data: any;
}
declare abstract class Publisher<T extends Event> {
    abstract subject: T["subject"];
    protected client: Stan;
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}

interface UserPayload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;

declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;

declare const requireAuth: (req: Request, res: Response, next: NextFunction) => void;

declare const validateRequest: (req: Request, res: Response, next: NextFunction) => void;

export { BadRequestError, DatabaseConnectionError, Listener, NotFoundError, Publisher, RequestValidationError, requireAuth as RequireAuth, Subjects, UnauthorisedError, currentUser, errorHandler, validateRequest };
