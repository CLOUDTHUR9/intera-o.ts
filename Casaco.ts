export class Casaco {

    private cor: string;
    private marca: string;
    private tecido: string;

    //CONSTRUTOR
    public constructor(_cor: string, _marca: string,_tecido: string) {
        this.cor = _cor;
        this.marca = _marca;
        this.tecido = _tecido;
    }

    public getCor():string {
        return this.cor;
    }
    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getMarca(): string {
        return this.marca;
    }
    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getTecido(): string{
        return this.tecido;
    }
    public setTecido(_tecido: string): void {
        this.tecido = _tecido;
    }

    public vestir(): void {
        console.log('Quero vestir meu casaco');
    }

    public manterTemperaturaCorporal(): void {
        console.log('Quero meu casaco para manter a temperatura corporal');
    }

    // MÉTODOS GET E SET

}