
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly TAILWINDCSS = new Tag('Tailwind CSS', '#192129');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly GOLANG = new Tag('Golang', '#457189');
    static readonly CPP = new Tag('C++', '#00599C');
    static readonly REDIS = new Tag('Redis', '#A41E11');
    static readonly KAFKA = new Tag('Kafka', '#231f20');
    static readonly OAuth = new Tag('OAuth', '#192129');
    static readonly MATERIALUI = new Tag('Material UI', '#192129');
    static readonly REACT = new Tag('React', '#4FAA41');
    static readonly KOTLIN = new Tag('Kotlin', '#5a7581');
    static readonly RUST = new Tag('Rust', '#DEA584');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#563d7c');
    static readonly FIREBASE = new Tag('Firebase', '#f58220');







    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}