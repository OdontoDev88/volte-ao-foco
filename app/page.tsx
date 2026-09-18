"use client";

import { useState } from "react";

const benefits = [
  {
    icon: "📅",
    title: "Organize sua rotina",
    text: "Aprenda a estruturar seus dias de forma simples e realista.",
  },
  {
    icon: "🎯",
    title: "Defina suas prioridades",
    text: "Descubra o que realmente merece sua atenção.",
  },
  {
    icon: "✅",
    title: "Tenha mais controle",
    text: "Acompanhe tarefas, hábitos e objetivos de forma prática.",
  },
  {
    icon: "💰",
    title: "Organize sua vida financeira",
    text: "Tenha uma visão mais clara dos seus gastos e do seu dinheiro.",
  },
  {
    icon: "🧹",
    title: "Organize seu ambiente",
    text: "Crie uma rotina para manter seus espaços mais organizados.",
  },
  {
    icon: "📱",
    title: "Organize sua vida digital",
    text: "Coloque ordem nos arquivos, aplicativos e informações.",
  },
];

const included = [
  "Guia completo de organização pessoal",
  "Método para definir prioridades",
  "Planejamento de rotina",
  "Planejamento semanal",
  "Organização de hábitos",
  "Organização financeira básica",
  "Organização do ambiente",
  "Organização da vida digital",
  "Planejamento de 30 dias",
  "Páginas práticas para preencher",
];

