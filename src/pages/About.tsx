import { CContainer } from "@coreui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ background: "#041727ff", height: "100vh" }}>
      <h1 className="text-white mx-2">Sobre o projeto</h1>
      <CContainer
        style={{ background: "#041727ff" }}
        className="d-flex flex-column text-white"
        fluid
      >
        <p>
          Este projeto é um protótipo de uma ideia que será enviada ao concurso
          do{" "}
          <Link
            target="_blank"
            className="text-warning"
            to="https://premionuvini.com.br/"
          >
            Prêmio Nuvini.
          </Link>
        </p>

        <p>
          A página inicial representa uma ideia sobre um conceito concebido a
          partir de experiências e dores de vivência em ambientes corporativos.
          Na experiência dos envolvidos no projeto, as ferramentas de mercado
          atual possuem dificuldade em se destacar nos dois âmbitos: CMDB e
          Deployments. No geral, muitas funcionam muito bem em um dos aspectos e
          deixam a desejar no outro.
        </p>

        <p>
          A proposta é desenvolver uma ferramenta que faz os dois com
          excelência, com baixo custo e utilizando inteligência artificial na
          operação no negócio.
        </p>
      </CContainer>
      <CContainer
        style={{ background: "#040e16ff" }}
        className="d-flex flex-column text-white"
        fluid
      >
        <h1>Como a Inteligência Artificial será usada?</h1>
        <p>
          Existem dois ambientes em que podemos fazer uso de inteligência
          artificial: O ativo de destino e o servidor controlador do CMDB.
        </p>


        <h4>No servidor de CMDB</h4>
        <p>É possível utilizar inteligência artificial para obter insights do consolidado de informações coletadas por agente. A partir destas informações é possível fazer previsões de problemas, consolidar falhas de segurança (CVEs, CIS etc) e realizar ações massivas como: instalações de software, execuções de script e alterações de configuração de sistema. </p>

        <h4>No ativo de destino</h4>
        <p>
          Um sistema de IA que faz uso de CPU seria instalado na máquina
          juntamente com um agente e um modelo LLM leve. O agente, após
          instalado, fará uso controlado para que os recursos do ativo não sejam
          exauridos. Apesar de o processo de leitura de modelos LLM serem mais
          favorecidos pelo uso de GPU, este é um recurso que é naturalmente
          caro, para questões operacionais, seria possível utilizar CPU
          localmente, distribuindo a carga para os próprios ativos de destino.
        </p>
        <p>
          É possível enviar informações do ativo quase em tempo real para o
          agente, fazer processamento e detectar falhas com o uso de IA antes
          mesmo do usuário da máquina sentir o erro e reportá-lo. Também é possível detectar falhas críticas de segurança na máquina e já corrigí-las de maneira autônoma.
        </p>
      </CContainer>
    </div>
  );
};

export default About;
