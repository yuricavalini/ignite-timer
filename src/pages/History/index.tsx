import { useContext } from 'react';
// https: //github.com/import-js/eslint-plugin-import/issues/1479
/* eslint-disable import/no-duplicates */
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
/* eslint-disable import/no-duplicates */

import { CyclesContext } from '@/contexts/CyclesContext';

import { HistoryContainer, HistoryList, Status } from './styles';

export function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>
                  {cycle.minutesAmount}
                  {' '}
                  minutos
                </td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}

                </td>
                <td>
                  {cycle.finishedDate ? (
                    <Status statusColor="green">Concluído</Status>
                  ) : null}

                  {cycle.interruptedDate ? (
                    <Status statusColor="red">Interrompido</Status>
                  ) : null}

                  {
                    (!cycle.finishedDate && !cycle.interruptedDate) ? (
                      <Status statusColor="yellow">Em andamento</Status>
                    ) : null
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
