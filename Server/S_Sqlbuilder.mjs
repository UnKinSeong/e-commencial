//simple draft sqlbuilder
import {isString,isNumber, isBoolean} from "./TypeChecker.mjs"

export class S_Sqlbuilder{
    constructor(){}
    #from_  = null
    #limit_ = null
    #offset_ = null
    #insert_ = null
    #update_ = null
    #delete_ = null
    #values_  = []
    #select_ = []
    #set_    = []
    #where_ = []
    #order_  = []
    clear(){
      this.#from_  = null
      this.#limit_ = null
      this.#offset_ = null
      this.#insert_ = null
      this.#update_ = null
      this.#delete_ = null
      this.#values_  = []
      this.#select_ = []
      this.#set_    = []
      this.#where_ = []
      this.#order_  = []
    }
    insert(val){
      if(!isString(val))                                throw Error(`insert val is not a string`);
      if(val=='')                                       throw Error(`insert val can't be ''`);
      this.#insert_ = val;
      return this;
    }
    values(val){
      if(val === undefined) throw Error(`values val is not defined`);

      if(isString(val))
        this.#values_.push(`'${val}'`);
      else
        this.#values_.push(val);
      return this;
    }
    update(val){
      if(!isString(val)) throw Error(`update val is not a string`);
      if(val=='')        throw Error(`update val can't be ''`);
      this.#update_ = val;
      return this;
    }
    delete(val){
      if(!isString(val)) throw Error(`delete val is not a string`);
      if(val=='')        throw Error(`delete val can't be ''`);
      this.#delete_ = val;
      return this;
    }
    set(value,operator,target){
      if(!isString(value)) throw Error(`where val is not a string`);
      if(!isString(operator)) throw Error(`where valb is not a string`);
      if(!(isString(target)||isBoolean(target)||isNumber(target))) throw Error(`where valc is not a string`);
      if(target!=='')
        this.#set_.push([value,operator,target]);
      return this;
    }
    select(target,name){
      if(!isString(target)) throw Error(`select val is not a string`);
      if(target=='')        throw Error(`select val can't be ''`)
      this.#select_.push((target) + (isString(name)?` AS ${name}`:``));
      return this;
    }
    from(val){
      if(!isString(val)) throw Error(`from val is not a string`);  
      this.#from_=`'${val}'`;
      return this;
    }
    where(value,operator,target){
      if(!isString(value)) throw Error(`where val is not a string`);
      if(!isString(operator)) throw Error(`where valb is not a string`);
      if(!(isString(target)||isBoolean(target)||isNumber(target))) throw Error(`where target is not a string`);
      if(target!=='')
        this.#where_.push([value,operator,target]);
      return this;
    }
    limit(val){
      if(!isNumber(val)) throw Error(`limit val is not a number`);
      if(parseInt(val)>0)
        this.#limit_ = parseInt(val)
      return this;
    }
    offset(val){
      if(!isNumber(val)) throw Error(`offset val is not a number`);
      if(parseInt(val)>0){
        this.#offset_ = parseInt(val);
        if(this.#limit_==0||this.#limit_==null)
          this.#limit_=-1;
      }
        
      return this;
    }
    order(val,ord){
      if(!isString(val)) throw Error(`order val is not a string`);
      if(isString(ord)){
        if(ord.toLowerCase()=='asc'||ord.toLowerCase()=='desc'){
          this.#order_.push(`${val} ${ord}`);
        }
      }
      return this;
    }
    toString(){
      const join=function(arr, separator){
        return arr.reduce((prev, _) => [...prev, `?`], []).join(separator);
      }
      const condjoin=function(arr,separator){
        return arr.reduce((prev, curr) => [...prev, `${curr[0]} ${curr[1]} ?`], []).join(separator);
      }
      const arr=[];
      this.#values_.forEach(v=>arr.push(v));
      this.#set_.forEach(v=>arr.push(v[2]))
      this.#where_.forEach(v=>arr.push(v[2]));
      return [  `${this.#select_.length>0 ?`SELECT ${this.#select_.join(`, `)} `:``}`+
                `${this.#update_!=null    ?`UPDATE ${this.#update_} `:``}`+
                `${this.#delete_!=null    ?`DELETE FROM ${this.#delete_} `:``}`+
                `${this.#insert_!=null    ?`INSERT INTO ${this.#insert_} `:``}`+
                `${this.#values_.length>0 ?`VALUES (${join(this.#values_,`, `)})`:``}`+
                `${this.#from_!=null      ?`FROM ${this.#from_} `:``}`+
                `${this.#set_.length>0    ?`SET ${condjoin(this.#set_,`, `)} `:``}`+
                `${this.#where_.length>0  ?`WHERE ${condjoin(this.#where_,` AND `)} `:''}`+
                `${this.#order_.length>0  ?`ORDER BY ${this.#order_.join(`, `)} `:``}`+
                `${this.#limit_!=null     ?`LIMIT ${this.#limit_} `:``}`+
                `${this.#offset_!=null    ?`OFFSET ${this.#offset_} `:``}`, arr];
    }
  }