import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: any) {}
  transform(value: any) {
    const { error } = this.schema.validate(value, {
      abortEarly: false,
      allowUnknown: false,
    });
    if (error) {
      throw new BadRequestException({
        message: 'Error validation',
        validation: error,
      });
    }
    return value;
  }
}
