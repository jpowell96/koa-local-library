interface AuthorProps {
    firstName: String,
    lastName: String
}

class Author {
    firstName: String;

    private constructor(firstName: String, lastName: String) {
        this.firstName = firstName;
    }

    public static create(authorProps: AuthorProps) : Author {
        if (hasFirstName(authorProps) && hasLastName(authorProps)) {
            return new Author(authorProps.firstName, authorProps.lastName);
        } else {
           throw new Error("Validation failure");
        }

        function hasFirstName(authorProps: AuthorProps) {
            return authorProps.firstName && authorProps.firstName.length > 0;
        }

        function hasLastName(authorProps : AuthorProps) {
            return authorProps.lastName && authorProps.lastName.length > 0;
        }
    }

}