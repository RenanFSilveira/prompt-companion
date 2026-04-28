# Campanha Google Ads — Rede de Pesquisa
## Projeto Pequenos Samurais · Renzo Gracie Barra

> Documento de configuração inicial para captação de leads (aula experimental).
> Estratégia: começar **ampla** para coletar dados → podar com base em performance.

---

## 1. Objetivo e KPIs

| Item | Definição |
|---|---|
| **Objetivo** | Lead — clique no botão "Agendar Aula Experimental Gratuita" que abre o WhatsApp |
| **Tipo de campanha** | Rede de Pesquisa (Search) — apenas Google.com |
| **KPI primário** | CPL (custo por conversa iniciada no WhatsApp) |
| **KPIs secundários** | CTR, Taxa de Conversão (LP→WhatsApp), Quality Score, Impression Share |
| **Meta inicial de CPL** | R$ 25 a R$ 50 (refinar após 30 conversões) |
| **Janela de avaliação** | 30 dias para primeira poda macro |

---

## 2. Configurações da campanha

### 2.1 Identificação
- **Nome da campanha**: `[Search] PT — Pequenos Samurais — Barra — Broad`
- **Subconta / MCC**: Renzo Gracie Barra
- **Status inicial**: Pausada (subir tudo, revisar, depois ativar)

### 2.2 Tipo e redes
- Tipo: **Rede de Pesquisa**
- ❌ **Desativar** "Incluir parceiros de pesquisa do Google"
- ❌ **Desativar** "Incluir Rede de Display do Google"
- Motivo: parceiros e display poluem dados de aprendizado e inflam cliques de baixa qualidade.

### 2.3 Localização
- Modo: **Direcionamento por raio + bairros**
- **Incluir**:
  - Raio de 8 km a partir de `Av. Olegário Maciel 101, Jardim Oceânico, Barra da Tijuca, RJ`
  - + bairros explícitos: Barra da Tijuca, Recreio dos Bandeirantes, Jacarepaguá, Joá, São Conrado, Vargem Grande, Vargem Pequena, Itanhangá
- **Opções de local** (CRÍTICO): mudar de "Presença ou interesse" para **"Presença: pessoas dentro ou regularmente nos locais segmentados"**
  - Default do Google é "interesse" — vaza budget para gente fora do Rio buscando "Renzo Gracie".
- **Excluir**: nada inicialmente. Adicionar exclusões de bairros que não convertem após 60 dias.

### 2.4 Idioma
- Português
- (Adicionar Inglês apenas se criar campanha espelho para expats — ver seção 12)

### 2.5 Orçamento
- **R$ 50/dia** (≈ R$ 1.500/mês)
- Método de veiculação: **Padrão** (não acelerado)
- Justificativa: budget suficiente para 30+ conversões/mês a CPL R$ 50, viabilizando Smart Bidding em 4-6 semanas.

### 2.6 Estratégia de lance
**Fase 1 (semanas 1-3) — Aprendizado**
- Estratégia: **Maximizar cliques**
- Limite de CPC máximo: **R$ 4,50**
- Motivo: ainda não há conversões registradas para alimentar Smart Bidding.

**Fase 2 (semana 4 em diante) — após ≥30 conversões/mês**
- Mudar para **Maximizar conversões** (sem tCPA por mais 2 semanas)
- Em seguida: **CPA desejado** = média do CPL observado × 0,9

**NÃO usar de saída**: tCPA, tROAS, Maximizar valor — sem histórico, o algoritmo trava ou explode CPC.

### 2.7 Programação (Ad Schedule)
- Todos os dias da semana
- Janela: **06:00 — 23:30**
- Pausar 23:30 — 06:00 (tráfego frio, baixa intenção parental)
- Após 60 dias: ajustar lances por horário com base em CR.

### 2.8 Dispositivos
- Iniciar com **0% de ajuste** em todos (computador, celular, tablet, TV)
- Após 30 dias, ajustar com base no CR por dispositivo.
- Hipótese: mobile vai dominar (pais buscando no celular).

### 2.9 Rotação de anúncios
- **Otimizar** (default) — deixa o Google escolher o melhor RSA.

