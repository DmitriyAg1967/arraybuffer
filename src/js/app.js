export default class Character {
    constructor(name) {
        if (name === undefined || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
}

export class DamageStrength extends Character {
    constructor(name) {
        super(name);
        this.stoned = false;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get attack() {
        if (this.distance < 0 || this.distance > 5) {
            return 0;
        }

        let attack = this._attack - (this._attack / 10) * (this.distance - 1);
        if (this.stoned === true) {
            attack -= Math.log2(this.distance) * 5;
        }
        return Math.floor(attack);
    }

    set attack(value) {
        this._attack = value;
    }

}

export class Magician extends DamageStrength {
    constructor(name) {
        super(name);
        this.type = 'Magician'
        this.attack = 100;
        this.defence = 40;
    }
}

export class Daemon extends DamageStrength {
    constructor(name) {
        super(name);
        this.type = 'Daemon'
        this.attack = 10;
        this.defence = 40;
    }
}
