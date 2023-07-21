export function isPhoneNumber(input:string) {
    const phonePattern = /^(\+?3?8?0?)(\d{9})$/;
    return phonePattern.test(input);
}
