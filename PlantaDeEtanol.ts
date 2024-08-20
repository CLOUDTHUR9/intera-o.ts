export class PlantaDeEtanol {

    private material: string;
    private tamanho: number;
    private cor: string;

    //CONSTRUTOR
    public constructor(_material: string, _tamanho: number,_cor: string) {
        this.material = _material;
        this.tamanho = _tamanho;
        this.cor = _cor;
    }

    public getMaterial():string {
        return this.material;
    }
    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getTamanho(): number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getCor(): string{
        return this.cor;
    }
    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public produzirEtanol(): void {
        console.log('A fabrica esta produzindo etanol');
    }

    public armazenamento(): void {
        console.log('O armazenamento de de etenol esta');
    }

    // MÉTODOS GET E SET

}