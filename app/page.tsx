"use client";

import { useState } from "react";

const checkoutUrl = "https://pay.cakto.com.br/3exhgmh_1120393";

const benefits = [
  {
    icon: "🎯",
    title: "Defina suas prioridades",
    text: "Entenda o que realmente importa e pare de gastar energia com tarefas que não levam você para onde quer.",
  },
  {
    icon: "🧠",
    title: "Recupere seu foco",
    text: "Aprenda formas simples de reduzir distrações e direcionar sua atenção para o que precisa ser feito.",
  },
  {
    icon: "📅",
    title: "Organize sua rotina",
    text: "Estruture seus dias de uma maneira prática, realista e possível de manter.",
  },
  {
    icon: "✅",
    title: "Saia da procrastinação",
    text: "Transforme aquilo que você fica adiando em pequenas ações que podem ser executadas.",
  },
  {
    icon: "🔥",
    title: "Crie consistência",
    text: "Use planejamento e acompanhamento para manter seus objetivos presentes no dia a dia.",
  },
  {
    icon: "🚀",
    title: "Avance nos seus objetivos",
    text: "Tenha mais clareza sobre onde quer chegar e quais passos precisa dar para avançar.",
  },
];

const included = [
  "Guia prático para recuperar o foco",
  "Método para definir prioridades",
  "Organização da rotina",
  "Planejamento diário",
  "Planejamento semanal",
  "Controle de hábitos",
  "Estratégias contra a procrastinação",
  "Organização dos objetivos",
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
    question: "O material é digital?",
    answer:
      "Sim. O produto é um material digital que você pode acessar pelo seu dispositivo.",
  },
  {
    question: "Preciso ter experiência com organização?",
    answer:
      "Não. O conteúdo foi pensado para ser simples e prático, inclusive para quem está começando.",
  },
  {
    question: "Preciso dedicar muito tempo por dia?",
    answer:
      "Não. A proposta é ajudar você a organizar pequenas ações dentro da sua própria rotina.",
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
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">

          <div className="text-xl font-bold tracking-tight">
            <span className="text-[#d4af37]">✦</span>{" "}
            volte ao foco.
          </div>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#e5c45b]"
          >
            Quero começar
          </a>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[130px]" />

        <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl items-center gap-8 px-5 py-6 lg:grid-cols-2 lg:gap-10 lg:py-7">

          {/* TEXTO PRINCIPAL */}

          <div className="flex flex-col justify-center">

            <div className="mb-4 inline-flex w-fit rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs font-medium text-[#d4af37] sm:text-sm">
              ✦ Oferta especial: de R$ 24,90 por R$ 19,90
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[50px]">
              Pare de se perder{" "}
              <span className="text-[#d4af37]">
                no meio de tantas distrações.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-6 text-[#a1a1aa] sm:text-lg sm:leading-7">
              Um guia prático para organizar sua rotina, recuperar sua
              atenção, definir prioridades e voltar a agir em direção
              aos seus objetivos.
            </p>

            <div className="mt-5">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#d4af37] px-7 py-4 text-center font-extrabold text-black shadow-lg shadow-[#d4af37]/10 transition hover:-translate-y-1 hover:bg-[#e5c45b]"
              >
                QUERO VOLTAR AO FOCO →
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#77777f] sm:text-sm">
              <span>✓ Acesso digital</span>
              <span>✓ Conteúdo prático</span>
              <span>✓ De R$ 24,90 por R$ 19,90</span>
            </div>

          </div>

          {/* ================= GUIA + PREÇO ================= */}

          <div className="flex items-center justify-center">

            <div className="relative w-full max-w-[350px]">

              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.8rem] bg-[#d4af37]/20 blur-sm" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#151518] px-6 py-5 shadow-2xl">

                {/* CAPA DO GUIA */}

                <div className="text-center">

                  <div className="text-3xl text-[#d4af37]">
                    ✦
                  </div>

                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                    GUIA PRÁTICO
                  </p>

                  <h2 className="mt-2 text-4xl font-extrabold leading-tight">
                    volte ao
                    <br />
                    foco.
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#9999a1]">
                    Organize sua mente.
                    <br />
                    Organize sua rotina.
                    <br />
                    Volte a agir.
                  </p>

                </div>

                {/* ITENS DO GUIA */}

                <div className="mt-4 space-y-2">

                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-[#1f1f23] px-3 py-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-[10px] font-bold text-[#d4af37]">
                      1
                    </div>

                    <span className="text-xs font-medium text-[#e4e4e7]">
                      Minhas prioridades
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-[#1f1f23] px-3 py-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-[10px] font-bold text-[#d4af37]">
                      2
                    </div>

                    <span className="text-xs font-medium text-[#e4e4e7]">
                      Minha rotina
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-[#1f1f23] px-3 py-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-[10px] font-bold text-[#d4af37]">
                      3
                    </div>

                    <span className="text-xs font-medium text-[#e4e4e7]">
                      Meus objetivos
                    </span>
                  </div>

                </div>

                {/* PREÇO */}

                <div className="mt-3 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-3 text-center">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37]">
                    OFERTA ESPECIAL
                  </p>

                  <p className="mt-1 text-xs text-[#9999a1]">
                    De{" "}
                    <span className="line-through">
                      R$ 24,90
                    </span>{" "}
                    por
                  </p>

                  <p className="mt-0.5 text-3xl font-extrabold text-[#d4af37]">
                    R$ 19,90
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROBLEMA ================= */}

      <section className="bg-[#111113] py-20">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Talvez isso esteja acontecendo
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Você sabe o que precisa fazer, mas acaba fazendo qualquer outra coisa?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#9999a1]">
            Notificações, redes sociais, tarefas acumuladas e falta de
            planejamento podem fazer você terminar o dia com a sensação
            de que não saiu do lugar.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">

            {[
              "Você começa várias coisas e termina poucas",
              "Passa muito tempo no celular sem perceber",
              "Adia tarefas importantes para depois",
              "Tem dificuldade para manter uma rotina",
              "Se sente perdido com tantas coisas para fazer",
              "Sabe onde quer chegar, mas não sabe por onde começar",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#19191d] p-5"
              >

                <span className="mr-2 text-[#d4af37]">
                  ✓
                </span>

                <span className="text-[#c7c7cc]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SOLUÇÃO ================= */}

      <section className="bg-[#09090b] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Conheça o volte ao foco.
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Menos distração. Mais clareza. Mais ação.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#9999a1]">
            Um material criado para ajudar você a organizar suas
            prioridades e transformar intenção em ação.
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

                <p className="mt-2 leading-7 text-[#92929a]">
                  {benefit.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= O QUE ESTÁ INCLUÍDO ================= */}

      <section className="border-y border-white/10 bg-[#111113] py-20">

        <div className="mx-auto max-w-5xl px-5">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              O que você vai encontrar
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Um guia para voltar a assumir o controle da sua rotina
            </h2>

          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">

            {included.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#19191d] p-4"
              >

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-sm font-bold text-[#d4af37]">
                  ✓
                </span>

                <span className="font-medium text-[#d0d0d5]">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= COMO FUNCIONA ================= */}

      <section className="bg-[#09090b] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Comece hoje
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Três passos simples
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
                title: "Organize suas prioridades",
                text: "Use as orientações para entender o que merece sua atenção.",
              },
              {
                number: "03",
                title: "Volte a agir",
                text: "Transforme seu planejamento em pequenas ações no dia a dia.",
              },
            ].map((step) => (

              <div key={step.number}>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37] text-lg font-extrabold text-black">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-[#92929a]">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BÔNUS ================= */}

      <section className="bg-[#111113] py-20">

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
                Planner de foco e planejamento
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#96969d]">
                Páginas práticas para organizar seu dia, sua semana,
                seus hábitos, seus objetivos e suas próximas ações.
              </p>

            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Planejamento diário",
                "Planejamento semanal",
                "Planejamento mensal",
                "Habit tracker",
                "Checklists",
                "Espaço para anotações",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-white/5 bg-[#1d1d21] px-4 py-3 font-medium text-[#d0d0d5]"
                >

                  <span className="text-[#d4af37]">
                    ✓
                  </span>{" "}

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= OFERTA ================= */}

      <section
        id="oferta"
        className="relative overflow-hidden bg-[#09090b] py-20 md:py-28"
      >

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-xl px-5">

          <div className="overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[#151518] shadow-2xl">

            <div className="bg-[#d4af37] px-6 py-5 text-center text-black">

              <p className="text-sm font-extrabold uppercase tracking-[0.15em]">
                🔥 Oferta especial
              </p>

            </div>

            <div className="p-8 text-center md:p-10">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-5xl text-[#d4af37]">
                ✦
              </div>

              <h2 className="mt-6 text-3xl font-extrabold">
                volte ao foco.
              </h2>

              <p className="mt-3 text-[#92929a]">
                Guia + planner de foco e planejamento
              </p>

              <div className="mt-8">

                <p className="text-sm text-[#77777f]">
                  De{" "}
                  <span className="line-through">
                    R$ 24,90
                  </span>
                </p>

                <p className="mt-1 text-sm font-semibold text-[#d4af37]">
                  por apenas
                </p>

                <div className="mt-1 text-5xl font-extrabold text-[#d4af37]">
                  R$ 19,90
                </div>

                <p className="mt-2 text-sm text-[#77777f]">
                  Oferta especial
                </p>

              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full bg-[#d4af37] px-6 py-4 font-extrabold text-black shadow-lg shadow-[#d4af37]/10 transition hover:-translate-y-1 hover:bg-[#e5c45b]"
              >
                QUERO VOLTAR AO FOCO →
              </a>

              <p className="mt-4 text-xs text-[#77777f]">
                Pagamento processado pela plataforma de checkout.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="border-t border-white/10 bg-[#111113] py-20">

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
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#19191d]"
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

                    <div className="border-t border-white/10 px-5 pb-5 pt-4 leading-7 text-[#92929a]">
                      {item.answer}
                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* ================= CTA FINAL ================= */}

      <section className="border-t border-white/10 bg-[#09090b] py-20">

        <div className="mx-auto max-w-3xl px-5 text-center">

          <div className="text-4xl text-[#d4af37]">
            ✦
          </div>

          <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
            Talvez você não precise fazer mais.
            <br />
            Talvez precise voltar ao foco.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#92929a]">
            Organize suas prioridades, reduza as distrações e comece
            a transformar seus objetivos em ações.
          </p>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#d4af37] px-8 py-4 font-extrabold text-black transition hover:-translate-y-1 hover:bg-[#e5c45b]"
          >
            QUERO COMEÇAR AGORA →
          </a>

          <p className="mt-4 text-sm text-[#77777f]">
            De{" "}
            <span className="line-through">
              R$ 24,90
            </span>{" "}
            por{" "}
            <span className="font-bold text-[#d4af37]">
              R$ 19,90
            </span>
          </p>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/10 bg-[#070708] py-8">

        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-[#66666d]">

          <p className="font-semibold text-[#bdbdc3]">
            <span className="text-[#d4af37]">✦</span>{" "}
            volte ao foco.
          </p>

          <p className="mt-2">
            Material digital para foco, organização e produtividade.
          </p>

          <p className="mt-4 text-xs">
            © {new Date().getFullYear()} volte ao foco.
            Todos os direitos reservados.
          </p>

        </div>

      </footer>

    </main>
  );
}