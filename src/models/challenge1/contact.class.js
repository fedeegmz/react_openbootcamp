export class Contact {
    name = "";
    lastname = "";
    email = "";
    is_inline = false;

    constructor(name, lastname, email, is_inline) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.is_inline = is_inline;
    }
}