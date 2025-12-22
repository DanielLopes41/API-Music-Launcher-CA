import { UseCaseError } from './use-case-error-base'

export class ConversionError extends Error implements UseCaseError {
  constructor(text: string = 'An error occurred while converting the video.') {
    super(text)
  }
}
