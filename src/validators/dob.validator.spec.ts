import { transformDob } from './dob.validator';
import { BadRequestException } from '@nestjs/common';

describe('DOB Validator', () => {
    it('should transform dd/mm/yyyy format', () => {
        expect(transformDob('01/01/2000')).toBe('01-01-2000');
    });

    it('should transform dd-mm-yyyy format', () => {
        expect(transformDob('02-02-2000')).toBe('02-02-2000');
    });

    it('should transform ddmmyyyy format', () => {
        expect(transformDob('03032000')).toBe('03-03-2000');
    });

    it('should throw for invalid format', () => {
        expect(() => transformDob('2000-01-01')).toThrow(BadRequestException);
    });
});
