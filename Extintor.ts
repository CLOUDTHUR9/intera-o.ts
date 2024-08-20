export class Extintor {

    private tipo: string;
    private tamanho: number;
    private capacidade: number;

    //CONSTRUTOR
    public constructor(_tipo: string, _tamanho: number,_capacidade: number) {
        this.tipo = _tipo;
        this.tamanho = _tamanho;
        this.capacidade = _capacidade;
    }

    public getTipo():string {
        return this.tipo;
    }
    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getCapacidade(): number{
        return this.capacidade;
    }
    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public proteger(): void {
        console.log('O extintor protegeu a pessoa');
    }

    public apagarFogo(): void {
        console.log('O extintor apagou o fogo');
    }

    // MÉTODOS GET E SET

}