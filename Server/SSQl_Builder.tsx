namespace S_Sql{
    interface ISqlStatement {
      clear(): any;
      build(): any;
      getSQL(): string;
      getParams(): any[];
    }
    namespace OPs{
      interface Equal {
        name: string;
      }
    }
    interface ITable {
        name: string;
    }
    
    interface IColumn {
        name: string;
        value: any;
    }
    
    interface IWhereCondition {
        name: string;
        operator: string;
        value: any;
    }
    
    interface IOrderBy {
        column: IColumn;
        direction: "ASC" | "DESC";
    }
    
    interface ILimit {
        limit: number;
    }
    
    interface IOffset {
        offset: number;
    }
    interface ICreateTable extends ISqlStatement {
        table: ITable;
        columns: IColumn[];
    }
    
    interface IDropTable extends ISqlStatement {
        table: ITable;
    }
    
    interface IAlterTable extends ISqlStatement {
        table: ITable;
        operation: string;
        column: IColumn;
    }
    export const Sjoin=function(arr:any, separator:string){
        return arr.reduce((prev:string, _:any) => [...prev, `?`], []).join(separator);
    }
    export const Scondjoin=function(arr:any,separator:any){
        return arr.reduce((prev:any, curr:any) => [...prev, `${curr[0]} ${curr[1]} ?`], []).join(separator);
    }
    export const SOdjoin=function(arr:string[],operator:string,separator:string){
        return arr.reduce((prev:any, curr:any) => [...prev, `${curr} = ?`], []).join(separator);
    }
    /*
        This interface can then be used as the basis for implementing various SQL statement building blocks,
        such as the SELECT, UPDATE, INSERT, DELETE, FROM, SET, WHERE, ORDER BY, LIMIT, and OFFSET clauses.
    */

    export abstract class S_Sql implements ISqlStatement{
      protected sql:string = '';
      protected params:any[] = [];
      constructor(){}
      clear() {
        this.sql='';
        this.params=[];
        return;
      }
      build(): any{
          return this;
      }
      getSQL(): string{
          return this.sql;
      };
      getParams(): any[]{
          return this.params;
      };
    }

    /*
        UPDATE table_name
            SET column1 = value1, column2 = value2, ...
        WHERE condition;
    */
    export class Where extends S_Sql{
      protected condition_:IWhereCondition[]=[];
      constructor(sql:string,param:any[],condition:IWhereCondition[]){
        super();
        this.sql=sql;
        this.params=param;
        this.condition_=condition;
      }
      clear(){
        super.clear();
        this.condition_=[];
      }
      build(){
        const arr:string[][] = [[],[],[]];
        this.sql = this.sql+"WHERE"
        this.condition_.forEach((v,itr)=>{
            this.params.push(v.value);
            this.sql=this.sql+` ${v.name} ${v.operator} ? `;
            if(itr!=this.condition_.length-2){
                this.sql=this.sql+`AND`;
            }
        });
        this.condition_
        arr.reduce((prev:any, curr:any) => [...prev, `${curr[0]} ${curr[1]} ?`], []).join(separator);

         + `${this.condition_.length>0  ?`WHERE ${Scondjoin(this.condition_,` AND `)} `:''}`;
        return this;
      }
    }

    export class From extends S_Sql{
      protected table:string='';
      constructor(sql:string,param:any[],table_name:string){
        super();
        this.table = table_name;
        this.sql=sql;
        this.params=param;
      }
      clear(){
        super.clear();
        this.table='';
      }
      build(){
        this.sql = this.sql + `${`FROM ${this.table} `}`
        return this;
      }
      where(condition:string[][]){
        this.build()
        return new Where(this.sql, this.params, condition);
      }
    }

    export class Select extends S_Sql{
      protected select:string[]=[];
      constructor(table_name:string[]){
        super()
        this.select= [...table_name];
        return this;
      }
      clear(): void {
        super.clear()
        this.select = [];
      }
      build() {
        this.sql = `${this.select.length>0 ?`SELECT ${this.select.join(`, `)} `:`SELECT * `}`;
        return this;
      }
      from(table:string){
        this.build();
        return new From(this.sql,this.params,table);
      }
    }

    export class Set extends S_Sql{
        private col:string[] = [];
        clear(): void {
          this.col=[];
          this.params=[];
          this.sql='';
        }
        set(container:IColumn){
            this.col.push(container.name);
            this.params.push(container.value);
            return this;
        }
        build() {
          this.sql = `${this.col.length>0 ?`SET ${SOdjoin(this.col,"=",`, `)} `:``}`;
          return this;
        }
    }
}

const test: S_Sql.S_Sql = new S_Sql.Select([]).from('test').where([["a","=","c"]]).build();
console.log(test.getSQL())
console.log(test.getParams())