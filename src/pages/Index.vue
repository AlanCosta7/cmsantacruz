<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-page-container>
      <q-page id="onHome" class="flex flex-center relative-position">
        <div
          class="example-state rounded-borders text-center fixed-top q-mt-md q-ml-md q-mr-lg text-black z-max"
        >
        </div>

        <q-parallax :height="600" class="" style="width: 100vw">
          <template v-slot:media style="width: 100vw">
            <video height="1080" autoplay loop muted>
              <source type="video/webm" src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/videoCM.webm?alt=media&token=a7f4c42c-22cd-4e5e-ae36-1ec1566fb80a">
              <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/videoCM.mp4?alt=media&token=df020bd6-7742-43e5-9e42-dd02d14d185c">
            </video>
          </template>
          <div class="q-ma-lg"><q-img
            src="../assets/logoCM.png"
            width="250px"
            spinner-color="primary"
            spinner-size="82px"
          /></div>
          <div class="text-white q-pa-md text-h2 text-bold text-center z-top">Bem-vindo ao Centro Médico Santa Cruz da Serra</div>
          <div class="text-h6 q-pa-md text-green-14 text-center z-top">EXCELÊNCIA E SAÚDE PARA A SUA FAMÍLIA</div>
        </q-parallax>
        <div v-intersection="onIntersection" class="full-width">
        <q-toolbar class="bg-primary mobile-hide text-white row justify-center z-max" :class="visibleClass">
          <div class="row justify-center" style="max-width:1200px; width:100vw"  >
            <div class="row mobile-hide q-gutter-md">
              <q-btn flat @click="onHome" dense label="Home" />
              <q-btn flat @click="onEmpresa" dense label="Empresa" />
              <q-btn flat @click="onEspecialidades" dense label="Especialidades" />
              <q-btn flat @click="onContato" dense label="Contato" />
            </div>
          </div>
        </q-toolbar>
        </div>
        <div id="onEmpresa" class="flex flex-center bg-white q-pa-md row justify-center">
          <div class="q-pa-md q-gutter-xl row q-my-md justify-center">
            <div class="text-h4 text-primary text-bold col-12 text-center">QUEM SOMOS</div>
              <div class="q-pa-none" style="max-width: 900px">
                  <div class="text-h6 text-weight-light">
                  <p>O <b>Centro Médico Santa Cruz da Serra</b> foi idealizado com intuito de oferecer mais do que infraestrutura de qualidade e uma equipe qualificada, sua proposta de atuação considera a sutileza dos detalhes para oferecer um serviço diferenciado que se caracteriza pela <b>excelência em saúde para sua família</b>, personalização do atendimento, integrando de forma ímpar informação, tecnologia e novos tratamentos para diagnósticos e acompanhamento da saúde de seus pacientes. Temos um <b>ambiente cuidadosamente planejado</b> para oferecer a tranquilidade, conforto e bem estar que você e sua família merece. E mais, <b>consultas e exames com preços acessíveis</b>.</p>
                  <p>Prestamos serviços médicos com equipe qualificada, por meio de <b>processos otimizados</b> e <b>atendimento humanizado</b>, visando sempre a satisfação do paciente. E continuamos a investir em estrutura, tecnologia e qualidade para oferecer sempre o melhor em serviços médicos.</p>
                  </div>
              </div>
            </div>

            <div class="row">
              <div class="column col-lg-7 q-gutter-md">
                <div>
                  <div class="text-h6">CONFIRA NOSSA MISSÃO, VISÃO E IMAGEM:</div>
                </div>
                <div class="row q-gutter-md">
                  <div class="col-1">
                    <q-icon color="primary" size="lg" name="medical_services" />
                  </div>
                  <div class="col">
                    <div class="text-h6">MISSÃO</div>
                    <div class="text-subtitle1">Ser o melhor centro médico especializado da região, ao alcance de todos.</div>
                  </div>
                </div>
                <div class="row q-gutter-md">
                  <div class="col-1">
                    <q-icon color="primary" size="lg" name="bookmark" />
                  </div>
                  <div class="col">
                    <div class="text-h6">VISÃO</div>
                    <div class="text-subtitle1">Dar atendimento especializado de qualidade conforme os custos e necessidade de todos.</div>
                  </div>
                </div>
                <div class="row q-gutter-md">
                  <div class="col-1">
                    <q-icon color="primary" size="lg" name="grade" />
                  </div>
                  <div class="col">
                    <div class="text-h6">IMAGEM</div>
                    <div class="text-subtitle1">Excelência em saúde para sua família.</div>
                  </div>
                </div>
              </div>
              <div class="q-mx-sm q-my-xl col-lg-4">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/cmSCC.jpg?alt=media&token=50e66655-ca26-420a-820a-e1d854723227"
                  style="width: 90vw; max-width: 600px"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
            </div>
        </div>
        <div id="onEmpresa" class="bg-teal row justify-center q-py-xl atuacao">
          <div class="col-12 q-my-xl q-ma-md">
            <div class="text-h4 text-white text-bold col-lg-12 text-center">NOSSA ESTRUTURA</div>
            <div class="text-h6 text-center col-lg-12 text-white">Conforto, Preço e Qualidade para quem mais merece: você.</div>
          </div>

          <div class="col-12 mobile-only">
            <q-carousel
              v-model="slide"
              transition-prev="jump-right"
              transition-next="jump-left"
              swipeable
              animated
              control-color="white"
              prev-icon="navigate_before"
              next-icon="navigate_next"
              arrows
              height="300px"
              class="bg-teal text-white shadow-1 rounded-borders"
            >
              <q-carousel-slide name="um" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img1.jpeg?alt=media&token=d9b5a940-a990-446f-94f5-22657de49797 "
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
              <q-carousel-slide name="dois" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img2.jpeg?alt=media&token=1592e0f6-81fd-4c36-aaea-31e052baa1d4"
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
              <q-carousel-slide name="tres" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img3.jpeg?alt=media&token=2fd0f075-e567-4aa7-bc3a-627c38b056db"
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
              <q-carousel-slide name="quatro" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img4.jpeg?alt=media&token=521f6b29-d045-4e1c-a691-885ed9593d55"
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
              <q-carousel-slide name="cinco" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/Sem%20ti%CC%81tulo-1_Prancheta%201.jpg?alt=media&token=9e7af3e4-d77d-4b75-84cb-2d563db23f15"
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
              <q-carousel-slide name="seis" class="column no-wrap flex-center">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img6.jpeg?alt=media&token=b2b21762-e68a-4272-8079-e7781be57da8"
                  :ratio="16/10"
                  width="90vw"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </q-carousel-slide>
            </q-carousel>
          </div>

          <div class="col-12 mobile-hide text-center row wrap justify-center items-center content-center">
            <div class="col-12 row justify-center">
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img1.jpeg?alt=media&token=d9b5a940-a990-446f-94f5-22657de49797 "
                  :ratio="16/10"
                  width="400px"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img2.jpeg?alt=media&token=1592e0f6-81fd-4c36-aaea-31e052baa1d4"
                  width="400px"
                  :ratio="16/10"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img3.jpeg?alt=media&token=2fd0f075-e567-4aa7-bc3a-627c38b056db"
                  :ratio="16/10"
                  width="400px"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
            </div>
            <div class="col-12 row justify-center">
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img4.jpeg?alt=media&token=521f6b29-d045-4e1c-a691-885ed9593d55"
                  width="400px"
                  :ratio="16/10"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/Sem%20ti%CC%81tulo-1_Prancheta%201.jpg?alt=media&token=9e7af3e4-d77d-4b75-84cb-2d563db23f15"
                  :ratio="16/10"
                  width="400px"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
              <div class="col q-ma-md">
                <q-img
                  src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/img6.jpeg?alt=media&token=b2b21762-e68a-4272-8079-e7781be57da8"
                  width="400px"
                  :ratio="16/10"
                  spinner-color="primary"
                  spinner-size="82px"
                />
              </div>
            </div>
          </div>

        </div>

        <div id="onEspecialidades" class="flex flex-center bg-white q-pa-md row justify-center">
          <div class="q-pa-md q-gutter-xl row q-my-md justify-center">
            <div class="text-h4 text-primary text-bold col-12 text-center">NOSSAS ESPECIALIDADES</div>
            <div class="text-h6 text-center col-lg-12 text-grey">Pensando sempre no seu bem estar, procuramos reunir os melhores profissionais. Confira as nossas especialidades.</div>
            <div class="row full-width q-gutter-md justify-evenly items-center">
              <div class="col-xs-12 col-lg-auto" style="max-width: 350px">

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Cardiologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>Cardiologia é a especialidade médica que se ocupa do diagnóstico e tratamento das doenças que acometem o coração bem como os outros componentes do sistema circulatório. Agende aqui sua consulta</p>
                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Medicina do trabalho"
                >
                  <q-card>
                    <q-card-section>
                      <p>Medicina do trabalho é um ramo da medicina que lida com as relações entre homens e mulheres trabalhadores e seu trabalho, visando não somente a prevenção dos acidentes e das doenças do trabalho, mas a promoção da saúde e da qualidade de vida.</p>
                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Geriatria"
                >
                  <q-card>
                    <q-card-section>
                      <p>Medicina geriátrica ou geriatria é o ramo da medicina que foca o estudo, a prevenção e o tratamento de doenças e da incapacidade em idades avançadas. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Endocrinologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>Endocrinologia é uma especialidade médica que estuda as ordens do sistema endócrino e suas secreções específicas, chamadas de secreções fisiológicas. Agende aqui sua consulta</p>
                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Nutrologia e Metabologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>Nutrologia é a especialidade médica clínica que se dedica ao diagnóstico, prevenção e tratamento de doenças do comportamento alimentar. A Metabologia é o ramo da medicina que trata de problemas relativos ao metabolismo, como diabetes tipo 1 e tipo 2, obesidade, dislipidemia, entre outros. Agende aqui sua consulta</p>
                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>
              <div class="col-xs-12 col-lg-auto" style="max-width: 350px">

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Ortopedia"
                >
                  <q-card>
                    <q-card-section>
                      <p>A ortopedia é a especialidade médica que cuida da saúde relacionadas aos elementos do aparelho locomotor, como ossos, músculos, ligamentos e articulações. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Urologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>Urologia é uma especialidade cirúrgica da medicina que trata do trato urinário de homens e de mulheres e do sistema reprodutor das pessoas do sexo masculino. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Pediatria"
                >
                  <q-card>
                    <q-card-section>
                      <p>A pediatria é a especialidade médica dedicada à assistência à criança e ao adolescente, nos seus diversos aspectos, sejam eles preventivos ou curativos. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Ginecologia e Obstetrícia"
                >
                  <q-card>
                    <q-card-section>
                      <p>A ginecologia é a prática da medicina que lida diretamente com a saúde do aparelho reprodutor feminino e mamas. A obstetrícia é o ramo da medicina que estuda a reprodução na mulher. Investiga a gestação, o parto e o puerpério nos seus aspectos fisiológicos e patológicos. Agende aqui sua consulta</p>
                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Neurologia Adulto e Infantil"
                >
                  <q-card>
                    <q-card-section>
                      <p>O neurologista é um médico clínico que se dedica ao diagnóstico e tratamento das doenças neurológicas. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>
              <div class="col-xs-12 col-lg-auto" style="max-width: 350px">
                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Psiquiatria"
                >
                  <q-card>
                    <q-card-section>
                      <p>Psiquiatria é uma das especialidades da Medicina, e basicamente é responsável pelo diagnóstico e tratamento dos chamados Transtornos Mentais e de Comportamento, atuando com a prevenção, o diagnóstico, o tratamento e a reabilitação dos diferentes modos de manifestações das doenças mentais em geral. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Psicologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>Psicologia é uma profissão, disciplina acadêmica e ciência que trata da mente, do estudo e análise de seus processos e comportamento de indivíduos e grupos humanos em diferentes situações. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Dermatologia"
                >
                  <q-card>
                    <q-card-section>
                      <p>A Dermatologia é uma especialidade médica cuja área de conhecimento se concentra no diagnóstico, prevenção e tratamento de doenças e afecções relacionadas à pele, pelos, mucosas, cabelo e unhas. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>


                <q-expansion-item
                  expand-separator
                  header-class="text-h6"
                  label="Nutricionista"
                >
                  <q-card>
                    <q-card-section>
                      <p>O nutricionista é o profissional da saúde que estuda os alimentos e seus efeitos no organismo humano. Agende aqui sua consulta</p>

                      <q-btn color="positive" label="Agendar agora"  @click="onWhatsapp" >
                      </q-btn>

                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </div>
            </div>
          </div>
        </div>

        <div>
          <q-img
            src="https://firebasestorage.googleapis.com/v0/b/dr-ricardosouza.appspot.com/o/section-bg2.jpg?alt=media&token=c5665140-0ae4-4673-b82c-cb0814bf9178"
            width="100vw"
            height="400px"
            spinner-color="primary"
            spinner-size="82px"
          >
          <div div class="absolute-full text-h3 text-weight-light flex flex-center">EXCELÊNCIA EM SAÚDE <b class="q-mx-md"> PARA A SUA FAMÍLIA</b> </div>
          </q-img>
        </div>


          <q-card class="q-ma-md">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="white"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="Vanisia" label="UNIDADE I" />
              <q-tab name="Centro" label="UNIDADE II" />
            </q-tabs>

            <q-separator />
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="Vanisia">
                <div id="onContato" style="min-height: 500px" class="q-pa-md row wrap justify-center items-start content-center">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  column" >
                    <div class="row q-my-sm justify-center items-center q-gutter-sm">
                      <q-icon class="col-1" name="room" color="primary" />
                      <div class="col">
                      <b>ENDEREÇO:</b> Rua Vanísia, 10 - Santa Cruz da Serra, Duque de Caxias - RJ.
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="phone" color="primary" />
                      <div class="col">
                        <b>TELEFONE:</b> 21 3939-3963 | 3939-3964
                      </div>
                      <div class="">
                        <q-btn color="positive" class="q-px-sm" outline @click="onWhatsapp" >
                          <img style="width:20px" class="q-mr-md" src="../assets/whatsapp.png" alt="whatsapp">
                          whatsapp
                        </q-btn>
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="email" color="primary" />
                      <div class="col">
                        <div><b>E-MAIL:</b></div>
                        <div class="text-subtitle1"><span>contato@cmsantacruzdaserra.com.br</span></div>
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="access_time" color="primary" />
                      <div class="col">
                      <b>HORÁRIO:</b> Segunda - Sexta: 8 horas - 17 horas
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md q-ma-none">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2026063191947!2d-43.28757108503898!3d-22.646233385144978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99731bfeaa369f%3A0xb87a2c971a32e543!2sCentro%20M%C3%A9dico%20Santa%20Cruz%20da%20Serra!5e0!3m2!1spt-BR!2sbr!4v1616696520393!5m2!1spt-BR!2sbr" style="border:0; width: 70vw; max-width: 500px; height: 400px;" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Centro">
                <div id="onContato" style="min-height: 500px" class="q-pa-md row wrap justify-center items-start content-center">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  column" >
                    <div class="row q-my-sm justify-center items-center q-gutter-sm">
                      <q-icon class="col-1" name="room" color="primary" />
                      <div class="col">
                      <b>ENDEREÇO:</b> Rua Regina Lucia, 35 loja C/01 - Santa Cruz da Serra, Duque de Caxias - RJ.
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="phone" color="primary" />
                      <div class="col">
                        <b>TELEFONE:</b> 21 3939-3963
                      </div>
                      <div >
                        <q-btn color="positive" class="q-px-sm" outline @click="onWhatsapp" >
                          <img style="width:20px" class="q-mr-md" src="../assets/whatsapp.png" alt="whatsapp">
                          whatsapp
                        </q-btn>
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="email" color="primary" />
                      <div class="col">
                        <div><b>E-MAIL:</b></div>
                        <div class="text-subtitle1"><span>contato@cmsantacruzdaserra.com.br</span></div>
                      </div>
                    </div>

                    <div class="row q-my-sm items-center q-gutter-sm">
                      <q-icon class="col-1" name="access_time" color="primary" />
                      <div class="col">
                      <b>HORÁRIO:</b> Segunda - Sexta: 8 horas - 18 horas
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-md q-ma-none">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.3012765861495!2d-43.284535985039255!3d-22.6425530851469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bb3402f00d338d3!2sCentro%20M%C3%A9dico%20Santa%20Cruz%20da%20Serra%20-%20Unidade%20II!5e0!3m2!1spt-BR!2sbr!4v1618499583201!5m2!1spt-BR!2sbr" style="border:0; width: 70vw; max-width: 500px; height: 400px;" allowfullscreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>


        <footer class="bg-black full-width">
          <div class="row" style="max-width: 900px">
            <div class="col">
                <img src="../assets/logoCM-BR.png" class="q-ma-md" alt="logo" width="150px">
            </div>
            <div class="col row flex flex-center" style="max-width: 150px">
                <div class="col">
                    <q-btn flat icon="check" round @click="onClickFacebook">
                      <img src="../assets/facebook.svg" width="30px" alt="facebook">
                    </q-btn>
                </div>
                <div class="col">
                    <q-btn flat icon="check" round @click="onClickInstagram">
                      <img src="../assets/instagram.svg" width="30px" alt="instagram">
                    </q-btn>
                </div>
            </div>
          </div>
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PageIndex',
  data() {
    return {
      visible: false,
      slide: 'um',
      autoplay: true,
      tab: 'Vanisia',
    }
  },
  computed: {
    visibleClass () {
      if (this.visible) {
        return ''
      } else {
        return 'fixed-top'
      }
    }
  },
  methods: {
    onIntersection (entry) {
      this.visible = entry.isIntersecting
    },
    onHome() {
        var scrollDiv = document.getElementById("onHome").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    },
    onEmpresa() {
        var scrollDiv = document.getElementById("onEmpresa").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    },
    onEspecialidades() {
        var scrollDiv = document.getElementById("onEspecialidades").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    },
    onContato() {
        var scrollDiv = document.getElementById("onContato").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
    },
    onWhatsapp() {
      var tel = '21974593001'
      openURL(`https://api.whatsapp.com/send?phone=+55${tel}`);
    },
    onClickFacebook() {
      openURL('https://www.facebook.com/CentroMedicoSantaCruzDaSerra');
    },
    onClickInstagram() {
      openURL('https://www.instagram.com/cm.santacruzdaserra/');
    }
  },
}
</script>
