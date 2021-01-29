import React, { useState } from 'react';
import './App.css';
import { Carousel, Card, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

import imgLogo from '../src/assets/Logo.jpg'
import capaLocal from '../src/assets/banner-capa.jpg'

import galery002 from './assets/galeria/002.png'
import galery003 from './assets/galeria/003.png'
import galery004 from './assets/galeria/004.png'
import galery005 from './assets/galeria/005.png'
import galery006 from './assets/galeria/006.png'
import galery007 from './assets/galeria/007.png'
import galery008 from './assets/galeria/008.png'
import galery009 from './assets/galeria/009.png'

import planta001 from './assets/plantas/001.png'
import planta002 from './assets/plantas/002.png'
import planta003 from './assets/plantas/003.png'

function App() {
  const [validated, setValidated] = useState(false);

  function SendEmail(e) {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      setValidated(true);
      emailjs.sendForm('service_dz9n3y8', 'template_newApto', e.target, 'user_ewcrw0Hj1IHBLoQVXzEbS')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset();
      alert('Mensagem Enviada');
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-bar">
          <img src={imgLogo} className="Logo-Img" art="Logo do Empreendimento" />
        </div>

        <div className="Top-Banner">
          <div className="Text-Banner">
            <h1>Bem vindo ao Vivaz - Belém</h1>
            <p>Um empreendimento com tudo que você sempre sonhou</p>
            <a target="_blank" className="links" href="https://api.whatsapp.com/send?phone=5511933136789&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20empreendimento%20Vivaz%20Belem%20que%20encontrei%20no%20site."><button className="btnSabia" >SABIA MAIS</button></a>
          </div>
        </div>
        <div className="Menu-Icons">
          <img src={capaLocal} className="ImgMenuIcons" art="Capa do Empreendimento" />
          <div className="MenuText">
            <h2 style={{ color: '#2fdada' }}>VIVAZ ESTAÇÃO BELÉM</h2>
            <p>Chegou o Vivaz Belém. Um empreendimento com tudo que você sempre sonhou! Localizado a 300m do metrô, com amplo lazer e com todas as facilidades pro Programa Casa Verde e Amarela. Apartamentos com 1 ou 2 quartos, opção de vaga, opção de varanda.</p>
            <a target="_blank" className="links" href="https://www.3dexplora.com.br/seutour.aspx?codigo=qJjsvKM2N8F&play=1&hl=0&qs=1&wh=1&lp=0&ts=1" ><button className="btnSabia-secund"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjkyOTk5OTk5OTk5OTk5OTksMCwwLDAuOTI5OTk5OTk5OTk5OTk5OCwxMi45MjAwMDAwMDAwMDAwMTYsODguMjkxNjYwMTU2MjUwMjMpIj48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMjIuMjg1MTU2IDMzNS42NDQ1MzFjLTcuNDQxNDA2IDAtMTMuODk4NDM3LTUuNTMxMjUtMTQuODYzMjgxLTEzLjEwNTQ2OS0xLjA0Mjk2OS04LjIxODc1IDQuNzY5NTMxLTE1LjcyNjU2MiAxMi45ODQzNzUtMTYuNzczNDM3IDQ3LjM5ODQzOC02LjAzOTA2MyA4OS44NDM3NS0xOC44ODI4MTMgMTE5LjUxNTYyNS0zNi4xNzE4NzUgMjcuMTM2NzE5LTE1LjgwODU5NCA0Mi4wNzgxMjUtMzQuMzk0NTMxIDQyLjA3ODEyNS01Mi4zMzIwMzEgMC0xOS43Njk1MzEtMTcuNDg0Mzc1LTM1Ljk0NTMxMy0zMi4xNTYyNS00Ni4wMzkwNjMtNi44MjQyMTktNC42OTUzMTItOC41NTA3ODEtMTQuMDMxMjUtMy44NTU0NjktMjAuODU5Mzc1IDQuNjk1MzEzLTYuODI0MjE5IDE0LjAzNTE1Ny04LjU1MDc4MSAyMC44NTkzNzUtMy44NTU0NjkgMjkuNTM5MDYzIDIwLjMyMDMxMyA0NS4xNTIzNDQgNDQuNzg1MTU3IDQ1LjE1MjM0NCA3MC43NTc4MTMgMCAyOS40NzY1NjMtMTkuNjk5MjE5IDU2LjUzNTE1Ni01Ni45NzI2NTYgNzguMjUtMzMuNTUwNzgyIDE5LjU0Njg3NS03OC43ODkwNjMgMzMuMzgyODEzLTEzMC44MjgxMjUgNDAuMDExNzE5LS42NDQ1MzEuMDc4MTI1LTEuMjg1MTU3LjExNzE4Ny0xLjkxNDA2My4xMTcxODd6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Mi4zNDM3NSAzMTQuMTU2MjUtNDAtNDBjLTUuODU5Mzc1LTUuODU5Mzc1LTE1LjM1NTQ2OS01Ljg1OTM3NS0yMS4yMTQ4NDQgMC01Ljg1NTQ2OCA1Ljg1NTQ2OS01Ljg1NTQ2OCAxNS4zNTU0NjkgMCAyMS4yMTA5MzhsMTEuNjg3NSAxMS42ODc1Yy00NC44MTI1LTQuNjI4OTA3LTg1LjUyMzQzNy0xNS4wNjI1LTExNy4wNDY4NzUtMzAuMjIyNjU3LTM1LjQ0MTQwNi0xNy4wNDI5NjktNTUuNzY5NTMxLTM4Ljc1NzgxMi01NS43Njk1MzEtNTkuNTcwMzEyIDAtMTcuNjUyMzQ0IDE0LjU1NDY4OC0zNiA0MC45ODA0NjktNTEuNjY0MDYzIDcuMTI4OTA2LTQuMjIyNjU2IDkuNDgwNDY5LTEzLjQyNTc4MSA1LjI1NzgxMi0yMC41NTA3ODEtNC4yMjY1NjItNy4xMjg5MDYtMTMuNDI5Njg3LTkuNDgwNDY5LTIwLjU1NDY4Ny01LjI1NzgxMy00Ni4wMjM0MzggMjcuMjgxMjUtNTUuNjgzNTk0IDU3LjE4NzUtNTUuNjgzNTk0IDc3LjQ3MjY1NyAwIDMzLjI4MTI1IDI1Ljg0Mzc1IDY0LjAzOTA2MiA3Mi43Njk1MzEgODYuNjA5Mzc1IDM2LjQyMTg3NSAxNy41MTE3MTggODMuNTM1MTU3IDI5LjI0MjE4NyAxMzQuODYzMjgxIDMzLjc4MTI1bC0xNi41MDM5MDYgMTYuNTAzOTA2Yy01Ljg1NTQ2OCA1Ljg1NTQ2OS01Ljg1NTQ2OCAxNS4zNTU0NjkgMCAyMS4yMTQ4NDQgMi45Mjk2ODggMi45MjU3ODEgNi43Njk1MzIgNC4zOTA2MjUgMTAuNjA5Mzc1IDQuMzkwNjI1IDMuODM1OTM4IDAgNy42NzU3ODEtMS40NjQ4NDQgMTAuNjA1NDY5LTQuMzkwNjI1bDQwLTQwYzUuODU1NDY5LTUuODU5Mzc1IDUuODU1NDY5LTE1LjM1OTM3NSAwLTIxLjIxNDg0NHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTU3LjA5NzY1NiAxODcuMjIyNjU2di0zLjYwOTM3NWMwLTEyLjczMDQ2OS03Ljc5Mjk2OC0xNS4xOTkyMTktMTguMjQyMTg3LTE1LjE5OTIxOS02LjQ2MDkzOCAwLTguNTUwNzgxLTUuNjk5MjE4LTguNTUwNzgxLTExLjM5ODQzNyAwLTUuNzAzMTI1IDIuMDg5ODQzLTExLjQwMjM0NCA4LjU1MDc4MS0xMS40MDIzNDQgNy4yMTg3NSAwIDE0LjgyMDMxMi0uOTQ5MjE5IDE0LjgyMDMxMi0xNi4zMzk4NDMgMC0xMS4wMTk1MzItNi4yNjk1MzEtMTMuNjc5Njg4LTE0LjA2MjUtMTMuNjc5Njg4LTkuMzA4NTkzIDAtMTQuMDU4NTkzIDIuMjgxMjUtMTQuMDU4NTkzIDkuNjkxNDA2IDAgNi40NTcwMzItMi44NTE1NjMgMTAuODI4MTI1LTEzLjg3MTA5NCAxMC44MjgxMjUtMTMuNjc5Njg4IDAtMTUuMzg2NzE5LTIuODUxNTYyLTE1LjM4NjcxOS0xMS45NzI2NTYgMC0xNC44MTY0MDYgMTAuNjM2NzE5LTM0LjAwNzgxMyA0My4zMTY0MDYtMzQuMDA3ODEzIDI0LjEzMjgxMyAwIDQyLjM3MTA5NCA4LjczODI4MiA0Mi4zNzEwOTQgMzQuMzkwNjI2IDAgMTMuODY3MTg3LTUuMTI4OTA2IDI2Ljc4OTA2Mi0xNC42Mjg5MDYgMzEuMTYwMTU2IDExLjIxMDkzNyA0LjE3OTY4NyAxOS4zNzg5MDYgMTIuNTM5MDYyIDE5LjM3ODkwNiAyNy45Mjk2ODd2My42MDkzNzVjMCAzMS4xNjAxNTYtMjEuNDY4NzUgNDIuOTQxNDA2LTQ4LjA3MDMxMyA0Mi45NDE0MDYtMzIuNjc5Njg3IDAtNDUuMjE4NzUtMTkuOTQ5MjE4LTQ1LjIxODc1LTM1LjkxMDE1NiAwLTguNTUwNzgxIDMuNjA5Mzc2LTEwLjgzMjAzMSAxNC4wNTg1OTQtMTAuODMyMDMxIDEyLjE2MDE1NiAwIDE1LjE5OTIxOSAyLjY2MDE1NiAxNS4xOTkyMTkgOS44ODI4MTMgMCA4LjkyOTY4NyA4LjM2MzI4MSAxMS4wMTk1MzEgMTYuOTEwMTU2IDExLjAxOTUzMSAxMi45MjE4NzUgMCAxNy40ODQzNzUtNC43NSAxNy40ODQzNzUtMTcuMTAxNTYzem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMDIuMDY2NDA2IDE4My42MTMyODF2MS43MTA5MzhjMCAzMi42Nzk2ODctMjAuMzMyMDMxIDQ0LjgzOTg0My00Ni41NTA3ODEgNDQuODM5ODQzcy00Ni43NDIxODctMTIuMTYwMTU2LTQ2Ljc0MjE4Ny00NC44Mzk4NDN2LTUwLjM1MTU2M2MwLTMyLjY3OTY4NyAyMS4wODk4NDMtNDQuODM5ODQ0IDQ4LjQ1MzEyNC00NC44Mzk4NDQgMzIuMTA5Mzc2IDAgNDQuODM5ODQ0IDE5Ljk0OTIxOSA0NC44Mzk4NDQgMzUuNzE4NzUgMCA5LjEyMTA5NC00LjM3MTA5NCAxMS45Njg3NS0xMy44NzEwOTQgMTEuOTY4NzUtOC4xNjc5NjggMC0xNS4zOTA2MjQtMi4wODk4NDMtMTUuMzkwNjI0LTEwLjgyODEyNCAwLTcuMjE4NzUtNy41OTc2NTctMTEuMDE5NTMyLTE2LjUyNzM0NC0xMS4wMTk1MzItMTEuMjEwOTM4IDAtMTcuODYzMjgyIDUuODkwNjI1LTE3Ljg2MzI4MiAxOXYxNy4wOTc2NTZjNi4wODIwMzItNi42NDg0MzcgMTQuNjMyODEzLTguMzU5Mzc0IDIzLjc1MzkwNy04LjM1OTM3NCAyMS42NTYyNSAwIDM5Ljg5ODQzNyA5LjUgMzkuODk4NDM3IDM5LjkwMjM0M3ptLTYzLjY1MjM0NCAzLjgwMDc4MWMwIDEzLjEwOTM3NiA2LjQ2MDkzOCAxOC44MDg1OTQgMTcuMTAxNTYzIDE4LjgwODU5NHMxNi45MTAxNTYtNS42OTkyMTggMTYuOTEwMTU2LTE4LjgwODU5NHYtMS43MTA5MzdjMC0xMy44NzEwOTQtNi4yNjk1MzEtMTkuMTkxNDA2LTE3LjEwMTU2Mi0xOS4xOTE0MDYtMTAuMjU3ODEzIDAtMTYuOTEwMTU3IDQuOTQxNDA2LTE2LjkxMDE1NyAxNy40ODA0Njl6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyNS4wNTQ2ODggMTg1LjMyNDIxOXYtNTAuMzUxNTYzYzAtMzIuNjc5Njg3IDIwLjMyODEyNC00NC44Mzk4NDQgNDYuNTUwNzgxLTQ0LjgzOTg0NCAyNi4yMTg3NSAwIDQ2LjczODI4MSAxMi4xNjAxNTcgNDYuNzM4MjgxIDQ0LjgzOTg0NHY1MC4zNTE1NjNjMCAzMi42Nzk2ODctMjAuNTE5NTMxIDQ0LjgzOTg0My00Ni43MzgyODEgNDQuODM5ODQzLTI2LjIyMjY1NyAwLTQ2LjU1MDc4MS0xMi4xNjAxNTYtNDYuNTUwNzgxLTQ0LjgzOTg0M3ptNjMuNjQ4NDM3LTUwLjM1MTU2M2MwLTEzLjEwOTM3NS02LjQ1NzAzMS0xOS0xNy4wOTc2NTYtMTlzLTE2LjkxMDE1NyA1Ljg5MDYyNS0xNi45MTAxNTcgMTl2NTAuMzUxNTYzYzAgMTMuMTA5Mzc1IDYuMjY5NTMyIDE5IDE2LjkxMDE1NyAxOXMxNy4wOTc2NTYtNS44OTA2MjUgMTcuMDk3NjU2LTE5em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NTQuMzUxNTYyIDkwYy0yNC44MTY0MDYgMC00NS0yMC4xODc1LTQ1LTQ1czIwLjE4MzU5NC00NSA0NS00NWMyNC44MTI1IDAgNDUgMjAuMTg3NSA0NSA0NXMtMjAuMTg3NSA0NS00NSA0NXptMC02MGMtOC4yNzM0MzcgMC0xNSA2LjczMDQ2OS0xNSAxNSAwIDguMjczNDM4IDYuNzI2NTYzIDE1IDE1IDE1IDguMjY5NTMyIDAgMTUtNi43MjY1NjIgMTUtMTUgMC04LjI2OTUzMS02LjczMDQ2OC0xNS0xNS0xNXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" style={{ width: 35, marginRight: 10 }} art="Icones 360" />FAÇA UM TOUR VIRTUAL</button></a>
          </div>
        </div>
      </header>
      <div className="Galeria-Local">
        <h2 style={{ color: '#960064' }}>GALERIA</h2>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={galery002}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={galery003}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery004}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery005}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery006}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery007}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery008}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={galery009}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

      </div>
      <div className="Plantas-Apto">
        <h2 style={{ color: '#960064' }}>PLANTAS</h2>

        <div className="ListPlants">
          <Card>
            <Card.Img variant="top" src={planta001} />
            <Card.Body>
              <Card.Text>
                Planta FIT - Apto com 1 Quarto - 58m²
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={planta002} />
            <Card.Body>
              <Card.Text>
                Planta Smart - Apto com 2 Quarto e varanda - 65m²
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={planta003} />
            <Card.Body>
              <Card.Text>
                Planta Externa
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="FormCliente">
        <h1>Contato</h1>
        <div className="containerForm">
          <p>Fale conosco, descubra o seu desconto e veja que é possível. Vamos começar?</p>
          <Form noValidate validated={validated} onSubmit={SendEmail} className="formCads">
            <Form.Group controlId="formBasicName">
              <Form.Label>Qual o seu nome?</Form.Label>
              <Form.Control type="text" required placeholder="Digite seu nome" name="nome_cliente" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Qual o seu e-mail?</Form.Label>
              <Form.Control type="email" required placeholder="Digite seu email" name="email_cliente" />
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Qual o seu whatsapp?</Form.Label>
              <Form.Control type="tel" required placeholder="Ex: 21900000000" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" name="whats_cliente" />
            </Form.Group>

            <Button variant="light" block type="submit">
              Submit
        </Button>

          </Form>
        </div>
      </div>
    <footer>
      <p>todos direitos reservados para fulano</p>
    </footer>
    </div>
  );
}

export default App;