### 2.10 URL final e parâmetros
- **URL final**: `https://[dominio-do-site]/`
- **Modelo de rastreamento (sugestão UTM)**:
  ```
  {lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_content={adgroupid}&utm_term={keyword}&gclid={gclid}
  ```

---

## 3. Públicos (modo OBSERVAÇÃO, não segmentação)

Adicionar para coletar dados — **não restringir** a campanha por público.

| Categoria | Públicos |
|---|---|
| **Demográfico** | Status parental: Pais; Idade: 25-54; Renda: Top 30% (RJ) |
| **Em mercado** | Esportes & Fitness > Artes Marciais; Esportes para crianças |
| **Afinidade** | Famílias com crianças pequenas; Estilo de vida saudável; Entusiastas de esportes |
| **Eventos da vida** | Mudou-se recentemente (proxy para famílias novas no bairro) |
| **Customizado** | Criar segmento "intent": pessoas que pesquisaram `jiu jitsu kids`, `escola de jiu jitsu`, `aula para criança` nos últimos 30 dias |

Após 60 dias, aplicar bid adjustment positivo nos públicos com melhor CR.

---

## 4. Estrutura de Grupos de Anúncios (Ad Groups)

> Cada grupo = uma intenção de busca. Misturar intenções no mesmo grupo destrói Quality Score.

### AG1 — Jiu-Jitsu Kids Barra (alta intenção + geo)
**Tema**: pessoa busca exatamente o serviço, na região.

| Match | Keyword |
|---|---|
| Phrase | `"jiu jitsu infantil barra da tijuca"` |
| Phrase | `"jiu jitsu kids barra"` |
| Phrase | `"jiu jitsu para crianças barra"` |
| Phrase | `"aula de jiu jitsu para crianças barra da tijuca"` |
| Phrase | `"escola de jiu jitsu infantil barra"` |
| Phrase | `"academia de jiu jitsu kids jardim oceânico"` |
| Phrase | `"jiu jitsu para crianças recreio"` |
| Phrase | `"bjj kids barra"` |
| Exact | `[jiu jitsu infantil barra da tijuca]` |
| Exact | `[jiu jitsu kids barra da tijuca]` |

### AG2 — Jiu-Jitsu Kids Genérico
**Tema**: intenção clara, geo a ser captada por restrição da campanha.

| Match | Keyword |
|---|---|
| Phrase | `"jiu jitsu para crianças"` |
| Phrase | `"jiu jitsu infantil"` |
| Phrase | `"jiu jitsu kids"` |
| Phrase | `"aula de jiu jitsu para crianças"` |
| Phrase | `"escola de jiu jitsu para crianças"` |
| Phrase | `"matricular criança no jiu jitsu"` |
| Phrase | `"aula experimental jiu jitsu"` |
| Phrase | `"qual idade começar jiu jitsu"` |
| Phrase | `"jiu jitsu a partir de 4 anos"` |
| Broad | `jiu jitsu criança aula gratis` |

### AG3 — Brand / Renzo Gracie / Pequenos Samurais
**Tema**: defesa de marca + busca pelo nome do projeto. CPC mais baixo, CR muito alto.

| Match | Keyword |
|---|---|
| Phrase | `"renzo gracie barra"` |
| Phrase | `"renzo gracie barra da tijuca"` |
| Phrase | `"renzo gracie jardim oceânico"` |
| Phrase | `"academia renzo gracie rio"` |
| Phrase | `"projeto pequenos samurais"` |
| Phrase | `"pequenos samurais jiu jitsu"` |
| Phrase | `"mito pontual jiu jitsu"` |
| Exact | `[renzo gracie barra]` |
| Exact | `[projeto pequenos samurais]` |

### AG4 — Modalidades Concorrentes (Lutas Kids)
**Tema**: pais que ainda não decidiram a modalidade. Mais frio, mas escala bem.

| Match | Keyword |
|---|---|
| Phrase | `"artes marciais para crianças barra"` |
| Phrase | `"luta para crianças barra"` |
| Phrase | `"academia de luta infantil barra"` |
| Phrase | `"judô para crianças barra"` |
| Phrase | `"karatê para crianças barra"` |
| Phrase | `"muay thai infantil barra"` |
| Phrase | `"taekwondo para crianças barra"` |
| Broad | `qual luta colocar meu filho` |
| Broad | `melhor arte marcial para criança` |

