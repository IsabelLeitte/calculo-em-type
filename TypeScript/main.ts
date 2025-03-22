namespace loja{
    const nome = document.getElementById("nomeProduto") as HTMLInputElement;
    const preco = document.getElementById("precoProduto") as HTMLInputElement;
    const taxa = document.getElementById("taxaProduto") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLButtonElement;
    document.getElementById('btn')?.addEventListener('click', ()=>{

        let p = new Produto();
        p.nome = nome.value;
        p.preco = parseFloat(preco.value)
        p.taxa = parseFloat(taxa.value);

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("taxa").textContent = p.taxa.toString();
        document.getElementById("cal").textContent = calc().toString();

        let display = document.getElementById("display");
        display.innerHTML=`
        <h2><span id="calc"> </span> , reais no total. </h2>
    `})
}