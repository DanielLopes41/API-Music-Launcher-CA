import { UseCaseError } from './use-case-error-base'

export class InvalidAttachmentError extends Error implements UseCaseError {
  constructor(text: string) {
    super(text)
  }
}
