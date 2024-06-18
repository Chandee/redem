"use client";

import Image from "next/image";
import Container from "../components/base/Container";
import Heading from "../components/base/Heading";
import Display from "../components/base/Display";
import Text from "../components/base/Text";
import Button from "../components/base/Button";
import BoxFerramenta from "../components/box/BoxFerramenta";
import BoxCategoria from "../components/box/BoxCategoria";
import BoxTreinamento from "../components/box/BoxTreinamento";
import BoxData from "../components/box/BoxData";
import SelectBox from "../components/SelectBox";
import BoxEspeciais from "../components/box/BoxEspeciais";
import BoxIcon from "../components/box/BoxIcon";
import Icon from "../components/base/Icon";
const Home = () => {
  return (
    <main className="font-montserrat">
      <header>
        <Container className={"my-[20px]"}>
          <ul className="flex">
            <li>
              <a className="font-montserrat text-xs mr-4">
                Políticas de Privacidade
              </a>
            </li>
            <li>
              <a className="font-montserrat text-xs ">Termos de Uso</a>
            </li>
            <li className=" ml-auto">
              <Image
                src="/img/acessibilidade.svg"
                alt="Acessibilidade"
                width={200}
                height={30}
              />
            </li>
          </ul>
        </Container>
      </header>
      <section className="bg-laranja pb-[90px] pt-4">
        <Container>
          <nav>
            <ul className="flex">
              <li>
                <Image src="/img/logo.svg" alt="Logo" width={154} height={80} />
              </li>
              <li className="ml-auto self-center mr-5 text-white">
                <Text textType="a" sizes={"L2"}>
                  PÁGINA INICIAL
                </Text>
              </li>
              <li className="self-center text-white mr-5">
                <Text textType="a" sizes={"L2"}>
                  CONSULTAS
                </Text>
              </li>
              <li className="self-center text-white mr-5">
                <Text textType="a" sizes={"L2"}>
                  PROJEÇÕES
                </Text>
              </li>
              <li className="self-center text-white mr-5">
                <Text textType="a" sizes={"L2"}>
                  PERFIL DOS CANDIDATOS
                </Text>
              </li>
              <li className="self-center text-white mr-5">
                <Text textType="a" sizes={"L2"}>
                  SOBRE O PROJETO
                </Text>
              </li>
              <li className="self-center text-white mr-5">
                <Text textType="a" sizes={"L2"}>
                  BLOG
                </Text>
              </li>
              <li className="self-center text-white">
                <Button textType="a" sizes={"L2"}>
                  <Text sizes={"L2"}>ELEIÇÕES 2024</Text>
                </Button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center mt-10 text-white">
            <div className=" flex-1">
              <div className=" max-w-[432px]">
                <Display displayStyle={"D1"}>Conheça o Portal Redem</Display>
                <Text sizes={"S1"}>
                  Transformando dados eleitorais em análises para toda a
                  sociedade
                </Text>
              </div>
            </div>
            <div className="flex-1 ">
              <div className="max-w-[460px]">
                <Text sizes={"B1"}>
                  No Portal Redem os dados eleitorais são analisados e
                  apresentados de forma detalhada. Aqui você encontrará
                  indicadores exclusivos e informações essenciais para
                  compreender dados eleitorais sensíveis. Junte-se a nós e
                  transforme a maneira como você compreende as eleições no
                  Brasil.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-24">
            <BoxFerramenta
              imagem={"/img/cruzdados.svg"}
              titulo={"Cruzamentos e Dados Eleitorais"}
              subtitulo={"Consectetur adipiscing uspendisse non odio."}
            />
            <BoxFerramenta
              imagem={"/img/indicadores.svg"}
              titulo={"Cruzamentos e Dados Eleitorais"}
              subtitulo={"Consectetur adipiscing uspendisse non odio."}
            />
            <BoxFerramenta
              imagem={"/img/aprenda.svg"}
              titulo={"Cruzamentos e Dados Eleitorais"}
              subtitulo={"Consectetur adipiscing uspendisse non odio."}
            />
            <BoxFerramenta
              imagem={"/img/comunicacao.svg"}
              titulo={"Cruzamentos e Dados Eleitorais"}
              subtitulo={"Consectetur adipiscing uspendisse non odio."}
            />
          </div>
        </Container>
      </section>
      <section className="pt-[90px] pb-[120px]">
        <Container>
          <div className="max-w-[854px] mb-8">
            <Heading headingLevel={2}>Análises e Treinamentos </Heading>
            <Text sizes={"B1"}>
              Aprofunde seu conhecimento sobre dados eleitorais com conteúdos e
              guias que tornarão a sua experiência nos uso dos dados eleitorais
              mais intuitiva e fundamentada.
            </Text>
          </div>
          <div className="flex gap-[58px]">
            <div className="h-[480px] ">
              <BoxCategoria
                titulo={
                  "Eleições 2024: Conheça o histórico dos candidatos da sua cidade"
                }
                subtitulo={
                  "Antes de votar, confira o material informativo que preparamos com tudo que você precisa saber sobre suas opções de voto para prefeito e vereadores da sua cidade."
                }
                imagem={"/img/dados.svg"}
              >
                box tiltulo
              </BoxCategoria>
            </div>

            <div className="">
              <div className="flex flex-col gap-[24px]">
                <div className="h-[227px]">
                  <BoxTreinamento
                    customHeight={90}
                    titulo={
                      "Eleições 2024: Conheça o histórico dos candidatos da sua cidade"
                    }
                    imagem={"/img/dados2.svg"}
                  >
                    box tiltulo
                  </BoxTreinamento>
                </div>
                <div className="h-[227px]">
                  <BoxTreinamento
                    customHeight={90}
                    titulo={
                      "Eleições 2024: Conheça o histórico dos candidatos da sua cidade"
                    }
                    imagem={"/img/dados2.svg"}
                  >
                    box tiltulo
                  </BoxTreinamento>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-laranja py-[80px]">
        <Container>
          <div className="flex">
            <div className="text-white flex-1 flex">
              <div className="max-w-[440px] content-center">
                <Heading headingLevel={2} className="font-bold">
                  Big Numbers
                </Heading>
                <Text sizes={"B1"} className="py-[24px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non odio sit amet massa lobortis scelerisque.
                  Integer gravida nulla ipsum, in convallis nisi mollis nec. Nam
                  vulputate ipsum.
                </Text>
                <Button>
                  <Text sizes={"C1"} className="font-bold">
                    Saiba mais
                  </Text>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px]	flex-1">
              <BoxData
                numero={"+73"}
                titulo={"Pesquisadores e pesquisadoras envolvidos"}
                texto={
                  "Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
                }
              >
                box
              </BoxData>
              <BoxData
                numero={"6243"}
                titulo={"Dados processados"}
                texto={
                  "Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
                }
              >
                box
              </BoxData>

              <BoxData
                numero={"+180"}
                titulo={"Variáveis"}
                texto={
                  "Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
                }
              >
                box
              </BoxData>
              <BoxData
                numero={"+1200"}
                titulo={"Cruzamentos possíveis"}
                texto={
                  "Consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis"
                }
              >
                box
              </BoxData>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-[72px] pb-[78px]">
        <Container>
          <SelectBox
            titulo={"Como fazer os cruzamentos"}
            subtitulo={
              "Aprenda como criar visualizações, escolhendo variáveis e criando cruzamentos com dados eleitorais."
            }
            texto={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis nisi mollis ec.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Suspendisse non odio sit amet massa lobortis scelerisque. Integer gravida nulla ipsum, in convallis nisi mollis nec. Nam vulputate ipsum. Suspendisse non odio sit amet massa lobortis scelerisque. Integer gravida nulla ipsum.`}
          />

          <div className="mt-[120px]">
            <div className="flex mb-[30px]">
              <Heading headingLevel={2} sizes={"H2"} className="font-bold ">
                Conteúdos especiais
              </Heading>{" "}
              <Text
                textType="a"
                sizes={"C1"}
                className="text-laranja content-end ml-auto flex"
              >
                Ver todos artigos
                <div className="ml-4">
                  <Image
                    src={"/img/voltarIcon.svg"}
                    height={16}
                    width={16}
                    className="h-4 w-4"
                  />
                </div>
              </Text>
              {/* pode ser um botao aqui no lugar do a (depois que estiver pronto)*/}
            </div>
            <div className="flex justify-between gap-8">
              <BoxEspeciais
                titulo={"Lorem ipsum dolor sit amet sectetur dolor sit"}
                subtitulo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis."
                }
                imagem={"/img/dados.svg"}
              />
              <BoxEspeciais
                titulo={"Lorem ipsum dolor sit amet sectetur dolor sit"}
                subtitulo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis."
                }
                imagem={"/img/dados.svg"}
              />
              <BoxEspeciais
                titulo={"Lorem ipsum dolor sit amet sectetur dolor sit"}
                subtitulo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis."
                }
                imagem={"/img/dados.svg"}
              />
              <BoxEspeciais
                titulo={"Lorem ipsum dolor sit amet sectetur dolor sit"}
                subtitulo={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio sit amet massa lobortis."
                }
                imagem={"/img/dados.svg"}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-laranja py-[80px]">
        <Container className={"w-[770px]"}>
          <div className="text-white text-center mb-11">
            <Heading
              headingLevel={2}
              className="font-bold text-[30px] mb-[22px]"
            >
              Entre em contato com a equipe do Portal Redem
            </Heading>{" "}
            <Text className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse non odio sit amet massa lobortis scelerisque. Integer
              gravida nulla ipsum, in convallis nisi mollis nec. Nam vulputate
              ipsum.
            </Text>
          </div>
          <div className="flex justify-between">
            <BoxIcon texto={"Canal de denúncia"} imagem={"/img/megafone.svg"} />
            <BoxIcon texto={"Atendimento Redem"} imagem={"/img/headset.svg"} />
            <BoxIcon texto={"Reportar Erro"} imagem={"/img/error.svg"} />
            <BoxIcon texto={"Elogios ao projeto"} imagem={"/img/estrela.svg"} />
          </div>
        </Container>
      </section>
      <footer className="bg-black text-white">
        <Container>
          <div className="flex py-[90px] gap-10">
            <div className="w-[340px] mr-[160px]">
              <Image src="/img/logo.svg" alt="Logo" width={154} height={80} />
              <Text className="text-[18px] my-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </Text>
              <div className="flex gap-4">
                <Icon imagem={"/img/Facebook.svg"} width={9} />
                <Icon imagem={"/img/Twitter.svg"} width={18} />
                <Icon imagem={"/img/LinkedIn.svg"} width={18} />
                <Icon imagem={"/img/YouTube.svg"} width={18} />
              </div>
            </div>
            <div>
              <Heading
                headingLevel={3}
                sizes={"h6"}
                className="font-bold mb-10"
              >
                OVERVIEW
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text textType="a" className="text-[18px]">
                    Consultas
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Projeções
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Perfil dos candidatos
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Sobre o projeto
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Blog
                  </Text>
                </li>
              </ul>
            </div>
            <div className="w-[216px]">
              <Heading
                headingLevel={3}
                sizes={"h6"}
                className="font-bold mb-10"
              >
                FERRAMENTAS
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text textType="a" className="text-[18px]">
                    Cruzamentos e Dados Eleitorais
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Indicadores e Índices Especiais
                  </Text>{" "}
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Aprenda a usar os Indicadores
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Comunicação Científica
                  </Text>
                </li>
              </ul>
            </div>
            <div>
              <Heading
                headingLevel={3}
                sizes={"h6"}
                className="font-bold mb-10"
              >
                ATENDIMENTO
              </Heading>
              <ul className="space-y-2">
                <li>
                  <Text textType="a" className="text-[18px]">
                    Suporte Técnico{" "}
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Falar com Analista{" "}
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Reportar Erro
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Fazer Denúncia
                  </Text>
                </li>
                <li>
                  <Text textType="a" className="text-[18px]">
                    Contato
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className="w-full h-[1px] bg-white"></div>
        <Container>
          <div className="text-center py-7">
            <Text sizes={"l1"}>
              Copyright © 2024 ARW Consultoria. Todos os direitos reservados.
              Desenvolvido por Agência WDK
            </Text>
          </div>
        </Container>
      </footer>
    </main>
  );
};

export default Home;
