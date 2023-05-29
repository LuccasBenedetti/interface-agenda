## Teste 1 - Lógica

Para o primeiro desafio proposto, comecei por calcular os horários de atendimento do cirurgião dentista:

**Horários de atendimento**
- Segunda - 08h às 13h - Totalizando 5 horas - ou - 300 minutos
- Quarta - 18h às 22h - Totalizando 4 horas - ou - 240 minutos
- Sexta - 14h às 17h - Totalizando 3 horas - ou - 180 minutos
- No total ele possui 12 horas para atendimento, ou 720 minutos.

Depois, calculei o tempo necessário para atender todos os pacientes considerando os valores informados, a fim de descobrir se era possível encaixar todos:

**Pacientes**
| Nome | Tempo de Atendimento |
|-------------------|---------------------|
| Maria Clara | 80 min |
| Pedro Henrique | 90 min |
| Ana Luiza | 60 min |
| Gabriel Oliveira | 70 min |
| Laura Beatriz | 45 min |
| João Miguel | 80 min |
| Isabela Fernandes | 65 min |
| Lucas Santos | 85 min |
| Beatriz Almeida | 75 min |
| Tempo total de atendimento | 10H 50M  \ 650 min |

Segue um exemplo de como é possivel organizar todos os pacientes de maneira a sobrar alguma folga de tempo em todos os dias:

**Agendamento**
| Segunda | Quarta | Sexta |
|-----------------------------|-----------------------------|--------------------------------|
| Lucas Santos 08:00 às 09:25 | Maria Clara 18:00 às 19:20 | Laura Beatriz 14:00 às 14:45 |
| Pedro Henrique 9:30 às 11:00  | Beatriz Almeida 19:20 às 20:35 | Isabela Fernandes 14:50 às 15:55 |
| João Miguel 11:30 às 12:50 | Gabriel Oliveira 20:40 às 21:50 | Ana Luiza 16:00 às 17:00 |
| Tempo Atentendo: 255 min | Tempo Atendendo: 225 min | Tempo Atendendo: 170 min |

Para a montagem da tabela, levei em consideração colocar os horarios de atendimento mais extensos em dias com mais tempo disponível, e os atendimentos mais curtos em dias com menos tempo disponível.

## Teste 2 - Interface Agenda Semanal

Instalação:

Clone esse repositório:
> git clone link_do Projeto
> cd nome_projeto


> yarn install (recomendado).

ou

>npm install 

> para rodar, no terminal : npm|yarn run start
