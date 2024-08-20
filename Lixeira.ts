export class Lixeira {

    private tamanho: number;
    private material: string;
    private cor: string;

    //CONSTRUTOR
    public constructor(_tamanho: number, _material: string,_cor: string) {
        this.tamanho = _tamanho;
        this.material = _material;
        this.cor = _cor;
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

    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public armazenar_lixo(): void {
        console.log('Vamos armazenar o lixo');
    }

    public concientizacao_amiental(): void {
        console.log('Vamos apoiar a concientização ambiental');
    }

    // MÉTODOS GET E SET

}