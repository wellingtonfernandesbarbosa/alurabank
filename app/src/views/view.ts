export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`O seletor ${seletor} não foi encontrado no DOM. Virifique a existência do elemento.`)
        }
    }

    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template;
    }
    
    protected abstract template(model: T): string;
}
