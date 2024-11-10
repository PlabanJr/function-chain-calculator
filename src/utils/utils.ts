export const validateEquation = (equation: string): boolean => {
  const validPattern = /^[x0-9+\-*/\s^()]+$/;
  return validPattern.test(equation);
};

export const evaluateEquation = (equation: string, x: number): number => {
  try {
    let processedEquation = equation.replace(/\^/g, '**');
    processedEquation = processedEquation.replace(/(\d+)x/g, '$1*x');
    processedEquation = processedEquation.replace(/x/g, x.toString());

    return Function(`return ${processedEquation}`)();
  } catch (error) {
    console.error('Error evaluating equation:', error);
    return 0;
  }
};


export const getConnectionPoints = (
  fromId: number,
  toId: number,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const containerRect =
    containerRef.current?.getBoundingClientRect();

  if (!containerRect) return null;

  const fromElement = document.getElementById(
    isNaN(fromId)
      ? 'input-ellipse'
      : `function-output-${fromId}`
  );

  const toElement = document.getElementById(
    isNaN(toId)
      ? 'output-ellipse'
      : `function-input-${toId}`
  );

  if (!fromElement || !toElement) return null;

  const fromRect = fromElement.getBoundingClientRect();
  const toRect = toElement.getBoundingClientRect();

  return {
    from: {
      x:
        fromRect.left -
        containerRect.left +
        fromRect.width / 2,
      y:
        fromRect.top -
        containerRect.top +
        fromRect.height / 2 -
        80,
    },
    to: {
      x:
        toRect.left -
        containerRect.left +
        toRect.width / 2,
      y:
        toRect.top -
        containerRect.top +
        toRect.height / 2 -
        80,
    },
  };
};
