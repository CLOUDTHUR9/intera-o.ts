export class Notebook {

    private processador: string;
    private sistema: string;
    private armazenamento: number;

    //CONSTRUTOR
    public constructor(_processador: string, _sistema: string,_armazenamento: number) {
        this.processador = _processador;
        this.sistema = _sistema;
        this.armazenamento = _armazenamento;
    }

    public getProcessador():string {
        return this.processador;
    }
    public setProcessador(_processador: string): void {
        this.processador = _processador;
    }

    public getSistema(): string {
        return this.sistema;
    }
    public setSistema(_sistema: string): void {
        this.sistema = _sistema;
    }

    public getArmazenamento(): number{
        return this.armazenamento;
    }
    public setArmazenamento(_armazenamento: number): void {
        this.armazenamento = _armazenamento;
    }

    public jogar(): void {
        console.log('Estou joagndo fifa');
    }

    public assitir(): void {
        console.log('Estou assistindo Dragon Ball');
    }

    // MÉTODOS GET E SET

}