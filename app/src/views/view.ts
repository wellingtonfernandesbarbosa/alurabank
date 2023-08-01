import { inspetor } from "../decorators/inspetor.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`O seletor ${seletor} não foi encontrado no DOM. Virifique a existência do elemento.`)
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    @inspetor()
    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model)
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
    
    protected abstract template(model: T): string;
}
