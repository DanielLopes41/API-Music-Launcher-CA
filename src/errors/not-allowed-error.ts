import { UseCaseError } from './use-case-error-base'

export class NotAllowedError extends Error implements UseCaseError {
  constructor() {
    super('Not allowed error')
  }
}