### AG5 — Comportamento / Dor (descoberta)
**Tema**: pais com problema antes de pensar na solução. Match types mais largos. Custo mais alto, descoberta de termos.

| Match | Keyword |
|---|---|
| Phrase | `"esporte para criança tímida"` |
| Phrase | `"esporte para tirar criança do celular"` |
| Phrase | `"atividade para criança disciplinada"` |
| Phrase | `"esporte para criança hiperativa"` |
| Phrase | `"como tirar criança da tela"` |
| Phrase | `"atividade extracurricular para criança barra"` |
| Phrase | `"esporte para autoconfiança da criança"` |
| Broad | `esporte para criança bagunceira` |
| Broad | `meu filho não tem disciplina` |

⚠️ Este grupo é o mais "amplo" e provavelmente o que vai pedir mais poda. Manter por 30 dias antes de decidir cortes.

### AG6 — Geo Adjacente (Jardim Oceânico, Recreio, Joá)
**Tema**: bairros específicos com bairro literal na keyword. Alto CR.

| Match | Keyword |
|---|---|
| Phrase | `"jiu jitsu jardim oceânico"` |
| Phrase | `"academia de luta jardim oceânico"` |
| Phrase | `"jiu jitsu recreio dos bandeirantes"` |
| Phrase | `"jiu jitsu joá"` |
| Phrase | `"academia jiu jitsu jacarepaguá"` |

---

## 5. Match types — política da campanha

| Match | Quando usar |
|---|---|
| **Exact** `[ ]` | Termos altamente qualificados que já validei (top performers de cada AG) |
| **Phrase** `" "` | Default da campanha — controla intenção sem matar volume |
| **Broad** | Apenas em AG5 (descoberta) e em AG2/AG4 com 1-2 termos exploratórios |

Regra: **não rodar Broad sem Smart Bidding ativo** ou sem revisar Search Terms 2x por semana, senão o budget evapora.

---

## 6. Palavras-chave negativas

### 6.1 Lista compartilhada `NEG_GERAL` (aplicar à campanha inteira)

**Intenção errada / informacional**:
```
-curso online -ead -aula online -aula a distancia -tutorial -como fazer
-historia -significado -wikipedia -filme -documentario -livro -frase
-tatuagem -desenho -wallpaper -imagem -png -gif
```

**Adulto / não-criança**:
```
-adulto -para mim -masculino -feminino -mulher -homem -profissional
-competidor -competição -atleta -federação -campeonato -mundial
```

**Mercado errado**:
```
-emprego -vaga -concurso -salario -professor vaga -instrutor vaga
-franquia -abrir academia -modelo de negócio -plano de negocios
```

**Produto e-commerce**:
```
-kimono comprar -faixa preta venda -camiseta -loja -preço kimono
-amazon -mercado livre -shopee -aliexpress
```

**Marcas concorrentes próximas (testar — pode ser que valha pegar)**:
```
-gracie barra -checkmat -alliance -nova união -gfteam
```
> Decidir caso a caso. Em campanha "ampla" inicial, manter sem essas exclusões e ver Search Terms.

**UFC/MMA (intenção esportiva, não escola kids)**:
```
-ufc -mma -valetudo -nocaute -knockout -cage -octagon
```

### 6.2 Lista geo-negativa `NEG_GEO`
```
-são paulo -sao paulo -bh -belo horizonte -brasilia -salvador
-curitiba -porto alegre -fortaleza -recife -niterói -niteroi
-são gonçalo -duque de caxias -nova iguaçu
-tijuca -copacabana -ipanema -leblon -botafogo -flamengo -centro
```
> "Tijuca" sem "Barra da" provavelmente busca outra região do Rio — testar 14 dias antes de cortar.

### 6.3 Negativas no nível de Ad Group (cross-pollination)
- AG3 (Brand): adicionar `-gracie barra`, `-rio de janeiro carlos gracie`
- AG4 (Concorrentes): adicionar `-jiu jitsu` (queremos só quem busca outras modalidades)

---

## 7. Anúncios Responsivos de Pesquisa (RSA)

> Cada Ad Group → **2 RSAs distintos** (rotação aprende qual ressoa).
> 15 títulos (até 30 chars) e 4 descrições (até 90 chars).
> Pinning: 2 títulos pinados, restante livre.

