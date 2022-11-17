const valorCompra = document.querySelector('#valorCompra')
const valorVenda = document.querySelector('#valorVenda')

const calcPorcentagem = () => {

  if (valorCompra.value !== '' && valorVenda.value !== '') {
    const porcentagem = (((parseFloat(valorVenda.value) - parseFloat(valorCompra.value)) * 100 )) / parseFloat(valorVenda.value)
        
    resultado.innerHTML = `Percentual: ${porcentagem.toFixed(2)}%`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}

function limparForm() {
	document.getElementById('valorCompra').value = "";
  document.getElementById('valorVenda').value = "";
  resultado.innerHTML = "";
  document.getElementById('valorCompra').focus();
  }