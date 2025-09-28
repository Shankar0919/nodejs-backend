import { BadRequestException } from '@nestjs/common';

export function transformDob(dob: string): string {
    dob = dob.trim();

    const ddmmyyyy = /^(\d{2})(\d{2})(\d{4})$/;
    const slash = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const dash = /^(\d{2})-(\d{2})-(\d{4})$/;

    let day: string, month: string, year: string;

    if (slash.test(dob)) {
        [, day, month, year] = dob.match(slash)!;
    } else if (dash.test(dob)) {
        [, day, month, year] = dob.match(dash)!;
    } else if (ddmmyyyy.test(dob)) {
        [, day, month, year] = dob.match(ddmmyyyy)!;
    } else {
        throw new BadRequestException(
            'DOB must be in dd/mm/yyyy, dd-mm-yyyy, or ddmmyyyy format',
        );
    }

    return `${day}-${month}-${year}`;
}
