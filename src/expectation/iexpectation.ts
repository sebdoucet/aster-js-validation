import { IValidator } from "../validator/ivalidator";
import { ValidationResult } from "../validator/validation-result";

import { ValidationDelegate } from "./validation-delegate";

export type ExpectationConditionDelegate<T> = (target: T) => boolean;

export type Validation<T> = DelegateValidation<T> | ValidatorValidation<T>;

export type DelegateValidation<T> = {
    readonly type: "delegate";
    readonly condition: ExpectationConditionDelegate<T>;
    readonly validator: ValidationDelegate;
    readonly message: string;
}

export type ValidatorValidation<T> = {
    readonly type: "validator";
    readonly condition: ExpectationConditionDelegate<T>;
    readonly validator: IValidator<any>;
}

export interface IExpectation<T> {

    run(target: T): Promise<ValidationResult>;
}
