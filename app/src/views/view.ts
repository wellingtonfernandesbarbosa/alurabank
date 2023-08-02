import { inspetor } from "../decorators/inspetor.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

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

    @inspetor
    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template;
    }
    
    protected abstract template(model: T): string;
}
