export class Arvore {

    private tamanho: number;
    private especie: string;
    private idade: number;

    //CONSTRUTOR
    public constructor(_tamanho: number, _especie: string,_idade: number) {
        this.tamanho = _tamanho;
        this.especie = _especie;
        this.idade = _idade;
    }

    public getTamanho():number {
        return this.tamanho;
    }
    public setTamanho(_tamanho: number): void {
        this.tamanho = _tamanho;
    }

    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(_especie: string): void {
        this.especie = _especie;
    }

    public getIdade(): number{
        return this.idade;
    }
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    public fotossintese(): void {
        console.log('A arvore faz fotossintese');
    }

    public fazerSombra(): void {
        console.log('A arvore faz sombra');
    }

    // MÉTODOS GET E SET

}