export class Biblioteca {

    private tamanho: number;
    private quantidade: number;
    private capacidade: number;

    //CONSTRUTOR
    public constructor(_tamanho: number, _quantidade: number,_capacidade: number) {
        this.tamanho = _tamanho;
        this.quantidade = _quantidade;
        this.capacidade = _capacidade;
    }

    public getTamanho():number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }
    public setQuantidade(_quantidade: number): void {
        this.quantidade = _quantidade;
    }

    public getCapacidade(): number{
        return this.capacidade;
    }
    public setCapacidade(_capacidade: number): void {
        this.capacidade = _capacidade;
    }

    public estudar(): void {
        console.log('Estamos estudando na biblioteca');
    }

    public jogar(): void {
        console.log('Estamos jogando na biblioteca');
    }

    // MÉTODOS GET E SET

}