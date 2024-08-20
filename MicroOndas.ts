export class MicroOndas {

    private marca: string;
    private potencia: number;
    private tamanho: number;

    //CONSTRUTOR
    public constructor(_marca: string, _potencia: number,_tamanho: number) {
        this.marca = _marca;
        this.potencia = _potencia;
        this.tamanho = _tamanho;
    }

    public getMarca():string {
        return this.marca;
    }
    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getPotencia(): number {
        return this.potencia;
    }
    public setPotencia(_potencia: number): void {
        this.potencia = _potencia;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public esquentar(): void {
        console.log('O micro-ondas esta esquentando o feijão')
    }

    public cozinhar(): void {
        console.log('O micro-ondas esta cozinhando o Cup Noodle')
    }

    // MÉTODOS GET E SET

}