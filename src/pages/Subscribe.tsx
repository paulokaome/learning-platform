import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscriber(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
    navigate("/events");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1110px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-darkBlue-500">aplicação completa</strong>,
            do zero, com <strong className="text-darkBlue-500">React JS</strong>{" "}
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-darkGray-700 border-darkGray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscriber}
            className="flex flex-col gap-2 w-full"
          >
            <input
              onChange={(event) => setName(event.target.value)}
              className="bg-darkGray-900 rounded h-14 px-5"
              type="text"
              placeholder="Seu nome Completo"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="bg-darkGray-900 rounded h-14 px-5"
              type="email"
              placeholder="Digite seu email"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-darkGreen-500 uppercase py-4 rounded font-bold text-sm hover:bg-darkGreen-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/bg2.png" className="mt-10" alt="" />
    </div>
  );
}
