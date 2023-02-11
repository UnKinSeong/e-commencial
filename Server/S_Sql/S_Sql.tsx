export abstract class S_Sql {
    private sql_: string;
    private sqlite: any;

    constructor(sqlite: any) {
        this.sqlite = sqlite;
    }

    public select(): void{
        // This method can be overridden by child classes.
    }

    public from(): void{
        // This method can be overridden by child classes.
    }

    public where(): void{
        // This method can be overridden by child classes.
    }

    public clear(): void {
        // This method can be overridden by child classes.
    }

    public build(): string {
        return this.sql_;
    }

    public toString(): string {
        return this.sql_;
    }

    public execute(): any {
        let sql = this.toString();
        // Use the sqlite3 engine to execute the generated sql.
        return this.sqlite.exec(sql);
    }
}

