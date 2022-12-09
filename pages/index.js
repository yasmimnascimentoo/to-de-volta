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
import InputMask from "react-input-mask";

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
                className={`input-name ${errors?.nome && "input-error"}`}
                placeholder={errors?.nome ? errors.nome.message : "Nome"}
                {...register("nome", {
                  required: "Nome é obrigatório!",
                  maxLength: 80,
                  minLength: { value: 5, message: "Tamanho mínimo 5." },
                })}
              />
              <input
                className={`input-lastname ${
                  errors?.sobrenome && "input-error"
                }`}
                placeholder={
                  errors?.sobrenome ? errors.sobrenome.message : "Sobrenome"
                }
                {...register("sobrenome", {
                  required: "Sobrenome é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
            </div>
            <div className="box-data">
              <InputMask
                mask="999.999.999-99"
                className={`input-cpf ${errors?.cpf && "input-error"}`}
                placeholder={errors?.cpf ? errors.cpf.message : "CPF"}
                {...register("cpf", {
                  required: "CPF é obrigatório!",
                  maxLength: 11,
                  minLength: 11,
                })}
              />
              <input
                className={`input-email ${errors?.email && "input-error"}`}
                placeholder={errors?.email ? errors.email.message : "E-mail"}
                type={"email"}
                {...register("email", {
                  required: "E-mail é obrigatório!",
                })}
              />
              <InputMask
                mask="(99)"
                className={`input-ddd ${errors?.ddd && "input-error"}`}
                placeholder={errors?.ddd ? errors.ddd.message : "DDD"}
                {...register("ddd", {
                  required: "DDD é obrigatório!",
                  maxLength: 2,
                  minLength: 2,
                })}
              />
              <InputMask
                mask="99999-9999"
                className={`input-phone ${errors?.telefone && "input-error"}`}
                placeholder={
                  errors?.telefone ? errors.telefone.message : "Telefone"
                }
                type={"tel"}
                name={"telefone"}
                {...register("telefone", {
                  required: "Telefone é obrigatório!",
                  maxLength: 10,
                  minLength: 10,
                })}
              />
              <InputMask
                mask="99-99-9999"
                className={`input-birth ${errors?.nascimento && "input-error"}`}
                placeholder={
                  errors?.nascimento ? errors.nascimento.message : "Nascimento"
                }
                {...register("nascimento", {
                  required: "Nascimento é obrigatório!",
                  maxLength: 10,
                  minLength: 10,
                })}
              />
            </div>

            <h3>Endereço</h3>
            <div className="box-address">
              <InputMask
                mask="99999-999"
                className={`input-zip-code ${errors?.cep && "input-error"}`}
                placeholder={errors?.cep ? errors?.cep.message : "CEP"}
                {...register("cep", {
                  required: "CEP é obrigatório!",
                  maxLength: 9,
                  minLength: 9,
                })}
              />
              <input
                className={`input-street ${errors?.rua && "input-error"}`}
                placeholder={errors?.rua ? errors.rua.message : "Rua"}
                {...register("rua", {
                  required: "Rua é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
              <InputMask
                mask="999999"
                className={`input-number ${errors?.numero && "input-error"}`}
                placeholder={errors?.numero ? errors.numero.message : "Número"}
                {...register("numero", {
                  required: "Número é obrigatório!",
                  maxLength: 6,
                  minLength: 1,
                })}
              />
            </div>
            <div className="box-address">
              <input
                className={`input-neighborhood ${
                  errors?.bairro && "input-error"
                }`}
                placeholder={errors?.bairro ? errors.bairro.message : "Bairro"}
                {...register("bairro", {
                  required: "Bairro é obrigatório!",
                  maxLength: 80,
                  minLength: 5,
                })}
              />
              <input
                className={`input-city ${errors?.cidade && "input-error"}`}
                placeholder={errors?.cidade ? errors.cidade.message : "Cidade"}
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
            <FacebookIcon
              className="icon"
              fill="red"
              style={{ width: "36px", height: "36px", margin: "0 0.2rem" }}
            />
            <InstagramIcon
              className="icon"
              style={{ width: "36px", height: "36px", margin: "0 0.2rem" }}
            />
            <LinkedInIcon
              className="icon"
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
