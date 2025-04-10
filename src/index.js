var SingletonPersonIntermidiate= function() {
    var instance;
    var createSingleton= function(name,age) {
        if(!instance){
            instance={name,age};
        }
        return instance;
    }
    return createSingleton;
}
var SingletonPerson=SingletonPersonIntermidiate();
const me = SingletonPerson("ae10", 36);
const meBis = SingletonPerson("ae7", 37);
console.log('me==meBis', me==meBis)
console.log('meBis', meBis)