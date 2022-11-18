const valorCompra = document.querySelector('#valorCompra')
const valorVenda = document.querySelector('#valorVenda')

const calcPorcentagem = () => {

  if (valorCompra.value !== '' && valorVenda.value !== '') {
    const porcentagem = (((parseFloat(valorVenda.value) - parseFloat(valorCompra.value)) * 100 )) / parseFloat(valorVenda.value)
    const porcentagemBruta = (((parseFloat(valorVenda.value) - parseFloat(valorCompra.value)) * 100 )) / parseFloat(valorCompra.value)
    const valorCompra1 = (parseFloat(valorCompra.value))
    const valorVenda1 = (parseFloat(valorVenda.value))
    const valorLucro = (parseFloat(valorVenda.value)) - (parseFloat(valorCompra.value))
        
    resultado.innerHTML = `Valor Compra: R$ ${valorCompra1.toFixed(2)}`
    resultado1.innerHTML = `Valor Venda: R$ ${valorVenda1.toFixed(2)}`
    resultado3.innerHTML = `Lucro (R$): R$ ${valorLucro.toFixed(2)}`
    resultado2.innerHTML = `Lucro Líquido (%): ${porcentagem.toFixed(2)}%`
    resultado4.innerHTML = `Lucro Bruto (%): ${porcentagemBruta.toFixed(2)}%`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}

function limparForm() {
	document.getElementById('valorCompra').value = "";
  document.getElementById('valorVenda').value = "";
  resultado.innerHTML = "";
  resultado1.innerHTML = "";
  resultado2.innerHTML = "";
  resultado3.innerHTML = "";
  resultado4.innerHTML = "";
  
  document.getElementById('valorCompra').focus();
  }