import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes>{
    
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <TH>VALOR</TH>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>${this.formataData(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr> 
            <script>alert('Oi')</script>                   
                    `;
                }).join('')}
            </tbody>
        </table>        
        `;
    }

    private formataData(data: Date): string {
        return new Intl.DateTimeFormat().format(data);
    }
}