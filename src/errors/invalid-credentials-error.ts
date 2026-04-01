import { UseCaseError } from './use-case-error-base'

export class InvalidCredentialsError extends Error implements UseCaseError {
  constructor() {
    super('Email or password is Invalid.')
  }
}
