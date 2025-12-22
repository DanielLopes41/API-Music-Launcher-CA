import { UseCaseError } from './use-case-error-base'

export class MusicNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Music not found.')
  }
}
