export class Bicicleta {

    private aro: number;
    private quadro: string;
    private peso: number;

    //CONSTRUTOR
    public constructor(_aro: number, _quadro: string,_peso: number) {
        this.aro = _aro;
        this.quadro = _quadro;
        this.peso = _peso;
    }

    public getAro():number {
        return this.aro;
    }
    public setAro(_aro: number): void {
        this.aro = _aro;
    }

    public getQuadro(): string {
        return this.quadro;
    }
    public setQuadro(_quadro: string): void {
        this.quadro = _quadro;
    }

    public getPeso(): number{
        return this.peso;
    }
    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    public pedalar(): void {
        console.log('Vamos pedalar hoje?');
    }

    public manobras(): void {
        console.log('Vou mandar uma manobra de Bicicleta');
    }

    // MÉTODOS GET E SET

}