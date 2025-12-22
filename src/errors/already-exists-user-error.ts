import { UseCaseError } from './use-case-error-base'

export class AlreadyExistsUserError extends Error implements UseCaseError {
  constructor() {
    super('A user with this email already exists. Please sign in.')
  }
}
