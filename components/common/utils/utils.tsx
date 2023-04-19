export const birthday = new Date('2002-04-27')

export function getAge(): number {
    var diff_ms = Date.now() - birthday.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}