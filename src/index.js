class SingletonPerson{
    /*
        Don't declare
            static #instance={};
        then
          if (this.#instance==null)
        because:
            {} creates a new object every time
    */
   constructor(name){
        return SingletonPerson.createInstance(name);
   }
    static #instance=null;
    static createInstance(name){
        if (this.#instance==null) {
            this.#instance={name};
        }
        Object.freeze(this.#instance);
        return this.#instance;
    }
}
const me = SingletonPerson.createInstance("ae10");
const meBis = SingletonPerson.createInstance("ea7");
console.log('me==meBis', me==meBis)
console.log('meBis', meBis)
console.log('new SingletonPerson()', new SingletonPerson());