### 7.1 RSA padrão (AG1 / AG2 — alta intenção)

**Títulos** (15 — pin nos 2 primeiros):

| # | Título (≤30 chars) | Pin |
|---|---|---|
| 1 | Jiu-Jitsu Kids na Barra | 📌 Pos 1 |
| 2 | 1ª Aula Grátis - Renzo Gracie | 📌 Pos 2 |
| 3 | Renzo Gracie · Jardim Oceânico | — |
| 4 | Para Crianças a partir de 4 Anos | — |
| 5 | Disciplina, Respeito, Confiança | — |
| 6 | Filiação Direta Renzo Gracie NY | — |
| 7 | Cobertura Exclusiva no Oceânico | — |
| 8 | Projeto Pequenos Samurais | — |
| 9 | Tire Seu Filho do Celular | — |
| 10 | 6 Anos de História na Barra | — |
| 11 | Head Coach Mito Pontual | — |
| 12 | Sem Compromisso, Sem Pressão | — |
| 13 | Mais que Luta: Caráter | — |
| 14 | Agende em 30s no WhatsApp | — |
| 15 | Ambiente Familiar e Acolhedor | — |

**Descrições** (4 — pin a 1ª na pos 1):

1. (📌) Forme uma criança disciplinada, resiliente e confiante. Jiu-Jitsu Kids no Jardim Oceânico.
2. 1ª aula gratuita e sem compromisso. Cobertura exclusiva, ambiente familiar, head coach renomado.
3. Não é franquia. Filiação direta com a Renzo Gracie NY. Mais de 6 anos formando crianças na Barra.
4. Disciplina no tatame que reflete em casa e na escola. A partir de 4 anos. Agende pelo WhatsApp.

### 7.2 RSA "Dor" (AG5 — pais com problema)

**Títulos**:
1. (📌1) Seu Filho Vive no Celular? | 2. (📌2) Jiu-Jitsu Kids Resolve | 3. Disciplina Real, Não Só Tela | 4. Crianças Confiantes a partir de 4 Anos | 5. Renzo Gracie Barra · Jardim Oceânico | 6. Tirar Filho da Tela: Tem Solução | 7. Esporte que Ensina Limites | 8. Para Crianças Tímidas e Agitadas | 9. 1ª Aula Experimental Gratuita | 10. Não é Academia. É Formação. | 11. Resiliência para a Vida Toda | 12. Ambiente Seguro e Familiar | 13. Pais Confiam, Crianças Mudam | 14. Veja a Mudança em 6 Meses | 15. Agende a Aula no WhatsApp

**Descrições**:
1. (📌) Seu filho passa horas no celular e nada muda? Jiu-Jitsu Kids ensina disciplina de verdade.
2. Não é uma escolinha. É uma metodologia de formação de caráter — em um tatame Renzo Gracie.
3. Pais relatam mudança real em 6 meses: confiança, foco, respeito. 1ª aula é gratuita.
4. Cobertura no Jardim Oceânico. Sem trânsito da Barra. Agende pelo WhatsApp em 30 segundos.

### 7.3 RSA "Brand" (AG3)

Pin no nome da marca. Restante reforça localização e CTA. (Reuso 70% do RSA padrão.)

---

## 8. Extensões (Assets)

### 8.1 Sitelinks — mínimo 6
| Sitelink | Descrição linha 1 | Descrição linha 2 |
|---|---|---|
| O Programa | 4 pilares da metodologia | Disciplina, resiliência, social, físico |
| Head Coach | Mito Pontual lidera o projeto | Renzo Gracie Team certificado |
| Depoimentos | Pais relatam a mudança | Casos reais de transformação |
| FAQ | Tire suas dúvidas | Idade, segurança, primeira aula |
| Onde Estamos | Av. Olegário Maciel 101 | Cobertura · Jardim Oceânico |
| Aula Grátis | 1ª aula sem compromisso | Agende pelo WhatsApp |

### 8.2 Frases de destaque (Callouts) — mínimo 8
- 1ª Aula Gratuita
- Filiação Renzo Gracie NY
- A partir de 4 Anos
- Cobertura no Jardim Oceânico
- Ambiente Familiar
- Head Coach Renomado
- 6 Anos na Barra
- Sem Compromisso

