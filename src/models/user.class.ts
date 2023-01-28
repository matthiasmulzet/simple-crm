export class User {
    firstName: string | undefined;
    lastName: string | undefined;
    birthDate: number | undefined;
    street: string | undefined;
    zipCode: number | undefined;
    city: string | undefined;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

}