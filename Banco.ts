export class Banco {

    private tamanho: number;
    private material: string;
    private peso: number;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: string,_peso: number) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.peso = _peso;
    }

    public getTamanho():number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getMaterial(): string {
        return this.material;
    }
    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getPeso(): number {
        return this.peso;
    }
    public setPeso(_peso: number): void {
        this.peso = _peso;
    }

    public sentar(): void {
        console.log('Estou cansado vou sentar na cadeira');
    }

    public descansar(): void {
        console.log('Cheguei da escola muito cansado, vou descansar');
    }

    // MÉTODOS GET E SET

}