### 8.3 Snippets estruturados
- **Tipo: Serviços** → Jiu-Jitsu Kids 4-7, Jiu-Jitsu Kids 8-13, Aula Experimental
- **Tipo: Bairros atendidos** → Barra da Tijuca, Recreio, Jardim Oceânico, Joá

### 8.4 Extensão de chamada
- Telefone fixo da academia (se houver)
- Apenas em horário comercial (configurável)

### 8.5 Extensão de localização
- Vincular ao **Google Business Profile** da Renzo Gracie Barra (essencial — mapa + endereço no anúncio + reviews)

### 8.6 Extensão de imagem
- 4 a 6 imagens quadradas (1200×1200) e paisagem (1200×628):
  - Tatame com crianças treinando
  - Mito Pontual ensinando
  - Fachada / cobertura
  - Crianças sorrindo após aula
  - Cerimônia de graduação de faixa

### 8.7 Extensão de promoção
- Texto: "1ª Aula Grátis"
- Tipo: Outras
- Sem código de cupom

### 8.8 Formulário de lead (opcional, recomendado)
- Pergunta 1: Nome do responsável
- Pergunta 2: Idade da criança
- Pergunta 3: Bairro
- Mensagem agradecendo + redireciona para WhatsApp

---

## 9. Rastreamento de conversões

### 9.1 Conversão primária — `Click_WhatsApp`
- **Tipo**: Lead
- **Categoria**: Lead
- **Valor**: R$ 30 fixo (placeholder até medir LTV)
- **Contagem**: Uma (não toda)
- **Janela**: 30 dias
- **Inclui no Lances**: ✅ Sim (Conversão primária)

**Implementação via GTM**:
1. Criar trigger "Click WhatsApp" → Click URL contém `wa.me`
2. Tag GA4 `evento: click_whatsapp`
3. Tag Google Ads Conversion linkando o ID e label da conversão
4. Verificar com Tag Assistant antes de subir

### 9.2 Conversões secundárias (microconversões — não usar para lances)
| Evento | Trigger | Uso |
|---|---|---|
| `scroll_75` | scroll depth ≥75% | Sinal de engajamento |
| `time_on_page_60s` | timer 60s | Sinal de qualidade do tráfego |
| `view_faq` | clique em pergunta FAQ | Indica consideração |
| `click_cta_section` | clique em qualquer CTA da página | Diagnóstico de seção |

> Marcar todas como **Secundárias** para o Smart Bidding NÃO otimizar por elas.

### 9.3 Pré-requisitos no site (BLOQUEADORES da subida)
- [ ] **Substituir o placeholder do WhatsApp** (atualmente `55XXXXXXXXXXX` em [src/components/CTAButton.tsx](src/components/CTAButton.tsx) e [src/components/Navbar.tsx](src/components/Navbar.tsx)) pelo número real
- [ ] Instalar GTM no `<head>` da landing
- [ ] Instalar Google Ads Conversion Tag via GTM
- [ ] Instalar GA4 e linkar ao Google Ads (importação de audiences e conversões)
- [ ] Validar todas as tags com Tag Assistant + DebugView do GA4

---

## 10. Plano de poda (otimização ao longo do tempo)

### Semana 1-2 — Coleta
- Sem cortes.
- Revisão diária dos primeiros 3 dias para pegar disparates (negativas óbvias).
- Confirmar Quality Score ≥ 6 nas keywords principais.

### Semana 3-4 — Primeira poda
- **Search Terms Report 2x por semana**: adicionar negativas
- Pausar keywords com >20 cliques e 0 conversões
- Pausar keywords com CTR < 1% após 1.000 impressões
- Avaliar performance por dispositivo → primeiro bid adjustment
- Avaliar performance por horário → desligar janelas mortas

### Mês 2 — Smart Bidding
- Se ≥ 30 conversões nos últimos 30 dias → **Maximizar conversões** sem tCPA
- Após mais 14 dias → ativar **CPA desejado** = média do CPL × 0,9
- Pausar Ad Groups inteiros com CPL > 2× meta

### Mês 3 — Refinamento
- Promover top performers de Phrase para Exact (lance dedicado)
- Criar AG6.1, AG6.2... segmentando bairros que performam
- Testar segunda variação de RSA com angles novos
- Considerar SKAGs apenas para top 3 keywords

