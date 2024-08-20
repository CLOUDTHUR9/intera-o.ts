export class Camera {

    private material: string;
    private qualidade: string;
    private marca: string;

    //CONSTRUTOR
    public constructor(_material: string, _qualidade: string,_marca: string) {
        this.material = _material;
        this.qualidade = _qualidade;
        this.marca = _marca;
    }

    public getMaterial():string {
        return this.material;
    }
    public setMaterial(_material: string): void {
        this.material = _material;
    }

    public getQualidade(): string {
        return this.qualidade;
    }
    public setQualidade(_qualidade: string): void {
        this.qualidade = _qualidade;
    }

    public getMarca(): string{
        return this.marca;
    }
    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public gravar(): void {
        console.log('A camera gravou a pessoa');
    }

    public fotografar(): void {
        console.log('A camera fotografou a pessoa');
    }

    // MÉTODOS GET E SET

}