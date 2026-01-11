import React, { useEffect, useState } from 'react';
import { Shield, Brain, Heart, Zap, Volume2, ShieldCheck, Star, Users, ArrowRight, Menu, Check, Lock, X, AlertCircle, Clock, TrendingUp, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PuppyBitingPage01 = () => {
  // Sticky CTA state
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 15, seconds: 0 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // SEO & Scroll Handler
  useEffect(() => {
    document.title = "Como Parar Mordidas de Cachorro | Brain Training for Dogs";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Pare mordidas, latidos e pulos com método científico comprovado. Sem punições. Resultados em 7 dias ou menos. +212 mil cães transformados.");
    }

    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('final-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-white pb-24 md:pb-0">

      {/* Warning / Scarcity Top Bar */}
      <div className="bg-red-600 text-white text-center py-3 text-sm font-bold animate-pulse shadow-lg">
        🚨 ALERTA: Apenas 47 Vagas Restantes Hoje - Acesso Pode Ser Fechado a Qualquer Momento
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse shadow-2xl border-2 border-red-400">
              🔥 Seu Cachorro Pode Mudar em 7 Dias ou Menos
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
            "Eu Estava CHORANDO Todo Dia... <br/>
            <span className="text-orange-400">Meu Cachorro Estava Destruindo Minha Vida</span>"
          </h1>

          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-white font-semibold mb-4 leading-relaxed">
              Se você está <span className="text-red-400 font-bold">com as mãos machucadas</span>, <span className="text-red-400 font-bold">com vergonha de receber visitas</span>, e <span className="text-red-400 font-bold">pensando em desistir</span>...
            </p>
            <p className="text-lg md:text-xl text-blue-200 font-light">
              Eu descobri o método <span className="font-bold text-yellow-300">EXATO</span> que transformou meu cachorro "incontrolável" em um cão <span className="font-bold text-green-300">obediente e carinhoso</span> - sem gritar, sem punições, sem coleiras de choque.
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-yellow-400 rounded-xl p-4 inline-block mb-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-4 text-white">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-600 rounded-lg flex items-center justify-center text-xs text-gray-300 border-4 border-yellow-400">
                    [VÍDEO: Antes/Depois]
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-yellow-300 font-bold text-sm uppercase mb-1">ASSISTA AGORA:</p>
                  <p className="text-lg font-semibold">Como Meu Cachorro Parou de Morder em Apenas 48 Horas</p>
                  <p className="text-sm text-gray-300 italic">(E como o seu pode fazer o mesmo)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 mb-10">
            <button
              onClick={scrollToCTA}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black text-2xl md:text-3xl py-7 px-12 rounded-2xl shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 w-full md:w-auto group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-3">
                SIM! QUERO PARAR AS MORDIDAS HOJE
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3 bg-green-500/20 backdrop-blur-sm border border-green-400 px-6 py-3 rounded-full">
                <Check className="w-6 h-6 text-green-400" />
                <span className="text-white font-bold">Acesso Imediato - Mesmo às 3h da Manhã</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400 px-6 py-3 rounded-full">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">Garantia Incondicional de 60 Dias</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-white font-medium bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="border-l border-gray-500 pl-3">Mais de 212.847 donos já transformaram seus cães</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-xs">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Proteção ao Comprador</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>473 Pessoas Vendo Agora</span>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Você Reconhece Esses <span className="text-red-600">PESADELOS</span> Diários?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Se você está vivendo pelo menos <span className="font-bold text-red-600">UMA</span> dessas situações... <span className="font-bold">você PRECISA ver isso</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-8 border-red-600 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🩸</span>
                <div>
                  <h3 className="font-black text-xl text-red-900 mb-3">Suas Mãos Estão COBERTAS de Marcas</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-3">
                    Cada dia é a mesma coisa: seu filhote ataca suas mãos, braços e pés sem parar. Você já tentou tudo que encontrou no Google, mas NADA funciona.
                  </p>
                  <p className="text-red-800 font-bold italic text-sm">
                    → E o pior: as pessoas te julgam como se você fosse um péssimo dono...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-8 border-orange-600 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🦘</span>
                <div>
                  <h3 className="font-black text-xl text-red-900 mb-3">PULA em Cima de TODO MUNDO</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-3">
                    Você não consegue receber visitas. Quando sai para passear, é uma VERGONHA. Seu cachorro pula, rasga roupas, derruba crianças...
                  </p>
                  <p className="text-red-800 font-bold italic text-sm">
                    → Você vive pedindo desculpas e evitando pessoas...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-8 border-yellow-600 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">📢</span>
                <div>
                  <h3 className="font-black text-xl text-red-900 mb-3">Late SEM PARAR - Dia e Noite</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-3">
                    Os vizinhos já reclamaram. Você não consegue trabalhar de casa. Não consegue dormir. O barulho é CONSTANTE e você já não aguenta mais.
                  </p>
                  <p className="text-red-800 font-bold italic text-sm">
                    → Você está à beira de um colapso nervoso...
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-l-8 border-purple-600 shadow-xl transform hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-5xl">💥</span>
                <div>
                  <h3 className="font-black text-xl text-red-900 mb-3">DESTRÓI Tudo Que Vê Pela Frente</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-3">
                    Sofá destruído. Sapatos caros rasgados. Portas arranhadas. Você já gastou MILHARES em reparos e cada dia é um novo prejuízo.
                  </p>
                  <p className="text-red-800 font-bold italic text-sm">
                    → Você está considerando devolver o cachorro ou pagar uma fortuna em adestramento...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-10 rounded-3xl shadow-2xl border-4 border-red-600 text-center">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Mas o Pior de Tudo é...
            </h3>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-3xl mx-auto">
              Você se sente <span className="text-red-400 font-black">CULPADO</span>, <span className="text-red-400 font-black">FRUSTRADO</span> e <span className="text-red-400 font-black">ENVERGONHADO</span>. 
              Porque no fundo você queria tanto que desse certo... mas parece que você está <span className="text-yellow-300 font-black">FALHANDO</span>.
            </p>
            <div className="inline-block bg-red-600 px-8 py-4 rounded-xl">
              <p className="text-2xl font-bold">
                E Se Eu Te Disser Que NÃO É SUA CULPA?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              ⚡ A VERDADE QUE NINGUÉM TE CONTA
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Você <span className="text-blue-600">NÃO</span> É Um Péssimo Dono.<br/>
            Seu Cachorro <span className="text-blue-600">NÃO</span> É Agressivo.
          </h2>
          
          <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-blue-100 mb-8">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-6">
              A indústria de adestramento tradicional quer que você acredite que precisa <span className="text-red-600 font-bold">"dominar"</span> seu cachorro. Que você precisa <span className="text-red-600 font-bold">gritar</span>, usar <span className="text-red-600 font-bold">coleiras de choque</span>, ou <span className="text-red-600 font-bold">punir fisicamente</span>.
            </p>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg mb-6">
              <p className="text-lg text-gray-800 font-bold mb-2">
                Mas aqui está o problema:
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Esses métodos NÃO SÓ não funcionam... eles <span className="font-bold text-red-600">PIORAM</span> o comportamento do seu cão ao aumentar a ansiedade e o estresse dele.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
              <p className="text-lg text-gray-800 font-bold mb-2">
                A boa notícia?
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Existe um método <span className="font-bold text-green-600">CIENTIFICAMENTE COMPROVADO</span> que trabalha COM a inteligência natural do seu cachorro - não contra ela. E ele funciona mesmo com os cães mais "impossíveis".
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">❌</div>
              <h4 className="font-bold text-lg mb-2">Métodos Antigos</h4>
              <p className="text-sm opacity-90">Dominação, punição, gritos e coleiras punitivas</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-6xl">→</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="font-bold text-lg mb-2">Brain Training</h4>
              <p className="text-sm opacity-90">Estimulação mental, jogos inteligentes, conexão real</p>
            </div>
          </div>
        </div>
      </section>

      {/* Root Cause Section */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl">
              💡 REVELAÇÃO CIENTÍFICA
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6 leading-tight">
              O Verdadeiro Motivo do Seu Cachorro<br/>
              <span className="text-yellow-400">Morder, Latir e Destruir Tudo</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              (E não tem NADA a ver com ele ser "mau" ou "incontrolável")
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-yellow-400 rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl mb-10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl shadow-2xl">
                  <Brain className="w-20 h-20 text-white" />
                </div>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-center mb-6 text-yellow-400">
                O Cérebro SUBESTIMULADO
              </h3>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-200">
                  Cães são animais <span className="font-bold text-white">EXTREMAMENTE INTELIGENTES</span>. O cérebro deles precisa de estímulo constante - assim como o nosso.
                </p>
                
                <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-lg">
                  <p className="font-bold text-red-300 mb-2 text-xl">⚠️ O Problema:</p>
                  <p className="text-gray-200">
                    Quando o cérebro do seu cão não recebe o estímulo correto, ele entra em um estado de <span className="font-bold text-red-400">HIPERESTIMULAÇÃO</span> e <span className="font-bold text-red-400">ANSIEDADE EXTREMA</span>.
                  </p>
                </div>

                <p className="text-gray-200 text-center text-xl font-bold">
                  É como se seu cachorro estivesse literalmente<br/>
                  <span className="text-3xl text-yellow-400">"EXPLODINDO POR DENTRO"</span>
                </p>

                <div className="bg-green-900/30 border-l-4 border-green-500 p-6 rounded-lg">
                  <p className="font-bold text-green-300 mb-2 text-xl">✅ A Solução:</p>
                  <p className="text-gray-200">
                    Quando você ESTIMULA o cérebro dele da forma correta - com jogos mentais específicos - o comportamento destrutivo <span className="font-bold text-green-400">DESAPARECE NATURALMENTE</span>.
                  </p>
                </div>

                <div className="text-center pt-6">
                  <p className="text-2xl md:text-3xl font-black text-white mb-4">
                    Sem gritos. Sem punições. Sem coleiras de choque.
                  </p>
                  <p className="text-xl text-gray-300">
                    Apenas <span className="text-yellow-400 font-bold">15 minutos por dia</span> de estímulo mental correto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl text-center">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              🧠 Estudos da Universidade de Bristol comprovam:
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              Cães com estimulação mental adequada apresentam <span className="font-black text-yellow-300">89% MENOS comportamentos destrutivos</span> comparados aos que não recebem esse tipo de treinamento.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl animate-pulse">
              ✨ A TRANSFORMAÇÃO COMEÇA AQUI
            </div>
            <h2 className="font-heading text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Apresentando:<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Brain Training For Dogs™</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O único sistema passo-a-passo que usa <span className="font-bold text-blue-600">jogos mentais científicos</span> para transformar qualquer cachorro "impossível" em um companheiro <span className="font-bold text-green-600">obediente e feliz</span> - em apenas 15 minutos por dia.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="mb-16 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-purple-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-4 border-red-300">
                <div className="text-center mb-6">
                  <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase text-sm">
                    ❌ ANTES
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😰</span>
                    <span className="text-gray-800 font-medium">Mãos e roupas destruídas por mordidas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😓</span>
                    <span className="text-gray-800 font-medium">Vergonha de receber visitas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😫</span>
                    <span className="text-gray-800 font-medium">Noites sem dormir com latidos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💸</span>
                    <span className="text-gray-800 font-medium">Móveis destruídos todo mês</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😢</span>
                    <span className="text-gray-800 font-medium">Pensando em desistir do seu cão</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-4 border-green-400 shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-bold uppercase text-sm">
                    ✅ DEPOIS
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😊</span>
                    <span className="text-gray-800 font-medium">Zero mordidas - só carinho e lambeijos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎉</span>
                    <span className="text-gray-800 font-medium">Recebe elogios de todos que visitam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">😴</span>
                    <span className="text-gray-800 font-medium">Noites tranquilas e silenciosas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏠</span>
                    <span className="text-gray-800 font-medium">Casa intacta e organizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">❤️</span>
                    <span className="text-gray-800 font-medium">Conexão profunda e verdadeira com seu cão</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-orange-500 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-4 rounded-2xl text-white mb-4 mx-auto w-fit shadow-lg">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="font-black text-gray-800 text-lg text-center">ZERO Mordidas</h4>
              <p className="text-gray-600 text-sm text-center mt-2">Em 7 dias ou menos</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-blue-500 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl text-white mb-4 mx-auto w-fit shadow-lg">
                <Shield className="w-10 h-10" />
              </div>
              <h4 className="font-black text-gray-800 text-lg text-center">Para de Pular</h4>
              <p className="text-gray-600 text-sm text-center mt-2">Visitas em paz</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-purple-500 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-2xl text-white mb-4 mx-auto w-fit shadow-lg">
                <Volume2 className="w-10 h-10" />
              </div>
              <h4 className="font-black text-gray-800 text-lg text-center">Fim dos Latidos</h4>
              <p className="text-gray-600 text-sm text-center mt-2">Silêncio garantido</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-green-500 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-2xl text-white mb-4 mx-auto w-fit shadow-lg">
                <Zap className="w-10 h-10" />
              </div>
              <h4 className="font-black text-gray-800 text-lg text-center">Super Focado</h4>
              <p className="text-gray-600 text-sm text-center mt-2">Obedece comandos</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={scrollToCTA}
              className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-black text-2xl md:text-3xl py-8 px-12 rounded-2xl shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 animate-pulse"
            >
              QUERO TRANSFORMAR MEU CACHORRO AGORA! 🚀
            </button>
            <p className="text-gray-600 mt-4 font-medium">
              ⏰ Apenas 47 vagas disponíveis hoje
            </p>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl">
              👩‍🏫 CONHEÇA A CRIADORA
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 mb-4">
              A Mulher Que Revolucionou<br/>
              <span className="text-blue-600">O Adestramento de Cães</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-2xl border-4 border-blue-100">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm text-center border-8 border-white shadow-2xl">
                  <div className="text-center px-4">
                    <div className="font-bold text-lg mb-2">Adrienne Farricelli</div>
                    <div className="text-xs">Foto Profissional</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-full font-black text-sm shadow-xl border-4 border-white">
                  ⭐ 10+ Anos
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Adrienne Farricelli
              </h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg">
                  CPDT-KA Certificada
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wide shadow-lg">
                  Especialista Comportamental
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-600">Mais de 10 anos</span> revolucionando o adestramento canino com métodos baseados em <span className="font-bold">neurociência</span> e <span className="font-bold">psicologia animal</span>.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                  <p className="text-gray-800 font-medium">
                    🏆 Trabalho reconhecido por <span className="font-bold">USA Today</span>, <span className="font-bold">Every Dog Magazine</span> e principais veículos de pet care do mundo.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Depois de ver <span className="font-bold text-red-600">MILHARES</span> de donos sofrendo com métodos tradicionais ineficazes, Adrienne desenvolveu o Brain Training for Dogs™ - um sistema revolucionário que já transformou <span className="font-bold text-green-600">mais de 212.000 cães</span> ao redor do mundo.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 p-4 rounded-lg">
                  <p className="text-gray-900 font-bold italic">
                    "Eu criei este método porque vi donos chorando, desesperados, prontos para desistir de seus melhores amigos. Não precisa ser assim. Todo cachorro pode aprender - basta usar o método CERTO."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">- Adrienne Farricelli</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-3">DESTAQUE DA MÍDIA:</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 px-5 py-3 rounded-lg font-black text-slate-700 shadow-md border-2 border-slate-300 text-sm">
                    📰 USA TODAY
                  </div>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 px-5 py-3 rounded-lg font-black text-slate-700 shadow-md border-2 border-slate-300 text-sm">
                    🐕 EVERY DOG MAG
                  </div>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 px-5 py-3 rounded-lg font-black text-slate-700 shadow-md border-2 border-slate-300 text-sm">
                    🌟 DAILY DOG
                  </div>
                  <div className="bg-gradient-to-br from-slate-100 to-slate-200 px-5 py-3 rounded-lg font-black text-slate-700 shadow-md border-2 border-slate-300 text-sm">
                    📺 PET WEEKLY
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200 text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-gray-900 mb-2">Certificação Internacional</h4>
              <p className="text-sm text-gray-600">CPDT-KA - Padrão ouro em adestramento</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="font-bold text-gray-900 mb-2">Método Científico</h4>
              <p className="text-sm text-gray-600">Baseado em neurociência comprovada</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200 text-center">
              <div className="text-4xl mb-3">❤️</div>
              <h4 className="font-bold text-gray-900 mb-2">Zero Punição</h4>
              <p className="text-sm text-gray-600">100% positivo e gentil com seu cão</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-500 text-slate-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl">
              ⭐ MAIS DE 212.847 TRANSFORMAÇÕES
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">
              Donos Como Você Estão DESESPERADOS<br/>
              Para Compartilhar Seus Resultados
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Esses são apenas ALGUNS dos milhares de depoimentos reais que recebemos toda semana...
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border-2 border-yellow-400/30 transform hover:scale-105 transition-all">
              <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <div className="mb-6">
                <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  RESULTADO EM 3 DIAS
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic mb-4">
                  "Eu estava CHORANDO todo dia. Meu Golden Retriever mordia tanto que minhas mãos sangravam. Tentei de TUDO. Em apenas 3 dias do Brain Training, ele parou completamente. Hoje ele é o cachorro mais dócil do mundo. NÃO ACREDITO que foi tão simples!"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
                <div className="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MC
                </div>
                <div>
                  <div className="font-bold text-white">Maria Clara S.</div>
                  <div className="text-sm text-gray-400">São Paulo, Brasil</div>
                  <div className="text-xs text-green-400 font-semibold mt-1">✓ Verificado</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border-2 border-yellow-400/30 transform hover:scale-105 transition-all">
              <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <div className="mb-6">
                <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  ECONOMIZEI R$ 8.500
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic mb-4">
                  "Gastei mais de R$ 8.500 em adestradores 'profissionais' que só deixaram meu Pitbull PIOR. Com esse método, em 1 semana ele já sentava, ficava quieto e parou de destruir meus móveis. Devia ter encontrado isso ANTES de gastar essa fortuna!"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
                <div className="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RT
                </div>
                <div>
                  <div className="font-bold text-white">Roberto T.</div>
                  <div className="text-sm text-gray-400">Rio de Janeiro, Brasil</div>
                  <div className="text-xs text-green-400 font-semibold mt-1">✓ Verificado</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border-2 border-yellow-400/30 transform hover:scale-105 transition-all">
              <div className="flex text-yellow-400 mb-4 text-xl">⭐⭐⭐⭐⭐</div>
              <div className="mb-6">
                <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                  IA DESISTIR DELE
                </div>
                <p className="text-gray-200 text-base leading-relaxed italic mb-4">
                  "Eu estava a 1 SEMANA de devolver meu Beagle para o canil. Ele latia 24h, pulava em todo mundo e mordia minhas filhas. Hoje, 2 meses depois, ele é parte da família. Minhas filhas AMAM brincar com ele. Esse método SALVOU nossa família!"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-600 pt-4">
                <div className="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JM
                </div>
                <div>
                  <div className="font-bold text-white">Juliana M.</div>
                  <div className="text-sm text-gray-400">Belo Horizonte, Brasil</div>
                  <div className="text-xs text-green-400 font-semibold mt-1">✓ Verificado</div>
                </div>
              </div>
            </div>
          </div>

          {/* More testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                "Meu Labrador estava me deixando louca. Eu não conseguia trabalhar de casa, não dormia direito, estava entrando em depressão. Achei que era um erro ter um cachorro. Brain Training mudou TUDO em 10 dias. Hoje eu não vivo sem ele!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-bold">AP</div>
                <div>
                  <div className="font-bold text-sm">Ana Paula R.</div>
                  <div className="text-xs text-gray-400">Curitiba, Brasil</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                "Estava com vergonha do meu cachorro. Não podia levar no parque, não podia receber ninguém em casa. As pessoas falavam que eu não sabia cuidar dele. Hoje recebo ELOGIOS toda vez que saio! Melhor investimento da minha vida!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-bold">CF</div>
                <div>
                  <div className="font-bold text-sm">Carlos F.</div>
                  <div className="text-xs text-gray-400">Porto Alegre, Brasil</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                "Quase separei do meu marido por causa do cachorro. Ele queria se livrar, eu não queria. O Brain Training resolveu nosso problema em DIAS. Agora até meu marido brinca com ele. Salvou meu casamento, sem exagero!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-bold">PM</div>
                <div>
                  <div className="font-bold text-sm">Paula M.</div>
                  <div className="text-xs text-gray-400">Brasília, Brasil</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 italic mb-4 text-sm leading-relaxed">
                "Meu pastor alemão era AGRESSIVO. Mordia todo mundo, era impossível controlar. Veterinário sugeriu sacrificar. Brain Training foi minha última esperança. 3 semanas depois: cão totalmente diferente. OBRIGADO por salvar meu melhor amigo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white text-xs font-bold">LH</div>
                <div>
                  <div className="font-bold text-sm">Lucas H.</div>
                  <div className="text-xs text-gray-400">Florianópolis, Brasil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">97%</div>
              <div className="text-sm text-white uppercase font-semibold">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">7</div>
              <div className="text-sm text-white uppercase font-semibold">Dias Média Resultado</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">212K+</div>
              <div className="text-sm text-white uppercase font-semibold">Cães Transformados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-yellow-300 mb-2">4.9</div>
              <div className="text-sm text-white uppercase font-semibold">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl">
              🛡️ PROTEÇÃO TOTAL
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Garantia Blindada de<br/>
              <span className="text-green-600">60 Dias ou Seu Dinheiro de Volta</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-4 border-green-400 p-10 md:p-14 transform hover:scale-105 transition-all">
            <div className="mb-8 flex justify-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-full shadow-2xl">
                <ShieldCheck className="w-24 h-24 text-white" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-4xl font-black text-gray-900 mb-6">
                Experimente COMPLETAMENTE Sem Riscos
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
                Você tem <span className="font-black text-green-600">60 DIAS COMPLETOS</span> para testar o Brain Training for Dogs™. Se você não ver uma transformação <span className="font-bold">DRAMÁTICA</span> no comportamento do seu cachorro...
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-8 mb-8 border-2 border-green-300">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-green-600 text-white px-6 py-3 rounded-xl font-black text-2xl">
                  100%
                </div>
                <p className="text-xl md:text-2xl font-black text-green-800">
                  Do Seu Dinheiro de Volta
                </p>
              </div>
              <p className="text-center text-gray-700 text-lg font-semibold">
                Sem perguntas. Sem complicações. Sem letras miúdas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="font-bold text-gray-900 mb-2">Teste Completo</h4>
                <p className="text-sm text-gray-600">60 dias para experimentar TUDO</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">💯</div>
                <h4 className="font-bold text-gray-900 mb-2">Reembolso Total</h4>
                <p className="text-sm text-gray-600">100% do valor devolvido</p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-900 mb-2">Zero Perguntas</h4>
                <p className="text-sm text-gray-600">Sem burocracia nenhuma</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
              <p className="text-gray-800 font-bold text-center text-lg">
                ⚡ Isso significa que o ÚNICO risco é você NÃO tentar e continuar sofrendo com seu cachorro!
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 text-sm text-gray-500">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="font-semibold">Pagamento 100% Seguro | Criptografia SSL 256-bit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency/Scarcity Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <AlertCircle className="w-20 h-20 text-yellow-400 mx-auto mb-4 animate-pulse" />
            <h2 className="font-heading text-3xl md:text-5xl font-black mb-6">
              ⚠️ AVISO IMPORTANTE ⚠️
            </h2>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8">
              Por questões de capacidade de suporte, limitamos o acesso a <span className="font-black text-yellow-300">APENAS 500 NOVAS PESSOAS POR SEMANA</span>.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 mb-8 border-4 border-yellow-400">
            <div className="flex items-center justify-center gap-6 mb-6">
              <Clock className="w-12 h-12 text-yellow-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">
                  Tempo Restante para Acesso:
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-400">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400">HORAS</div>
                  </div>
                  <div className="text-4xl font-black text-white">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400">MINUTOS</div>
                  </div>
                  <div className="text-4xl font-black text-white">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-yellow-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs text-gray-400">SEGUNDOS</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-600 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold">Vagas Disponíveis:</span>
                <span className="text-2xl font-black text-yellow-300">47 / 500</span>
              </div>
              <div className="w-full bg-red-900 rounded-full h-3 mt-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{width: '9.4%'}}></div>
              </div>
            </div>
          </div>

          <p className="text-lg text-red-100 mb-8">
            Quando as vagas acabarem, <span className="font-black">o acesso será FECHADO</span> até a próxima semana.<br/>
            <span className="text-yellow-300 font-black">Não perca esta oportunidade!</span>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="py-20 px-4 bg-gradient-to-b from-blue-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-xl animate-pulse">
              🔥 ÚLTIMA CHANCE - ACESSO LIMITADO
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-6xl font-black mb-6 leading-tight">
            Pare as Mordidas HOJE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300">
              E Comece a Aproveitar Seu Cachorro
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Você não precisa mais sofrer. Não precisa mais se sentir culpado. Seu cachorro PODE mudar - e vai mudar - com o método certo.
          </p>

          {/* Price Box */}
          <div className="bg-white text-gray-900 rounded-3xl p-10 mb-10 shadow-2xl max-w-2xl mx-auto border-4 border-yellow-400">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-gray-500 text-2xl line-through">R$ 497</span>
                <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-black text-sm rotate-2">
                  -80% HOJE!
                </span>
              </div>
              <div className="text-6xl md:text-7xl font-black text-green-600 mb-2">
                R$ 97
              </div>
              <p className="text-gray-600 font-medium">
                ou 12x de R$ 9,70 sem juros
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 text-green-800">✨ BÔNUS EXCLUSIVOS (Valor: R$ 387):</h3>
              <ul className="text-left space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BÔNUS 1:</strong> Guia Completo de Comandos Avançados (R$ 97)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BÔNUS 2:</strong> 21 Jogos Mentais Para Cães Hiperativos (R$ 127)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BÔNUS 3:</strong> Grupo VIP de Suporte no Telegram (R$ 97/mês GRÁTIS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>BÔNUS 4:</strong> Atualizações Vitalícias (R$ 66/ano GRÁTIS)</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => window.open('https://braintraining4dogs.com', '_blank')}
              className="w-full bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 hover:from-orange-600 hover:via-red-700 hover:to-orange-600 text-white font-black text-2xl md:text-3xl py-8 px-8 rounded-2xl shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2 mb-6 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex flex-col items-center gap-2">
                <span className="flex items-center gap-3">
                  SIM! QUERO ACESSO IMEDIATO AGORA
                  <Sparkles className="w-8 h-8" />
                </span>
                <span className="text-base font-normal opacity-90">
                  ✓ Acesso Instantâneo | ✓ Garantia 60 Dias | ✓ Todos os Bônus Inclusos
                </span>
              </span>
            </button>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="font-semibold">Checkout 100% Seguro - Proteção SSL</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <span>💳 Cartão de Crédito</span>
                <span>🏦 PIX</span>
                <span>📄 Boleto</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Resultados Comprovados</h4>
              <p className="text-sm text-gray-300">97% de taxa de sucesso</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Award className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">Método Certificado</h4>
              <p className="text-sm text-gray-300">CPDT-KA aprovado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Users className="w-10 h-10 text-blue-400 mx-auto mb-3" />
              <h4 className="font-bold mb-2">+212 Mil Clientes</h4>
              <p className="text-sm text-gray-300">Satisfeitos mundialmente</p>
            </div>
          </div>

          <div className="bg-red-600/20 border-2 border-red-500 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-lg font-bold mb-2">
              ⚠️ Atenção: Este preço especial expira quando o timer zerar!
            </p>
            <p className="text-gray-300">
              Após {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}, o valor volta para R$ 497 e as vagas serão fechadas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Ainda tem dúvidas? Respondemos as mais comuns aqui:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-blue-600 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                ❓ Funciona para QUALQUER raça e idade?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                SIM! O Brain Training funciona para todos os cães, de todas as raças e idades - desde filhotes de 8 semanas até cães idosos. O método se adapta ao nível de cada cachorro.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-purple-600 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                ❓ Quanto tempo leva para ver resultados?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A maioria dos donos relata mudanças significativas em 3-7 dias. Alguns veem resultados no primeiro dia! Mas você tem 60 dias completos para testar sem risco.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-green-600 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                ❓ Preciso de equipamentos especiais?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                NÃO! Você só precisa de itens que já tem em casa (como petiscos, brinquedos simples). Não precisa comprar NADA extra.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-orange-600 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                ❓ E se meu cachorro for "impossível"?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Não existe cachorro impossível! Já ajudamos casos extremos que outros adestradores desistiram. E se realmente não funcionar para você, devolvemos 100% do seu dinheiro.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border-l-4 border-red-600 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                ❓ Como funciona o acesso?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Acesso IMEDIATO após a compra! Você recebe login e senha por email e pode começar em 2 minutos - mesmo que seja 3h da manhã.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 w-full bg-gradient-to-r from-orange-500 to-red-600 border-t-4 border-yellow-400 p-4 shadow-2xl z-50 transition-transform duration-300 md:hidden ${showStickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <button
          onClick={scrollToCTA}
          className="w-full bg-white text-red-600 font-black text-lg py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
        >
          <Sparkles className="w-5 h-5" />
          GARANTIR MINHA VAGA AGORA
        </button>
        <p className="text-center text-white text-xs mt-2 font-bold">
          ⏰ Apenas 47 vagas | Timer: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
            <Link to="/contact" className="hover:text-white transition-colors">Contato</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Termos de Serviço</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <p className="mb-4 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Brain Training for Dogs. Todos os direitos reservados.
          </p>
          <p className="text-xs leading-relaxed max-w-2xl mx-auto text-gray-600">
            Este site não faz parte do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
            <br /><br />
            Divulgação: Este é um anúncio publicitário. Somos afiliados do produto e podemos ser compensados se você clicar no link e realizar uma compra. Os depoimentos mencionados são resultados pessoais e os resultados podem variar. Todos os preços e ofertas são válidos no momento da publicação e podem mudar sem aviso prévio.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PuppyBitingPage01;