### Mês 4+ — Escala
- Subir budget em 20%/semana enquanto CPL se mantém
- Considerar campanha espelho **Performance Max** apenas após 50+ conversões/mês
- Considerar **Display Remarketing** para visitantes que não converteram

---

## 11. Recomendações para a Landing Page (impactam Quality Score)

| Item | Estado atual | Ação |
|---|---|---|
| WhatsApp number | ❌ Placeholder | Substituir pelo número real |
| Title tag | A verificar | "Jiu-Jitsu Kids na Barra da Tijuca \| Renzo Gracie - 1ª Aula Grátis" |
| Meta description | A verificar | "Projeto Pequenos Samurais: Jiu-Jitsu para crianças no Jardim Oceânico. Disciplina, respeito, autoconfiança. Aula experimental gratuita." |
| Velocidade (LCP) | A medir | < 2.5s no mobile |
| H1 | OK | Já alinhado com keywords |
| CTA acima da dobra | OK | Botão WhatsApp visível |
| Schema.org | A verificar | Adicionar `LocalBusiness` + `SportsActivityLocation` |
| Reviews | Não há | Importar reviews do Google Business para a página |

---

## 12. Campanha espelho EN (opcional — Fase 2)

A landing tem versão em inglês ([src/lib/i18n.tsx](src/lib/i18n.tsx)). Vale uma campanha pequena para expats no Rio.

- **Nome**: `[Search] EN — Little Samurai — Barra — Broad`
- **Idioma**: Inglês
- **Localização**: mesma + adicionar "people who speak English" como bid adjustment positivo
- **Budget**: R$ 15/dia
- **Keywords-chave**: `"bjj kids rio de janeiro"`, `"jiu jitsu kids barra"`, `"martial arts kids barra"`, `"renzo gracie barra"`
- Subir só depois que a campanha PT estiver estável.

---

## 13. Checklist final de subida

### Pré-requisitos no site
- [ ] WhatsApp real configurado (não `55XXXXXXXXXXX`)
- [ ] GTM instalado
- [ ] Google Ads conversion tag instalada e testada
- [ ] GA4 instalado e linkado ao Google Ads

### Configuração da campanha
- [ ] Tipo: Search · Parceiros e Display desligados
- [ ] Localização: presença (não interesse), raio + bairros
- [ ] Idioma: Português
- [ ] Orçamento: R$ 50/dia, padrão
- [ ] Estratégia de lance: Maximizar cliques + CPC máx R$ 4,50
- [ ] Programação: 06:00–23:30, todos os dias
- [ ] Públicos em **modo observação**

### Estrutura
- [ ] 6 Ad Groups criados (AG1 a AG6)
- [ ] Match types respeitando a política (seção 5)
- [ ] Lista NEG_GERAL aplicada
- [ ] Lista NEG_GEO aplicada
- [ ] Negativas a nível de Ad Group aplicadas

### Anúncios e extensões
- [ ] 2 RSAs por Ad Group (mínimo)
- [ ] Quality Score estimado ≥ 6 nas top keywords
- [ ] Sitelinks (≥6), Callouts (≥8), Snippets, Localização, Imagem, Promoção
- [ ] Extensão de chamada (se telefone fixo existir)
- [ ] Formulário de lead (opcional)

### Pós-subida (primeiras 72h)
- [ ] Revisar Search Terms a cada 24h por 3 dias
- [ ] Confirmar conversões disparando corretamente
- [ ] Confirmar que ad rank dos brand keywords está em #1

---

## 14. Resumo executivo (TL;DR)

> 1 campanha Search PT, R$ 50/dia, 6 Ad Groups (Geo+Intent / Genérico Kids / Brand / Concorrentes Lutas / Dor / Geo Adjacente). Phrase como default, Exact nos top, Broad só em descoberta. Lance "Maximizar cliques" com CPC máx R$ 4,50 até atingir 30 conversões/mês → Smart Bidding. Conversão primária = clique no WhatsApp via GTM. Lista de negativas pesada desde dia 1. Localização travada em **presença** (não interesse), raio 8km + bairros explícitos. Públicos em observação para coletar dados sem restringir. Poda agressiva nas semanas 3-4 com Search Terms 2x por semana.
