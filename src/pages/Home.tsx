
import SpreadMechanism from "../assets/mecanismo-spread.png";
import CMDBDash from "../assets/cmdb-dash.png";
import CMDBInfo from "../assets/informacoes-agente-cmdb.png";
import APIAgente from "../assets/api-agente.png";
import AIProactive from "../assets/ai-proactive.png";
import PresentationVideo from "../assets/presentation.mp4";

import { Card } from "../components/Card/Card";
import { CContainer, CFooter, CImage, CLink } from "@coreui/react";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <CContainer
        style={{ background: "#041727ff" }}
        fluid
        className="main-container d-flex text-white flex-column align-items-center justify-content-center"
      >
        <h1 className=" pt-2">Spread IA</h1>
        <h6 className="text-center">Gerencie seus ativos como nunca antes</h6>

        {/* <img className="rounded w-25" src={SpreadBG}></img> */}

        <video controls className="w-50 rounded .embed-responsive-item" src={PresentationVideo}></video>

        <p
          style={{ background: "#072035ff" }}
          className="mt-2  rounded px-2 py-3 w-50"
        >
          Não dependa de softwares separados para gestão de inventários,
          deployments e relatórios customizados. Com o Spread, você tem tudo
          isso num lugar só. E o melhor de tudo: você conta com um agente de IA
          para tornar a gestão do seu parque fácil como nunca antes foi.
        </p>
      </CContainer>
      <CContainer
        style={{ background: "#072b49ff" }}
        fluid
        className=" d-flex  mt-0 border p-5 flex-column align-items-center justify-content-center text-white w-100"
      >
        <h1>Centralize todo o seu parque de TI</h1>
        <CContainer
          fluid
          className="d-flex card-container gap-4 py-3 justify-content-center w-100"
        >
          <Card
            text="Informações centralizadas em um dashboard, facilitando sua visão de seus ativos."
            title="CMDB"
            src={CMDBDash}
          ></Card>

          <Card
            text="Instale o agente nas máquinas-alvo e colete informações quase em tempo real para seu CMDB."
            title="Agente de CMDB"
            src={CMDBInfo}
          ></Card>

          <Card
            text="Execute comandos, instale softwares e corrija problemas em máquinas ou grupos de ativos utilizando a API Rest do agente de spread."
            title="Agente de CMDB"
            src={APIAgente}
          ></Card>

          <Card
            text="Instale o agente da Spread IA em máquinas-chave das suas subredes e faça essas máquinas espalharem os agentes pelas demais."
            title="Mecanismo de Spread"
            src={SpreadMechanism}
          ></Card>
        </CContainer>
      </CContainer>
      <CContainer
        style={{ background: "#0e3b61ff" }}
        fluid
        className=" d-flex  mt-0 border p-5 flex-column align-items-center justify-content-center text-white"
      >
        <h1>Automatize tarefas e corrija problemas silenciosamente</h1>
        <CContainer className="d-flex gap-4 py-3 align-items-center justify-content-center">
          <div className="d-flex flex-column gap-4  align-items-center ">
            <CImage className="w-50 rounded" src={AIProactive}></CImage>
            <div className="d-flex gap-2 align-items-center justify-content-center">
              <p
                style={{ background: "#205580ff" }}
                className="mt-2  rounded px-2 py-3 w-75 text-center"
              >
                Aproveite-se do agent para automatizar tarefas de rotinas em
                suas máquinas e servidores.
              </p>
              <p
                style={{ background: "#205580ff" }}
                className="mt-2 rounded px-2 py-3 w-75 text-center"
              >
                Resolva erros de serviços conhecidos e instale softwares
                relevantes para sua operação.
              </p>
              <p
                style={{ background: "#205580ff" }}
                className="mt-2  rounded px-2 py-3 w-75 text-center"
              >
                Utilize inteligência artificial para fornecer insights de
                melhorias de ambiente.
              </p>
            </div>
          </div>
        </CContainer>
      </CContainer>
      <CFooter className="bg-secondary text-white">
        <div>
          <CLink className="text-white" href="#">
            SpreadIA
          </CLink>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </CFooter>
    </div>
  );
};

export default Home;