const faq = [
  {
    question: "Como vou receber o produto?",
    answer:
      "Após a confirmação do pagamento, você receberá as instruções de acesso ao material digital.",
  },
  {
    question: "Preciso imprimir o planner?",
    answer:
      "Não. O material pode ser utilizado digitalmente. Se preferir, você também pode imprimir as páginas.",
  },
  {
    question: "É indicado para quem é desorganizado?",
    answer:
      "Sim. O conteúdo foi pensado para quem quer começar a organizar a rotina de maneira simples e prática.",
  },
  {
    question: "Preciso dedicar muito tempo por dia?",
    answer:
      "Não. A proposta é ajudar você a criar uma organização que caiba na sua rotina.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "O pagamento é realizado pela plataforma de checkout utilizada na compra.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0b0d] text-[#f5f5f5]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

          <div className="text-xl font-bold tracking-tight">
            <span className="text-[#d4af37]">✦</span>{" "}
            Minha Vida Organizada
          </div>

          <a
            href="#oferta"
            className="hidden rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#e5c45b] sm:block"
          >
            Quero começar
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">

          <div>

            <div className="mb-6 inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-medium text-[#d4af37]">
              ✦ Um passo de cada vez
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Organize sua vida{" "}
              <span className="text-[#d4af37]">
                sem complicar.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#a6a6ab]">
              Um guia prático para colocar sua rotina, suas tarefas,
              seus hábitos e seus objetivos em ordem — de uma maneira
              simples e possível de manter.
            </p>

            <div className="mt-9">
              <a
                href="#oferta"
                className="inline-block rounded-full bg-[#d4af37] px-7 py-4 text-center font-extrabold text-black shadow-lg shadow-[#d4af37]/10 transition hover:-translate-y-1 hover:bg-[#e5c45b]"
              >
                QUERO ORGANIZAR MINHA VIDA →
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#85858b]">
              <span>✓ Acesso digital</span>
              <span>✓ Conteúdo prático</span>
              <span>✓ Apenas R$ 19,90</span>
            </div>

          </div>

          {/* MOCKUP */}
          <div className="flex justify-center">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#d4af37]/20 blur-sm" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151518] p-7 shadow-2xl">

                <div className="mb-7 text-center">

                  <div className="mb-3 text-4xl text-[#d4af37]">
                    ✦
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                    Guia prático
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold leading-tight">
                    Minha Vida
                    <br />
                    Organizada
                  </h2>

                  <p className="mt-3 text-sm text-[#99999f]">
                    Organize sua rotina, suas tarefas e seus objetivos.
                  </p>

                </div>

                <div className="space-y-3">

                  {[
                    "Minha rotina",
                    "Minhas prioridades",
                    "Meus hábitos",
                    "Meus objetivos",
                    "Minha organização",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#1e1e22] px-4 py-3"
                    >

                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/15 text-sm font-bold text-[#d4af37]">
                        {index + 1}
                      </div>

                      <span className="font-medium text-[#e7e7e9]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#111114] py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Você se identifica?
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Parece que tem coisa demais acontecendo ao mesmo tempo?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#9c9ca2]">
            Tarefas acumuladas, objetivos esquecidos, rotina desorganizada
            e a sensação de que o dia terminou antes de você conseguir
            fazer tudo.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">

            {[
              "Você começa o dia sem saber por onde começar",
              "Sua lista de tarefas parece nunca terminar",
              "Você deixa objetivos importantes para depois",
              "Sua rotina muda constantemente",
              "Você quer criar hábitos, mas acaba desistindo",
              "Sente que precisa colocar a vida em ordem",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#18181c] p-5"
              >
                <span className="mr-2 text-[#d4af37]">
                  ✓
                </span>

                <span className="text-[#c8c8cc]">
                  {item}
                </span>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SOLUTION */}
      <section className="bg-[#0b0b0d] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Conheça o guia
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Uma forma simples de começar a colocar sua vida em ordem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#99999f]">
            O{" "}
            <strong className="text-white">
              Minha Vida Organizada
            </strong>{" "}
            reúne orientações, exercícios e páginas práticas para você
            transformar organização em uma rotina possível.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {benefits.map((benefit) => (

              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-[#151518] p-6 text-left shadow-lg transition hover:-translate-y-1 hover:border-[#d4af37]/30"
              >

                <div className="mb-4 text-3xl">
                  {benefit.icon}
                </div>

                <h3 className="text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-2 leading-7 text-[#929298]">
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INCLUDED */}
      <section className="border-y border-white/10 bg-[#111114] py-20">

        <div className="mx-auto max-w-5xl px-5">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              O que você vai encontrar
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Tudo em um único material
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">

            {included.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#18181c] p-4"
              >

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-sm font-bold text-[#d4af37]">
                  ✓
                </span>

                <span className="font-medium text-[#d0d0d4]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#0b0b0d] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Comece hoje
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Três passos para começar
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Adquira o guia",
                text: "Faça sua compra e tenha acesso ao material digital.",
              },
              {
                number: "02",
                title: "Comece pelo básico",
                text: "Siga as orientações e escolha o que faz sentido para sua rotina.",
              },
              {
                number: "03",
                title: "Coloque em prática",
                text: "Use os planejamentos e exercícios para organizar seu dia a dia.",
              },
            ].map((step) => (

              <div key={step.number}>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-lg font-extrabold text-black">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[#929298]">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BONUS */}
      <section className="bg-[#111114] py-20">

        <div className="mx-auto max-w-4xl px-5">

          <div className="rounded-[2rem] border border-[#d4af37]/20 bg-[#151518] p-8 shadow-xl md:p-12">

            <div className="text-center">

              <div className="text-4xl">
                🎁
              </div>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                Bônus especial
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Planner para colocar tudo em prática
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#96969c]">
                Páginas práticas para planejamento diário, semanal e mensal,
                acompanhamento de hábitos e anotações.
              </p>

            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Planner diário",
                "Planner semanal",
                "Planner mensal",
                "Habit tracker",
                "Checklists",
                "Espaço para anotações",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-white/5 bg-[#1d1d21] px-4 py-3 font-medium text-[#d0d0d4]"
                >
                  <span className="text-[#d4af37]">✓</span>{" "}
                  {item}
                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* OFFER */}
      <section
        id="oferta"
        className="relative overflow-hidden bg-[#0b0b0d] py-20 md:py-28"
      >

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-xl px-5">

          <div className="overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[#151518] shadow-2xl">

            <div className="bg-[#d4af37] px-6 py-5 text-center text-black">

              <p className="text-sm font-extrabold uppercase tracking-[0.15em]">
                Acesso ao material digital
              </p>

            </div>

            <div className="p-8 text-center md:p-10">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-4xl text-[#d4af37]">
                ✦
              </div>

              <h2 className="mt-6 text-3xl font-extrabold">
                Minha Vida Organizada
              </h2>

              <p className="mt-3 text-[#929298]">
                Guia + páginas práticas de planejamento
              </p>

              <div className="mt-8">

                <p className="text-sm text-[#77777d]">
                  Por apenas
                </p>

                <div className="mt-1 text-5xl font-extrabold text-[#d4af37]">
                  R$ 19,90
                </div>

              </div>

              <a
                href="https://pay.cakto.com.br/"
                className="mt-8 block rounded-full bg-[#d4af37] px-6 py-4 font-extrabold text-black shadow-lg shadow-[#d4af37]/10 transition hover:-translate-y-1 hover:bg-[#e5c45b]"
              >
                QUERO ORGANIZAR MINHA VIDA →
              </a>

              <p className="mt-4 text-xs text-[#77777d]">
                Pagamento processado pela plataforma de checkout.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#111114] py-20">

        <div className="mx-auto max-w-3xl px-5">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Dúvidas
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Perguntas frequentes
            </h2>

          </div>

          <div className="mt-10 space-y-3">

            {faq.map((item, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#18181c]"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                  >

                    <span>
                      {item.question}
                    </span>

                    <span className="text-xl text-[#d4af37]">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {isOpen && (

                    <div className="border-t border-white/10 px-5 pb-5 pt-4 leading-7 text-[#929298]">
                      {item.answer}
                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 bg-[#0b0b0d] py-20">

        <div className="mx-auto max-w-3xl px-5 text-center">

          <div className="text-4xl text-[#d4af37]">
            ✦
          </div>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Sua organização começa com um primeiro passo.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#929298]">
            Comece de forma simples, organize o que está ao seu alcance
            e construa uma rotina que faça sentido para você.
          </p>

          <a
            href="#oferta"
            className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-extrabold text-black transition hover:-translate-y-1 hover:bg-[#e5c45b]"
          >
            QUERO COMEÇAR AGORA →
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080809] py-8">

        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-[#66666c]">

          <p className="font-semibold text-[#bdbdc2]">
            <span className="text-[#d4af37]">✦</span>{" "}
            Minha Vida Organizada
          </p>

          <p className="mt-2">
            Material digital para organização pessoal.
          </p>

          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} Minha Vida Organizada.
            Todos os direitos reservados.
          </p>

        </div>

      </footer>

    </main>
  );
}