import React, { useState } from 'react';

const CalculadoraEmpresa = () => {
  // Estados para as entradas (Apenas Interno/Geral)
  const [numColaboradores, setNumColaboradores] = useState(100);
  const [folhaBruta, setFolhaBruta] = useState(150000);
  const [qtdAnalistas, setQtdAnalistas] = useState(1);
  const [salarioAnalista, setSalarioAnalista] = useState(3500);
  const [custoSoftware, setCustoSoftware] = useState(1800);

  // Estado para os serviços do BPO (Cada um vale R$ 10,00)
  const [servicosExtras, setServicosExtras] = useState({
    ponto: false,
    beneficio: false,
    ferias: false,
    folha: false,
    encargos: false
  });

  const handleServicoToggle = (servico) => {
    setServicosExtras(prev => ({
      ...prev,
      [servico]: !prev[servico]
    }));
  };

  // Lógica de Cálculo
  const custoInternoMensal = (salarioAnalista * 1.70 * qtdAnalistas) + Number(custoSoftware) + (folhaBruta * 0.05);
  const custoInternoAnual = custoInternoMensal * 12;

  // BPO: Calcula o valor baseado apenas nos serviços selecionados (R$ 10 cada)
  const qtdServicosSelecionados = Object.values(servicosExtras).filter(Boolean).length;
  const custoBpoFinalPorVida = qtdServicosSelecionados * 10;

  const custoBpoMensal = numColaboradores * custoBpoFinalPorVida;
  const custoBpoAnual = custoBpoMensal * 12;

  const diferencaMensal = Math.abs(custoInternoMensal - custoBpoMensal);
  
  // Se nenhum serviço BPO for selecionado, evita que mostre BPO como mais barato com custo R$ 0
  const maisBarato = (custoInternoMensal < custoBpoMensal || custoBpoMensal === 0) ? 'In-House' : 'BPO';

  // Cálculo da porcentagem de economia
  const custoMaisCaro = Math.max(custoInternoMensal, custoBpoMensal);
  const percentualEconomia = custoMaisCaro > 0 && custoBpoMensal > 0 ? (diferencaMensal / custoMaisCaro) * 100 : 0;

  // Formatador de Moeda (BRL)
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="container mt-88 mb-5">
      <div className="card shadow-lg " style={{ borderRadius: '12px', border: 'none', backgroundColor: 'var(--colorWhite)', scale: '0.9' }}>
        
        {/* Cabeçalho da Calculadora usando o Gradiente Primário da marca */}
        <div 
          className="text-center py-4" 
          style={{ background: 'var(--linearPrimary)', borderRadius: '12px 12px 0 0' }}
        >
          <h2 className="title four ritual whiteColor mb-2">
            Simulador de Custos: Folha In-House vs BPO
          </h2>
          <p className="paragraph whiteColor mb-0 px-3">
            Descubra qual modelo é mais vantajoso financeiramente para a sua empresa.
          </p>
        </div>

        <div className="card-body p-4 p-md-5">
          <div className="row g-5">
            
            {/* Coluna de Entradas (Formulário) */}
            <div className="col-md-6 border-end-md">
              <h5 className="title five secondary mb-4 pb-2 border-bottom">
                Preencha os dados
              </h5>
              
              <form>
                <div className="mb-4">
                  <label className="paragraph semiBold secondary mb-2 d-block">Número de Colaboradores</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    style={{ borderColor: 'var(--gray4)' }}
                    value={numColaboradores} 
                    onChange={(e) => setNumColaboradores(Number(e.target.value))} 
                  />
                </div>

                <div className="mb-4">
                  <label className="paragraph semiBold secondary mb-2 d-block">Folha Bruta Mensal Total (R$)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    style={{ borderColor: 'var(--gray4)' }} 
                    value={folhaBruta} 
                    onChange={(e) => setFolhaBruta(Number(e.target.value))} 
                  />
                </div>

                <div className="mb-4">
                  <label className="paragraph semiBold secondary mb-2 d-block">Quantidade de Analistas no DP</label>
                  <input 
                    type="number" 
                    className="form-control"
                    style={{ borderColor: 'var(--gray4)' }} 
                    value={qtdAnalistas} 
                    onChange={(e) => setQtdAnalistas(Number(e.target.value))} 
                  />
                </div>

                <div className="mb-4">
                  <label className="paragraph semiBold secondary mb-2 d-block">Salário Base do Analista/DP (R$)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    style={{ borderColor: 'var(--gray4)' }} 
                    value={salarioAnalista} 
                    onChange={(e) => setSalarioAnalista(Number(e.target.value))} 
                  />
                  <div className="paragraph text-16px mt-1" style={{ color: 'var(--gray7)' }}>
                    *O cálculo já adiciona 70% de encargos/benefícios por analista.
                  </div>
                </div>

                <div className="mb-4">
                  <label className="paragraph semiBold secondary mb-2 d-block">Custo Mensal do Software de DP (R$)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    style={{ borderColor: 'var(--gray4)' }} 
                    value={custoSoftware} 
                    onChange={(e) => setCustoSoftware(Number(e.target.value))} 
                  />
                </div>

                {/* Bloco: Serviços BPO */}
                <div className="mb-4 checkBox border-top pt-4 mt-4">
                  <label className="paragraph semiBold secondary mb-3 d-block">
                    Serviços Terceirização BPO
                  </label>
                  <div className="d-flex flex-wrap gap-3">
                    {[
                      { id: 'ponto', label: 'Ponto' },
                      { id: 'beneficio', label: 'Benefícios' },
                      { id: 'ferias', label: 'Férias' },
                      { id: 'folha', label: 'Folha' },
                      { id: 'encargos', label: 'Encargos/eSocial' }
                    ].map((servico) => (
                      <div className="form-check d-flex align-items-center gap-2" key={servico.id}>
                        <input
                          className="form-check-input pointer m-0 shadow-sm"
                          type="checkbox"
                          id={servico.id}
                          checked={servicosExtras[servico.id]}
                          onChange={() => handleServicoToggle(servico.id)}
                          style={{ width: '1.2rem', height: '1.2rem' }}
                        />
                        <label 
                          className="form-check-label paragraph pointer text-16px mb-0 mt-1" 
                          htmlFor={servico.id}
                          style={{ color: 'var(--colorDarkTitle)' }}
                        >
                          {servico.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            </div>

            {/* Coluna de Resultados */}
            <div className="col-md-6">
              <h5 className="title five secondary mb-4 pb-2 border-bottom">
                Resultados
              </h5>
              
              {/* Box Custo In-House */}
              <div className="p-3 mb-4 shadow-sm" style={{ backgroundColor: 'var(--gray1)', borderRadius: '8px' }}>
                <h6 className="title six text-uppercase mb-2" style={{ color: 'var(--gray7)' }}>
                  Custo In-House (Interno)
                </h6>
                <div className="d-flex justify-content-between align-items-end mb-1">
                  <span className="paragraph bold secondary">Mensal:</span>
                  <span className="title six primary">{formatCurrency(custoInternoMensal)}</span>
                </div>
                <div className="d-flex justify-content-between paragraph text-16px" style={{ color: 'var(--gray7)' }}>
                  <span>Anual (x12):</span>
                  <span>{formatCurrency(custoInternoAnual)}</span>
                </div>
                <div className="mt-2 paragraph text-16px" style={{ color: 'var(--gray7)' }}>
                  *Inclui 5% de margem de risco (erros/passivos).
                </div>
              </div>

              {/* Box Custo BPO */}
              <div className="p-3 mb-4 shadow-sm" style={{ backgroundColor: 'var(--gray1)', borderRadius: '8px' }}>
                <h6 className="title six text-uppercase mb-2" style={{ color: 'var(--gray7)' }}>
                  Custo Terceirização (BPO)
                </h6>
                <div className="d-flex justify-content-between align-items-end mb-1">
                  <span className="paragraph bold secondary">Mensal:</span>
                  <span className="title six primary">{formatCurrency(custoBpoMensal)}</span>
                </div>
                <div className="d-flex justify-content-between paragraph text-16px" style={{ color: 'var(--gray7)' }}>
                  <span>Anual (x12):</span>
                  <span>{formatCurrency(custoBpoAnual)}</span>
                </div>
                <div className="mt-2 paragraph text-16px" style={{ color: 'var(--gray7)' }}>
                  *Valor BPO: {formatCurrency(custoBpoFinalPorVida)} por vida.
                </div>
              </div>

              {/* Conclusão com a Porcentagem Grande */}
              {custoBpoMensal > 0 && (
                <div className="text-center mt-5 p-4 shadow-sm" style={{ backgroundColor: 'var(--colorWhite)', borderRadius: '12px', border: '1px solid var(--gray3)' }}>
                  <p className="paragraph bold text-uppercase mb-3" style={{ color: 'var(--gray7)' }}>
                    Opção mais econômica:
                  </p>
                  
                  <span 
                    className="tagBlog px-4 py-2 title six"
                    style={{ 
                      backgroundColor: maisBarato === 'BPO' ? 'var(--colorPrimary)' : 'var(--colorSecondary)',
                      color: 'var(--gray1)'
                    }}
                  >
                    {maisBarato}
                  </span>

                  <div className="border-top pt-4 mt-4">
                    <span className="paragraph bold secondary d-block mb-1">Redução de custos de:</span>
                    
                    <h1 className="number mx-auto my-3">
                      {percentualEconomia.toFixed(1)}%
                    </h1>
                    
                    <p className="paragraph mb-0" style={{ color: 'var(--gray8)' }}>
                      Economia de <strong className="primary">{formatCurrency(diferencaMensal)}</strong> ao mês.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraEmpresa;