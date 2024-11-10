import { useState, useEffect, useRef } from 'react';
import { FunctionCard } from './components/FunctionCard';
import { ConnectionLine } from './components/ConnectionLine';
import {
  validateEquation,
  evaluateEquation,
  getConnectionPoints,
} from './utils/utils';
import type {
  Connection,
  FunctionCard as FunctionCardType,
} from './types';
import {
  CONNECTIONS,
  EXECUTION_ORDER,
  INITIAL_FUNCTIONS,
} from './utils/constants';
import InputOutputDisplay from './components/InputOutputDisplay';

function App() {
  const [functions, setFunctions] = useState<
    FunctionCardType[]
  >(INITIAL_FUNCTIONS);
  const [initialValue, setInitialValue] =
    useState<number>(2);
  const [connections, setConnections] =
    useState<Connection[]>(CONNECTIONS);
  const [finalOutput, setFinalOutput] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentValue = initialValue;

    for (const functionId of EXECUTION_ORDER) {
      const func = functions.find(
        (f) => f.id === functionId
      );
      if (func) {
        currentValue = evaluateEquation(
          func.equation,
          currentValue
        );
        console.log(currentValue, '>> currentValue');
      }
    }

    setFinalOutput(currentValue);
  }, [functions, initialValue]);

  useEffect(() => {
    const handleResize = () => {
      setConnections((prev) => [...prev]);
    };

    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  const updateEquation = (
    id: number,
    newEquation: string
  ) => {
    if (!validateEquation(newEquation)) return;

    setFunctions((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, equation: newEquation } : f
      )
    );
  };

  const handleConnect = (fromId: string, toId: string) => {
    setConnections((prev) => {
      const newConnections = prev.filter(
        (conn) => conn.from !== fromId
      );
      if (toId) {
        newConnections.push({ from: fromId, to: toId });
      }
      return newConnections;
    });
  };

  const onChangeNextFunction = (
    fromFuncId: number,
    toFuncId: number
  ) => {
    handleConnect(String(fromFuncId), String(toFuncId));

    setFunctions((prev) => {
      const updatedFuncs = prev.map((func) => {
        if (func.id === fromFuncId) {
          return { ...func, nextFunction: toFuncId };
        }
        return func;
      });

      return updatedFuncs;
    });
  };

  return (
    <div className='min-h-screen p-8 bg-background bg-opacity-100'>
      <div
        ref={containerRef}
        className='max-w-7xl mx-auto w-full py-20'
      >
        <div className='relative flex flex-wrap gap-36 justify-center items-center'>
          <InputOutputDisplay
            variant='input'
            value={initialValue}
            onValueChange={(value: number) =>
              setInitialValue(value)
            }
          />

          {functions.map((func: FunctionCardType) => {
            return (
              <FunctionCard
                key={func.id}
                id={func.id}
                equation={func.equation}
                nextFunction={func.nextFunction}
                onEquationChange={(eq) =>
                  updateEquation(func.id, eq)
                }
                onNextFunctionChange={(
                  nextFunction: number | null
                ) =>
                  onChangeNextFunction(
                    func.id,
                    nextFunction || 0
                  )
                }
              />
            );
          })}
          <InputOutputDisplay
            variant='output'
            value={finalOutput}
          />
          <svg className='w-full h-full absolute z-40 pointer-events-none'>
            {connections.map((conn, idx) => {
              const points = getConnectionPoints(
                Number(conn.from),
                Number(conn.to),
                containerRef
              );

              if (!points) return null;

              return (
                <ConnectionLine
                  key={idx}
                  start={points.from}
                  end={points.to}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
