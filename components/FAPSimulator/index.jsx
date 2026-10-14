import React, { useEffect, useRef, useState } from "react";
import styles from "./FapSimulator.module.scss";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export const FAPSimulator = () => {
  const [folha, setFolha] = useState(500000);
  const [rat, setRat] = useState(0.03);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const calcularValores = () => {
    const custoNeutroAnual = folha * rat * 1.0 * 12;
    const custoMaximoAnual = folha * rat * 2.0 * 12;
    const custoMinimoAnual = folha * rat * 0.5 * 12;

    return {
      custoNeutroAnual,
      custoMaximoAnual,
      custoMinimoAnual,
      extraCost: custoMaximoAnual - custoNeutroAnual,
      savings: custoNeutroAnual - custoMinimoAnual,
    };
  };

  const {
    custoMaximoAnual,
    extraCost,
    savings,
    custoNeutroAnual,
    custoMinimoAnual,
  } = calcularValores();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.data.datasets[0].data = [
        custoMinimoAnual,
        custoNeutroAnual,
        custoMaximoAnual,
      ];
      chartInstance.current.update();
    } else if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["FAP (0.5)", "FAP Neutro (1.0)", "FAP (2.0)"],
          datasets: [
            {
              label: "Custo Anual com RAT Ajustado",
              data: [custoMinimoAnual, custoNeutroAnual, custoMaximoAnual],
              backgroundColor: ["#21b88f", "#ff9f43", "#ff0000"],
              borderColor: ["#16a34a", "#ca8a04", "#dc2626"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 30, // espaço para datalabels no topo
              left: 10,
              right: 10,
              bottom: 10,
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
            datalabels: {
              anchor: "end",
              align: "end",
              color: "#000",
              font: { weight: "bold" },
              formatter: (value) => formatCurrency(value),
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => formatCurrency(value),
              },
            },
          },
        },
        plugins: [ChartDataLabels],
      });
    }
  }, [folha, rat]);

  return (
    <div className={styles.container}>
      <section>
        <h2 id="simulador" className={`${styles.title} title one`}>
          📊 Simulador de Impacto Financeiro
        </h2>
        <p className={styles.subtitle}>
          Ajuste os valores e veja o{" "}
          <em>
            <strong className="primary">impacto anual do FAP</strong>
          </em>{" "}
          nos seus custos.
        </p>

        <div className={styles.card}>
          <div className={styles.simuladorGrid}>
            <div className={styles.inputs}>
              <label>Folha de Pagamento Mensal</label>
              <input
                type="range"
                min="100000"
                max="5000000"
                step="10000"
                value={folha}
                onChange={(e) => setFolha(parseFloat(e.target.value))}
                style={{
                  "--value": folha,
                  "--min": 100000,
                  "--max": 5000000,
                }}
              />
              <div className={styles.valor}>{formatCurrency(folha)}</div>

              <label>Alíquota RAT</label>
              <div className={styles.ratBtns}>
                {[0.01, 0.02, 0.03].map((valor) => (
                  <a
                    key={valor}
                    href="#"
                    className={`${styles.ratBtn} ${
                      rat === valor ? styles.active : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault(); // impede o scroll da âncora
                      setRat(valor);
                    }}
                  >
                    {valor * 100}%
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.resultados}>
              <p>
                Com um FAP (ruim), seu custo <strong>anual</strong> pode chegar
                a:
              </p>
              <div className={styles.malus}>
                {formatCurrency(custoMaximoAnual)}
              </div>
              <p>
                Custo adicional:{" "}
                <strong className={styles.accent}>
                  {formatCurrency(extraCost)}
                </strong>
              </p>
              <hr />
              <p>Com um FAP Bônus (bom), sua economia anual pode ser:</p>
              <div className={styles.bonus}>{formatCurrency(savings)}</div>
            </div>
          </div>

          <div className={styles.chartWrapper}>
            <div className={styles.chartContainer}>
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </section>
      o homem tem que estar de epi
    </div>
  );
};
