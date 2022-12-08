import Head from "next/head";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Logo from "../image/logo.svg";
import Success from "../image/success.svg";
import Error from "/image/error.svg";
import LogoKerno from "../image/kerno.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const style = {
  width: 678,
  height: 439,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  p: 4,
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = useState(false);
  const [typeModal, setTypeModal] = useState("success");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    await axios
      .post("/api/form", data)
      .then(function (response) {
        setTypeModal("success");
        handleOpen();
      })
      .catch(function (error) {
        setTypeModal("error");
        handleOpen();
      });
  };

  return (
    <>
      <Head>
        <title>Tô de Volta</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header></header>

      <main className="layout">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {typeModal === "success" ? (
              <>
                <Image
                  src={Success}
                  width={92}
                  height={93}
                  style={{ margin: "0 auto", display: "flex" }}
                />
                <p id="modal-modal-title">RECEBEMOS OS SEUS DADOS</p>
                <p id="modal-modal-description">
                  Você receberá um e-mail para que defina a sua senha de acesso.
                  Agora corre lá para definir sua senha e aproveitar todos os
                  seus benefícios.
                </p>
                <button className="btn btn-success" onClick={handleClose}>
                  OK
                </button>
              </>
            ) : (
              <>
                <Image
                  src={Error}
                  width={92}
                  height={93}
                  style={{ margin: "0 auto", display: "flex" }}
                />
                <p id="modal-modal-title-error">OPS! ALGO DEU ERRADO.</p>
                <p id="modal-modal-description-error">
                  Por favor, Verifique o preenchimento dos campos e tente
                  novamente
                </p>
                <button className="btn btn-error" onClick={handleClose}>
                  OK
                </button>
              </>
            )}
          </Box>
        </Modal>
        <section>
          <h1 className="title">Cadastro</h1>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin velit adipiscing lorem scelerisque gravida natoque a
            eget cursus. Molestie consectetur sed odio enim suspendisse quis.
            Pretium, adipiscing in terdum consequat, semper consectetur
          </p>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2>Dados Pessoais</h2>
            <div className="box-name">
              <input
                className="input-name"
                placeholder="Nome"
                {...register("nome", {
                  required: "Nome é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
              <input
                className="input-lastname"
                placeholder="Sobrenome"
                {...register("sobrenome", {
                  required: "Sobrenome é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
            </div>
            <div className="box-data">
              <input
                className="input-cpf"
                placeholder="CPF"
                {...register("cpf", {
                  required: "CPF é obrigatório!",
                  maxLength: 11,
                  minLength: 11,
                })}
              />
              <input
                className="input-email"
                placeholder="E-mail"
                type={"email"}
                {...register("email")}
              />
              <input
                className="input-ddd"
                placeholder="DDD"
                type={"number"}
                {...register("ddd", {
                  required: "DDD é obrigatório!",
                  maxLength: 2,
                  minLength: 2,
                })}
              />
              <input
                className="input-phone"
                placeholder="Telefone"
                type={"tel"}
                format={"####-####"}
                {...register("telefone", {
                  required: "Telefone é obrigatório!",
                  maxLength: 9,
                  minLength: 9,
                })}
              />
              <input
                className="input-birth"
                placeholder="Nascimento"
                {...register("nascimento", {
                  required: "Nascimento é obrigatório!",
                  maxLength: 8,
                  minLength: 8,
                })}
              />
            </div>

            <h3>Endereço</h3>
            <div className="box-address">
              <input
                className="input-zip-code"
                placeholder="CEP"
                {...register("cep" , {
                  required: "CEP é obrigatório!",
                  maxLength: 8,
                  minLength: 8,
                })}
              />
              <input
                className="input-street"
                placeholder="Rua"
                {...register("rua", {
                  required: "Rua é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
              <input
                className="input-number"
                placeholder="Número"
                {...register("numero", {
                  required: "Número é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
            </div>
            <div className="box-address">
              <input
                className="input-neighborhood"
                placeholder="Bairro"
                {...register("bairro", {
                  required: "Bairro é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
              <input
                className="input-city"
                placeholder="Cidade"
                {...register("cidade", {
                  required: "Cidade é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
            </div>
            <select name="uf" id="uf" {...register("estado")}>
              <option value="">UF</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AM">AM</option>
              <option value="AP">AP</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MG">MG</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="PR">PR</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SE">SE</option>
              <option value="SP">SP</option>
              <option value="TO">TO</option>
            </select>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "30px",
              }}
            >
              <input
                className="input-checkbox"
                type="checkbox"
                id=""
                name=""
                value=""
                {...register("checkbox")}
              />
              <label htmlFor="">
                Li e concordo com os{" "}
                <span className="underline">termos de uso</span>
              </label>
              <br></br>
            </div>
            <input
              className="btn btn-register"
              type="submit"
              value="CADASTRAR"
            />
          </form>
        </section>
      </main>

      <footer style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="line"
          style={{
            width: "90%",
            height: "1px",
            backgroundColor: "#DED6BE",
            margin: "auto auto 0 auto",
          }}
        />
        <div
          className="footer-box-one"
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1.3rem 0",
            alignItems: "center",
          }}
        >
          <Image
            className="logo-amarante"
            src={Logo}
            width={199.38}
            height={72}
          />
          <span className="text-address">
            Av. Conselheiro Aguiar, 1748 - 3º Andar - Boa Viagem, Recife - PE,
            51111-011 (81) 2123-5655
          </span>
          <div>
            <FacebookIcon className="icon" fill="red"
              style={{ width: "36px", height: "36px", margin: "0 0.2rem" }}
            />
            <InstagramIcon className="icon"
              style={{ width: "36px", height: "36px", margin: "0 0.2rem" }}
            />
            <LinkedInIcon className="icon"
              style={{ width: "36px", height: "36px", margin: "0 0.2rem" }}
            />
          </div>
        </div>
        <div
          style={{
            width: "90%",
            height: "2px",
            backgroundColor: "#DED6BE",
            margin: "0 auto",
          }}
        />
        <div
          className="footer-box-two"
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "1.3rem 0",
            alignItems: "center",
          }}
        >
          <div className="div-box-two">
            <span
              className="text-privacy underline"
              style={{ marginRight: "1.3rem" }}
            >
              Política de Privacidade
            </span>
            <span className="text-termos underline">Termos de uso</span>
          </div>
          <span className="text-direitos">
            © 2022 - Grupo Amarante - Todos os direitos reservados
          </span>
          <div style={{ position: "relative", width: "66px", height: "18px" }}>
            <Image src={LogoKerno} fill />
          </div>
        </div>
      </footer>
    </>
  );
}
