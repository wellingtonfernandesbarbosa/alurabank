import { domInjector } from "../decorators/dom-injector.js";
import { inspetor } from "../decorators/inspetor.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacaoView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacaoView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService;
    
    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }
    
    @inspetor
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if (!this.diaUtil(negociacao.data)) {
            return this.mensagemView.update('Negociações só podem ser feitas em dias úteis!');
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    public importaDados(): void {
        this.negociacaoService.obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
            
            this.negociacoesView.update(this.negociacoes)
        })
    }

    private diaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
}
