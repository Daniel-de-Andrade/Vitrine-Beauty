import mainbanner from "../../assets/images/mainbanner.jpg";
import semtaxas from "../../assets/images/semtaxas.jpg";
import gratis from "../../assets/images/gratis.jpg";
import rotinaflexivel from "../../assets/images/rotinaflexivel.jpg";
import quadro1 from "../../assets/images/quadro1.jpg";
import quadro2 from "../../assets/images/quadro2.jpg";
import quadro3 from "../../assets/images/quadro3.jpg";
import cabelo from "../../assets/images/cabelo.jpg";
import unhas from "../../assets/images/unhas.jpg";
import sobrancelha from "../../assets/images/sobrancelha.jpg";
import makeup from "../../assets/images/makeup.jpg";
import spa from "../../assets/images/spa.jpg";
import depilacao from "../../assets/images/depilacao.jpg";
import iconappstore from "../../assets/images/iconappstore.jpg";
import icongoogleplay from "../../assets/images/icongoogleplay.jpg";
import mokuploading from "../../assets/images/mokuploading.jpg";
import logovb from "../../assets/images/logovb.jpg";
import "./style.css";

function MainBanner() {
  return (
    <div className="App">
      <div className="main">
        <img src={mainbanner} alt="banner principal" />
      </div>
      <div className="container">
        <div className="form">
          <form>
            <div className="titulos">
              <h1>Alcance sua liberdade profissional já!</h1>
              <h2>
                Preencha o formulário para fazer seu pré-cadastro no APP que vai
                mudar a sua vida
              </h2>
            </div>
            <div className="form__items">
              <div className="form__nome">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  placeholder="Nome"
                  // value={nome}
                  // onChange={(e) => {
                  //   setNome(e.target.value);
                  // }}
                />
              </div>
              <div className="form__email">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form__telefone">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="telefone"
                  name="telefone"
                  id="telefone"
                  required
                  placeholder="Telefone"
                  // value={telefone}
                  // onChange={(e) => setTelefone(e.target.value)}
                />
              </div>
            </div>
            <div className="button">
              <button className="button-enviar">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-vantagens">
        <div className="vantagens">
          <div className="sem-taxas">
            <img src={semtaxas} alt="sem taxas" />
            <h2>Sem taxas</h2>
            <p>Recebe 100% do valor do seu serviço.</p>
          </div>
          <div className="gratis">
            <img src={gratis} alt="gratis" />
            <h2>Grátis</h2>
            <p>Aplicativo gratuito para os profissionais.</p>
          </div>
          <div className="roitna-flexivel">
            <img src={rotinaflexivel} alt="roitna-flexivel" />
            <h2>Rotina Flexível</h2>
            <p>Monte sua prórpia agenda.</p>
          </div>
        </div>
      </div>
      <div className="fotos">
        <img className="foto1" src={quadro1} alt="" />
        <img className="foto2" src={quadro2} alt="" />
        <img className="foto3" src={quadro3} alt="" />
      </div>
      <div className="sobreoapp">
        <div className="texto">
          <p>
            Faça parte do Vitrine Beauty, o aplicativo que proporciona uma
            vitrine virtual para os profissionais de beleza e bem-estar de forma
            <strong> GRATUITA</strong>.
          </p>
        </div>
        <div className="texto">
          <p>
            Com o Vitrine Beauty, cabeleireiros, maquiadores, massagistas e etc.
            podem montar sua própria agenda de acordo com sua rotina e receber
            <strong> 100% do valor do serviço.</strong>
          </p>
        </div>
      </div>
      <div className="servicos-oferecidos">
        <div className="titulo-servicos">
          <h1>Serviços</h1>
          <lh className="linha-titulo-servicos" />
          <h1>Oferecidos</h1>
        </div>
        <div className="cards-servicos">
          <div>
            <img src={cabelo} alt="" />
            <h2>Cabelo</h2>
          </div>
          <div>
            <img src={unhas} alt="" />
            <h2>unhas</h2>
          </div>
          <div>
            <img src={sobrancelha} alt="" />
            <h2>sobrancelha</h2>
          </div>
          <div>
            <img src={makeup} alt="" />
            <h2>make up</h2>
          </div>
          <div>
            <img src={spa} alt="" />
            <h2>spa</h2>
          </div>
          <div classname="img-depilacao">
            <img src={depilacao} alt="" />
            <h2>depilação</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="sobreoapp-servicos">
          <div className="texto-servicos-oferecidos">
            <p>
              Além disso, os profissionais que utilizarem o APP terão a
              <bold> liberdade</bold> de escolher quando e onde vão
              trabalhar.
            </p><br/>
            <p>Não perca tempo e faça já o seu cadastro!</p>.
            <p>
              Apenas algumas vagas restantes estão disponíveis para o lançamento
              do aplicativo e não queremos que você fique de fora!
            </p>
          </div>
          <div className="texto-servicos-oferecidos">
            <p>
              Conquiste novos clientes sem gastar nada e ainda receba o valor
              integral do seu serviço sem nenhuma cobrança de taxa, basta se
              cadastrar e pronto!
            </p><br/>
            <p>Venha fazer parte da revolução do mundo Beauty!</p><br/>
            <strong>Clicou, Beauty!</strong>
          </div>
        </div>
      </div>
      <div className="download-app">
        <div className="baixe-o-app">
          <div className="baixe">
            <h1>Baixe agora mesmo o APP</h1>
          </div>
          <div className="icons-lojas-app">
            <img className="apple" src={iconappstore} alt="" />
            <img className="google" src={icongoogleplay} alt="" />
          </div>
          <div className="instrucoes">
            <ol>
              <li>{`1 - Baixe o APP;`}</li>
              <li>{`2 - Faça seu cadastro;`}</li>
              <li>{`3 - Aproveite sua liberdade;)`}</li>
            </ol>
          </div>
        </div>
        <div className="mockup">
          <img src={mokuploading} alt="" />;
        </div>
      </div>
      <div className="secao-depoimentos">
        <div className="titulo-depoimentos">
          <h1>Depoimentos</h1>
          <lh className="linha-titulo-depoimentos" />
        </div>
        <div className="depoimentos">
          <div className="cards-depoimentos">
            <div className="depoimento"></div>
            <h2>{`NOME DO DEPOENTE`}</h2>
            <p>
              {`<Nome> é um parceiro Vitrine Beauty e hoje ele tem sua rotina dos sonhos.`}
            </p>
          </div>
          <div className="cards-depoimentos">
            <div className="depoimento"></div>
            <h2>{`NOME DO DEPOENTE`}</h2>
            <p>
              {`<Nome> é um parceiro Vitrine Beauty e hoje ele tem sua rotina dos sonhos.`}
            </p>
          </div>
          <div className="cards-depoimentos">
            <div className="depoimento"></div>
            <h2>{`NOME DO DEPOENTE`}</h2>
            <p>
              {`<Nome> é um parceiro Vitrine Beauty e hoje ele tem sua rotina dos sonhos.`}
            </p>
          </div>
          <div className="cards-depoimentos">
            <div className="depoimento"></div>
            <h2>{`NOME DO DEPOENTE`}</h2>
            <p>
              {`<Nome> é um parceiro Vitrine Beauty e hoje ele tem sua rotina dos sonhos.`}
            </p>
          </div>
        </div>
        <lh className="linha-footer" />
      </div>
      <footer className="footer">
        <div>
          <img className="logo" src={logovb} alt="logo" />
        </div>
        <div className="col1-footer">
          <h3>Faça parte</h3>
          <p>
            Seja um profissional Vitrine Beauty. Sua liberdade e independência
            financeira está te esperando. <strong>BAIXE O APP!</strong>
          </p>
        </div>
        <div className="form-footer">
          <form>
            <div className="titulos-footer">
              <h3>Fique ligado</h3>
              <p>Saiba das novidades primeiro.</p>
            </div>
            <div className="form__email-footer">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="button-footer">
              <button className="button-enviar-footer">Enviar</button>
            </div>
          </form>
        </div>
        <div className="col3-footer">
          <h3>BAIXE AGORA MESMO O APP</h3>
          <div className="icons-lojas-app-footer">
            <img className="apple-footer" src={iconappstore} alt="" />
            <img className="google-footer" src={icongoogleplay} alt="" />
          </div>
          <a href="tel:+5531999999999" class="Blondie">
            <strong>Telefone</strong> +55 31 9 9999 9999
          </a>
          <br />
          <a href="mailto:contato@vitrinebeauty.com">
            <strong>Email</strong> contato@vitrinebeauty.com
          </a>
          <br />
        </div>
      </footer>
    </div>
  );
}

export default MainBanner;
